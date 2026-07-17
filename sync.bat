@echo off
REM Sync Obsidian vault into content/ only. No git actions.
cd /d "%~dp0"
node scripts\sync-obsidian.mjs
