(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{108:function(e,t,r){e.exports=r(249)},113:function(e,t,r){},249:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),n=r(42),i=r.n(n),l=(r(113),r(7)),c=r(44),s=r(10),d=r(253),u=r(254),b=r(255),p=r(256),f=r(257),m=r(258),v=r(259),C=function(){return o.a.createElement("h1",null,"About")},E=r(34),h=r(17),g=r.n(h),B=r(250),O=r(104),H=r(251),S=r(260),y=r(261),j=r(252),k=r(24),R=r.n(k),D=r(43),W=r(32),I=r.n(W),N=(r(35),r(20));var T=function(e){var t=Object(a.useState)({}),r=Object(l.a)(t,2),n=(r[0],r[1]),i=Object(a.useState)([]),c=Object(l.a)(i,2),s=c[0],d=c[1],u=Object(a.useState)([]),b=Object(l.a)(u,2),p=b[0],f=b[1],m=Object(a.useState)([]),v=Object(l.a)(m,2),C=(v[0],v[1]),E=Object(a.useState)([]),h=Object(l.a)(E,2),B=h[0],O=h[1],H=Object(a.useState)([]),S=Object(l.a)(H,2),y=S[0],j=S[1],k=Object(a.useState)([]),W=Object(l.a)(k,2),T=W[0],A=W[1],w=Object(a.useState)([]),J=Object(l.a)(w,2),P=J[0],M=J[1],x=Object(a.useState)([]),F=Object(l.a)(x,2),U=F[0],V=F[1];Object(a.useEffect)((function(){(function(){var t=Object(D.a)(R.a.mark((function t(){var r,a,o;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state.toLowerCase(),t.next=3,I()("https://covidtracking.com/api/v1/states/".concat(r,"/current.json"));case 3:return a=t.sent,t.next=6,I()("https://covidtracking.com/api/v1/states/".concat(r,"/daily.json"));case 6:o=t.sent,n(a.data),d(o.data.map((function(e){return e.positive})).reverse()),j(o.data.map((function(e){return e.death})).reverse()),f(o.data.map((function(e){var t=e.date;return G(t)})).reverse()),O(o.data.map((function(e){return e.positiveIncrease})).reverse()),C(o.data.map((function(e){return{date:e.date,positive:e.positive,positiveIncrease:e.positiveIncrease}}))),A(o.data.map((function(e){return e.hospitalizedCurrently})).reverse()),M(o.data.map((function(e){return e.inIcuCurrently})).reverse()),V(o.data.map((function(e){return e.recovered})).reverse());case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var z={labels:p,datasets:[{label:"Total Positive Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:s},{label:"Total Deaths",fill:!1,lineTension:.1,backgroundColor:"#808080",borderColor:"#808080",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f5f5f5",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f5f5f5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:y},{label:"Recovered",fill:!1,lineTension:.1,backgroundColor:"green",borderColor:"green",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f5f5f5",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f5f5f5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:U}]},L={labels:p,datasets:[{label:"Daily Increase in Positive Cases",fill:!1,lineTension:.3,backgroundColor:"#EE4900",borderColor:"#EE4900",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#FFC436",pointBackgroundColor:"#FFC436",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#FFC436",pointHoverBorderColor:"#FFC436",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:B}]},K={labels:p,datasets:[{label:"Current Hospitalizations",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:T},{label:"Current ICU Patients",fill:!1,lineTension:.1,backgroundColor:"#808080",borderColor:"#808080",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f5f5f5",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f5f5f5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:P}]},G=function(e){var t=e.toString(),r=t.substring(0,4),a=t.substring(4,6),o=t.substring(6,8);return"".concat(a,"/").concat(o,"/").concat(r)};return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,{bottom:!0,cascade:!0},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h3",null,"Positive Cases"),o.a.createElement(N.a,{data:z}),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("div",null,o.a.createElement("h3",null,"Daily Increase in Positive Cases"),o.a.createElement(N.a,{data:L}),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("div",null,o.a.createElement("h3",null,"Current Health Care Statistics"),o.a.createElement(N.a,{data:K}),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement("br",null)))))},A=function(e){return console.log(e),o.a.createElement("div",{style:{margin:"1%"}},o.a.createElement(g.a,null,o.a.createElement("h1",null,e.state),o.a.createElement(T,{state:e.state})))},w=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),r=t[0],n=t[1],i=Object(a.useState)(""),c=Object(l.a)(i,2),s=c[0],d=c[1],u=Object(a.useState)(!1),b=Object(l.a)(u,2),p=b[0],f=b[1];return o.a.createElement("div",{style:{margin:"1%"}},o.a.createElement(g.a,null,o.a.createElement(B.a,null,o.a.createElement("h1",{className:"display-5"},"Data By State"),o.a.createElement("p",{className:"lead"},"Select a US state for state-specific statistics."),o.a.createElement("hr",{className:"my-2"}),o.a.createElement("br",null),o.a.createElement("div",{style:{marginBottom:"1%"}},o.a.createElement(H.a,{isOpen:r,toggle:function(){return n((function(e){return!e}))},onClick:function(){return f(!1)}},o.a.createElement(S.a,{caret:!0},s||"Select State"),o.a.createElement(y.a,{modifiers:{setMaxHeight:{enabled:!0,fn:function(e){return Object(E.a)(Object(E.a)({},e),{},{styles:Object(E.a)(Object(E.a)({},e.styles),{},{overflow:"auto",maxHeight:"30rem"})})}}}},["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"].map((function(e){return o.a.createElement(j.a,{onClick:function(){d(e),f(!1)},key:e},e)}))))),o.a.createElement("p",{className:"lead"},s?o.a.createElement(O.a,{color:"primary",onClick:function(){return f(!0)}},"Go"):o.a.createElement(O.a,{color:"primary",disabled:!0},"Go")))),s&&p?o.a.createElement("div",null,o.a.createElement(A,{state:s,go:p})):o.a.createElement("div",null))};var J=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),r=t[0],n=t[1],i=Object(a.useState)([]),c=Object(l.a)(i,2),s=c[0],d=c[1],u=Object(a.useState)([]),b=Object(l.a)(u,2),p=(b[0],b[1]),f=Object(a.useState)([]),m=Object(l.a)(f,2),v=m[0],C=m[1],E=Object(a.useState)([]),h=Object(l.a)(E,2),H=h[0],S=h[1],y=Object(a.useState)([]),j=Object(l.a)(y,2),k=j[0],W=j[1],T=Object(a.useState)([]),A=Object(l.a)(T,2),w=A[0],J=A[1],P=Object(a.useState)([]),M=Object(l.a)(P,2),x=M[0],F=M[1];Object(a.useEffect)((function(){(function(){var e=Object(D.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I()("https://covidtracking.com/api/v1/us/daily.json");case 2:t=e.sent,n(t.data.map((function(e){return e.positive})).reverse()),S(t.data.map((function(e){return e.death})).reverse()),d(t.data.map((function(e){var t=e.date;return L(t)})).reverse()),C(t.data.map((function(e){return e.positiveIncrease})).reverse()),p(t.data.map((function(e){return{date:e.date,positive:e.positive,positiveIncrease:e.positiveIncrease}}))),W(t.data.map((function(e){return e.hospitalizedCurrently})).reverse()),J(t.data.map((function(e){return e.inIcuCurrently})).reverse()),F(t.data.map((function(e){return e.recovered})).reverse());case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var U={labels:s,datasets:[{label:"Total Positive Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:r},{label:"Total Deaths",fill:!1,lineTension:.1,backgroundColor:"#808080",borderColor:"#808080",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f5f5f5",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f5f5f5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:H},{label:"Recovered",fill:!1,lineTension:.1,backgroundColor:"#73ffb3",borderColor:"#73ffb3",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#73ffb3",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:x}]},V={labels:s,datasets:[{label:"Daily Positive Increase",fill:!1,lineTension:.1,backgroundColor:"rgba(100,180,180,0.4)",borderColor:"rgba(200,100,100,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#fffff",pointBackgroundColor:"#ffff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#fffff",pointHoverBorderColor:"#fffff",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:v}]},z={labels:s,datasets:[{label:"Current Hospitalizations",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:k},{label:"Current ICU Patients",fill:!1,lineTension:.1,backgroundColor:"#808080",borderColor:"#808080",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f5f5f5",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f5f5f5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:w}]},L=function(e){var t=e.toString(),r=t.substring(0,4),a=t.substring(4,6),o=t.substring(6,8);return"".concat(a,"/").concat(o,"/").concat(r)};return o.a.createElement("div",null,o.a.createElement(g.a,null,o.a.createElement(B.a,null,o.a.createElement("h1",{className:"display-5"},"Covid-19 Data Visualization"),o.a.createElement("p",{className:"lead"},"On this page you will find data pertaining to cases of COVID-19 across the US"),o.a.createElement("hr",{className:"my-2"}),o.a.createElement("p",null,"Individual US state data is also available"),o.a.createElement("p",{className:"lead"},o.a.createElement(O.a,{href:"/covid/perstate",color:"primary"},"Data by US State")))),o.a.createElement("div",{className:"App"},o.a.createElement(g.a,{bottom:!0,cascade:!0},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h3",null,"Positive Cases"),o.a.createElement(N.a,{data:U}),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("div",null,o.a.createElement("h3",null,"Daily Increase in Positive Cases"),o.a.createElement(N.a,{data:V}),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("div",null,o.a.createElement("h3",null,"Current Health Care Statistics"),o.a.createElement(N.a,{data:z}),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement("br",null))))))},P=function(){return o.a.createElement("div",{style:{margin:"1%"}},o.a.createElement(J,null))};var M=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),r=t[0],n=t[1];return o.a.createElement(c.a,null,o.a.createElement(d.a,{color:"light",light:!0,expand:"md"},o.a.createElement(c.b,{to:"/covid/",className:"navbar-brand"},"Covid-19"),o.a.createElement(u.a,{onClick:function(){return n(!r)}}),o.a.createElement(b.a,{isOpen:r,navbar:!0},o.a.createElement(p.a,{className:"mr-auto",navbar:!0},o.a.createElement(f.a,null,o.a.createElement(c.b,{to:"/covid/perstate",className:"nav-link"},"Per State Data")),o.a.createElement(f.a,null,o.a.createElement(m.a,{to:"/covid/about"},"About"))),o.a.createElement(v.a,null,"Information"))),o.a.createElement(s.a,{path:"/covid/perstate",component:w}),o.a.createElement(s.a,{path:"/covid/about",component:C}),o.a.createElement(s.a,{path:"/covid/",component:P}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(248);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,r){}},[[108,1,2]]]);
//# sourceMappingURL=main.8f0a4539.chunk.js.map