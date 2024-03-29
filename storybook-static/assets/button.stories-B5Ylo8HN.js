import{n as R,c,j as e}from"./emotion-styled.browser.esm-D_1Qo5ou.js";import{r as W}from"./index-CsdIBAqE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B3px7Awq.js";const P=R.button`
  // reset button styles
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;

  border-radius: 28px;
  height: 51px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    background: #ddd;
    cursor: unset;
  }

  ${n=>S(n.appearance)}
`,S=n=>{switch(n){case"secondary":return c`
        background: #d9d9d9;
        color: black;
      `;default:return c`
        background: #5b1fd9;
        color: white;
      `}},r=W.forwardRef((n,g)=>{const{as:b,children:j,appearance:v="primary",disabled:a=!1,onClick:d,...D}=n,k=i=>{if(a){i.preventDefault();return}d==null||d(i)},w=a?{background:"#ddd",cursor:"unset"}:null;return e.jsx(P,{as:b,ref:g,appearance:v,onClick:k,disabled:a,style:w,...D,children:j})});r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<C>["ref"]'},description:""}}};const E={title:"Button",component:r},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{appearance:"primary",children:"Button"}),e.jsx(r,{appearance:"secondary",children:"Button"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{disabled:!0,children:"Button"}),e.jsx(r,{as:"div",disabled:!0,children:"Button"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{children:"Button"}),e.jsx(r,{as:"a",href:"#",children:"Anchor"})]})};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>\r
      <Button appearance="primary">Button</Button>\r
      <Button appearance="secondary">Button</Button>\r
    </div>
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>\r
      <Button disabled>Button</Button>\r
      <Button as="div" disabled>\r
        Button\r
      </Button>\r
    </div>
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,y,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>\r
      <Button>Button</Button>\r
      <Button as="a" href="#">\r
        Anchor\r
      </Button>\r
    </div>
}`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const V=["Variant","WithDisabled","WithPolymorphism"];export{t as Variant,o as WithDisabled,s as WithPolymorphism,V as __namedExportsOrder,E as default};
