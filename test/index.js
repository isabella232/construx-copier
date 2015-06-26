/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2015 eBay Software Foundation                                │
 │                                                                             │
 │hh ,'""`.                                                                    │
 │  / _  _ \  Licensed under the Apache License, Version 2.0 (the "License");  │
 │  |(@)(@)|  you may not use this file except in compliance with the License. │
 │  )  __  (  You may obtain a copy of the License at                          │
 │ /,'))((`.\                                                                  │
 │(( ((  )) ))    http://www.apache.org/licenses/LICENSE-2.0                   │
 │ `\ `)(' /'                                                                  │
 │                                                                             │
 │   Unless required by applicable law or agreed to in writing, software       │
 │   distributed under the License is distributed on an "AS IS" BASIS,         │
 │   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
 │   See the License for the specific language governing permissions and       │
 │   limitations under the License.                                            │
 \*───────────────────────────────────────────────────────────────────────────*/
/*global describe, it, beforeEach, afterEach*/

'use strict';


var test = require('tap').test,
  path = require('path'),
  Copier = require(path.resolve(__dirname, '..')),
  copier = Copier({}),
  fs = require('fs');

test('construx-copier', function (t) {

    t.test('honors its API', function (t) {
        t.plan(1);

        copier('i am data', {paths: '', context: {name: 'foo'}}, function (err, compiled) {
            t.equal(compiled, 'i am data');
            t.end();
        });

    });

});