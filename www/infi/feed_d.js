function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function feedDBind(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (myNum) {pug_html = pug_html + "\u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003EThe num is " + (pug_escape(null == (pug_interp = myNum) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp\u003E \u003C\u002Fp\u003E";}.call(this,"myNum" in locals_for_with?locals_for_with.myNum:typeof myNum!=="undefined"?myNum:undefined));;return pug_html;}