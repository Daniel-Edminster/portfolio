(this["webpackJsonpdanieledminster.com"]=this["webpackJsonpdanieledminster.com"]||[]).push([[0],{105:function(e,a,t){},107:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){e.exports=t.p+"static/media/PortfolioCard.5ffa487a.png"},111:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(23),c=t.n(r),i=(t(66),t(5)),o=t(6),m=t(8),s=t(7),d=(t(67),t(68),t(19)),u=(t(69),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={active:!1},e}return Object(o.a)(t,[{key:"render",value:function(){return"local"===this.props.destination?l.a.createElement(d.b,{to:this.props.route},l.a.createElement("div",{className:"Navbar__Menu__Link"},l.a.createElement("div",{className:"NavItem__Text"},this.props.text),this.props.icon)):l.a.createElement("a",{target:"_blank",href:this.props.route},l.a.createElement("div",{className:"Navbar__Menu__Link"},l.a.createElement("div",{className:"NavItem__Text"},this.props.text),this.props.icon))}}]),t}(n.Component)),E=(t(74),t(41)),g=t.n(E),h=t(42),b=t.n(h),p=t(43),f=t.n(p),v=t(45),N=t.n(v),k=t(46),_=t.n(k),j=t(47),D=t.n(j),A=t(48),w=t.n(A),y=t(44),P=t.n(y),M=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).setActiveNavItem=function(){},e.state={},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Navbar"},l.a.createElement("img",{className:"Navbar__Logo__img",src:g.a,alt:"Logo."}),l.a.createElement("div",{className:"Navbar__Menu"},l.a.createElement(u,{icon:l.a.createElement(b.a,null),text:"HOME",route:"/",destination:"local"}),l.a.createElement(u,{icon:l.a.createElement(f.a,null),text:"ABOUT",route:"/about",destination:"local"}),l.a.createElement(u,{icon:l.a.createElement(P.a,null),text:"SKILLS",route:"/skills",destination:"local"}),l.a.createElement(u,{icon:l.a.createElement(N.a,null),text:"PROJECTS",route:"/portfolio",destination:"local"}),l.a.createElement(u,{icon:l.a.createElement(_.a,null),text:"CONTACT",route:"/contact",destination:"local"})),l.a.createElement("div",{className:"Navbar__Media"},l.a.createElement(u,{icon:l.a.createElement(D.a,null),text:"LinkedIn",route:"https://www.linkedin.com/in/daniel-edminster/"}),l.a.createElement(u,{icon:l.a.createElement(w.a,null),text:"GitHub",route:"https://github.com/daniel-edminster"})))}}]),t}(n.Component),I=t(14),O=(t(76),t(21),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,null,l.a.createElement("title",null,"Home | Daniel Edminster")),l.a.createElement("div",{className:"bg"}),l.a.createElement("div",{className:"bg2"}),l.a.createElement("div",{className:"bg3"}),l.a.createElement("main",{className:"Home"},l.a.createElement("div",{className:"tags"},"<home>"),l.a.createElement("div",null,l.a.createElement("div",{className:"tags-header"},"<introduction>"),l.a.createElement("h1",{className:"animate__animated animate__backInDown"},"Hi, ",l.a.createElement("br",null),"I'm Daniel,",l.a.createElement("br",null)," a Full-Stack Developer."),l.a.createElement("div",{className:"tags-header"},"</introduction>")),l.a.createElement("div",{className:"Home__Footer"},l.a.createElement("div",{className:"tags"},"</home>"),l.a.createElement("p",{className:"Home__Footer__Build"},"Build: ","9/14/2020, 1:12:35 PM","."))))}),S=(t(77),t(78),n.Component,t(79),function(e){return l.a.createElement("button",{className:"CustomButton"},e.text)}),B=(t(112),t(51)),G=t.n(B),R=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).toggleInfo=function(a){a.preventDefault(),console.log("toggled"),e.setState({show:!e.state.show})},e.setName=function(a){var t=a.target.value;e.setState({formName:t})},e.setSubject=function(a){var t=a.target.value;e.setState({formSubject:t})},e.setEmail=function(a){var t=a.target.value;e.setState({formEmail:t})},e.setMessage=function(a){var t=a.target.value;e.setState({formMessage:t})},e.submitHandler=function(a){console.log(e.state),alert("submithandler"),a.preventDefault(),a.stopPropagation();var t=[];if(""===e.state.formName&&t.push("You must provide your name."),""===e.state.formEmail&&t.push("You must provide your email."),""===e.state.formSubject&&t.push("You must provide a subject"),""===e.state.formMessage&&t.push("You must provide a message."),t.length>0)console.log(t);else{console.log("No errors, submitting..");var n=new FormData;n.set("name",e.state.formName),n.set("email",e.state.formEmail),n.set("subject",e.state.formSubject),n.set("message",e.state.formMessage),G()({method:"POST",url:"email-parser.php",data:n,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),e.setState({submitted:!0})}},e.state={submitted:!1,formName:"",formSubject:"",formEmail:"",formMessage:"",show:!1},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,null,l.a.createElement("title",null,"Contact | Daniel Edminster")),l.a.createElement("div",{className:"bg-contact"}),l.a.createElement("div",{className:"Contact"},l.a.createElement("div",{className:"tags"},"<contact>"),l.a.createElement("div",null,l.a.createElement("div",{className:"tags-header"},"<h1>"),l.a.createElement("h1",{className:"animate__animated animate__backInDown"},"Contact me"),l.a.createElement("div",{className:"tags-header"},"</h1>"),l.a.createElement("div",{className:"tags-header"},"<info>"),l.a.createElement("div",{className:"Contact__Form animate__animated animate__backInLeft"},l.a.createElement("p",null,"Interested in working with me? I am available for freelance work or full-time hire. I would love to hear more about your companies or current projects you are working on. Please feel free to contact me:"),l.a.createElement("a",{className:"showMe",onClick:this.toggleInfo},"Show Contact info"),!0===this.state.show?l.a.createElement("p",null,"E: ","daniel.edminster@outlook.com"," ",l.a.createElement("br",null),"P: ","(202) 251-5035"," "):""),l.a.createElement("div",{className:"tags-header"},"</info>")),l.a.createElement("div",{className:"tags"},"</contact>")))}}]),t}(n.Component),x=t(12),W=(t(105),t(106),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,null,l.a.createElement("title",null,"Skills | Daniel Edminster")),l.a.createElement("div",{className:"bg-skills"}),l.a.createElement("div",{className:"Skills"},l.a.createElement("div",{className:"tags"},"<skills>"),l.a.createElement("div",{className:"mid"},l.a.createElement("div",{className:"tags-header"},"<h1>"),l.a.createElement("h1",{className:"animate__animated animate__backInDown"},"My Skills"),l.a.createElement("div",{className:"tags-header"},"</h1>"),l.a.createElement("div",{className:"tags-header"},"<categories>"),l.a.createElement("div",{className:"Skills__Flex"},l.a.createElement("div",{className:"Skills__Front-End animate__animated animate__backInLeft"},l.a.createElement("h2",null,"Front-End"),l.a.createElement("h4",null,"HTML"),l.a.createElement(x.ProgressBar,{percent:95,filledBackground:"linear-gradient(to right, #2dabf9, #0688fa)",unfilledBackground:"rgba(0,0,0,0)"}),l.a.createElement("h4",null,"CSS"),l.a.createElement(x.ProgressBar,{percent:90,filledBackground:"linear-gradient(to right, #2dabf9, #0688fa)",unfilledBackground:"rgba(0,0,0,0)"}),l.a.createElement("h4",null,"JavaScript/ES6"),l.a.createElement(x.ProgressBar,{percent:80,filledBackground:"linear-gradient(to right, #2dabf9, #0688fa)",unfilledBackground:"rgba(0,0,0,0)"}),l.a.createElement("h4",null,"React.js"),l.a.createElement(x.ProgressBar,{percent:85,filledBackground:"linear-gradient(to right, #2dabf9, #0688fa)",unfilledBackground:"rgba(0,0,0,0)"})),l.a.createElement("div",{className:"Skills__Back-End animate__animated animate__backInLeft"},l.a.createElement("h2",null,"Back-End"),l.a.createElement("h4",null,"PHP"),l.a.createElement(x.ProgressBar,{percent:95,filledBackground:"linear-gradient(to right, #ff3019 ,#cf0404)",unfilledBackground:"rgba(0,0,0,0)"}),l.a.createElement("h4",null,"Node.js"),l.a.createElement(x.ProgressBar,{percent:80,filledBackground:"linear-gradient(to right, #ff3019 ,#cf0404)",unfilledBackground:"rgba(0,0,0,0)"}),l.a.createElement("h4",null,"Express.js"),l.a.createElement(x.ProgressBar,{percent:70,filledBackground:"linear-gradient(to right, #ff3019 ,#cf0404)",unfilledBackground:"rgba(0,0,0,0)"}),l.a.createElement("h4",null,"Apache 2"),l.a.createElement(x.ProgressBar,{percent:75,filledBackground:"linear-gradient(to right, #ff3019 ,#cf0404)",unfilledBackground:"rgba(0,0,0,0)"})),l.a.createElement("div",{className:"Skills__DB animate__animated animate__backInLeft"},l.a.createElement("h2",null,"Databases"),l.a.createElement("h4",null,"MySQL"),l.a.createElement(x.ProgressBar,{percent:95,filledBackground:"linear-gradient(to right, #299a0b,#299a0b)",unfilledBackground:"rgba(0,0,0,0)"}),l.a.createElement("h4",null,"MongoDB"),l.a.createElement(x.ProgressBar,{percent:70,filledBackground:"linear-gradient(to right, #299a0b,#299a0b)",unfilledBackground:"rgba(0,0,0,0)"}),l.a.createElement("h4",null,"PostgreSQL"),l.a.createElement(x.ProgressBar,{percent:75,filledBackground:"linear-gradient(to right, #299a0b,#299a0b)",unfilledBackground:"rgba(0,0,0,0)"}))),l.a.createElement("div",{className:"tags-header"},"</categories>")),l.a.createElement("div",{className:"tags"},"</skills>")))}),C=(t(107),t(52)),L=t.n(C),Z=t(53),Y=t.n(Z),H=t(54),T=t.n(H),F=t(55),z=t.n(F),J=t(56),V=t.n(J),X=t(57),Q=t.n(X),U=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,null,l.a.createElement("title",null,"Portfolio | Daniel Edminster")),l.a.createElement("div",{className:"bg-portfolio"}),l.a.createElement("div",{className:"Portfolio"},l.a.createElement("div",{className:"tags"},"<portfolio>"),l.a.createElement("div",{className:"mid"},l.a.createElement("div",{className:"tags-header"},"<h1>"),l.a.createElement("h1",{className:"animate__animated animate__backInDown"},"My Portfolio"),l.a.createElement("div",{className:"tags-header"},"</h1>"),l.a.createElement("div",{className:"tags-header"},"<projects>"),l.a.createElement("div",{className:"Portfolio__Flex animate__animated animate__backInLeft"},l.a.createElement("div",{className:"Portfolio__Project"},l.a.createElement("img",{className:"Portfolio__Project__img",src:Y.a}),l.a.createElement("h3",null,"Game of Bands"),l.a.createElement("p",{className:"Portfolio__Project__Description"},"The Game of Bands website is a full CRUD application secured with Reddit single sign on, built with MongoDB, Express.js, React.js, and Node.js"),l.a.createElement("h5",null,"Availability: ",l.a.createElement("a",{href:"https://gameofbands.danieledminster.com",className:"PortDemo"},"Demo")," | ",l.a.createElement("a",{href:"https://github.com/daniel-edminster/Game-of-Bands-FrontEnd",className:"PortDemo"},"GitHub (Front-End)")," | ",l.a.createElement("a",{href:"https://github.com/daniel-edminster/Game-of-Bands-Express",className:"PortDemo"},"GitHub (Back-End)"))),l.a.createElement("div",{className:"Portfolio__Project"},l.a.createElement("img",{className:"Portfolio__Project__img",src:T.a}),l.a.createElement("h3",null,"Top Notch Co."),l.a.createElement("p",{className:"Portfolio__Project__Description"},"The Top Notch Co. CRUD application was built to support a client's game controller fabrication business. Features an interactive order form, protected admin panel, and business metrics. Built with Linux, Apache, MySQL, and PHP."),l.a.createElement("h5",null,"Availability: Closed source")),l.a.createElement("div",{className:"Portfolio__Project"},l.a.createElement("img",{className:"Portfolio__Project__img",src:L.a}),l.a.createElement("h3",null,"EnDever"),l.a.createElement("p",{className:"Portfolio__Project__Description"},"I built a React front-end to EnDever, a tinder-like application for connecting with other developers. Also made contributions to the Github Single Sign on feature."),l.a.createElement("h5",null,"Availability: ",l.a.createElement("a",{href:"https://agitated-panini-b410aa.netlify.app/",className:"PortDemo"},"Demo")," | ",l.a.createElement("a",{href:"https://github.com/digitalfences/EnDeverFrontEnd",className:"PortDemo"},"GitHub"))),l.a.createElement("div",{className:"Portfolio__Project"},l.a.createElement("img",{className:"Portfolio__Project__img",src:Q.a}),l.a.createElement("h3",null,"React Component Library"),l.a.createElement("p",{className:"Portfolio__Project__Description"},"I built out a variety of reusable stateful and functional components using React.js from an Adobe XD documents and made them all accessible through a storybook library."),l.a.createElement("h5",null,"Availability: ",l.a.createElement("a",{href:"https://danieledminster.com/react-library",className:"PortDemo"},"Demo")," | ",l.a.createElement("a",{href:"https://github.com/Daniel-Edminster/React-Component-Library",className:"PortDemo"},"GitHub"))),l.a.createElement("div",{className:"Portfolio__Project"},l.a.createElement("img",{className:"Portfolio__Project__img",src:V.a}),l.a.createElement("h3",null,"PokeDex"),l.a.createElement("p",{className:"Portfolio__Project__Description"},"The PokeDex project was built to both test my knowledge of vanilla JavaScript and CSS as well as portray my love for Pokemon. Features PokeDex Data from PokeApi and a custom PokeDex modal heavily inspired by the Pokemon series. Built with HTML5/CSS3/JavaScript."),l.a.createElement("h5",null,"Availability: ",l.a.createElement("a",{href:"https://daniel-edminster.github.io/ga-ui-pattern/",className:"PortDemo"},"Demo")," | ",l.a.createElement("a",{href:"https://github.com/daniel-edminster/ga-ui-pattern",className:"PortDemo"},"GitHub"))),l.a.createElement("div",{className:"Portfolio__Project"},l.a.createElement("img",{className:"Portfolio__Project__img",src:z.a}),l.a.createElement("h3",null,"Unsplash Mockup"),l.a.createElement("p",{className:"Portfolio__Project__Description"},"I completed the Unsplash Mockup project during my time at General Assembly. We were tasked with taking an Adobe XD file and turning it into functional HTML and CSS, as well as making it fully responsive whether a responsive mockup existed or not."),l.a.createElement("h5",null,"Availability: ",l.a.createElement("a",{href:"https://daniel-edminster.github.io/ga-responsive-website/",className:"PortDemo"},"Demo")," |  ",l.a.createElement("a",{href:"https://gtihub.com/daniel-edminster/ga-responsive-website/",className:"PortDemo"},"GitHub")))),l.a.createElement("div",{className:"tags-header"},"</projects>")),l.a.createElement("div",{className:"tags"},"</portfolio>")))}}]),t}(n.Component),K=(t(108),t(58)),q=t.n(K),$=t(59),ee=t.n($),ae=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={expanded:!1},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,null,l.a.createElement("title",null,"About | Daniel Edminster")),l.a.createElement("div",{className:"bg-about"}),l.a.createElement("div",{className:"About"},l.a.createElement("div",{className:"header-group"},l.a.createElement("div",{className:"tags"},"<about>"),l.a.createElement("div",{className:"tags-header"},"<h1>"),l.a.createElement("h1",{className:"animate__animated animate__backInDown"},"About Me"),l.a.createElement("div",{className:"tags-header"},"</h1>"),l.a.createElement("div",{className:"mid"},l.a.createElement("div",{className:"tags-header"},"<flavor-text>"),l.a.createElement("div",{className:"About__Description"},l.a.createElement("img",{src:q.a,className:"animate__animated animate__fadeIn animate__delay-1s About__Headshot"}),l.a.createElement("p",{className:"animate__animated animate__flipInX animate__delay-2s"}," I am a Washington, D.C. based Full Stack Developer ready to take on new, complex challenges. Diligent problem-solver and unapologetic techie with an insatiable desire and motivation to learn.")),l.a.createElement("div",{className:"tags-header"},"</flavor-text>"),l.a.createElement("div",{className:"tags-header"},"<links>"),l.a.createElement("div",{className:"About__Description"},l.a.createElement("a",{href:ee.a},l.a.createElement(S,{text:"Resume"})),l.a.createElement(d.b,{to:"/portfolio"},l.a.createElement(S,{text:"Portfolio"})),l.a.createElement(d.b,{to:"/contact"},l.a.createElement(S,{text:"Contact"}))),l.a.createElement("div",{className:"tags-header"},"</links>"))),l.a.createElement("div",{className:"tags"},"</about>")))}}]),t}(n.Component),te=t(3),ne=t(26),le=(t(109),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).initializeAnalytics=function(e){ne.a.initialize(e),ne.a.pageview(window.location.pathname+window.location.search)},e.state={},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.initializeAnalytics("UA-31888622-1")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(M,null),l.a.createElement(te.c,null,l.a.createElement(te.a,{exact:!0,path:"/",component:O}),l.a.createElement(te.a,{exact:!0,path:"/about",component:ae}),l.a.createElement(te.a,{exact:!0,path:"/contact",render:function(a){return l.a.createElement(R,Object.assign({},a,e.state))}}),l.a.createElement(te.a,{exact:!0,path:"/skills",component:W}),l.a.createElement(te.a,{exact:!0,path:"/portfolio",component:U}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,a,t){},41:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGYWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA1LTIzVDIyOjEyOjEwLTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA1LTIzVDIyOjEyOjEwLTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNS0yM1QyMjoxMjoxMC0wNDowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2OGMwZjllMy1iZmM1LTg2NDctODIxYS02N2JiNGMzNjc0OTgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjNjY5MTk5MC1kYTA2LTgzNGYtYjI1ZC1kMWVjYTFjMTM1MTciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZWYyNzIwYi1kODRjLWYyNDctOTE3Yy1iYjc3ODhhMTYzMTUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZWYyNzIwYi1kODRjLWYyNDctOTE3Yy1iYjc3ODhhMTYzMTUiIHN0RXZ0OndoZW49IjIwMjAtMDUtMjNUMjI6MTI6MTAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjhjMGY5ZTMtYmZjNS04NjQ3LTgyMWEtNjdiYjRjMzY3NDk4IiBzdEV2dDp3aGVuPSIyMDIwLTA1LTIzVDIyOjEyOjEwLTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPnhtcC5kaWQ6ODc3ODM3MDEtZjc1YS1kZjQ3LWEzM2ItOTM2MGE4ZDNkMWQ5PC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+44dzQAAABYxJREFUaN7tmllMXFUYxw9NqRVEMCkYqI1JfamtSqJJo0kbH3xorGn0wT6YmDTaqsSlgpYHrYa6tKZKiVHbuESbKDWC1uWpoSkwwyagHcDIUqDUMMq+zPfNUJbSOf7PvYcZmM7AgEm5g/fhF5Z7Obm/Od/5zvedi5BSiv8Twha2hW1hW9gWtoVt4dgTjnNyGtgCHgK7wV7wCngL5IOPwHHwCfgAvA72gcfAvSAVrAViKSyH8G9gEFwBcpGMgvPgFNgP7gcJVhdeimgkfMCh5VOsKjwW8tAXQREoAG+CAyAb5Ohwfl9fV5HhBtMR5FvAkyDO6sL7FxGSG/S6V+u7O4L4CZBsZeHsJSagO8ARwGGkfwZJVhXOWWrG1WwHXWGkvwY3xIywcIBy/XXm+xBm3Z+pc8Hsca+Cp2NCWMmkV7HY8yeLS6MkzvWQ2FzLYnOdyV31LDbiZ1Fqfhj67x4FUyFjt+p927rCSjYTMp3DJOQYiXEmMQGueINIH4lefBAH2likVc+Z7Z/ChPYTgbHLLCi8CrN28AIe7DIJD5GgMKjf+/AhqHvq+kncXKln28k7wwgXCb1EvusmawkboVzDxqwSLYwSV1FQ0Util8sQvjXOwT0h47dhZuMz681xrSWMWSi4SGLKG53wjPRlJTJO4uMuioNcyezx8XPfA/Wc3OvB0vBaULhr2FyzWigRPA6ywDPzgb/ZN8aUdU8duRAppqyDZbyDx375m95A+O8dJdpkOeE/BucI3wbagVwIH0BkyN1NpGY1IJxSybJliCSSnUQ0ZFldOAM0RSXMpvAO11zh1CqWl4ZJYv2q+56LReEu8Dn4cjaTXvqidYgKN9YwK1FDGKGdXs0ebHFfYf2exH3bY1H4VGjimtRb1E4Xr4dkYHxjDTu55Mw/ZjYfJQsmrSiEi2ey86TXFGlHostpM/biF6/Zh8v41adQsTHu5VgWHveaRcfhdhLC3MMT8NUVMrbqpLaoouRHt1mhWU64czg6YT9mNk/JlhgFh9B99dWQsU+CVWrcTajB+0YtKPyt2wxTzzzCqmJC5hVrgiXpNjAQMu6Q6qKM2T9nNhv9HosJoywUa8APbjakwwljHRara9mtgaZhW7h+GB/eC+p6Aurs/A4SHcN6zVuuW4JwvCr0zZnOwEw3AVU0GHstSshvDl0wZk0d4+Tqk8ygKLYiXDtyO9rLQwj5rpFg1+WxSNJ6KVLz/72bUvGwDUg20gCFRVkfncmo4j24/ntAcka0jHu21nPWyy1syKmafCKkEbGCsDpsXw/SdbO+ToGHX3dnLW+t7qfW026WaBnlIw0s0yp5KlBYOLRoKcu7a1ke76LzAx7KQxQchdxsPgQPW0V4Wp8vj4B+0KcZgtDYagf748zZMykPSuKaIXqsk+WgBxEwRv4Jjlh+5i+XsD/ag3bh1JKlQdnECpb31bF8vpnkaTfJIVNUolMy1vk89XbBcgl/qo9Rz4Ia0KiadH0I95emE7PbcFMF/7rDxfxsM8u320kWdZNsHKDGEaIcrOlciOaiRs6FaC7Nz2vgweUSDmW1fjmWqM+SFQmqOtrVyCppudQMqqTlB6ibC9W51jSqJuboDwqWM2ktiMrSa4GzlzKwnQS2JR2yxSoDe3mFCKvtKLmCRVlvcB8OV1ouFUsJK9kkyDogi/BVe2nEWjrmhZXsjWpm+8yuxrNA8xDTwkr2FsiWm2E8+wFXnvDMzBqyvmsO31eW8JwE5Qv7pmFlCAv9nifJGUxQER4wnHBhTAkbnRBkD3eYZ1F+X+R3SBGEm8G74L1FopqIvOsvDNmjnWyE8OTCr1SiPpeOkvHrLvxOR8T1Go4NoC2mhdHVGK86o1xzKeCgPng/8R/5DByz//XQFraFbWFb2Ba2hW1hy/MvR1I9SyprA4kAAAAASUVORK5CYII="},52:function(e,a,t){e.exports=t.p+"static/media/endever.0f4050cb.gif"},53:function(e,a,t){e.exports=t.p+"static/media/gob.e4be3844.PNG"},54:function(e,a,t){e.exports=t.p+"static/media/tnc.73ff629a.PNG"},55:function(e,a,t){e.exports=t.p+"static/media/unsplash.314e918a.png"},56:function(e,a,t){e.exports=t.p+"static/media/dex.aa965982.png"},57:function(e,a,t){e.exports=t.p+"static/media/reactlibrary.39331f71.png"},58:function(e,a,t){e.exports=t.p+"static/media/1squared_small.f3c1ae79.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/Daniel_Edminster_CV_9_20.128ff1df.pdf"},61:function(e,a,t){e.exports=t(111)},66:function(e,a,t){},67:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},68:function(e,a,t){},69:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.588639f4.chunk.js.map