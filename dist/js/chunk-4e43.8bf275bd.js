(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e43"],{"17c0":function(e,r,s){},"58af":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[e.submitted?e._e():s("form",[s("fieldset",[s("legend",[e._v("Add new user")]),s("p",[e._v("Name"),s("sub",[e._v("*")]),e._v(": "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{required:"",type:"text"},domProps:{value:e.user.name},on:{input:function(r){r.target.composing||e.$set(e.user,"name",r.target.value)}}}),s("br")]),s("p",[e._v("Country: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.country,expression:"user.country"}],attrs:{type:"text"},domProps:{value:e.user.country},on:{input:function(r){r.target.composing||e.$set(e.user,"country",r.target.value)}}}),s("br")]),s("p",[e._v("Email: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"email"},domProps:{value:e.user.email},on:{input:function(r){r.target.composing||e.$set(e.user,"email",r.target.value)}}}),s("br")]),s("p",[e._v("Date of birth: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.birthday,expression:"user.birthday"}],attrs:{type:"text"},domProps:{value:e.user.birthday},on:{input:function(r){r.target.composing||e.$set(e.user,"birthday",r.target.value)}}})]),s("p",[e._v("Password: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password"},domProps:{value:e.user.password},on:{input:function(r){r.target.composing||e.$set(e.user,"password",r.target.value)}}})]),s("p",[e._v("Notes: "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.user.notes,expression:"user.notes"}],attrs:{noresize:""},domProps:{value:e.user.notes},on:{input:function(r){r.target.composing||e.$set(e.user,"notes",r.target.value)}}})]),s("p",[e._v(" Superuser: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.isSuperUser,expression:"user.isSuperUser"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.user.isSuperUser)?e._i(e.user.isSuperUser,null)>-1:e.user.isSuperUser},on:{change:function(r){var s=e.user.isSuperUser,t=r.target,u=!!t.checked;if(Array.isArray(s)){var n=null,a=e._i(s,n);t.checked?a<0&&e.$set(e.user,"isSuperUser",s.concat([n])):a>-1&&e.$set(e.user,"isSuperUser",s.slice(0,a).concat(s.slice(a+1)))}else e.$set(e.user,"isSuperUser",u)}}})]),s("button",{attrs:{disabled:!e.user.name},on:{click:function(r){return r.preventDefault(),e.post(r)}}},[e._v("Save")])])]),e.submitted?s("div",[e._v("\n        New user has been added successfully!\n    ")]):e._e()])},u=[],n=(s("cadf"),s("551c"),s("097d"),{name:"AddUser",data:function(){return{user:{name:"",email:"",age:"",phone:"",country:"",birthday:"",isSuperUser:!1,notes:""},submitted:!1}},methods:{post:function(){var e=this;this.$http.post("".concat(this.$router.options.server,"/api/users"),this.user).then(function(){e.submitted=!0,window.setTimeout(function(){e.$router.push({name:"HOME PAGE"})},1e3)}).catch(function(e){window.console.error("Error: ",e)})}}}),a=n,o=(s("eeef"),s("2877")),i=Object(o["a"])(a,t,u,!1,null,"3f91e9a2",null);i.options.__file="AddUser.vue";r["default"]=i.exports},eeef:function(e,r,s){"use strict";var t=s("17c0"),u=s.n(t);u.a}}]);
//# sourceMappingURL=chunk-4e43.8bf275bd.js.map