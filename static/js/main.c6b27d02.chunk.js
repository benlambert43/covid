(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{108:function(e,t,a){e.exports=a(249)},113:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(44),l=a.n(o),i=(a(113),a(6)),c=a(21),s=a(10),d=a(257),u=a(258),m=a(259),b=a(260),p=a(261),f=(a(25),a(250)),v=a(13),E=a.n(v),C=function(){return n.a.createElement("div",{style:{margin:"1%"}},n.a.createElement(E.a,null,n.a.createElement(f.a,null,n.a.createElement("h1",{className:"display-5"},"About"),n.a.createElement("p",{className:"lead"},"Open Source Project dedicated to graphing Covid-19"),n.a.createElement("hr",{className:"my-2"}),n.a.createElement("br",null),n.a.createElement("p",{className:"my-2"},"Open Source Repository:"," ",n.a.createElement("a",{href:"https://github.com/benlambert43/covid",target:"_blank",rel:"noopener noreferrer"},"https://github.com/benlambert43/covid")),n.a.createElement("p",{className:"my-2"},"API Provided by"," ",n.a.createElement("a",{href:"https://covidtracking.com/api",target:"_blank",rel:"noopener noreferrer"},"https://covidtracking.com/api")))))},h=a(37),g=a(104),y=a(251),O=a(262),B=a(263),H=a(252),S=a(27),k=a.n(S),j=a(45),R=a(35),D=a.n(R),N=a(20);var I=function(e){var t=Object(r.useState)({}),a=Object(i.a)(t,2),o=(a[0],a[1]),l=Object(r.useState)([]),c=Object(i.a)(l,2),s=c[0],d=c[1],u=Object(r.useState)([]),m=Object(i.a)(u,2),b=m[0],p=m[1],f=Object(r.useState)([]),v=Object(i.a)(f,2),C=(v[0],v[1]),h=Object(r.useState)([]),g=Object(i.a)(h,2),y=g[0],O=g[1],B=Object(r.useState)([]),H=Object(i.a)(B,2),S=H[0],R=H[1],I=Object(r.useState)([]),W=Object(i.a)(I,2),T=W[0],w=W[1],F=Object(r.useState)([]),A=Object(i.a)(F,2),P=A[0],x=A[1],J=Object(r.useState)([]),M=Object(i.a)(J,2),U=M[0],z=M[1];Object(r.useEffect)((function(){(function(){var t=Object(j.a)(k.a.mark((function t(){var a,r,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.toLowerCase(),t.next=3,D()("https://covidtracking.com/api/v1/states/".concat(a,"/current.json"));case 3:return r=t.sent,t.next=6,D()("https://covidtracking.com/api/v1/states/".concat(a,"/daily.json"));case 6:n=t.sent,o(r.data),d(n.data.map((function(e){return e.positive})).reverse()),R(n.data.map((function(e){return e.death})).reverse()),p(n.data.map((function(e){var t=e.date;return G(t)})).reverse()),O(n.data.map((function(e){return e.positiveIncrease})).reverse()),C(n.data.map((function(e){return{date:e.date,positive:e.positive,positiveIncrease:e.positiveIncrease}}))),w(n.data.map((function(e){return e.hospitalizedCurrently})).reverse()),x(n.data.map((function(e){return e.inIcuCurrently})).reverse()),z(n.data.map((function(e){return e.recovered})).reverse());case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var V={labels:b,datasets:[{label:"Total Positive Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:s},{label:"Total Deaths",fill:!1,lineTension:.1,backgroundColor:"#808080",borderColor:"#808080",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f5f5f5",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f5f5f5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:S},{label:"Recovered",fill:!1,lineTension:.1,backgroundColor:"green",borderColor:"green",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f5f5f5",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f5f5f5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:U}]},L={labels:b,datasets:[{label:"Daily Increase in Positive Cases",fill:!1,lineTension:.3,backgroundColor:"#EE4900",borderColor:"#EE4900",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#FFC436",pointBackgroundColor:"#FFC436",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#FFC436",pointHoverBorderColor:"#FFC436",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:y}]},K={labels:b,datasets:[{label:"Current Hospitalizations",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:T},{label:"Current ICU Patients",fill:!1,lineTension:.1,backgroundColor:"#808080",borderColor:"#808080",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f5f5f5",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f5f5f5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:P}]},G=function(e){var t=e.toString(),a=t.substring(0,4),r=t.substring(4,6),n=t.substring(6,8);return"".concat(r,"/").concat(n,"/").concat(a)};return n.a.createElement("div",{className:"App",style:{marginRight:"5%",marginLeft:"5%"}},n.a.createElement(E.a,{bottom:!0,cascade:!0},n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h3",null,"Positive Cases"),n.a.createElement(N.a,{data:V}),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",null,n.a.createElement("h3",null,"Daily Increase in Positive Cases"),n.a.createElement(N.a,{data:L}),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",null,n.a.createElement("h3",null,"Current Health Care Statistics"),n.a.createElement(N.a,{data:K}),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("br",null)))))},W=function(e){return console.log(e),n.a.createElement("div",{style:{margin:"1%"}},n.a.createElement(E.a,null,n.a.createElement("div",{className:"App",style:{marginTop:"5%",marginRight:"5%",marginLeft:"5%"}},n.a.createElement("h1",null,"Data By State: ",n.a.createElement("b",null,e.state))),n.a.createElement("div",{style:{marginTop:"5%"}},n.a.createElement(I,{state:e.state}))))},T=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(r.useState)(""),c=Object(i.a)(l,2),s=c[0],d=c[1],u=Object(r.useState)(!1),m=Object(i.a)(u,2),b=m[0],p=m[1];return n.a.createElement("div",{style:{margin:"1%"}},n.a.createElement(E.a,null,n.a.createElement(f.a,null,n.a.createElement("h1",{className:"display-5"},"Data By State"),n.a.createElement("p",{className:"lead"},"Select a US state for state-specific statistics."),n.a.createElement("hr",{className:"my-2"}),n.a.createElement("br",null),n.a.createElement("div",{style:{marginBottom:"1%"}},n.a.createElement(y.a,{isOpen:a,toggle:function(){return o((function(e){return!e}))},onClick:function(){return p(!1)}},n.a.createElement(O.a,{caret:!0},s||"Select State"),n.a.createElement(B.a,{modifiers:{setMaxHeight:{enabled:!0,fn:function(e){return Object(h.a)(Object(h.a)({},e),{},{styles:Object(h.a)(Object(h.a)({},e.styles),{},{overflow:"auto",maxHeight:"30rem"})})}}}},["AK","AL","AR","AZ","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"].map((function(e){return n.a.createElement(H.a,{onClick:function(){d(e),p(!1)},key:e},e)}))))),n.a.createElement("p",{className:"lead"},s?n.a.createElement(g.a,{color:"primary",onClick:function(){return p(!0)}},"Go"):n.a.createElement(g.a,{color:"primary",disabled:!0},"Go")))),s&&b?n.a.createElement("div",null,n.a.createElement(W,{state:s,go:b})):n.a.createElement("div",null))},w=a(253),F=a(254),A=a(255),P=a(256);var x=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(r.useState)([]),s=Object(i.a)(l,2),d=s[0],u=s[1],m=Object(r.useState)([]),b=Object(i.a)(m,2),p=(b[0],b[1]),v=Object(r.useState)([]),C=Object(i.a)(v,2),h=C[0],g=C[1],y=Object(r.useState)([]),O=Object(i.a)(y,2),B=O[0],H=O[1],S=Object(r.useState)([]),R=Object(i.a)(S,2),I=R[0],W=R[1],T=Object(r.useState)([]),x=Object(i.a)(T,2),J=x[0],M=x[1],U=Object(r.useState)([]),z=Object(i.a)(U,2),V=z[0],L=z[1],K=Object(r.useState)([]),G=Object(i.a)(K,2),Y=G[0],_=G[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()("https://covidtracking.com/api/v1/us/daily.json");case 2:t=e.sent,o(t.data.map((function(e){return e.positive})).reverse()),H(t.data.map((function(e){return e.death})).reverse()),u(t.data.map((function(e){var t=e.date;return q(t)})).reverse()),g(t.data.map((function(e){return e.positiveIncrease})).reverse()),p(t.data.map((function(e){return{date:e.date,positive:e.positive,positiveIncrease:e.positiveIncrease}}))),W(t.data.map((function(e){return e.hospitalizedCurrently})).reverse()),M(t.data.map((function(e){return e.inIcuCurrently})).reverse()),L(t.data.map((function(e){return e.recovered})).reverse()),_(t.data);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var X={labels:d,datasets:[{label:"Total Positive Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a},{label:"Total Deaths",fill:!1,lineTension:.1,backgroundColor:"#808080",borderColor:"#808080",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f5f5f5",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f5f5f5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:B},{label:"Recovered",fill:!1,lineTension:.1,backgroundColor:"green",borderColor:"green",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f5f5f5",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f5f5f5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:V}]},Z={labels:d,datasets:[{label:"Daily Increase in Positive Cases",fill:!1,lineTension:.1,backgroundColor:"#EE4900",borderColor:"#EE4900",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#FFC436",pointBackgroundColor:"#FFC436",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#FFC436",pointHoverBorderColor:"#FFC436",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:h}]},$={labels:d,datasets:[{label:"Current Hospitalizations",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:I},{label:"Current ICU Patients",fill:!1,lineTension:.1,backgroundColor:"#808080",borderColor:"#808080",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f5f5f5",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f5f5f5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:J}]},q=function(e){var t=e.toString(),a=t.substring(0,4),r=t.substring(4,6),n=t.substring(6,8);return"".concat(r,"/").concat(n,"/").concat(a)};return console.log(Y[0]),n.a.createElement("div",null,n.a.createElement(E.a,null,n.a.createElement(f.a,null,n.a.createElement("h1",{className:"display-5"},"Covid-19 US National Data Visualization"),n.a.createElement("p",{className:"lead"},"On this page you will find data pertaining to cases of COVID-19 across the US including visualizations for positive cases, daily increase in positive cases and trends in healthcare status",n.a.createElement("br",null)),n.a.createElement("hr",{className:"my-2"}),n.a.createElement("p",null,"Individual US state data is also available"),n.a.createElement("p",{className:"my-2"},n.a.createElement(c.b,{to:"/covid/perstate"}," Data by US State"))),n.a.createElement(w.a,null,n.a.createElement(F.a,null,n.a.createElement(A.a,null,"Current Total Number of Positive Cases"),n.a.createElement(P.a,null,n.a.createElement("b",null,Y[0]?Y[0].positive:n.a.createElement("b",null)),", an increase of"," ",Y[0]?Y[0].positiveIncrease:n.a.createElement("b",null)," more than yesterday.")),n.a.createElement(F.a,null,n.a.createElement(A.a,null,"Current Hospitalizations"),n.a.createElement(P.a,null,n.a.createElement("b",null,Y[0]?Y[0].hospitalizedCurrently:n.a.createElement("b",null)),","," ",Y[0]?function(){var e=Y[0].hospitalizedCurrently-Y[1].hospitalizedCurrently;return e>0?"an increase of ".concat(Math.abs(e)):e<0?"a decrease of ".concat(Math.abs(e)):" which did not change "}():n.a.createElement("b",null)," from yesterday.")),n.a.createElement(F.a,null,n.a.createElement(A.a,null,"Current Mortality Rate"),n.a.createElement(P.a,null,"Confirmed Positive Cases:"," ",n.a.createElement("b",null,Y[0]?Y[0].death/Y[0].positive:n.a.createElement("b",null)),n.a.createElement("br",null),"Total: ",n.a.createElement("b",null,Y[0]?Y[0].death/Y[0].total:n.a.createElement("b",null))))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement("br",null)),n.a.createElement("div",{className:"App",style:{marginRight:"5%",marginLeft:"5%"}},n.a.createElement(E.a,{bottom:!0,cascade:!0},n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h3",null,"Positive Cases"),n.a.createElement(N.a,{data:X}),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",null,n.a.createElement("h3",null,"Daily Increase in Positive Cases"),n.a.createElement(N.a,{data:Z}),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",null,n.a.createElement("h3",null,"Current Health Care Statistics"),n.a.createElement(N.a,{data:$}),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement("br",null))))))},J=function(){return n.a.createElement("div",{style:{margin:"1%"}},n.a.createElement(x,null))},M=function(){return n.a.createElement("div",{style:{margin:"1%"}},n.a.createElement(E.a,null,n.a.createElement(f.a,null,n.a.createElement("h1",{className:"display-5"},"Upcoming Features"),n.a.createElement("p",{className:"lead"},"Planned additions to the site."),n.a.createElement("hr",{className:"my-2"}),n.a.createElement("br",null),n.a.createElement("div",{className:"my-2"},n.a.createElement("ol",null,n.a.createElement("li",null,"Creating a matrix of COVID-19 related headlines for public policy, compared against the rate of increasing cases (for the current week as well as the next week), with the goal of estimating how certain public policies affect the spread of COVID-19"))))))};var U=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],o=t[1];return n.a.createElement(c.a,null,n.a.createElement("div",null,n.a.createElement(d.a,{color:"light",light:!0,expand:"md"},n.a.createElement(c.b,{to:"/",className:"navbar-brand"},"COVID-19 US Data"),n.a.createElement(u.a,{onClick:function(){return o(!a)}}),n.a.createElement(m.a,{isOpen:a,navbar:!0},n.a.createElement(b.a,{className:"mr-auto",navbar:!0},n.a.createElement(p.a,null,n.a.createElement(c.b,{to:"/covid/perstate",className:"nav-link"},"Per State Data")),n.a.createElement(p.a,null,n.a.createElement(c.b,{to:"/covid/about",className:"nav-link"},"About")),n.a.createElement(p.a,null," ",n.a.createElement(c.b,{to:"/covid/upcoming",className:"nav-link"},"Upcoming Features"))))),n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/covid/perstate",exact:!0,component:T}),n.a.createElement(s.a,{path:"/covid/about",exact:!0,component:C}),n.a.createElement(s.a,{path:"/covid/upcoming",exact:!0,component:M}),n.a.createElement(s.a,{path:"/",exact:!0,component:J}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(248);l.a.render(n.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.c6b27d02.chunk.js.map