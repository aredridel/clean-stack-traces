#!/usr/bin/env node

var split = require('split');
var through2 = require('through2');

var dir = process.cwd() + '/';
process.stdin.pipe(split(/(\n)/)).pipe(through2.obj(function (s, _, cb) {
    if (/^  at /.test(s)) {
        this.push(s.replace(dir, ''));
    } else {
        this.push(s);
    }
    cb();
})).pipe(process.stdout);
