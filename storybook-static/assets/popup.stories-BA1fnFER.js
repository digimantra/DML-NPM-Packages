import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r as d}from"./index-l2PZgWEW.js";import{B as u}from"./button-Drs-W5Vt.js";import{I as m}from"./icons-DuG-iMc8.js";const t=({show:o,setShow:r,children:n,icon:a,iconBackground:c})=>e.jsx("div",{className:`${o?"visible":"hidden"} fixed top-0 inset-0 bg-white bg-opacity-25 backdrop-blur-sm flex justify-center items-center w-full`,children:e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"bg-white px-8 py-4 rounded-lg shadow-md text-center border-t border-teal-100",children:[a&&e.jsx("div",{className:"flex items-center justify-center mb-2",children:e.jsx("span",{style:{backgroundColor:`${c}`},className:"px-2 py-2 rounded-full text-xl",children:a})}),n]}),e.jsx("div",{onClick:()=>r(!1),className:"absolute hover:scale-105 cursor-pointer text-sm top-1 right-2",children:"x"})]})});t.Header=({children:o})=>e.jsx("div",{className:"font-semibold text-base leading-5 text-darkBlack mb-1",children:o});t.Content=({children:o})=>e.jsx("div",{className:"text-[14px] text-[#667085] leading-5",children:o});t.Footer=({children:o})=>e.jsx("div",{className:"mt-8 flex items-center justify-center gap-4 w-full",children:o});t.Header.displayName="Popup.Header";t.Content.displayName="Popup.Content";t.Footer.displayName="Popup.Footer";t.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null}],displayName:"Popup"};const P={title:"components/Popup",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},h=o=>{const[r,n]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),children:"Open Popup"}),e.jsxs(t,{...o,show:r,setShow:n,iconBackground:"#e6ffe4",children:[e.jsx(t.Header,{children:e.jsx("div",{children:"Success!"})}),e.jsx(t.Content,{children:e.jsx("div",{children:"Shipment Created Successfully"})}),e.jsx(t.Footer,{children:e.jsx(u,{buttonType:"primary",label:"Done",full:!0})})]})]})},s=h.bind({});s.args={icon:e.jsx(m,{name:"check",height:"20",width:"20",fill:"#27cd2f"}),iconBackground:"#FFFFFF"};var l,p,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [showPopup, setShowPopup] = useState(false);
  return <>
      <button onClick={() => setShowPopup(true)}>Open Popup</button>

      <Popup {...args} show={showPopup} setShow={setShowPopup} iconBackground="#e6ffe4">
        <Popup.Header>
          <div>Success!</div>
        </Popup.Header>

        <Popup.Content>
          <div>Shipment Created Successfully</div>
        </Popup.Content>

        <Popup.Footer>
          <Button buttonType="primary" label="Done" full />
        </Popup.Footer>
      </Popup>
    </>;
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const y=["Default"];export{s as Default,y as __namedExportsOrder,P as default};
