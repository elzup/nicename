'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// @flow

var main = function main(input, opts) {
  if (typeof input !== 'string') {
    throw new TypeError('Expected a string, got ' + (typeof input === 'undefined' ? 'undefined' : _typeof(input)));
  }

  opts = opts || {};

  return input + ' & ' + (opts.postfix || 'rainbows');
};
exports.default = main;