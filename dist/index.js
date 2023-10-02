"use strict";var s=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var c=s(function(h,l){
var f=require('@stdlib/number-float64-base-to-float32/dist');function N(r,a,v){var i,e,u,n,t;if(r<=0)return NaN;if(r===1||v===0)return a[0];for(v<0?e=(1-r)*v:e=0,i=0,n=0,t=0;t<r;t++)u=a[e],u===u&&(n+=1,i=f(i+f(f(u-i)/n))),e+=v;return n===0?NaN:i}l.exports=N
});var d=s(function(k,p){
var q=require('@stdlib/number-float64-base-to-float32/dist');function F(r,a,v,i){var e,u,n,t,o;if(r<=0)return NaN;if(r===1||v===0)return a[i];for(u=i,e=0,t=0,o=0;o<r;o++)n=a[u],n===n&&(t+=1,e=q(e+q(q(n-e)/t))),u+=v;return t===0?NaN:e}p.exports=F
});var y=s(function(z,x){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=c(),T=d();R(w,"ndarray",T);x.exports=w
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=y(),m,j=E(_(__dirname,"./native.js"));O(j)?m=b:m=j;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
