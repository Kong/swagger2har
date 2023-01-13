!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).swagger2har={})}(this,(function(e){"use strict";var r=function(e,r){return e(r={exports:{}},r.exports),r.exports}((function(e){var r={string:"",number:0,integer:0,null:null,boolean:!1,object:{}};function t(e,r,t){return!t.requiredPropertiesOnly||t.requiredPropertiesOnly&&function(e,r){var t=!1;return(r=r||[]).forEach((function(r){r===e&&(t=!0)})),t}(e,r.required)}function i(e){return function(e){return Array.isArray(e)}(e.type)&&(e.type=e.type[0]),e.type}e.exports={instantiate:function(e,n){n=n||{};var a={};return function e(a,s,o){if(a){var p,f,u=i(a);if("object"===u&&a.properties)for(var c in o[s]=o[s]||{},a.properties)a.properties.hasOwnProperty(c)&&t(c,a,n)&&e(a.properties[c],c,o[s]);else if(a.allOf)for(p=0;p<a.allOf.length;p++)e(a.allOf[p],s,o);else if("array"===u){o[s]=[];var v=0;for((a.minItems||a.minItems>0)&&(v=a.minItems),p=0;p<v;p++)e(a.items,p,o[s])}else!function(e){return"[object Array]"===Object.prototype.toString.call(e.enum)}(a)?function(e){var t=e.type;return void 0!==r[t]}(a)&&(o[s]=function(e){var t=e.type;return e.default?e.default:r[t]}(a)):o[s]=(f=a).default?f.default:f.enum.length?f.enum[0]:void 0}}(e,"kek",a),a.kek}}}));r.instantiate;var t=r,i=function(e,r,t,i,a){void 0===a&&(a={});var p={method:t.toUpperCase(),url:i+r,headers:o(e,r,t),queryString:s(e,r,t,a),httpVersion:"HTTP/1.1",cookies:[],headersSize:0,bodySize:0},f=n(e,r,t);return f&&(p.postData=f),p},n=function(e,r,i){if(void 0!==e.paths[r][i].parameters)for(var n in e.paths[r][i].parameters){var s=e.paths[r][i].parameters[n];if(void 0!==s.in&&"body"===s.in.toLowerCase()&&void 0!==s.schema){var o;if(void 0===s.schema.$ref)o=s.schema;else if(/^http/.test(s.schema.$ref));else{var p=s.schema.$ref.split("/").slice(-1)[0];o=a(e,e.definitions[p])}return{mimeType:"application/json",text:JSON.stringify(t.instantiate(o))}}}return null},a=function e(r,t){if("object"===t.type){if(void 0!==t.properties)for(var i in t.properties){var n=t.properties[i];if("string"==typeof n.$ref&&!/^http/.test(n.$ref)){var a=n.$ref.split("/").slice(-1)[0];t.properties[i]=r.definitions[a]}e(r,t.properties[i])}}else if("array"===t.type&&void 0!==t.items)for(var s in t.items){if("$ref"===s&&!/^http/.test(t.items[s])){var o=t.items.$ref.split("/").slice(-1)[0];t.items=r.definitions[o]}e(r,t.items)}return t},s=function(e,r,t,i){void 0===i&&(i={});var n=[];if(void 0!==e.paths[r][t].parameters)for(var a in e.paths[r][t].parameters){var s=e.paths[r][t].parameters[a];"string"!=typeof s.$ref||/^http/.test(s.$ref)||(s=p(e,s.$ref)),void 0!==s.in&&"query"===s.in.toLowerCase()&&n.push({name:s.name,value:void 0===i[s.name]?void 0===s.default?e.openapi?"<SOME_"+s.schema.type.toUpperCase()+"_VALUE>":"<SOME_"+s.type.toUpperCase()+"_VALUE>":s.default+"":i[s.name]+""})}return n},o=function(e,r,t){var i,n,a,s=[],o=e.paths[r][t];if(void 0!==o.consumes)for(var f in o.consumes){var u=o.consumes[f];s.push({name:"accept",value:u})}if(void 0!==o.produces)for(var c in o.produces){var v=o.produces[c];s.push({name:"content-type",value:v})}if(void 0!==o.parameters)for(var h in o.parameters){var l=o.parameters[h];if(void 0!==l.in&&"header"===l.in.toLowerCase()){if("string"==typeof l.$ref){if(/^http/.test(l.$ref))continue;l=p(e,l.$ref)}var m=e.openapi?l.schema.type:l.type;s.push({name:l.name,value:"<SOME_"+m.toUpperCase()+"_VALUE>"})}}var d=e.securityDefinitions||e.components&&e.components.securitySchemes,y=o.security||e.security;if(d&&y)for(var b in y){var g=Object.keys(y[b])[0],E=d[g];if(E&&E.type)switch(E.type.toLowerCase()){case"basic":i=g;break;case"apikey":"query"===E.in&&(n=g);break;case"oauth2":a=g}}return i?s.push({name:"Authorization",value:"Basic <USERNAME:PASSWORD>"}):n?s.push({name:d[n].name,value:"REPLACE_KEY_VALUE"}):a&&s.push({name:"Authorization",value:"Bearer <BEARER_TOKEN>"}),s},p=function(e,r){var t=r.split("/");if(t.length<=1)return{};return function e(r,i){if(i+1<t.length){var n=i+1;return e(r[t[i]],n)}return r[t[i]]}(e,1)};e.createHar=i,e.swagger2har=function(e,r){try{var t=r||function(e){var r="";return e.openapi?e.servers[0].url:(void 0!==e.schemes?r+=e.schemes[0]:r+="http","/"===e.basePath?r+="://"+e.host:r+="://"+e.host+e.basePath,r)}(e),n=[];return Object.keys(e.paths).forEach((function(r){Object.keys(e.paths[r]).forEach((function(a){var s=t+r,o=i(e,r,a,t);n.push({path:r,method:a.toUpperCase(),url:s,description:e.paths[r][a].description||"No description available",har:o})}))})),n}catch(e){return console.error(e),null}},Object.defineProperty(e,"__esModule",{value:!0})}));
