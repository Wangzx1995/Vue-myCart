webpackJsonp([5],{"3NnK":function(t,n){},ARoL:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("l/JR"),e("M9A7");var s={name:"Mock",data:function(){return{msg:""}},mounted:function(){console.log("-----------"),this.getdata()},methods:{getdata:function(){var t=this;this.$http.get("/data/list").then(function(n){t.msg=n.data.data})}}},a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[this._v("\n    首页\n    "),n("p",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var i=e("C7Lr")(s,a,!1,function(t){e("3NnK")},null,null);n.default=i.exports}});
//# sourceMappingURL=5.794ac9a59c46d914b834.js.map