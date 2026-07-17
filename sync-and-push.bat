@echo off
REM Sync Obsidian vault into content/, then commit and push to trigger deploy.
cd /d "%~dp0"
node scripts\sync-obsidian.mjs
if errorlevel 1 exit /b 1

git add content
git diff --cached --quiet
if errorlevel 1 goto haschanges

echo No content changes to commit.
exit /b 0

:haschanges
git commit -m "content: sync from Obsidian vault"
git push origin v5
