webpackJsonp([5],{"1NgW":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("Gu7T"),a=i.n(r),s={imgs:[{required:!0,validator:function(t,e,i){e[0]?i():i(new Error("请上传活动图片"))},trigger:"blur"}],teamName:[{required:!0,message:"请输入队伍名称",trigger:"blur"},{min:0,max:10,message:"长度在 0 到 10 个字符",trigger:"blur"}],teamTitle:[{required:!0,message:"请输入方案名称",trigger:"blur"},{min:0,max:10,message:"长度在 0 到 10 个字符",trigger:"blur"}],descr:[{required:!0,validator:function(t,e,i){e?i():i(new Error("请填写方案详情"))},trigger:"blur"}]},l=i("0jG4"),o={data:function(){return{id:this.$route.query.id,rules:s,form:{id:this.id?this.id:"",imgs:[],teamName:"",teamTitle:"",descr:"",activityId:1031},btnLoad:!1}},created:function(){document.title=this.id?"编辑项目":"添加项目"},methods:{cancel:function(){this.id?this.getMbaDetail():(this.form.descr="",this.$refs.editForm.resetFields())},onSubmit:function(){var t=this;this.$refs.editForm.validate(function(e){if(!e)return!1;var i=t.form;i.teamImg=t.form.imgs[0],Object(l.a)(i).then(function(e){"true"===e.status?t.$message({type:"success",duration:2e3,message:"提交成功！正在为您跳转...",onClose:function(){return t.$router.go(-1)}}):self.$message.error(e.msg)})})},getMbaDetail:function(){var t=this;Object(l.c)({id:t.id}).then(function(e){if("true"===e.status){console.log(e);var i=e.info,r=t.form;for(var a in r)"imgs"===a?r.imgs.length||r.imgs.push(i.teamImg):r[a]=i[a]}else t.$message.error(e.msg)})},getUploadData:function(t){return this.form[t].length<1?this.form[t].concat([""]):this.form[t]},uploadImg:function(t){var e,i=t.urls,r=t.index;(e=this.form.imgs).splice.apply(e,[r,1].concat(a()(i.split(","))))},delImg:function(t){var e=t.index;this.form.imgs.splice(e,1)},changeDetail:function(t){this.form.descr=t}},mounted:function(){this.id&&this.getMbaDetail()}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-edit-wrap"},[t.id?i("div",{staticClass:"title"},[t._v("编辑项目")]):i("div",{staticClass:"title"},[t._v("添加项目")]),t._v(" "),i("div",{staticClass:"content"},[i("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:t.form,rules:t.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"项目图片：",prop:"imgs"}},[i("div",{staticClass:"upload-item"},t._l(t.getUploadData("imgs"),function(e,r){return i("upload-file",{key:r,staticClass:"img-item",attrs:{fileUrl:e,replaceIndex:r,limit:1,multiple:!0,fileUrlArr:t.form.imgs,width:125,height:413/6},on:{uploadSuccess:t.uploadImg,delFile:t.delImg}})})),t._v(" "),i("p",{staticClass:"img-info"},[t._v("只能上传jpg/png格式文件，建议大小：750px*413px")])]),t._v(" "),i("el-form-item",{attrs:{label:"队伍名称：",prop:"teamName"}},[i("el-input",{staticClass:"form-item",attrs:{maxlength:100,placeholder:"请输入队伍名称"},model:{value:t.form.teamName,callback:function(e){t.$set(t.form,"teamName",e)},expression:"form.teamName"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"方案名称：",prop:"teamTitle"}},[i("el-input",{staticClass:"form-item",attrs:{maxlength:100,placeholder:"请输入方案名称"},model:{value:t.form.teamTitle,callback:function(e){t.$set(t.form,"teamTitle",e)},expression:"form.teamTitle"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"方案详情：",prop:"descr"}},[i("q-editor",{attrs:{detail:t.form.descr,placeholder:"请填写方案介绍&详情，可图文并茂"},on:{changeDetail:t.changeDetail}})],1)],1),t._v(" "),i("div",{staticClass:"submit-btn"},[i("el-button",{on:{click:function(e){t.cancel()}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary",loading:t.btnLoad},on:{click:function(e){t.onSubmit()}}},[t._v("提交")])],1)],1)])},staticRenderFns:[]};var m=i("VU/8")(o,n,!1,function(t){i("vg63")},"data-v-493f0264",null);e.default=m.exports},vg63:function(t,e){}});
//# sourceMappingURL=5.e2755298d3ce563c8afb.js.map