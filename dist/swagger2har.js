!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):e.swagger2har=r()}(this,function(){"use strict";var e,r=(function(e){var r={string:"",number:0,integer:0,null:null,boolean:!1,object:{}};function t(e,r,t){return!t.requiredPropertiesOnly||t.requiredPropertiesOnly&&function(e,r){var t=!1;return(r=r||[]).forEach(function(r){r===e&&(t=!0)}),t}(e,r.required)}function i(e){return function(e){return Array.isArray(e)}(e.type)&&(e.type=e.type[0]),e.type}e.exports={instantiate:function(e,n){n=n||{};var a={};return function e(a,o,s){if(a){var p,u,f=i(a);if("object"===f&&a.properties)for(var c in s[o]=s[o]||{},a.properties)a.properties.hasOwnProperty(c)&&t(c,a,n)&&e(a.properties[c],c,s[o]);else if(a.allOf)for(p=0;p<a.allOf.length;p++)e(a.allOf[p],o,s);else if("array"===f){s[o]=[];var l=0;for((a.minItems||a.minItems>0)&&(l=a.minItems),p=0;p<l;p++)e(a.items,p,s[o])}else!function(e){return"[object Array]"===Object.prototype.toString.call(e.enum)}(a)?function(e){var t=e.type;return void 0!==r[t]}(a)&&(s[o]=function(e){var t=e.type;return e.default?e.default:r[t]}(a)):s[o]=(u=a).default?u.default:u.enum.length?u.enum[0]:void 0}}(e,"kek",a),a.kek}}}(e={exports:{}},e.exports),e.exports),t=(r.instantiate,r),i=function(e,r,i){if(void 0!==e.paths[r][i].parameters)for(var a in e.paths[r][i].parameters){var o=e.paths[r][i].parameters[a];if(void 0!==o.in&&"body"===o.in.toLowerCase()&&void 0!==o.schema){var s;if(void 0===o.schema.$ref)s=o.schema;else if(/^http/.test(o.schema.$ref));else{var p=o.schema.$ref.split("/").slice(-1)[0];s=n(e,e.definitions[p])}return{mimeType:"application/json",text:JSON.stringify(t.instantiate(s))}}}return null},n=function e(r,t){if("object"===t.type){if(void 0!==t.properties)for(var i in t.properties){var n=t.properties[i];if("string"==typeof n.$ref&&!/^http/.test(n.$ref)){var a=n.$ref.split("/").slice(-1)[0];t.properties[i]=r.definitions[a]}e(r,t.properties[i])}}else if("array"===t.type&&void 0!==t.items)for(var o in t.items){if("$ref"===o&&!/^http/.test(t.items[o])){var s=t.items.$ref.split("/").slice(-1)[0];t.items=r.definitions[s]}e(r,t.items)}return t},a=function(e,r,t,i){void 0===i&&(i={});var n=[];if(void 0!==e.paths[r][t].parameters)for(var a in e.paths[r][t].parameters){var o=e.paths[r][t].parameters[a];if("string"!=typeof o.$ref||/^http/.test(o.$ref)||(o=s(e,o.$ref)),void 0!==o.in&&"query"===o.in.toLowerCase()){console.log("here"),console.log(o);var p=o&&o.schema&&o.schema.type?o.schema.type:"";console.log(p);var u=o&&o.type?o.type:"";console.log(u),n.push({name:o.name,value:void 0===i[o.name]?void 0===o.default?e.openapi?"<SOME_"+p.toUpperCase()+"_VALUE>":"<SOME_"+u.toUpperCase()+"_VALUE>":o.default+"":i[o.name]+""})}}return console.log(n),n},o=function(e,r,t){var i,n,a,o=[],s=e.paths[r][t];if(void 0!==s.consumes)for(var p in s.consumes){var u=s.consumes[p];o.push({name:"accept",value:u})}if(void 0!==s.produces)for(var f in s.produces){var c=s.produces[f];o.push({name:"content-type",value:c})}if(void 0!==s.parameters)for(var l in s.parameters){var v=s.parameters[l];if(void 0!==v.in&&"header"===v.in.toLowerCase()){var h=e.openapi?v.schema.type:v.type;o.push({name:v.name,value:"<SOME_"+h.toUpperCase()+"_VALUE>"})}}var m=e.securityDefinitions||e.components&&e.components.securitySchemes,d=s.security||e.security;if(m&&d)for(var y in d){var b=Object.keys(d[y])[0],g=m[b];if(g&&g.type)switch(g.type.toLowerCase()){case"basic":i=b;break;case"apikey":"query"===g.in&&(n=b);break;case"oauth2":a=b}}return i?o.push({name:"Authorization",value:"Basic <USERNAME:PASSWORD>"}):n?o.push({name:m[n].name,value:"REPLACE_KEY_VALUE"}):a&&o.push({name:"Authorization",value:"Bearer <BEARER_TOKEN>"}),o},s=function(e,r){var t=r.split("/");if(t.length<=1)return{};return function e(r,i){if(i+1<t.length){var n=i+1;return e(r[t[i]],n)}return r[t[i]]}(e,1)};return function(e,r){try{var t=r||function(e){var r="";return e.openapi?e.servers[0].url:(void 0!==e.schemes?r+=e.schemes[0]:r+="http","/"===e.basePath?r+="://"+e.host:r+="://"+e.host+e.basePath,r)}(e),n=[];return Object.keys(e.paths).forEach(function(r){Object.keys(e.paths[r]).forEach(function(s){var p=t+r,u=function(e,r,t,n,s){void 0===s&&(s={});var p={method:t.toUpperCase(),url:n+r,headers:o(e,r,t),queryString:a(e,r,t,s),httpVersion:"HTTP/1.1",cookies:[],headersSize:0,bodySize:0},u=i(e,r,t);return u&&(p.postData=u),p}(e,r,s,t);n.push({path:r,method:s.toUpperCase(),url:p,description:e.paths[r][s].description||"No description available",har:u})})}),n}catch(e){return console.error(e),null}}});
