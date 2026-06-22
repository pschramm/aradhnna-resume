// build.js — generates index.html from template.html + resume.json
// Run: node build.js
// Never edit index.html directly — edit resume.json, then run this script.

const fs   = require('fs');
const path = require('path');

const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
const data     = fs.readFileSync(path.join(__dirname, 'resume.json'),   'utf8');

const html = template.replace('__RESUME_DATA__', data);

fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('✓ index.html generated from resume.json');
