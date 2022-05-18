(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{387:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"web接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web接口"}},[t._v("#")]),t._v(" WEB接口")]),t._v(" "),e("h2",{attrs:{id:"说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),e("p",[t._v("WEB操作一般由于固定页面的显示功能和前端页面的二次开发，在使用任意接口前，都需先调用"),e("code",[t._v("api/login")]),t._v("接口进行登录获取cookie，其他接口使用该cookie进行访问即可；也就是说所有的接口都依赖于login接口返回的cookie数据。"),e("br"),t._v("\nWEB接口只需要在调用时带上接口的私有参数和公共参数的"),e("code",[t._v("cmd")]),t._v("即可，不用带上其他几个公共参数。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("第二次调用"),e("code",[t._v("api/login")]),t._v("会替换掉之前的cookie数据，也就是说只能有一个用户登陆")])]),t._v(" "),e("h2",{attrs:{id:"请求流程说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求流程说明"}},[t._v("#")]),t._v(" 请求流程说明")]),t._v(" "),e("p",[t._v("1.调用"),e("code",[t._v("api/login")]),t._v("接口进行登陆\n2.凭借步骤1返回的cookie即可访问其他接口")]),t._v(" "),e("p",[t._v("例：调用api/Room_Info接口")]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("Request:")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("method: POST\npath: http://127.0.0.1:11419/api/Room_Info\ncookie: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"form-data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cmd"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Room_Info"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"公共参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#公共参数"}},[t._v("#")]),t._v(" 公共参数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("格式")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("是否必须")]),t._v(" "),e("th",[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("cmd")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),e("td",[t._v("请求的API接口的接口名称(如:Room_Info)")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);