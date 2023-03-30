(function(){"use strict";var e={7254:function(e,t,o){var n=o(9242),l=o(3396),a=o(7718),i=o(3140);function s(e,t,o,n,s,r){const c=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(a.q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i.O,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c)])),_:1})])),_:1})}var r={name:"App",data:()=>({})},c=o(89);const u=(0,c.Z)(r,[["render",s]]);var m=u,d=o(2483),p=o(702),f=o(3369),g=o(3289);function h(e,t,o,n,i,s){const r=(0,l.up)("NavbarSection"),c=(0,l.up)("HeroSection"),u=(0,l.up)("IntroSection"),m=(0,l.up)("ServiceSection"),d=(0,l.up)("PortfolioSection"),h=(0,l.up)("AboutSection"),_=(0,l.up)("ContactSection"),w=(0,l.up)("FooterSection");return(0,l.wg)(),(0,l.j4)(a.q,{id:"home"},{default:(0,l.w5)((()=>[(0,l.Wm)(r),(0,l.Wm)(f.K,{fluid:""},{default:(0,l.w5)((()=>[(0,l.Wm)(c),(0,l.Wm)(u),(0,l.Wm)(m),(0,l.Wm)(d),(0,l.Wm)(h),(0,l.Wm)(_)])),_:1}),(0,l.Wm)(w),(0,l.Wm)(p.T,{id:"top-btn",class:"rounded-0 rounded-ts rounded-bs px-4",color:"black",onClick:t[0]||(t[0]=t=>e.scroll("home-nav"))},{default:(0,l.w5)((()=>[(0,l.Wm)(g.t,{left:"",class:"mb-1"},{default:(0,l.w5)((()=>[(0,l.Uk)("fa-solid fa-angle-up")])),_:1})])),_:1})])),_:1})}var _=o(7139),w=o(6439),v=o(9156),b=o(9234),y=o(4647),W=o(9457),k=o(2127),x=o(9657);const j=(0,l._)("span",{class:"main-logo-text"},[(0,l.Uk)("in"),(0,l._)("strong",null,"Designs"),(0,l._)("span",{class:"copyright-sign"},"©")],-1);function D(e,t,o,n,a,i){const s=(0,l.up)("v-list-item-group");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(w.L,{app:"",color:"black",dark:"",flat:"",class:"px-0 px-sm-4 px-lg-12",id:"home-nav"},{default:(0,l.w5)((()=>[(0,l.Wm)(p.T,{onClick:i.reloadPage,class:"text-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(g.t,{color:"#8d6e63",left:"",class:"mb-1"},{default:(0,l.w5)((()=>[(0,l.Uk)("fas fa-lightbulb")])),_:1}),j])),_:1},8,["onClick"]),(0,l.Wm)(b.C),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.items,(e=>((0,l.wg)(),(0,l.j4)(p.T,{key:e,text:"",onClick:t=>i.scroll(e),class:"mx-sm-n1 d-sm-block d-none"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,_.zw)(e),1)])),_:2},1032,["onClick"])))),128)),a.drawer?((0,l.wg)(),(0,l.j4)(p.T,{key:1,icon:"fas fa-close",onClick:t[1]||(t[1]=e=>i.menuToggle()),class:"d-flex d-sm-none mr-5"})):((0,l.wg)(),(0,l.j4)(v.g,{key:0,onClick:t[0]||(t[0]=e=>i.menuToggle()),class:"d-flex d-sm-none mr-5"}))])),_:1}),(0,l.Wm)(x.V,{modelValue:a.drawer,"onUpdate:modelValue":t[2]||(t[2]=e=>a.drawer=e),temporary:"",width:a.drawerWidth},{default:(0,l.w5)((()=>[(0,l.Wm)(y.i,{nav:"",dense:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.items,(e=>((0,l.wg)(),(0,l.j4)(W.l,{key:e},{default:(0,l.w5)((()=>[(0,l.Wm)(k.V,{text:"",onClick:t=>{i.menuToggle(),i.scroll(e)},class:"text-uppercase"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,_.zw)(e),1)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["modelValue","width"])],64)}var U={data(){return{drawer:null,drawerWidth:0,items:["services","portfolio","about","contact"]}},watch:{drawer:function(){this.drawer?(document.body.style.height="100vh",document.body.style.overflow="hidden"):(document.body.style.height="initial",document.body.style.overflow="scroll")}},methods:{scroll(e){const t=document.getElementById(e);t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},reloadPage(){window.location.reload()},menuToggle(){this.drawer=!this.drawer,this.drawerWidth=.6*screen.width,this.drawer?(document.body.style.height="100vh",document.body.style.overflow="hidden"):(document.body.style.height="initial",document.body.style.overflow="scroll")}}};const S=(0,c.Z)(U,[["render",D]]);var I=S,T=o(7436),C=o(1888),O=o(1666);const V=e=>((0,l.dD)("data-v-1a3036eb"),e=e(),(0,l.Cn)(),e),E={class:"logo-line"},q=V((()=>(0,l._)("strong",null,"Designs",-1))),P=V((()=>(0,l._)("span",{class:"copyright-sign"},"©",-1))),Z=V((()=>(0,l._)("hr",{width:"150px",class:"mx-auto my-2",color:"#e0e0e0"},null,-1))),A=V((()=>(0,l._)("strong",null,"|",-1)));function H(e,t,o,n,a,i){return(0,l.wg)(),(0,l.j4)(O.c,{class:"pa-0"},{default:(0,l.w5)((()=>[(0,l.Wm)(T._,{elevation:"0",rounded:"0",width:"100%",class:"bg-grey text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(C.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p.T,{class:"mx-4 icon-bot-pad",icon:"fa-brands fa-pinterest",variant:"plain",color:"white"}),(0,l.Wm)(p.T,{class:"mx-4 icon-bot-pad",icon:"fas fa-message",variant:"plain",color:"white"}),(0,l.Wm)(p.T,{class:"mx-4 icon-bot-pad",icon:"fab fa-facebook",variant:"plain",color:"white"}),(0,l.Wm)(p.T,{class:"mx-4 icon-bot-pad",icon:"fa-brands fa-instagram",variant:"plain",color:"white"})])),_:1}),(0,l.Wm)(C.Z,{class:"text-white",id:"footer-bottom"},{default:(0,l.w5)((()=>[(0,l._)("span",E,[(0,l.Uk)(" in"),q,P,(0,l.Uk)(" - "+(0,_.zw)((new Date).getFullYear()),1)]),Z,(0,l.Uk)(" Website by Brandon Winger-Air "),A,(0,l.Uk)(" All Rights Reserved ")])),_:1})])),_:1})])),_:1})}var L={};const M=(0,c.Z)(L,[["render",H],["__scopeId","data-v-1a3036eb"]]);var Y=M,N=o(6824),B=o(8521),R=o(8694);const z=e=>((0,l.dD)("data-v-6eae70ff"),e=e(),(0,l.Cn)(),e),F={class:"hero"},G={style:{position:"relative"},class:"mt-7 pt-0 mt-sm-16 pt-sm-4"},K=z((()=>(0,l._)("h1",{class:"text-grey"},"Interior",-1))),Q=z((()=>(0,l._)("h1",{class:"text-white mt-n2 mb-sm-1"},"Decoration",-1))),J=z((()=>(0,l._)("span",{class:"text-grey text-uppercase hero-desc"},"Room Design",-1))),X=z((()=>(0,l._)("br",null,null,-1))),$={class:"mb-4 d-none d-sm-block",style:{position:"absolute","z-index":"9999",bottom:"0","margin-left":"auto","margin-right":"auto",left:"0",right:"0","text-align":"center"}},ee={style:{position:"relative","z-index":"9999"},class:"mt-12 hero-img"};function te(e,t,o,n,a,i){return(0,l.wg)(),(0,l.iD)("div",F,[(0,l.Wm)(N.o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(B.D,{sm:"5",cols:"12",class:"hero-text"},{default:(0,l.w5)((()=>[(0,l._)("div",G,[K,Q,J,X,(0,l.Wm)(p.T,{tile:"",dark:"",color:"#8d6e63",class:"mt-sm-8 hero-btn",variant:"outlined",onClick:t[0]||(t[0]=e=>i.scroll("contact"))},{default:(0,l.w5)((()=>[(0,l.Uk)("Get A Quote")])),_:1})])])),_:1}),(0,l.Wm)(B.D,{sm:"2",cols:"12"},{default:(0,l.w5)((()=>[(0,l._)("div",$,[(0,l.Wm)(g.t,{onClick:t[1]||(t[1]=e=>i.scroll("services"))},{default:(0,l.w5)((()=>[(0,l.Uk)("fas fa-angle-double-down")])),_:1})])])),_:1}),(0,l.Wm)(B.D,{sm:"5",cols:"12"},{default:(0,l.w5)((()=>[(0,l._)("div",ee,[(0,l.Wm)(R.f,{src:"chair.png",contain:"","max-height":"285"})])])),_:1})])),_:1})])}var oe={methods:{scroll(e){const t=document.getElementById(e);t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}}};const ne=(0,c.Z)(oe,[["render",te],["__scopeId","data-v-6eae70ff"]]);var le=ne,ae=o(6353);const ie=e=>((0,l.dD)("data-v-48494336"),e=e(),(0,l.Cn)(),e),se={class:"circle-shape"},re=ie((()=>(0,l._)("h5",{class:"mt-md-16 text-uppercase"},"Designs",-1))),ce={style:{width:"120px","margin-left":"-8px"}},ue=ie((()=>(0,l._)("h4",{class:"mt-n4"},"INDOOR",-1))),me=ie((()=>(0,l._)("h4",null,"OUTDOOR",-1))),de=ie((()=>(0,l._)("p",{class:"text-grey mt-2"}," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe vitae esse nostrum impedit necessitatibus dolore, magnam ipsam id eos possimus ex nisi. Distinctio ipsam deserunt quas tempore, repudiandae aliquid corrupti. ",-1))),pe=ie((()=>(0,l._)("br",null,null,-1))),fe=ie((()=>(0,l._)("p",{class:"text-grey"}," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dignissimos possimus voluptates, beatae nobis blanditiis repellendus numquam, eum perferendis aliquid dolorum sint voluptatum doloremque fuga, voluptatem fugiat illum tenetur aut. ",-1)));function ge(e,t,o,n,a,i){return(0,l.wg)(),(0,l.j4)(B.D,{cols:"12",class:"mt-16"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(N.o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(B.D,{cols:"12",md:"6",order:"2","order-md":"1",class:"mt-8 mt-md-0"},{default:(0,l.w5)((()=>[(0,l._)("div",se,[(0,l.Wm)(R.f,{src:"plant.png","max-height":"400",class:"intro-icon-position"})])])),_:1}),(0,l.Wm)(B.D,{cols:"12",md:"6",order:"1","order-md":"2",class:"pr-12 pl-12 pl-md-0 mb-16 mb-md-0"},{default:(0,l.w5)((()=>[re,(0,l._)("div",ce,[(0,l.Wm)(ae.R,{modelValue:n.sliderIcon,"onUpdate:modelValue":t[0]||(t[0]=e=>n.sliderIcon=e),color:"#d7ccc8"},null,8,["modelValue"])]),ue,me,de,pe,fe,(0,l.Wm)(p.T,{tile:"",dark:"",color:"#d7ccc8",class:"mt-4",onClick:t[1]||(t[1]=e=>i.scroll("portfolio"))},{default:(0,l.w5)((()=>[(0,l.Uk)(" View Projects ")])),_:1})])),_:1})])),_:1})])])),_:1})}var he={setup(){return{sliderIcon:50}},methods:{scroll(e){const t=document.getElementById(e);t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}}};const _e=(0,c.Z)(he,[["render",ge],["__scopeId","data-v-48494336"]]);var we=_e,ve=o(4075);const be=e=>((0,l.dD)("data-v-33dec18e"),e=e(),(0,l.Cn)(),e),ye={class:"text-center mt-4"},We=be((()=>(0,l._)("h2",null,"What We Do",-1))),ke={style:{width:"120px",margin:"0 auto"}},xe={class:"block"},je=be((()=>(0,l._)("h3",{class:"ml-3 mt-4"},"Office Space",-1))),De=be((()=>(0,l._)("p",{class:"text-grey ml-3 mt-4 text-caption"},[(0,l.Uk)(" Lorem ipsum dolor sit amet "),(0,l._)("br"),(0,l.Uk)(" consectetur, adipisicing "),(0,l._)("br"),(0,l.Uk)(" elit. Modi. ")],-1))),Ue={class:"block"},Se=be((()=>(0,l._)("h3",{class:"ml-3 mt-4"},"Home Space",-1))),Ie=be((()=>(0,l._)("p",{class:"text-grey ml-3 mt-4 text-caption"},[(0,l.Uk)(" Lorem ipsum dolor sit amet "),(0,l._)("br"),(0,l.Uk)(" consectetur, adipisicing "),(0,l._)("br"),(0,l.Uk)(" elit. Modi. ")],-1))),Te={class:"block"},Ce=be((()=>(0,l._)("h3",{class:"ml-3 mt-4"},"Outdoor Space",-1))),Oe=be((()=>(0,l._)("p",{class:"text-grey ml-3 mt-4 text-caption"},[(0,l.Uk)(" Lorem ipsum dolor sit amet "),(0,l._)("br"),(0,l.Uk)(" consectetur, adipisicing "),(0,l._)("br"),(0,l.Uk)(" elit. Modi. ")],-1)));function Ve(e,t,o,n,a,i){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",ye,[We,(0,l._)("div",ke,[(0,l.Wm)(ae.R,{modelValue:n.sliderIcon,"onUpdate:modelValue":t[0]||(t[0]=e=>n.sliderIcon=e),color:"#d7ccc8"},null,8,["modelValue"])])]),(0,l.Wm)(B.D,{cols:"12",id:"services",class:"px-0"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(N.o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(B.D,{cols:"12"},{default:(0,l.w5)((()=>[(0,l._)("div",xe,[(0,l.Wm)(p.T,{icon:"fa-solid fa-chair",color:"#d7ccc8",class:"text-white pb-1 icon-ml"}),je,De]),(0,l._)("div",Ue,[(0,l.Wm)(p.T,{icon:"fas fa-house",color:"#d7ccc8",class:"text-white pb-1 pr-1 icon-ml"}),Se,Ie]),(0,l._)("div",Te,[(0,l.Wm)(p.T,{icon:"fa-solid fa-spa",color:"#d7ccc8",class:"text-white icon-ml icon-pad"}),Ce,Oe])])),_:1})])),_:1}),(0,l.Wm)(ve.J)])])),_:1})],64)}var Ee={setup(){return{sliderIcon:50}}};const qe=(0,c.Z)(Ee,[["render",Ve],["__scopeId","data-v-33dec18e"]]);var Pe=qe;const Ze={class:"d-flex justify-center mb-6 overflow-x-auto categories-mobile"};function Ae(e,t,o,n,a,i){const s=(0,l.up)("PortfolioGallery");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(B.D,{cols:"12",sm:"12",class:"px-4 px-sm-3"},{default:(0,l.w5)((()=>[(0,l._)("div",Ze,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.categories,(e=>((0,l.wg)(),(0,l.j4)(p.T,{key:e,color:a.category==e?"#d7ccc8":null,variant:a.category==e?"elevated":"tonal",class:"mr-2",onClick:t=>a.category=e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,_.zw)(e),1)])),_:2},1032,["color","variant","onClick"])))),128))])])),_:1}),(0,l.Wm)(s,{category:a.category},null,8,["category"])],64)}var He=o(7584),Le=o(6452);const Me={class:"d-flex justify-center mb-6"};function Ye(e,t,o,n,a,i){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(B.D,{cols:"12",class:"imgHover",id:"portfolio"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.renderCategory(),(e=>((0,l.wg)(),(0,l.j4)(N.o,{key:e,class:"fill-height",align:"center",justify:"center"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,(e=>((0,l.wg)(),(0,l.j4)(B.D,{key:e,cols:"12",md:"4"},{default:(0,l.w5)((()=>[(0,l.Wm)(He.V,null,{default:(0,l.w5)((({isHovering:t,props:o})=>[((0,l.wg)(),(0,l.j4)(T._,(0,l.dG)({key:e,elevation:t?12:2,class:{"on-hover":t}},o),{default:(0,l.w5)((()=>[(0,l.Wm)(R.f,{src:e.img,height:"225px",cover:"",onClick:t=>a.selectedImg=e.img},null,8,["src","onClick"])])),_:2},1040,["elevation","class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)))),128))])),_:1}),(0,l.Wm)(B.D,{cols:"12",sm:"12"},{default:(0,l.w5)((()=>[(0,l._)("div",Me,[(0,l.Wm)(p.T,{color:"#efebe9",class:"mt-4"},{default:(0,l.w5)((()=>[(0,l.Uk)("More Coming Soon")])),_:1})])])),_:1}),(0,l.Wm)(Le.yc,{modelValue:a.selectedImg,"onUpdate:modelValue":t[1]||(t[1]=e=>a.selectedImg=e),attach:"#portfolio",class:"d-flex justify-center align-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(R.f,{src:a.selectedImg?a.selectedImg:"","min-width":"750px","min-height":"750px","max-height":"750px",onClick:t[0]||(t[0]=e=>a.selectedImg=null)},null,8,["src"])])),_:1},8,["modelValue"])],64)}var Ne=JSON.parse('{"homes":[{"img":"room-1.jpg"},{"img":"room-2.jpg"},{"img":"room-3.jpg"},{"img":"room-4.jpg"},{"img":"room-5.jpg"},{"img":"room-6.jpg"}],"offices":[{"img":"office-1.jpg"},{"img":"office-2.jpg"},{"img":"office-3.jpg"},{"img":"office-4.jpg"},{"img":"office-5.jpg"},{"img":"office-6.jpg"}],"bedrooms":[{"img":"bedroom-1.jpg"},{"img":"bedroom-2.jpg"},{"img":"bedroom-3.jpg"},{"img":"bedroom-4.jpg"},{"img":"bedroom-5.jpg"},{"img":"bedroom-6.jpg"}],"kitchens":[{"img":"kitchen-1.jpg"},{"img":"kitchen-2.jpg"},{"img":"kitchen-3.jpg"},{"img":"kitchen-4.jpg"},{"img":"kitchen-5.jpg"},{"img":"kitchen-6.jpg"}],"patios":[{"img":"patio-1.jpg"},{"img":"patio-2.jpg"},{"img":"patio-3.jpg"},{"img":"patio-4.jpg"},{"img":"patio-5.jpg"},{"img":"patio-6.jpg"}]}'),Be={data(){return{selectedImg:null}},props:{category:String},setup(){return{projects:Ne}},methods:{renderCategory(){return Object.assign({},{[this.category]:this.projects[this.category]})}}};const Re=(0,c.Z)(Be,[["render",Ye],["__scopeId","data-v-5628106b"]]);var ze=Re,Fe={components:{PortfolioGallery:ze},data(){return{category:"homes"}},setup(){return{categories:["homes","offices","bedrooms","kitchens","patios"]}}};const Ge=(0,c.Z)(Fe,[["render",Ae],["__scopeId","data-v-2ef19675"]]);var Ke=Ge,Qe=o(6572),Je=o(1332);const Xe={class:"about-container"};function $e(e,t,o,n,a,i){return(0,l.wg)(),(0,l.j4)(B.D,{cols:"12",id:"about",class:"px-0"},{default:(0,l.w5)((()=>[(0,l._)("div",Xe,[(0,l.Wm)(N.o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(B.D,{cols:"12",sm:"4"},{default:(0,l.w5)((()=>[(0,l.Wm)(T._,{class:"mx-auto","max-width":"344"},{default:(0,l.w5)((()=>[(0,l.Wm)(R.f,{src:"dining-room.jpg",height:"200px",cover:""}),(0,l.Wm)(Qe.E,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Modern")])),_:1}),(0,l.Wm)(Je.Q,{class:"text-uppercase"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Decorations ")])),_:1}),(0,l.Wm)(C.Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut pariatur? Aliquid omnis harum eius facilis asperiores? ")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(B.D,{cols:"12",sm:"4"},{default:(0,l.w5)((()=>[(0,l.Wm)(T._,{class:"mx-auto","max-width":"344"},{default:(0,l.w5)((()=>[(0,l.Wm)(R.f,{src:"business-office.jpg",height:"200px",cover:""}),(0,l.Wm)(Qe.E,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Professional")])),_:1}),(0,l.Wm)(Je.Q,{class:"text-uppercase"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Business Spaces ")])),_:1}),(0,l.Wm)(C.Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut pariatur? Aliquid omnis harum eius facilis asperiores? ")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(B.D,{cols:"12",sm:"4"},{default:(0,l.w5)((()=>[(0,l.Wm)(T._,{class:"mx-auto","max-width":"344"},{default:(0,l.w5)((()=>[(0,l.Wm)(R.f,{src:"holiday-decorations.jpg",height:"200px",cover:""}),(0,l.Wm)(Qe.E,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Traditional")])),_:1}),(0,l.Wm)(Je.Q,{class:"text-uppercase"},{default:(0,l.w5)((()=>[(0,l.Uk)(" DESIGN PRACTICE ")])),_:1}),(0,l.Wm)(C.Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut pariatur? Aliquid omnis harum eius facilis asperiores? ")])),_:1})])),_:1})])),_:1})])),_:1})])])),_:1})}var et={};const tt=(0,c.Z)(et,[["render",$e],["__scopeId","data-v-5ce1b960"]]);var ot=tt,nt=o(165),lt=o(4842);const at=e=>((0,l.dD)("data-v-f238c478"),e=e(),(0,l.Cn)(),e),it={class:"hire-banner"},st=at((()=>(0,l._)("h1",{class:"mt-9"},"Hire us for your next redesign",-1))),rt=at((()=>(0,l._)("p",{class:"text-grey pr-4"}," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquid laudantium, atque cumque ad sapiente! Asperiores ullam harum eos illo? ",-1))),ct={class:"block"},ut=at((()=>(0,l._)("h1",null,"Based In",-1))),mt=at((()=>(0,l._)("hr",null,null,-1))),dt=at((()=>(0,l._)("br",null,null,-1))),pt=at((()=>(0,l._)("span",{class:"text-caption"},"Ontario, Canada",-1))),ft=at((()=>(0,l._)("br",null,null,-1))),gt=at((()=>(0,l._)("br",null,null,-1))),ht=at((()=>(0,l._)("span",{class:"text-caption"}," (888) 888-8888 ",-1))),_t=at((()=>(0,l._)("br",null,null,-1))),wt=at((()=>(0,l._)("br",null,null,-1))),vt=at((()=>(0,l._)("span",{class:"text-caption"}," indesigns.decor@gmail.com ",-1))),bt=at((()=>(0,l._)("h1",{class:"mt-8"},"Send your message",-1))),yt=at((()=>(0,l._)("span",{class:"text-caption"}," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur a laboriosam debitis repudiandae consequatur. Assumenda, molestiae pariatur eos quibusdam beatae, consequatur eius aliquam sequi eveniet natus quaerat accusamus aspernatur. ",-1)));function Wt(e,t,o,a,i,s){const r=(0,l.up)("divider");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(B.D,{cols:"12",class:"px-0"},{default:(0,l.w5)((()=>[(0,l._)("div",it,[(0,l.Wm)(N.o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(B.D,{cols:"12",md:"8",class:"pr-16"},{default:(0,l.w5)((()=>[st,rt])),_:1}),(0,l.Wm)(B.D,{cols:"12",md:"4",class:"position-relative"},{default:(0,l.w5)((()=>[(0,l.Wm)(p.T,{color:"#bcaaa4",class:"mt-12 hire-btn",onClick:t[0]||(t[0]=e=>s.scroll("footer-bottom"))},{default:(0,l.w5)((()=>[(0,l.Uk)(" Get Started ")])),_:1})])),_:1})])),_:1})])])),_:1}),(0,l.Wm)(B.D,{cols:"12",id:"contact",class:"px-16"},{default:(0,l.w5)((()=>[(0,l.Wm)(N.o,{class:"pl-lg-16"},{default:(0,l.w5)((()=>[(0,l.Wm)(B.D,{cols:"12",lg:"3",class:"pl-lg-16 text-center"},{default:(0,l.w5)((()=>[(0,l._)("div",ct,[ut,mt,(0,l.Wm)(p.T,{icon:"fas fa-map-marker-alt",class:"mt-8 mb-3 icon-btn-position",variant:"outlined"}),dt,pt,ft,(0,l.Wm)(p.T,{icon:"fas fa-phone-alt",class:"mt-8 mb-3 icon-btn-position",variant:"outlined"}),gt,ht,_t,(0,l.Wm)(p.T,{icon:"fas fa-envelope",class:"mt-8 mb-3 icon-btn-position",variant:"outlined"}),wt,vt])])),_:1}),(0,l.Wm)(B.D,{cols:"12",lg:"9",class:"contact-box"},{default:(0,l.w5)((()=>[bt,(0,l.Wm)(r),yt,(0,l._)("form",{onSubmit:t[4]||(t[4]=(0,n.iM)(((...e)=>s.sendEmail&&s.sendEmail(...e)),["prevent"]))},[(0,l.Wm)(N.o,{class:"mt-10"},{default:(0,l.w5)((()=>[(0,l.Wm)(B.D,{cols:"12",sm:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(nt.hw,{label:"Your Name",modelValue:i.name,"onUpdate:modelValue":t[1]||(t[1]=e=>i.name=e),name:"name","persistent-hint":"",variant:"outlined"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(B.D,{cols:"12",sm:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(nt.hw,{label:"Email Address",modelValue:i.email,"onUpdate:modelValue":t[2]||(t[2]=e=>i.email=e),name:"email","persistent-hint":"",variant:"outlined"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(lt.z,{label:"Message",modelValue:i.message,"onUpdate:modelValue":t[3]||(t[3]=e=>i.message=e),name:"message","persistant-hint":"",variant:"outlined"},null,8,["modelValue"]),(0,l.Wm)(p.T,{type:"submit",color:"#d7ccc8",class:"mt-2"},{default:(0,l.w5)((()=>[(0,l.Uk)("Submit")])),_:1})],32)])),_:1})])),_:1})])),_:1})],64)}var kt=o(4294),xt={data(){return{name:"",email:"",message:""}},methods:{scroll(e){const t=document.getElementById(e);t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},sendEmail(e){try{kt.ZP.sendForm("service_zpa2qg5","template_eg5bpmd",e.target,"WTyoY36g3JpgNFP0D",{name:this.name,email:this.email,message:this.message})}catch(t){console.log({error:t})}this.name="",this.email="",this.message=""}}};const jt=(0,c.Z)(xt,[["render",Wt],["__scopeId","data-v-f238c478"]]);var Dt=jt,Ut=(0,l.aZ)({name:"HomePage",components:{NavbarSection:I,HeroSection:le,IntroSection:we,ServiceSection:Pe,PortfolioSection:Ke,AboutSection:ot,ContactSection:Dt,FooterSection:Y},methods:{handleScroll(){const e=document.getElementById("top-btn");document.body.scrollTop>400||document.documentElement.scrollTop>400?(e.style.opacity="100%",e.style.cursor="pointer"):(e.style.opacity="0",e.style.cursor="initial")},scroll(e){const t=document.getElementById(e);t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}});const St=(0,c.Z)(Ut,[["render",h]]);var It=St;const Tt=[{path:"/",name:"home",component:It}],Ct=(0,d.p7)({history:(0,d.PO)("/interior-decor-vuetify-js/"),routes:Tt});var Ot=Ct,Vt=o(65),Et=(0,Vt.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),qt=o(596),Pt=(o(9773),o(8957)),Zt=(0,Pt.Rd)({icons:{defaultSet:"fa",aliases:qt.j,sets:{fa:qt.fa}}});async function At(){const e=await o.e(461).then(o.t.bind(o,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}At(),(0,n.ri)(m).use(Ot).use(Et).use(Zt).mount("#app")}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,l,a){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],a=e[u][2];for(var s=!0,r=0;r<n.length;r++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[r])}))?n.splice(r--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,l,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(n,l){if(1&l&&(n=this(n)),8&l)return n;if("object"===typeof n&&n){if(4&l&&n.__esModule)return n;if(16&l&&"function"===typeof n.then)return n}var a=Object.create(null);o.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&l&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return n[e]}}));return i["default"]=function(){return n},o.d(a,i),a}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/webfontloader.3917620d.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="interior-decor-vuetify-js:";o.l=function(n,l,a,i){if(e[n])e[n].push(l);else{var s,r;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==n||m.getAttribute("data-webpack")==t+a){s=m;break}}s||(r=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[l];var d=function(t,o){s.onerror=s.onload=null,clearTimeout(p);var l=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),l&&l.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),r&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/interior-decor-vuetify-js/"}(),function(){var e={143:0};o.f.j=function(t,n){var l=o.o(e,t)?e[t]:void 0;if(0!==l)if(l)n.push(l[2]);else{var a=new Promise((function(o,n){l=e[t]=[o,n]}));n.push(l[2]=a);var i=o.p+o.u(t),s=new Error,r=function(n){if(o.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,l[1](s)}};o.l(i,r,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,a,i=n[0],s=n[1],r=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(l in s)o.o(s,l)&&(o.m[l]=s[l]);if(r)var u=r(o)}for(t&&t(n);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self["webpackChunkinterior_decor_vuetify_js"]=self["webpackChunkinterior_decor_vuetify_js"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(7254)}));n=o.O(n)})();
//# sourceMappingURL=app.9509a82a.js.map