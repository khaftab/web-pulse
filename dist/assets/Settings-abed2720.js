import{_ as k,u as b,r as f,o as s,c as o,a as i,w as d,b as _,t as a,d as u,e as S,v as w,f as n,F as P,g as M,h as $,i as D,T as x,j as E}from"./index-bcf15748.js";const C={data(){return{show:!0,settings:{},settingsLoaded:!1}},computed:{currentPage(){let t=b().path.split("/"),e=t[t.length-1];return!e||e==="settings"?null:e},showSubMenu(){return this.$root.isMobile?!this.currentPage:!0},subMenus(){return{general:{title:this.$t("General")},appearance:{title:this.$t("Appearance")},notifications:{title:this.$t("Notifications")},"reverse-proxy":{title:this.$t("Reverse Proxy")},tags:{title:this.$t("Tags")},"monitor-history":{title:this.$t("Monitor History")},"docker-hosts":{title:this.$t("Docker Hosts")},security:{title:this.$t("Security")},"api-keys":{title:this.$t("API Keys")},proxies:{title:this.$t("Proxies")},backup:{title:this.$t("Backup")},about:{title:this.$t("About")}}}},watch:{"$root.isMobile"(){this.loadGeneralPage()}},mounted(){this.loadSettings(),this.loadGeneralPage()},methods:{loadGeneralPage(){!this.currentPage&&!this.$root.isMobile&&this.$router.push("/settings/general")},loadSettings(){this.$root.getSocket().emit("getSettings",t=>{this.settings=t.data,this.settings.checkUpdate===void 0&&(this.settings.checkUpdate=!0),this.settings.searchEngineIndex===void 0&&(this.settings.searchEngineIndex=!1),this.settings.entryPage===void 0&&(this.settings.entryPage="dashboard"),this.settings.nscd===void 0&&(this.settings.nscd=!0),this.settings.dnsCache===void 0&&(this.settings.dnsCache=!1),this.settings.keepDataPeriodDays===void 0&&(this.settings.keepDataPeriodDays=180),this.settings.tlsExpiryNotifyDays===void 0&&(this.settings.tlsExpiryNotifyDays=[7,14,21]),this.settings.trustProxy===void 0&&(this.settings.trustProxy=!1),this.settingsLoaded=!0})},saveSettings(t,e){let c=this.validateSettings();c.success?this.$root.getSocket().emit("setSettings",this.settings,e,m=>{this.$root.toastRes(m),this.loadSettings(),t&&t()}):this.$root.toastError(c.msg)},validateSettings(){return this.settings.keepDataPeriodDays<0?{success:!1,msg:this.$t("dataRetentionTimeError")}:{success:!0,msg:""}}}},N={key:0,class:"shadow-box mb-3"},B={class:"shadow-box shadow-box-settings"},I={class:"row"},L={key:0,class:"settings-menu col-lg-3 col-md-5"},T={class:"menu-item"},G={class:"menu-item"},R={class:"settings-content col-lg-9 col-md-7"},V={key:0,class:"settings-content-header"},A={class:"mx-3"};function F(t,e,c,m,v,r){const h=f("font-awesome-icon"),g=f("router-link"),y=f("router-view");return s(),o("div",null,[t.$root.isMobile?(s(),o("div",N,[i(g,{to:"/manage-status-page",class:"nav-link"},{default:d(()=>[i(h,{icon:"stream"}),_(" "+a(t.$t("Status Pages")),1)]),_:1}),i(g,{to:"/maintenance",class:"nav-link"},{default:d(()=>[i(h,{icon:"wrench"}),_(" "+a(t.$t("Maintenance")),1)]),_:1})])):u("",!0),S(n("h1",{class:"mb-3"},a(t.$t("Settings")),513),[[w,v.show]]),n("div",B,[n("div",I,[r.showSubMenu?(s(),o("div",L,[(s(!0),o(P,null,M(r.subMenus,(l,p)=>(s(),$(g,{key:p,to:"/settings/".concat(p)},{default:d(()=>[n("div",T,a(l.title),1)]),_:2},1032,["to"]))),128)),t.$root.isMobile&&t.$root.loggedIn&&t.$root.socket.token!=="autoLogin"?(s(),o("a",{key:0,class:"logout",onClick:e[0]||(e[0]=D((...l)=>t.$root.logout&&t.$root.logout(...l),["prevent"]))},[n("div",G,[i(h,{icon:"sign-out-alt"}),_(" "+a(t.$t("Logout")),1)])])):u("",!0)])):u("",!0),n("div",R,[r.currentPage?(s(),o("div",V,a(r.subMenus[r.currentPage].title),1)):u("",!0),n("div",A,[i(y,null,{default:d(({Component:l})=>[i(x,{name:"slide-fade",appear:""},{default:d(()=>[(s(),$(E(l)))]),_:2},1024)]),_:1})])])])])])}const U=k(C,[["render",F],["__scopeId","data-v-cb131a37"]]);export{U as default};
