import{n as g,c as a,j as e}from"./emotion-styled.browser.esm-D_1Qo5ou.js";import{r as w}from"./index-CsdIBAqE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B3px7Awq.js";const T={white:"#fff",black:"#000",gray100:"#272729",gray200:"#3E3E45",gray300:"#4D4D57",gray400:"#D9D9D9",gray600:"#A6A6B9",gray700:"#C4C4C4",gray800:"#D9D9D9",green175:"#AFF73C",orange300:"#F2822A",violet100:"#5B1FD9",violet200:"#6230CB",violet400:"#8551F1",yellow300:"#FAD40E",yellow500:"#FFED47"},n={21:"21px",18:"18px",15:"15px",13:"13px",10:"10px",7:"7px"},l={400:"400"},p={31:"31px",28:"28px",25:"25px",23:"23px",20:"20px",17:"17px"},m=g.span`
  ${o=>u(o.color)};
  ${o=>b(o.appearance)};
`,b=o=>{switch(o){case"body1":return a`
        font-size: ${n[15]};
        font-weight: ${l[400]};
        line-height: ${p[25]};
      `;case"body2":return a`
        font-size: ${n[13]};
        font-weight: ${l[400]};
        line-height: ${p[23]};
      `;case"body3":return a`
        font-size: ${n[10]};
        font-weight: ${l[400]};
        line-height: ${p[20]};
      `;case"header1":return a`
        font-size: ${n[21]};
        font-weight: ${l[400]};
        line-height: ${p[31]};
      `;case"header2":return a`
        font-size: ${n[18]};
        font-weight: ${l[400]};
        line-height: ${p[28]};
      `;default:return a`
        font-size: ${n[7]};
        font-weight: ${l[400]};
        line-height: ${p[17]};
      `}},u=o=>a`
    color: ${T[o]};
  `,r=w.forwardRef((o,s)=>{const{as:y,children:h,appearance:x="body1",...f}=o;return e.jsx(m,{as:y,ref:s,appearance:x,...f,children:h})});r.__docgenInfo={description:"",methods:[],displayName:"Typo",props:{ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<C>["ref"]'},description:""}}};const v={title:"Typo",component:r},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{appearance:"header1",children:"hello world"}),e.jsx(r,{appearance:"header2",children:"hello world"}),e.jsx(r,{appearance:"body1",children:"hello world"}),e.jsx(r,{appearance:"body2",children:"hello world"}),e.jsx(r,{appearance:"body3",children:"hello world"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{appearance:"header1",color:"black",children:"hello world"}),e.jsx(r,{appearance:"header2",color:"gray600",children:"hello world"}),e.jsx(r,{appearance:"body1",color:"orange300",children:"hello world"}),e.jsx(r,{appearance:"body2",color:"violet400",children:"hello world"}),e.jsx(r,{appearance:"body3",color:"yellow500",children:"hello world"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{appearance:"header1",children:"Header1"}),e.jsx(r,{appearance:"header2",children:"header2"}),e.jsx(r,{appearance:"body1",children:"body1"}),e.jsx(r,{appearance:"body2",children:"body2"}),e.jsx(r,{appearance:"body3",children:"body3"})]})]})};var c,t,i;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "row",
    gap: "1rem"
  }}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>\r
        <Typo appearance="header1">hello world</Typo>\r
        <Typo appearance="header2">hello world</Typo>\r
        <Typo appearance="body1">hello world</Typo>\r
        <Typo appearance="body2">hello world</Typo>\r
        <Typo appearance="body3">hello world</Typo>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>\r
        <Typo appearance="header1" color="black">\r
          hello world\r
        </Typo>\r
        <Typo appearance="header2" color="gray600">\r
          hello world\r
        </Typo>\r
        <Typo appearance="body1" color="orange300">\r
          hello world\r
        </Typo>\r
        <Typo appearance="body2" color="violet400">\r
          hello world\r
        </Typo>\r
        <Typo appearance="body3" color="yellow500">\r
          hello world\r
        </Typo>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>\r
        <Typo appearance="header1">Header1</Typo>\r
        <Typo appearance="header2">header2</Typo>\r
        <Typo appearance="body1">body1</Typo>\r
        <Typo appearance="body2">body2</Typo>\r
        <Typo appearance="body3">body3</Typo>\r
      </div>\r
    </div>
}`,...(i=(t=d.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const C=["Default"];export{d as Default,C as __namedExportsOrder,v as default};
