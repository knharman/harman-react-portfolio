"use strict";(self.webpackChunkharman_react_portfolio=self.webpackChunkharman_react_portfolio||[]).push([[3047],{595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,i=c.length;-1!==t.code.indexOf(r=n(a,i));)++i;return c[i]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(r>=o.length);u++){var l=i[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var p=o[r],s=t.tokenStack[p],f="string"===typeof l?l:l.content,g=n(a,p),k=f.indexOf(g);if(k>-1){++r;var h=f.substring(0,k),m=new e.Token(a,e.tokenize(s,t.grammar),"language-"+a,s),d=f.substring(k+g.length),y=[];h&&y.push.apply(y,c([h])),y.push(m),d&&y.push.apply(y,c([d])),"string"===typeof l?i.splice.apply(i,[u,1].concat(y)):l.content=y}}else l.content&&c(l.content)}return i}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.e811751c.chunk.js.map