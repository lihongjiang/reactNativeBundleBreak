__d(335,function(r,e,n,t){"use strict";n.exports=function(r,e,n,t){if(0===e.length)return r;var s=void 0,c=void 0,u=void 0;switch(console.warn(t),n){case"success-first":var o=babelHelpers.slicedToArray(e,2);return s=o[0],c=o[1],r.then(function(r){return s(r)},function(r){return c&&c(r)});case"error-first":var i=babelHelpers.slicedToArray(e,2);return c=i[0],s=i[1],r.then(function(r){return s(r)},function(r){return c(r)});case"single-callback-value-first":return u=babelHelpers.slicedToArray(e,1)[0],r.then(function(r){return u(r)},function(r){return u(null,r)});case"node":return u=babelHelpers.slicedToArray(e,1)[0],r.then(function(r){return u(null,r)},function(r){return u(r)});default:throw new Error("Type of callbacks not specified. Must be one of 'success-first', 'error-first', 'single-callback-value-first', or 'node'")}}});