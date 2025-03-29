"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=v(function(k,m){
var o=require('@stdlib/number-float64-base-to-float32/dist');function j(e,r,a,d){var n,u,i,t,s;if(e<=0)return NaN;if(e===1||a===0)return r[d];for(u=d,n=0,t=0,s=0;s<e;s++)i=r[u],i===i&&(t+=1,n=o(n+o(o(i-n)/t))),u+=a;return t===0?NaN:n}m.exports=j
});var p=v(function(z,c){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=q();function E(e,r,a){return _(e,r,a,R(e,a))}c.exports=E
});var w=v(function(A,l){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),N=q();F(y,"ndarray",N);l.exports=y
});var O=require("path").join,T=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=w(),f,x=T(O(__dirname,"./native.js"));b(x)?f=g:f=x;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
