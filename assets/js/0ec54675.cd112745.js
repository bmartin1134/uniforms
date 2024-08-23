"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[773],{35318:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return l}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=u(n),l=o,p=d["".concat(s,".").concat(l)]||d[l]||f[l]||i;return n?r.createElement(p,c(c({ref:t},m),{},{components:n})):r.createElement(p,c({ref:t},m))}));function l(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46512:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u}});var r=n(25773),o=(n(27378),n(35318));const i={id:"examples-custom-form",title:"Custom form"},c=void 0,a={unversionedId:"examples-custom-form",id:"examples-custom-form",title:"Custom form",description:"In uniforms, every form is just an injectable set of functionalities.",source:"@site/../docs/examples-custom-form.md",sourceDirName:".",slug:"/examples-custom-form",permalink:"/docs/examples-custom-form",draft:!1,tags:[],version:"current",frontMatter:{id:"examples-custom-form",title:"Custom form"},sidebar:"docs",previous:{title:"Custom bridge & validator",permalink:"/docs/examples-custom-bridge"},next:{title:"Forms",permalink:"/docs/api-forms"}},s={},u=[{value:"<code>ModifierForm</code>",id:"modifierform",level:3}],m={toc:u};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In uniforms, every form is just an injectable set of functionalities.\nThus, we can live without many higher order components, using composed ones instead.\nIf you want to get a deeper dive into it, we encourage you to read the source of AutoForm or QuickForm in the core package."),(0,o.kt)("h3",{id:"modifierform"},(0,o.kt)("inlineCode",{parentName:"h3"},"ModifierForm")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { BaseForm } from 'uniforms';\n\nconst Modifier = parent =>\n  class extends parent {\n    // Expose injector.\n    //   It's not required, but recommended.\n    static Modifier = Modifier;\n\n    // Alter component display name.\n    //   It's not required, but recommended.\n    static displayName = `Modifier${parent.displayName}`;\n\n    // Here you can override any form methods or create additional ones.\n    getModel(mode) {\n      if (mode === 'submit') {\n        const doc = super.getModel('submit');\n        const keys = this.getContextSchema().getSubfields();\n\n        const update = keys.filter(key => doc[key] !== undefined);\n        const remove = keys.filter(key => doc[key] === undefined);\n\n        // It's a good idea to omit empty modifiers.\n        const $set = update.reduce(\n          (acc, key) => ({ ...acc, [key]: doc[key] }),\n          {},\n        );\n        const $unset = remove.reduce((acc, key) => ({ ...acc, [key]: '' }), {});\n\n        return { $set, $unset };\n      }\n\n      return super.getModel(mode);\n    }\n  };\n\n// Now we have to inject our functionality. This one is a ModifierForm. Use any\n// form component you want.\nconst ModifierForm = Modifier(BaseForm);\n")))}f.isMDXComponent=!0}}]);