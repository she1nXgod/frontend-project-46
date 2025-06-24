#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((file1, file2) => {
    console.log(genDiff(file1, file2));
  });

program.parse();
