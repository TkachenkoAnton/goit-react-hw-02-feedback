(this["webpackJsonpmacpro_goit-react-hw-02-feedback"]=this["webpackJsonpmacpro_goit-react-hw-02-feedback"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),i=n(9),s=n(2),u=n(3),b=n(5),j=n(4),l=n(10),d=n.n(l),h=n(0),p=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)(h.Fragment,{children:n})]})}}]),n}(a.Component),O=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onLeaveFeedback,n=e.options;return Object(h.jsx)("button",{onClick:t,children:n})}}]),n}(a.Component),v=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,a=e.bad,r=e.total,c=e.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",a]}),Object(h.jsxs)("p",{children:["Total: ",r]}),Object(h.jsxs)("p",{children:["Positive feedback: ",c,"%"]})]})}}]),n}(a.Component),f=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.message;return Object(h.jsx)("h2",{children:e})}}]),n}(a.Component),g=(n(24),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.stateKeysArray=Object.keys(e.state),e.handleStateChange=function(t){e.setState((function(e){var n=t.target.textContent.toLowerCase();return Object(i.a)({},n,e[n]+1)}))},e.capitalizeFirstLetter=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.floor(t/e.countTotalFeedback()*100)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.good,a=t.neutral,r=t.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{title:"Please leave feedback",children:this.stateKeysArray.map((function(t){var n=d.a.generate();return Object(h.jsx)(O,{options:e.capitalizeFirstLetter(t),onLeaveFeedback:e.handleStateChange},n)}))}),n>0||a>0||r>0?Object(h.jsx)(p,{title:"Statistics",children:Object(h.jsx)(v,{good:n,neutral:a,bad:r,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(h.jsx)(f,{message:"No feedback given"})]})}}]),n}(a.Component));o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1bf88d9a.chunk.js.map