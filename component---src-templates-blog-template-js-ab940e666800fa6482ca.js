(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});n(75),n(48);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(154),s=n.n(c),l=n(153),u=n(155),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.markdownRemark,n=e.allMarkdownRemark.edges.filter(function(e){return!!e.node.frontmatter.date}).map(function(e){return o.a.createElement(u.a,{key:e.node.id,post:e.node})});return o.a.createElement(l.a,{links:n},o.a.createElement(s.a,{title:" "+t.frontmatter.title+" | Accessibility awesome |"}),o.a.createElement("div",{className:"page"},o.a.createElement("header",null,o.a.createElement("h1",{className:"page-title"},t.frontmatter.title),o.a.createElement("span",null,t.frontmatter.baseline)),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))},t}(i.Component);t.default=m;var d="1035525458"},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(142),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(144),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var m=n(33);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Accessible awesomeness"}}}}},146:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(49),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},147:function(e,t,n){},149:function(e,t,n){},151:function(e,t,n){},153:function(e,t,n){"use strict";var a=n(145),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(154),l=n.n(s),u=n(143),m=(n(48),n(7)),d=n.n(m),p=(n(147),function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){return i.a.createElement("aside",null,i.a.createElement("nav",{className:"sidebar-navigation"},i.a.createElement("h1",null,"Table of contents"),this.props.data&&this.props.data.map(function(e){return i.a.createElement(u.Link,{key:e.props.post.frontmatter.path,className:"sidebar-link",to:e.props.post.frontmatter.path},e.props.post.frontmatter.title)})))},t}(r.Component)),f=(n(149),function(e){e.siteTitle;return i.a.createElement("nav",{className:"navigation-main"},i.a.createElement(u.Link,{className:"navigation-link",to:"/"},"Home"),i.a.createElement(u.Link,{className:"navigation-link",to:"/tools"},"Tools"),i.a.createElement(u.Link,{className:"navigation-link",to:"/intro"},"Intro"))}),h=(n(151),function(e){var t=e.children,n=e.links;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{href:"#main-content",className:"skip-to-content"},"Skip the navigation"),i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"container"},i.a.createElement(p,{data:n}),i.a.createElement("div",{className:"main-content",id:"main-content"},t)))},data:a})});h.propTypes={children:c.a.node.isRequired};t.a=h},155:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(143);t.a=function(e){var t=e.post;return r.a.createElement("div",null,r.a.createElement(i.Link,{to:t.frontmatter.path},t.frontmatter.title))}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-ab940e666800fa6482ca.js.map