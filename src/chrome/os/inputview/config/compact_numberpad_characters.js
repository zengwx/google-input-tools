// Copyright 2014 The ChromeOS IME Authors. All Rights Reserved.
// limitations under the License.
// See the License for the specific language governing permissions and
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// distributed under the License is distributed on an "AS-IS" BASIS,
// Unless required by applicable law or agreed to in writing, software
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// You may obtain a copy of the License at
// you may not use this file except in compliance with the License.
// Licensed under the Apache License, Version 2.0 (the "License");
//
goog.provide('i18n.input.chrome.inputview.content.compact.numberpad');

goog.require('i18n.input.chrome.inputview.content.constants');

goog.scope(function() {
var NonLetterKeys = i18n.input.chrome.inputview.content.constants.NonLetterKeys;

/**
 * Generic numberpad keyset characters.
 *
 * @return {!Array.<!Object>}
 */
i18n.input.chrome.inputview.content.compact.numberpad.keyNumberpadCharacters =
    function() {
  return [
      /* 0 */ { 'text': '-',
                'isGrey': true},
      /* 1 */ { 'text': '+',
                'isGrey': true},
      /* 2 */ { 'text': '.',
                'isGrey': true},
      /* 3 */ { 'text': '1'},
      /* 4 */ { 'text': '2'},
      /* 5 */ { 'text': '3'},
      /* 6 */ NonLetterKeys.BACKSPACE,
      /* 7 */ { 'text': '*',
                'isGrey': true},
      /* 8 */ { 'text': '/',
                'isGrey': true},
      /* 9 */ { 'text': ',',
                'isGrey': true},
      /* 10 */ { 'text': '4'},
      /* 11 */ { 'text': '5'},
      /* 12 */ { 'text': '6'},
      /* 13 */ NonLetterKeys.ENTER,
      /* 14 */ { 'text': '(',
                'isGrey': true},
      /* 15 */ { 'text': ')',
                'isGrey': true},
      /* 16 */ { 'text': '=',
                'isGrey': true},
      /* 17 */ { 'text': '7'},
      /* 18 */ { 'text': '8'},
      /* 19 */ { 'text': '9',
                 'marginRightPercent': 0.545454},
      /* 20 */ NonLetterKeys.SPACE,
      /* 21 */ { 'text': '*'},
      /* 22 */ { 'text': '0'},
      /* 23 */ { 'text': '#'},
      /* 24 */ NonLetterKeys.HIDE
  ];
};

// TODO(rsadam): Add phone numberpad keyset here.

});  // goog.scope
