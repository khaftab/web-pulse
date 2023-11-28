System.register(["./index-legacy-55c52ed8.js"],(function(t,n){"use strict";var e,i,o,r,a,l,s,u,c,p,d,f,y,m,b;return{setters:[function(t){e=t._,i=t.r,o=t.o,r=t.c,a=t.e,l=t.k,s=t.f,u=t.a,c=t.N,p=t.t,d=t.F,f=t.g,y=t.b,m=t.p,b=t.l}],execute:function(){var n=document.createElement("style");n.textContent=".btn-rm-expiry[data-v-00b40a46]{padding-left:11px;padding-right:11px}.dark .list-group-item[data-v-00b40a46]{background-color:#070a10;color:#b1b8c0}.cert-exp-days .cert-exp-day-row[data-v-00b40a46]{border-bottom:1px solid rgba(0,0,0,.125)}.dark .cert-exp-days .cert-exp-day-row[data-v-00b40a46]{border-bottom:1px solid #1d2634}.cert-exp-days .cert-exp-day-row[data-v-00b40a46]:last-child{border:none}\n",document.head.appendChild(n);var g={props:{modelValue:{type:String,default:""},enabled:{type:Boolean,default:!0},placeholder:{type:String,default:""},icon:{type:String,required:!0},type:{type:String,default:"text"},action:{type:Function,default:function(){}}},emits:["update:modelValue"],computed:{model:{get:function(){return this.modelValue},set:function(t){this.$emit("update:modelValue",t)}}}},x={class:"input-group mb-3"},h=["type","placeholder","disabled"],v={components:{NotificationDialog:c,ActionInput:e(g,[["render",function(t,n,e,c,p,d){var f=i("font-awesome-icon");return o(),r("div",x,[a(s("input",{ref:"input","onUpdate:modelValue":n[0]||(n[0]=function(t){return d.model=t}),class:"form-control",type:e.type,placeholder:e.placeholder,disabled:!e.enabled},null,8,h),[[l,d.model]]),s("a",{class:"btn btn-outline-primary",onClick:n[1]||(n[1]=function(t){return e.action()})},[u(f,{icon:e.icon},null,8,["icon"])])])}]])},data:function(){return{expiryNotifInput:null}},computed:{settings:function(){return this.$parent.$parent.$parent.settings},saveSettings:function(){return this.$parent.$parent.$parent.saveSettings},settingsLoaded:function(){return this.$parent.$parent.$parent.settingsLoaded}},methods:{removeExpiryNotifDay:function(t){this.settings.tlsExpiryNotifyDays=this.settings.tlsExpiryNotifyDays.filter((function(n){return n!==t}))},addExpiryNotifDay:function(t){if(null!=t&&""!==t){var n=parseInt(t);null!=n&&!isNaN(n)&&n>0&&(this.settings.tlsExpiryNotifyDays.includes(n)||(this.settings.tlsExpiryNotifyDays.push(parseInt(t)),this.settings.tlsExpiryNotifyDays.sort((function(t,n){return t-n})),this.expiryNotifInput=null))}}}},$={class:"notification-list my-4"},N={key:0},D={key:1},k={class:"list-group mb-3",style:{"border-radius":"1rem"}},E=function(t){return m("data-v-00b40a46"),t=t(),b(),t}((function(){return s("br",null,null,-1)})),C=["onClick"],I={class:"my-4 pt-4"},S={class:"my-4 settings-subheading"},w={class:"mt-1 mb-3 ps-2 cert-exp-days col-12 col-xl-6"},V=["onClick"],L={class:"col-12 col-xl-6"};t("default",e(v,[["render",function(t,n,e,a,l,c){var m=i("font-awesome-icon"),b=i("ActionInput"),g=i("NotificationDialog");return o(),r("div",null,[s("div",$,[0===t.$root.notificationList.length?(o(),r("p",N,p(t.$t("Not available, please setup.")),1)):(o(),r("p",D,p(t.$t("notificationDescription")),1)),s("ul",k,[(o(!0),r(d,null,f(t.$root.notificationList,(function(n,e){return o(),r("li",{key:e,class:"list-group-item"},[y(p(n.name),1),E,s("a",{href:"#",onClick:function(e){return t.$refs.notificationDialog.show(n.id)}},p(t.$t("Edit")),9,C)])})),128))]),s("button",{class:"btn btn-primary me-2",type:"button",onClick:n[0]||(n[0]=function(n){return t.$refs.notificationDialog.show()})},p(t.$t("Setup Notification")),1)]),s("div",I,[s("h5",S,p(t.$t("settingsCertificateExpiry")),1),s("p",null,p(t.$t("certificationExpiryDescription")),1),s("p",null,p(t.$t("notificationDescription")),1),s("div",w,[(o(!0),r(d,null,f(c.settings.tlsExpiryNotifyDays,(function(n){return o(),r("div",{key:n,class:"d-flex align-items-center justify-content-between cert-exp-day-row py-2"},[s("span",null,p(n)+" "+p(t.$tc("day",n)),1),s("button",{type:"button",class:"btn-rm-expiry btn btn-outline-danger ms-2 py-1",onClick:function(t){return c.removeExpiryNotifDay(n)}},[u(m,{class:"",icon:"times"})],8,V)])})),128))]),s("div",L,[u(b,{modelValue:l.expiryNotifInput,"onUpdate:modelValue":n[1]||(n[1]=function(t){return l.expiryNotifInput=t}),type:"number",placeholder:t.$t("day"),icon:"plus",action:function(){return c.addExpiryNotifDay(l.expiryNotifInput)}},null,8,["modelValue","placeholder","action"])]),s("div",null,[s("button",{class:"btn btn-primary",type:"button",onClick:n[2]||(n[2]=function(t){return c.saveSettings()})},p(t.$t("Save")),1)])]),u(g,{ref:"notificationDialog"},null,512)])}],["__scopeId","data-v-00b40a46"]]))}}}));
