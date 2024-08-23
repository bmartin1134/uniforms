"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[146],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),s=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(m,".").concat(c)]||u[c]||p[c]||r;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s}});var i=n(25773),a=(n(27378),n(35318));const r={id:"migrating-2-to-3",title:"Migrating v2 to v3"},o=void 0,l={unversionedId:"migrating-2-to-3",id:"migrating-2-to-3",title:"Migrating v2 to v3",description:"This guide is designed to help you through the migration. If you went through it and encountered any problems - do let us know. For more information on why certain changes were made, see the CHANGELOG.md. When migrating to v3, use the newest version. Gradual updates will take more time and won't ease this process.",source:"@site/../docs/migrating-2-to-3.md",sourceDirName:".",slug:"/migrating-2-to-3",permalink:"/docs/migrating-2-to-3",draft:!1,tags:[],version:"current",frontMatter:{id:"migrating-2-to-3",title:"Migrating v2 to v3"},sidebar:"docs",previous:{title:"Migrating v3 to v4",permalink:"/docs/migrating-3-to-4"},next:{title:"Basic uniforms usage",permalink:"/docs/tutorials-basic-uniforms-usage"}},m={},s=[{value:"Breaking API changes",id:"breaking-api-changes",level:2},{value:"Validation flow changes",id:"validation-flow-changes",level:2},{value:"React Context API",id:"react-context-api",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide is designed to help you through the migration. If you went through it and encountered any problems - do let us know. For more information on ",(0,a.kt)("em",{parentName:"p"},"why")," certain changes were made, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vazco/uniforms/blob/master/CHANGELOG.md"},(0,a.kt)("inlineCode",{parentName:"a"},"CHANGELOG.md")),". When migrating to v3, use the newest version. Gradual updates will take more time and won't ease this process."),(0,a.kt)("h2",{id:"breaking-api-changes"},"Breaking API changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Context data shape has changed: ",(0,a.kt)("inlineCode",{parentName:"li"},"changed"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"changedMap"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"submitting"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"validating")," were lifted from the ",(0,a.kt)("inlineCode",{parentName:"li"},"state")," property to the root."),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"AutoForm.state.modelSync"),". Use ",(0,a.kt)("inlineCode",{parentName:"li"},"AutoForm.state.model")," instead."),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"BaseField"),". Use ",(0,a.kt)("inlineCode",{parentName:"li"},"connectField")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"useField")," instead."),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"BaseForm.getChangedKeys"),". Use ",(0,a.kt)("inlineCode",{parentName:"li"},"changedKeys")," directly."),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"BaseForm.state.bridge"),". Use ",(0,a.kt)("inlineCode",{parentName:"li"},"BaseForm.props.schema")," instead."),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"Bridge.check"),". Without ",(0,a.kt)("inlineCode",{parentName:"li"},"createSchemaBridge")," it's no longer needed."),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"baseField")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"connectField")," options. There's no one solution here and it may require additional changes, depending on the usage."),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"createSchemaBridge"),". Now all ",(0,a.kt)("inlineCode",{parentName:"li"},"*Bridge")," instances have to be created manually.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"  import { SimpleSchema } from 'simpl-schema';\n+ import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';\n  const schema = new SimpleSchema({ /* ... */ });\n- <AutoForm schema={schema} />\n+ const bridge = new SimpleSchema2Bridge(schema);\n+ <AutoForm schema={bridge} />\n"))),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"ensureValue")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"connectField")," options. That means ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," will no longer be automatically passed to the field as ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),". Use ",(0,a.kt)("inlineCode",{parentName:"li"},"value ?? ''")," instead. ",(0,a.kt)("strong",{parentName:"li"},"This option was enabled by default, therefore it will impact all your custom fields"),"."),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"includeParent")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"connectField")," options. Use ",(0,a.kt)("inlineCode",{parentName:"li"},"useField")," as many times as needed instead.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const parentName = joinName(joinName(null, props.name).slice(0, -1));\nconst parentField = useField(parentName, {}, { absoluteName: true })[0];\n"))),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"injectName"),". In most cases, it can be safely omitted."),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"includeInChain")," parameter from ",(0,a.kt)("inlineCode",{parentName:"li"},"connectField")," options. It was used only in the ",(0,a.kt)("inlineCode",{parentName:"li"},"NestField")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ListField")," family, and mostly because of the way how the old context API worked. In most cases, if you've used ",(0,a.kt)("inlineCode",{parentName:"li"},"includeInChain: false"),", the migration is to use ",(0,a.kt)("inlineCode",{parentName:"li"},'name=""')," for the nested fields. See ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/vazco/uniforms/pull/738"},"#738"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/vazco/uniforms/pull/720"},"#720"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/vazco/uniforms/pull/721"},"#721")," for more information."),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"mapProps")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"connectField")," options. Map props directly in the component."),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"nothing"),". Use ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," instead."),(0,a.kt)("li",{parentName:"ul"},"Removed all ",(0,a.kt)("inlineCode",{parentName:"li"},"propTypes")," in favor of TypeScript types."),(0,a.kt)("li",{parentName:"ul"},"Renamed or removed deprecated lifecycle methods. If you were using them, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"super.componentWillReceiveProps"),", check whether it's still there and use the correct name if needed."),(0,a.kt)("li",{parentName:"ul"},"Renamed ",(0,a.kt)("inlineCode",{parentName:"li"},"getChildContext*")," methods to ",(0,a.kt)("inlineCode",{parentName:"li"},"getContext*"),", e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"getChildContextName")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"getContextName"),"."),(0,a.kt)("li",{parentName:"ul"},"Synchronous return and throw in ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit")," are no longer allowed. To return an error or some result, return a ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise")," instead."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filterDOMProps.registered")," is now read-only.")),(0,a.kt)("h2",{id:"validation-flow-changes"},"Validation flow changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bridge validators have to return errors instead of throwing them.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"  // GraphQL Schema\n  function validator(model) {\n    if (errors.length) {\n-     throw { details: validator.errors };\n+     return { details: validator.errors };\n    }\n  }\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"  // JSON Schema\n  function createValidator(schema) {\n    const validator = ajv.compile(schema);\n    return (model) => {\n      validator(model);\n      if (validator.errors && validator.errors.length) {\n-       throw { details: validator.errors };\n+       return { details: validator.errors };\n      }\n    };\n  }\n"))),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmitSuccess")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmitFailure"),". Perform all needed operations directly in the ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit"),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"- onSubmit={onSubmit}\n- onSubmitSuccess={onSubmitSuccess}\n- onSubmitFailure={onSubmitFailure}\n+ onSubmit={model => {\n+   const result = onSubmit(model);\n+   result.then(onSubmitSuccess, onSubmitFailure);\n+   return result;\n+ }}`\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onValidate")," is no longer using callbacks. The error (or the lack of it) has to be returned either synchronously or asynchronously (i.e. wrapped in a promise).",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"- onValidate={(model, error, done) => done(error)}\n+ onValidate={async (model, error) => error}\n")))),(0,a.kt)("h2",{id:"react-context-api"},"React Context API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you were ",(0,a.kt)("strong",{parentName:"li"},"not")," using ",(0,a.kt)("inlineCode",{parentName:"li"},"context"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"contextTypes"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"childContextTypes"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"getChildContext*")," methods directly, there's nothing to do."),(0,a.kt)("li",{parentName:"ul"},"For direct context access, use ",(0,a.kt)("inlineCode",{parentName:"li"},"useForm")," hook (functional components), ",(0,a.kt)("inlineCode",{parentName:"li"},"contextType")," static property (class components), or ",(0,a.kt)("inlineCode",{parentName:"li"},"<context.Consumer />")," (both).",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The React context object, ",(0,a.kt)("inlineCode",{parentName:"li"},"context"),", is exported from the ",(0,a.kt)("inlineCode",{parentName:"li"},"uniforms")," package.")))),(0,a.kt)("h2",{id:"typescript"},"TypeScript"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A lot of types were added or changed. If you are using TypeScript, you may expect some type errors, as all components are no longer full of ",(0,a.kt)("inlineCode",{parentName:"li"},"any"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filterDOMProps.register")," is now type safe and requires ",(0,a.kt)("inlineCode",{parentName:"li"},"FilterDOMProps")," interface extension.")),(0,a.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For performance reasons ",(0,a.kt)("inlineCode",{parentName:"li"},"getField"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"getSubfields"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"getType")," of all bridges are now memoized. If possible, do the same for custom bridges for a potential performance gain."),(0,a.kt)("li",{parentName:"ul"},"Simplified ",(0,a.kt)("inlineCode",{parentName:"li"},"NumField")," in most themes as it works as expected in React 16 and later. If you have a custom ",(0,a.kt)("inlineCode",{parentName:"li"},"NumField")," in your project, do revise its implementation for a potential performance gain."),(0,a.kt)("li",{parentName:"ul"},"Stop using direct imports and use named ones instead. It'll let your bundler decide, which version it'll need.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"-import BaseForm from 'uniforms/BaseForm';\n+import { BaseForm } from 'uniforms';\n")))))}p.isMDXComponent=!0}}]);