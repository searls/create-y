#!/usr/bin/env node

const spawnSync = require('child_process').spawnSync

spawnSync('npm', ['init', '-y'].concat(process.argv.slice(2)), {
  stdio: 'inherit'
})
