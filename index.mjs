// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@v0.2.1-esm/index.mjs";function n(r,n,s){var i,a,o,d;if(r<=0)return NaN;if(1===r||0===s)return n[0];for(a=s<0?(1-r)*s:0,d=0;d<r&&(o=n[a])!=o;d++)a+=s;if(d===r)return NaN;for(i=o,d+=1;d<r;d++)o=n[a+=s],e(o)||(o>i||o===i&&t(o))&&(i=o);return i}function s(r,n,s,i){var a,o,d,f;if(r<=0)return NaN;if(1===r||0===s)return n[i];for(o=i,f=0;f<r&&(d=n[o])!=d;f++)o+=s;if(f===r)return NaN;for(a=d,f+=1;f<r;f++)d=n[o+=s],e(d)||(d>a||d===a&&t(d))&&(a=d);return a}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
