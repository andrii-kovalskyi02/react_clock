(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),i=n(2),o=n(3),r=n(5),s=n(4),l=n(1),d=n(0),h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={time:(new Date).toUTCString().slice(-12,-4)},t.timerId=0,t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({time:(new Date).toUTCString().slice(-12,-4)}),console.info(t.state.time)}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.debug("Renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.name,e=this.state.time;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:e})]})}}]),n}(l.Component);n(13);function u(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},t.timerId=0,t.handleRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.handleLeftClick=function(){t.setState({hasClock:!0})},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:u()})}),3300),window.addEventListener("contextmenu",this.handleRightClick),window.addEventListener("click",this.handleLeftClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),window.addEventListener("contextmenu",this.handleRightClick),window.addEventListener("click",this.handleLeftClick)}},{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.hasClock;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),n&&Object(d.jsx)(h,{name:e})]})}}]),n}(l.Component);a.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1302df52.chunk.js.map