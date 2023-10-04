"use strict";var f=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var q=f(function(z,s){
var l=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-assert-is-positive-zero/dist');function d(a,i,u){var v,n,e,r;if(a<=0)return NaN;if(a===1||u===0)return i[0];for(u<0?n=(1-a)*u:n=0,r=0;r<a&&(e=i[n],e!==e);r++)n+=u;if(r===a)return NaN;for(v=e,r+=1,r;r<a;r++)n+=u,e=i[n],!l(e)&&(e>v||e===v&&b(e))&&(v=e);return v}s.exports=d
});var c=f(function(A,m){
var k=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/math-base-assert-is-positive-zero/dist');function R(a,i,u,v){var n,e,r,t;if(a<=0)return NaN;if(a===1||u===0)return i[v];for(e=v,t=0;t<a&&(r=i[e],r!==r);t++)e+=u;if(t===a)return NaN;for(n=r,t+=1,t;t<a;t++)e+=u,r=i[e],!k(r)&&(r>n||r===n&&P(r))&&(n=r);return n}m.exports=R
});var y=f(function(B,p){
var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=q(),_=c();Z(x,"ndarray",_);p.exports=x
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),o,j=O(E(__dirname,"./native.js"));g(j)?o=h:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
