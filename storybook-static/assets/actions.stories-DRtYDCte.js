import{j as t}from"./jsx-runtime-DWbWqHZ-.js";import{a as l}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./index-l2PZgWEW.js";import"./v4-CQkTLCs1.js";const r=({show:a=!1,setShow:s=()=>{},list:o=[{id:1,name:"view",action:()=>{console.log("see the list")}},{id:2,name:"delete",action:()=>{console.log("deleted")}},{id:3,name:"edit",action:()=>{console.log("Edited")}}],customButton:u=t.jsxs("button",{type:"button",className:"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",id:"menu-button",children:["Actions",t.jsx("svg",{className:"-mr-1 h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:t.jsx("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"})})]}),position:m="left"})=>{const p=e=>{e(),s(!1)},f=()=>{switch(m){case"left":return"right-0";case"right":return"left-0";case"topCenter":return"bottom-full mb-2 left-1/2 transform -translate-x-1/2";case"topLeft":return"bottom-full mb-2 right-0";case"topRight":return"bottom-full mb-2 left-0";case"center":return"left-1/2 transform -translate-x-1/2";default:return"left-0"}};return t.jsxs("div",{className:"relative font-sans inline-block text-left",children:[t.jsx("div",{onClick:()=>s(!a),className:"cursor-pointer block w-fit",children:u}),a&&t.jsx("div",{className:`font-sans p-2 absolute ${f()} z-10 w-28 origin-top-right rounded-md bg-white shadow-md border border-gray-100`,role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabIndex:-1,children:o==null?void 0:o.map(e=>t.jsx("div",{onClick:()=>p(e==null?void 0:e.action),className:"p-2 font-normal text-sm leading-4 cursor-pointer mb-1 rounded-md hover:bg-[#fef8f8] text-[#343434] capitalize tracking-wide",children:e==null?void 0:e.name},e==null?void 0:e.id))})]})};r.__docgenInfo={description:"",methods:[],displayName:"Actions",props:{show:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},setShow:{required:!1,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:"",defaultValue:{value:"() => {}",computed:!1}},list:{required:!1,tsType:{name:"Array",elements:[{name:"Action"}],raw:"Action[]"},description:"",defaultValue:{value:`[
  {
    id: 1,
    name: "view",
    action: () => {
      console.log("see the list");
    },
  },
  {
    id: 2,
    name: "delete",
    action: () => {
      console.log("deleted");
    },
  },
  {
    id: 3,
    name: "edit",
    action: () => {
      console.log("Edited");
    },
  },
]`,computed:!1}},customButton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:`<button
  type="button"
  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
  id="menu-button"
>
  Actions
  <svg
    className="-mr-1 h-5 w-5 text-gray-400"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
</button>`,computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"left" | "right" | "topCenter" | "topLeft" | "topRight" | "center"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"topCenter"'},{name:"literal",value:'"topLeft"'},{name:"literal",value:'"topRight"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"left"',computed:!1}}}};const w={title:"components/Actions",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},g=a=>t.jsx(r,{...a}),n=g.bind({});n.args={show:!1,setShow:()=>{},list:[{id:1,name:"view",action:l("view")},{id:2,name:"delete",action:l("deleted")},{id:3,name:"edit",action:l("edited")}]};var i,d,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"(args: any) => <Actions {...args} />",...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const y=["Default"];export{n as Default,y as __namedExportsOrder,w as default};
