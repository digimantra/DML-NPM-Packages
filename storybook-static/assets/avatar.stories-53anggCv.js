import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r as F}from"./index-l2PZgWEW.js";const l=({image:r,size:_,type:D,outline:d,color:u,onUpload:i,borderColor:I})=>{const[o,N]=F.useState(r),A=q=>{var m;const p=(m=q.target.files)==null?void 0:m[0];if(!p)return;const n=new FileReader;n.onloadend=()=>{const h=n.result;N(h),i==null||i(h)},n.readAsDataURL(p)},T=()=>{switch(_){case"1":return"h-2 w-2";case"2":return"h-4 w-4";case"3":return"h-6 w-6";case"4":return"h-8 w-8";case"5":return"h-10 w-10";case"6":return"h-12 w-12";case"7":return"h-14 w-14";case"8":return"h-16 w-16";default:return"h-10 w-10"}};return e.jsx("div",{className:"relative",children:e.jsxs("div",{style:{border:`1px solid ${o?I||"blue":"transparent"}`},className:`${T()} cursor-pointer hover:text-red-400 rounded-full overflow-hidden`,children:[o||r?e.jsx("label",{htmlFor:"avatarInput",className:"cursor-pointer",children:e.jsx("img",{className:"h-full w-full object-cover",src:o||r,alt:"Face"})}):D==="fill"?e.jsx("label",{htmlFor:"avatarInput",className:"cursor-pointer",children:e.jsxs("svg",{className:"h-full w-full",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_662_4489)",children:[e.jsx("path",{d:"M7.5 6.25C8.88071 6.25 10 5.13071 10 3.75C10 2.36929 8.88071 1.25 7.5 1.25C6.11929 1.25 5 2.36929 5 3.75C5 5.13071 6.11929 6.25 7.5 6.25Z",fill:u||"#cb4d2e"}),e.jsx("path",{d:"M12.5 10.9375C12.5 12.4906 12.5 13.75 7.5 13.75C2.5 13.75 2.5 12.4906 2.5 10.9375C2.5 9.38438 4.73875 8.125 7.5 8.125C10.2613 8.125 12.5 9.38438 12.5 10.9375Z",fill:u||"#cb4d2e"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_662_4489",children:e.jsx("rect",{width:"15",height:"15",fill:"white"})})})]})}):e.jsx("label",{htmlFor:"avatarInput",className:"cursor-pointer",children:e.jsxs("svg",{className:"h-full w-full",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_662_4483)",children:[e.jsx("path",{d:"M7.5 6.25C8.88071 6.25 10 5.13071 10 3.75C10 2.36929 8.88071 1.25 7.5 1.25C6.11929 1.25 5 2.36929 5 3.75C5 5.13071 6.11929 6.25 7.5 6.25Z",stroke:d||"#000000"}),e.jsx("path",{d:"M12.5 10.9375C12.5 12.4906 12.5 13.75 7.5 13.75C2.5 13.75 2.5 12.4906 2.5 10.9375C2.5 9.38438 4.73875 8.125 7.5 8.125C10.2613 8.125 12.5 9.38438 12.5 10.9375Z",stroke:d||"#000000"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_662_4483",children:e.jsx("rect",{width:"15",height:"15",fill:"white"})})})]})}),e.jsx("input",{type:"file",accept:"image/*",className:"cursor-pointer hidden",onChange:A,id:"avatarInput"})]})})};l.defaultProps={outline:"#000000",color:"#cb4d2e",onUpload:()=>{}};l.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{image:{required:!1,tsType:{name:"string"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""},outline:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#000000"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#cb4d2e"',computed:!1}},onUpload:{required:!1,tsType:{name:"signature",type:"function",raw:"(imageData: string) => void",signature:{arguments:[{type:{name:"string"},name:"imageData"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const S={title:"components/Avatar",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"color"},outline:{control:"color"},borderColor:{control:"color"}}},c=r=>e.jsx(l,{...r}),a=c.bind({});a.args={outline:"#000000"};const s=c.bind({});s.args={type:"fill",color:"#cb4d2e"};const t=c.bind({});t.args={image:"https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"};var f,g,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"(args: any) => <Avatar {...args} />",...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var w,v,j;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:"(args: any) => <Avatar {...args} />",...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var b,y,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:"(args: any) => <Avatar {...args} />",...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const B=["Default","Fill","Image"];export{a as Default,s as Fill,t as Image,B as __namedExportsOrder,S as default};