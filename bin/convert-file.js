#!/usr/bin/env node

const esriToWsgi84 = require('../src/projection'),
      fs           = require('fs');

const [nodeExe, exe, inFile, outFile] = process.argv;

if (!inFile) {
  console.log(`Usage: ${exe} infile [outfile]`);
  process.exit(1);
}

const inputData = JSON.parse(fs.readFileSync(inFile)),
      outputData = esriToWsgi84(inputData),
      outputString = JSON.stringify(outputData);

if (outFile) {
  fs.writeFileSync(outFile, outputString);
} else {
  console.log(outputString);
}
