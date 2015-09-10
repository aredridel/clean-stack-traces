#!/usr/bin/env node

var split = require('split');

var dir = process.cwd() + '/';
process.stdin.pipe(split(/(\n)/, function (s) {
    if (/^  at /.test(s)) {
        return s.replace(dir, '');
    } else {
        return s;
    }
})).pipe(process.stdout);
