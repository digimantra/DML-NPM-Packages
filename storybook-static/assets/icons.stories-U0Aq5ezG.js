import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{I as l,a}from"./icons-DuG-iMc8.js";import"./index-l2PZgWEW.js";const v={title:"components/Icons",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{fill:{control:"color"}}},j=n=>e.jsx(l,{...n}),r=j.bind({});r.args={name:"warehouse",height:"20",width:"20",filled:!0,fill:"#000"};const t=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-wrap items-center gap-4 justify-center",children:Object.keys(a).map(n=>{const s=a[n];return s.outline.d1||s.outline.d2?e.jsxs("div",{className:"flex flex-col items-center justify-center border border-gray-400 px-4 pt-4 pb-2 rounded-md",children:[e.jsx(l,{name:n,height:"25",width:"25",fill:"#000"},n),e.jsx("div",{className:"text-xs",children:n})]}):null})})}),i=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-wrap items-center gap-4 justify-center",children:Object.keys(a).map(n=>{const s=a[n];return s.filled.d1||s.filled.d2?e.jsxs("div",{className:"flex flex-col items-center justify-center border border-gray-400 px-4 pt-4 pb-2 rounded-md",children:[e.jsx(l,{name:n,height:"25",width:"25",fill:"#000",filled:!0},n),e.jsx("div",{className:"text-xs",children:n})]}):null})})});t.__docgenInfo={description:"",methods:[],displayName:"Outline"};i.__docgenInfo={description:"",methods:[],displayName:"Filled"};var c,o,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"(args: any) => <Icons {...args} />",...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var m,p,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => <>
    <div className="flex flex-wrap items-center gap-4 justify-center">
      {Object.keys(IconsData).map(iconName => {
      // @ts-ignore
      const icon = IconsData[iconName];
      if (icon.outline.d1 || icon.outline.d2) {
        return <div className="flex flex-col items-center justify-center border border-gray-400 px-4 pt-4 pb-2 rounded-md">
              <Icons key={iconName} name={iconName} height="25" width="25" fill="#000" />

              <div className="text-xs">{iconName}</div>
            </div>;
      } else {
        return null; // Skip rendering if filled object is empty
      }
    })}
    </div>
  </>`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var u,x,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => <>
    <div className="flex flex-wrap items-center gap-4 justify-center">
      {Object.keys(IconsData).map(iconName => {
      // @ts-ignore
      const icon = IconsData[iconName];
      if (icon.filled.d1 || icon.filled.d2) {
        return <div className="flex flex-col items-center justify-center border border-gray-400 px-4 pt-4 pb-2 rounded-md">
              <Icons key={iconName} name={iconName} height="25" width="25" fill="#000" filled />

              <div className="text-xs">{iconName}</div>
            </div>;
      } else {
        return null; // Skip rendering if filled object is empty
      }
    })}
    </div>
  </>`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const N=["Default","Outline","Filled"];export{r as Default,i as Filled,t as Outline,N as __namedExportsOrder,v as default};
