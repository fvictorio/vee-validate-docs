webpackJsonp([1],{134:function(e,t,a){var s,i;s=a(146);var n=a(168);i=s=s||{},"object"==typeof s["default"]&&(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,e.exports=s},137:function(e,t){e.exports={rules:["after","alpha_dash","alpha_num","alpha","before","between","confirmed","date_between","date_format","decimal","digits","dimensions","email","ext","image","in","ip","max","mimes","min","not_in","numeric","regex","required","size","url"]}},146:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(137),n=s(i),r=a(4),o=s(r),l=a(151),h=s(l);t["default"]={data:function(){return{rules:new o["default"](n["default"].rules).chunk(10).all()}},components:{BasicExample:h["default"]}}},151:function(e,t,a){var s,i,n=a(173);i=s=s||{},"object"==typeof s["default"]&&(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=n.render,i.staticRenderFns=n.staticRenderFns,e.exports=s},168:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_m(0)," ",_m(1)," ",_m(2)," ",_m(3),_m(4)," ",_m(5)," ",_h("code-block",{staticClass:"language-bash"},["npm install vee-validate --save"])," ",_m(6)," ",_h("code-block",{staticClass:"language-bash"},["npm install vee-validate@next --save"])," ",_m(7)," ",_m(8)," ",_m(9)," ",_h("code-block",{staticClass:"language-bash"},["bower install vee-validate#1.0.0-beta.5 --save"])," ",_m(10)," ",_h("code-block",{staticClass:"language-bash"},["bower install vee-validate#2.0.0-beta.10 --save"])," ",_m(11)," ",_m(12),"\n        Head over to ",_m(13)," and grab the latest version.\n\n        Then you may use it like this:\n        ",_h("code-block",{staticClass:"language-html"},['\n            <script src="path/to/vue.js"></script>\n            <script src="path/to/vee-validate.js"></script>\n            <script>\n                Vue.use(VeeValidate); // good to go.\n            </script>\n        ']),"\n\n        or you may import it using ES6:\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            import Vue from 'vue';\n            import VeeValidate from 'vee-validate';\n\n            Vue.use(VeeValidate);\n        "])," ",_m(14)," ",_m(15)," ",_m(16)," ",_h("basic-example")," ",_h("div",{staticClass:"flex-center"},[_h("router-link",{staticClass:"link",attrs:{to:{name:"examples"}}},["More Examples"])])," ",_m(17)," ",_h("div",{staticClass:"note"},[_m(18)," The field name that appears in the error messages is usually the input's ",_m(19)," attribute, unless you passed a value from the vue instance ",_m(20)," object,\n        The name will be then the expression name, check the ",_h("router-link",{attrs:{to:{name:"examples",hash:"#validate-data-example"}}},["data validation example"]),".\n    "])," ",_m(21)," ",_h("p",["\n        Naturally, you would want to display the errors to your users. The plugin augments your Vue instance with a private validator object and a public errors data object.\n        You are responsible for how the errors should be rendered.\n        ",_m(22),_m(23),"The errors object exposes a simple methods to help you render errors:\n        ",_m(24),"\n        There are a few more ",_h("router-link",{staticClass:"link",attrs:{to:{name:"api",hash:"#error-bag"}}},["methods"])," that you can use to manipulate the errors object.\n    "])," ",_m(25)," ",_m(26)," ",_h("div",{staticClass:"pure-g"},[rules&&_l(rules,function(e){return _h("div",{"class":"pure-u-1-"+rules.length},[_h("ul",[e&&_l(e,function(e){return _h("li",[_h("router-link",{staticClass:"link",attrs:{to:{name:"rules",hash:"#rule-"+e}}},[_s(e)])])})])])})])," ",_h("p",["Visit the ",_h("router-link",{staticClass:"link",attrs:{to:{name:"rules",hash:"#available-rules"}}},["rules documentation"])," to learn more about how to use each rule, and how to ",_h("router-link",{staticClass:"link",attrs:{to:{name:"rules",hash:"#custom-rules"}}},["create your own"]),"."])," ",_m(27)," ",_m(28)," ",_h("code-block",{staticClass:"language-javascript"},["\n        import Vue from 'vue';\n        import VeeValidate from 'vee-validate';\n\n        const config = {\n            errorBagName: 'errors', // change if property conflicts.\n            delay: 0,\n            locale: 'en',\n            messages: null,\n            strict: true\n        };\n\n        Vue.use(VeeValidate, config);\n    "])," ",_h("ul",[_m(29)," ",_m(30)," ",_m(31)," ",_h("li",[_m(32)," The messages to be generated for the validation errors, check ",_h("router-link",{staticClass:"link",attrs:{to:{name:"rules",hash:"#custom-messages"}}},["custom messages"])," section."])," ",_m(33)])])},staticRenderFns:[function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"about"}},[_h("a",{attrs:{href:"#about"}},["What is vee-validate?"])])},function(){with(this)return _h("p",["\n        This is a lightweight plugin for ",_h("a",{staticClass:"link",attrs:{href:"https://vuejs.org/"}},["Vue.js"])," that allows you to validate input fields, and display errors.\n        ",_h("br"),_h("br"),"\n        You don't have to do anything fancy in your app, most of the work goes into the html.\n        You only need to specify for each input what kind of validators should be used when the value changes. You will then get informed of the errors for each field.\n        ",_h("br"),_h("br"),"\n        Although most of the validations occur automatically, you can use the validator however you see fit. The validator object has no dependencies and is a standalone object.\n        ",_h("br"),_h("br"),"\n        Currently there are over 20 validation rules available in the plugin.\n        This plugin is inspired by ",_h("a",{staticClass:"link",attrs:{href:"https://laravel.com/"}},["PHP Framework Laravel's validation syntax"]),".\n        ",_h("br"),_h("br"),"It also supports Vue 2.0. All examples here are built using Vue 2.0 with the plugin.\n    "])},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"installation"}},[_h("a",{attrs:{href:"#installation"}},["Installation"])])},function(){with(this)return _h("p",["\n        You can install this plugin via ",_h("a",{staticClass:"link",attrs:{href:"#npm"}},["npm"])," or ",_h("a",{staticClass:"link",attrs:{href:"#bower"}},["bower"])," or via a ",_h("a",{staticClass:"link",attrs:{href:"#cdn"}},["CDN"]),".\n        "])},function(){with(this)return _h("h3",{staticClass:"content-subhead",attrs:{id:"npm"}},[_h("a",{attrs:{href:"#npm"}},["npm"])])},function(){with(this)return _h("b",["Vue 1.x"])},function(){with(this)return _h("b",["Vue 2.x"])},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," The latest version of this plugin will keep pointing to the Vue 1.x version, until Vue 2.0 is released which is soon, then the latest will point to Vue 2.0 while another tag will be used for the Vue 1.x versions.\n        "])},function(){with(this)return _h("h3",{staticClass:"content-subhead",attrs:{id:"bower"}},[_h("a",{attrs:{href:"#bower"}},["bower"])])},function(){with(this)return _h("b",["Vue 1.x"])},function(){with(this)return _h("b",["Vue 2.x"])},function(){with(this)return _h("br")},function(){with(this)return _h("h3",{staticClass:"content-subhead",attrs:{id:"cdn"}},[_h("a",{attrs:{href:"#cdn"}},["CDN"])])},function(){with(this)return _h("a",{attrs:{href:"https://www.jsdelivr.com/projects/vee-validate",target:"jsdelivr"}},["jsdelivr"])},function(){with(this)return _h("p")},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"basic-example"}},[_h("a",{attrs:{href:"#basic-example"}},["Basic Example"])])},function(){with(this)return _h("p",["\n        All you need is to add the ",_h("code",{staticClass:"inline"},["v-validate"])," directive to the input you wish to validate.\n        ",_h("br"),_h("br"),"\n        Then add a ",_h("code",{staticClass:"inline"},["data-rules"])," attribute which contains a list of validation rules separated by a pipe '",_h("code",{staticClass:"inline"},["|"]),"'.\n        For the following example the validation rules are straight forward, use ",_h("code",{staticClass:"inline"},["required"])," to indicate that the field is required.\n        And ",_h("code",{staticClass:"inline"},["email"])," to indicate that the field must be an email.\n        To combine both rules we assign the value ",_h("code",{staticClass:"inline"},["required|email"])," to the ",_h("code",{staticClass:"inline"},["data-rules"])," data-set attribute.\n    "])},function(){with(this)return _h("br")},function(){with(this)return _h("b",["Note:"])},function(){with(this)return _h("code",["name"])},function(){with(this)return _h("code",["$data"])},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"render-errors"}},[_h("a",{attrs:{href:"#render-errors"}},["Rendering Errors"])])},function(){with(this)return _h("br")},function(){with(this)return _h("br")},function(){with(this)return _h("ul",[_h("li",[_h("code",{staticClass:"inline"},["first('field')"])," Fetches the first error message associated with that field."])," ",_h("li",[_h("code",{staticClass:"inline"},["collect('field')"])," Fetches all error messages associated with that field. alternativly you can pass nothing and it will return errors grouped by fields"])," ",_h("li",[_h("code",{staticClass:"inline"},["has('field')"])," Checks if there are any errors associated with that field."])," ",_h("li",[_h("code",{staticClass:"inline"},["all()"])," Gets all error messages."])," ",_h("li",[_h("code",{staticClass:"inline"},["any()"])," Checks if there are any errors."])])},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"available-rules"}},[_h("a",{attrs:{href:"#available-rules"}},["Available Rules"])])},function(){with(this)return _h("p",["There are more than 20 rules available to validate your inputs:"])},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"configuration"}},[_h("a",{attrs:{href:"#configuration"}},["Configuration"])])},function(){with(this)return _h("p",["\n        You may need to configure some options to tweak some of the plugin internals, this is not required, but could cause conflicts. For example: if you are using a property called ",_h("code",{staticClass:"inline"},["errors"])," on your vue instance this may cause conflicts.\n         Here is how you would set up the options along with the default values:\n    "])},function(){with(this)return _h("li",[_h("code",{staticClass:"inline"},["errorBagName:"])," The name of the ErrorBag object that will be injected in each of Vue's instances' data."])},function(){with(this)return _h("li",[_h("code",{staticClass:"inline"},["delay:"])," The default debounce time for all inputs (only affects validations)."])},function(){with(this)return _h("li",[_h("code",{staticClass:"inline"},["locale:"])," The default language for the validation messages."])},function(){with(this)return _h("code",{staticClass:"inline"},["messages:"])},function(){with(this)return _h("li",[_h("code",{staticClass:"inline"},["strict:"])," Fields that have no rules will fail validation unless ",_h("code",{staticClass:"inline"},["strict"])," is set to false."])}]}},173:function(module,exports){module.exports={render:function(){with(this)return _h("code-example",[_h("form",{slot:"example",staticClass:"pure-form pure-form-stacked"},[_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("email")},attrs:{"for":"email"}},["Email"])," ",_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("email")},attrs:{"data-rules":"required|email",name:"email",type:"text",placeholder:"Email"}})," ",_h("span",{directives:[{name:"show",value:errors.has("email"),expression:"errors.has('email')"}],staticClass:"error"},[_s(errors.first("email"))])])])," ",_h("div",{slot:"code-html"},['\n        <div id="app">\n            <form class="pure-form pure-form-stacked">\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'email\') }" for="email">Email</label>\n                    <input v-validate data-rules="required|email" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'email\') }" name="email" type="text" placeholder="Email">\n                    <span class="error" v-show="errors.has(\'email\')">'+_s("{"+"{ errors.first('email') }}")+"</span>\n                </div>\n            </form>\n        </div>\n    "])," ",_h("div",{slot:"code-js"},["\n        import Vue from 'vue';\n        import VeeValidate from 'vee-validate';\n\n        Vue.use(VeeValidate);\n\n        new Vue({\n            el: '#app'\n        });\n    "])])},staticRenderFns:[]}}});