(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});n(78),n(52);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=n(157),s=n.n(c),u=n(156),l=n(158),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.markdownRemark,n=e.allMarkdownRemark.edges.filter(function(e){return!!e.node.frontmatter.date}).map(function(e){return o.a.createElement(l.a,{key:e.node.id,post:e.node})});return o.a.createElement(u.a,{links:n},o.a.createElement(s.a,{title:"Docs | "+t.frontmatter.title}),o.a.createElement("div",{className:"page"},o.a.createElement("header",null,o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("span",null,t.frontmatter.baseline)),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))},t}(i.Component);t.default=m;var d="2365745172"},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(145),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(27);n.d(t,"waitForRouteChange",function(){return u.c});var l=n(147),m=n.n(l);n.d(t,"PageRenderer",function(){return m.a});var d=n(38);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Accessible awesomeness"}}}}},149:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(53),s=n(1),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},150:function(e,t,n){},152:function(e,t,n){},154:function(e,t,n){},156:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(157),u=n.n(s),l=n(146),m=(n(52),n(8)),d=n.n(m),p=(n(150),function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){return console.log(this.props.data),i.a.createElement("aside",null,i.a.createElement("nav",{className:"sidebar-navigation"},this.props.data.map(function(e){return i.a.createElement(l.Link,{key:e.props.post.frontmatter,className:"sidebar-link",to:e.props.post.frontmatter.path?e.props.post.frontmatter.path:"/"},e.props.post.frontmatter.title)})))},t}(r.Component)),f=(n(152),function(e){e.siteTitle;return i.a.createElement("nav",{className:"navigation-main"},i.a.createElement(l.Link,{className:"navigation-link",to:"/"},"Home"),i.a.createElement(l.Link,{className:"navigation-link",to:"/my-first-post"},"Docs"),i.a.createElement(l.Link,{className:"navigation-link",to:"/"},"About"))}),h=(n(154),function(e){var t=e.children,n=e.links;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"container"},i.a.createElement(p,{data:n}),i.a.createElement("div",{className:"main-content"},t)))},data:a})});h.propTypes={children:c.a.node.isRequired};t.a=h},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(146);t.a=function(e){var t=e.post;return r.a.createElement("div",null,r.a.createElement(i.Link,{to:t.frontmatter.path},t.frontmatter.title))}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-53b39fae92c1eaeab403.js.map