"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=v(function(z,f){
var j=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-positive-zero/dist');function R(r,e,n,q){var u,t,a,i;if(r<=0)return NaN;if(r===1||n===0)return e[q];for(t=q,i=0;i<r&&(a=e[t],a!==a);i++)t+=n;if(i===r)return NaN;for(u=a,i+=1,i;i<r;i++)t+=n,a=e[t],!j(a)&&(a>u||a===u&&l(a))&&(u=a);return u}f.exports=R
});var x=v(function(A,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=s();function k(r,e,n){return b(r,e,n,_(r,n))}m.exports=k
});var p=v(function(B,d){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=x(),O=s();E(c,"ndarray",O);d.exports=c
});var P=require("path").join,Z=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=p(),o,y=Z(P(__dirname,"./native.js"));g(y)?o=h:o=y;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
