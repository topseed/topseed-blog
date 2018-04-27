function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function itemDBind(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (content_html, created, image, title, url) {pug_html = pug_html + "\u003Ca" + (" class=\"ui blurring fluid blue card\""+pug_attr("href", url, true, false)) + "\u003E\u003Cdiv class=\"image\"\u003E\u003Cimg" + (pug_attr("src", url+'/'+image, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content\"\u003E\u003Cdiv class=\"header\"\u003E" + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"meta\"\u003E" + (pug_escape(null == (pug_interp = created) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"description\"\u003E" + (pug_escape(null == (pug_interp = content_html) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"extra content\"\u003EAuthor info here\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";}.call(this,"content_html" in locals_for_with?locals_for_with.content_html:typeof content_html!=="undefined"?content_html:undefined,"created" in locals_for_with?locals_for_with.created:typeof created!=="undefined"?created:undefined,"image" in locals_for_with?locals_for_with.image:typeof image!=="undefined"?image:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"url" in locals_for_with?locals_for_with.url:typeof url!=="undefined"?url:undefined));;return pug_html;}