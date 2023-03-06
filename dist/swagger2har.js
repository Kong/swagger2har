!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).swagger2har={})}(this,(function(e){"use strict";var t=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t={string:"",number:0,integer:0,null:null,boolean:!1,object:{}};function r(e,t,r){return!r.requiredPropertiesOnly||r.requiredPropertiesOnly&&function(e,t){var r=!1;return(t=t||[]).forEach((function(t){t===e&&(r=!0)})),r}(e,t.required)}function i(e){return function(e){return Array.isArray(e)}(e.type)&&(e.type=e.type[0]),e.type}e.exports={instantiate:function(e,n){n=n||{};var a={};return function e(a,o,s){if(a){var p,u,f=i(a);if("object"===f&&a.properties)for(var c in s[o]=s[o]||{},a.properties)a.properties.hasOwnProperty(c)&&r(c,a,n)&&e(a.properties[c],c,s[o]);else if(a.allOf)for(p=0;p<a.allOf.length;p++)e(a.allOf[p],o,s);else if("array"===f){s[o]=[];var v=0;for((a.minItems||a.minItems>0)&&(v=a.minItems),p=0;p<v;p++)e(a.items,p,s[o])}else!function(e){return"[object Array]"===Object.prototype.toString.call(e.enum)}(a)?function(e){var r=e.type;return void 0!==t[r]}(a)&&(s[o]=function(e){var r=e.type;return e.default?e.default:t[r]}(a)):s[o]=(u=a).default?u.default:u.enum.length?u.enum[0]:void 0}}(e,"kek",a),a.kek}}}));t.instantiate;var r=t,i=function(e,t,r,i,a){void 0===a&&(a={});var p={method:r.toUpperCase(),url:i+t,headers:s(e,t,r),queryString:o(e,t,r,a),httpVersion:"HTTP/1.1",cookies:[],headersSize:0,bodySize:0},u=n(e,t,r);return u&&(p.postData=u),p},n=function(e,t,i){if(void 0!==e.paths[t][i].parameters)for(var n in e.paths[t][i].parameters){var o=e.paths[t][i].parameters[n];if(void 0!==o.in&&"body"===o.in.toLowerCase()&&void 0!==o.schema){var s;if(void 0===o.schema.$ref)s=o.schema;else if(/^http/.test(o.schema.$ref));else{var p=o.schema.$ref.split("/").slice(-1)[0];s=a(e,e.definitions[p])}return{mimeType:"application/json",text:JSON.stringify(r.instantiate(s))}}}return null},a=function e(t,r){if("object"===r.type){if(void 0!==r.properties)for(var i in r.properties){var n=r.properties[i];if("string"==typeof n.$ref&&!/^http/.test(n.$ref)){var a=n.$ref.split("/").slice(-1)[0];r.properties[i]=t.definitions[a]}e(t,r.properties[i])}}else if("array"===r.type&&void 0!==r.items)for(var o in r.items){if("$ref"===o&&!/^http/.test(r.items[o])){var s=r.items.$ref.split("/").slice(-1)[0];r.items=t.definitions[s]}e(t,r.items)}return r},o=function(e,t,r,i){void 0===i&&(i={});var n=[];if(void 0!==e.paths[t][r].parameters)for(var a in e.paths[t][r].parameters){var o,s,u,f,c=e.paths[t][r].parameters[a];if("string"!=typeof c.$ref||/^http/.test(c.$ref)||(c=p(e,c.$ref)),void 0!==c.in&&"query"===c.in.toLowerCase())n.push({name:c.name,value:void 0===i[c.name]?void 0===c.default?e.openapi?null!==(o=c.schema)&&void 0!==o&&o.type?"<SOME_"+(null===(s=c.schema)||void 0===s||null===(u=s.type)||void 0===u?void 0:u.toUpperCase())+"_VALUE>":"<SOME_VALUE>":c.type?"<SOME_"+(null===(f=c.type)||void 0===f?void 0:f.toUpperCase())+"_VALUE>":"<SOME_VALUE>":c.default+"":i[c.name]+""})}return n},s=function(e,t,r){var i,n,a,o=[],s=e.paths[t][r];if(void 0!==s.consumes)for(var u in s.consumes){var f=s.consumes[u];o.push({name:"accept",value:f})}if(void 0!==s.produces)for(var c in s.produces){var v=s.produces[c];o.push({name:"content-type",value:v})}if(void 0!==s.parameters)for(var l in s.parameters){var h=s.parameters[l];if(void 0!==h.in&&"header"===h.in.toLowerCase()){if("string"==typeof h.$ref){if(/^http/.test(h.$ref))continue;h=p(e,h.$ref)}var d=e.openapi?h.schema.type:h.type;o.push({name:h.name,value:d?"<SOME_".concat(d.toUpperCase(),"_VALUE>"):"<SOME_VALUE>"})}}var m=e.securityDefinitions||e.components&&e.components.securitySchemes,y=s.security||e.security;if(m&&y)for(var E in y){var b=Object.keys(y[E])[0],O=m[b];if(O&&O.type)switch(O.type.toLowerCase()){case"basic":i=b;break;case"apikey":"query"===O.in&&(n=b);break;case"oauth2":a=b}}return i?o.push({name:"Authorization",value:"Basic <USERNAME:PASSWORD>"}):n?o.push({name:m[n].name,value:"REPLACE_KEY_VALUE"}):a&&o.push({name:"Authorization",value:"Bearer <BEARER_TOKEN>"}),o},p=function(e,t){var r=t.split("/");if(r.length<=1)return{};return function e(t,i){if(i+1<r.length){var n=i+1;return e(t[r[i]],n)}return t[r[i]]}(e,1)};e.createHar=i,e.swagger2har=function(e,t){try{var r=t||function(e){var t="";return e.openapi?e.servers[0].url:(void 0!==e.schemes?t+=e.schemes[0]:t+="http","/"===e.basePath?t+="://"+e.host:t+="://"+e.host+e.basePath,t)}(e),n=[];return Object.keys(e.paths).forEach((function(t){Object.keys(e.paths[t]).forEach((function(a){var o=r+t,s=i(e,t,a,r);n.push({path:t,method:a.toUpperCase(),url:o,description:e.paths[t][a].description||"No description available",har:s})}))})),n}catch(e){return console.error(e),null}},Object.defineProperty(e,"__esModule",{value:!0})}));
