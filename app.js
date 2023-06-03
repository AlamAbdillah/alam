#!/usr/bin/env node

import cli_show from './bin/cli.js';

const args = process.argv.splice(process.execArgv.length + 1);

cli_show(args[1], args[2]);
