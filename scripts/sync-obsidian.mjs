import fs from "fs"
import path from "path"
import micromatch from "micromatch"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, "..")

const contentDir = path.join(repoRoot, "content")
const ignoreFile = path.join(repoRoot, ".syncignore")
const vaultPathFile = path.join(repoRoot, ".obsidian-vault-path")

// Vault location is per-machine, so it never lives in tracked source.
// Order: OBSIDIAN_VAULT env var, then the untracked .obsidian-vault-path file.
function resolveVaultDir() {
  if (process.env.OBSIDIAN_VAULT) return process.env.OBSIDIAN_VAULT.trim()
  if (fs.existsSync(vaultPathFile)) {
    const fromFile = fs
      .readFileSync(vaultPathFile, "utf8")
      .split("\n")
      .map((line) => line.trim())
      .find((line) => line && !line.startsWith("#"))
    if (fromFile) return fromFile
  }
  console.error(
    "No Obsidian vault configured.\n" +
      "Set the OBSIDIAN_VAULT environment variable, or write the vault's absolute path\n" +
      `into ${vaultPathFile} (one line, untracked).`,
  )
  process.exit(1)
}

const vaultDir = resolveVaultDir()

function loadIgnorePatterns() {
  if (!fs.existsSync(ignoreFile)) return []
  return fs
    .readFileSync(ignoreFile, "utf8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
}

function walk(dir, base = dir) {
  let results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    const rel = path.relative(base, full).replace(/\\/g, "/")
    if (entry.isDirectory()) {
      results = results.concat(walk(full, base))
    } else {
      results.push(rel)
    }
  }
  return results
}

function main() {
  if (!fs.existsSync(vaultDir)) {
    console.error(`Vault not found: ${vaultDir}`)
    process.exit(1)
  }

  const ignorePatterns = loadIgnorePatterns()
  const allFiles = walk(vaultDir)
  const keepFiles = allFiles.filter((rel) => !micromatch.isMatch(rel, ignorePatterns, { dot: true }))

  fs.mkdirSync(contentDir, { recursive: true })

  // Remove files in content/ that no longer exist in the kept vault set (except index.md, which is site-managed).
  const existingContentFiles = fs.existsSync(contentDir) ? walk(contentDir) : []
  const keepSet = new Set(keepFiles)
  let removed = 0
  for (const rel of existingContentFiles) {
    if (rel === "index.md") continue
    if (!keepSet.has(rel)) {
      fs.rmSync(path.join(contentDir, rel))
      removed++
    }
  }

  // Copy kept vault files into content/.
  let copied = 0
  for (const rel of keepFiles) {
    const src = path.join(vaultDir, rel)
    const dest = path.join(contentDir, rel)
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.copyFileSync(src, dest)
    copied++
  }

  console.log(`Synced ${copied} file(s) from vault, removed ${removed} stale file(s).`)
  console.log(`Vault:   ${vaultDir}`)
  console.log(`Content: ${contentDir}`)
}

main()
