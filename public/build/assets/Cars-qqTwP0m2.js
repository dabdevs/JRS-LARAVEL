import{R as g,W as u,r as f,j as e}from"./app-D6eEK87w.js";import{S as x,P as N,a as w,u as k,E as b,D as v,c as C}from"./react-confirm-alert-BAScvgoA.js";import{A as D}from"./AuthenticatedLayout-Cq1bGDN4.js";import{I as S}from"./InputLabel-CrMCDg_G.js";import{T as I,I as M}from"./TextInput-CGeUQa2W.js";import{M as E,D as F}from"./DangerButton-enLxm9M9.js";import{C as _,S as P,P as A}from"./Sort-CDARw5MB.js";import{S as B}from"./SearchForm-Dsv9Crfh.js";import"./index-BkGAKzec.js";import"./transition-DJoTf7Wm.js";import"./Logo-d5tY7MWq.js";const T=g.memo(({car:d})=>{const{data:t,setData:r,post:i,put:c,setError:l,errors:n}=u(d||{id:0,state:[],make:[],model:[],body_type:[],minYear:"",maxYear:"",price:"",mileage:"",fuel_type:[],doors:[],transmission:[],cylinders:[]}),p=f.useCallback(a=>{if(a.preventDefault(),l("name",""),t.make===""||typeof t.make>"u"){l("name","Field is required");return}c(route("cars.update",t.id)),r("name",t.make)}),h=f.useCallback(a=>{if(a.preventDefault(),l("name",""),t.make===""||typeof t.make>"u"){l("name","Field is required");return}i(route("cars.store"),{onSuccess:m=>{const o=m.props.flash.extraData.carId;r("id",o)}})}),y=a=>{a.key==="Enter"&&a.preventDefault()};return e.jsxs("div",{className:"mt-3 pr-3 py-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[e.jsx("h3",{className:"text-base font-semibold leading-6 text-gray-900",id:"modal-title",children:"Car"}),e.jsxs("div",{className:"mt-2 w-full",children:[e.jsx(S,{htmlFor:"make",value:"Make"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(I,{id:"make",type:"text",name:"make",value:t.make,className:"mt-1 border py-2 block w-full",autoFocus:!0,onChange:a=>r("make",a.target.value),onKeyDown:y}),t.id?e.jsx(x,{onClick:p,className:"btn-sm",children:"Update"}):e.jsxs(x,{onClick:h,className:"btn-sm",disabled:t.make==="",children:[e.jsx(N,{}),"Create"]})]}),e.jsx(M,{message:n.make,className:"mt-2"})]}),t.id&&e.jsx(w,{car:t})]})}),H=g.memo(({auth:d,cars:t})=>{var a,m,o;const{isOpen:r,openModal:i,closeModal:c}=k(),{data:l,setData:n,delete:p,reset:h}=u({id:0,state:"",make:"",model:"",body_type:"",year:"",price:"",mileage:"",fuel_type:"",doors:"",transmission:"",cylinders:"",images:[],search:""}),y=s=>{C({customUI:({onClose:j})=>e.jsxs("div",{className:"bg-white shadow-md",children:[e.jsxs("div",{className:"p-5",children:[e.jsx("h1",{className:"text-2xl",children:"Are you sure?"}),e.jsx("p",{children:"You want to delete this car?"})]}),e.jsxs("div",{className:"flex gap-2 p-2 bg-gray-50",children:[e.jsx(F,{onClick:j,children:"No"}),e.jsx(x,{onClick:()=>{p(route("cars.destroy",s),{onSuccess:()=>{n("id",""),j()}})},children:"yes"})]})]})})};return e.jsx(D,{user:d.user,children:e.jsxs("section",{className:"w-full px-4 container mx-auto",children:[e.jsx(E,{isOpen:r,closeModal:c,children:e.jsx(T,{car:l})}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs(x,{onClick:()=>{h(),i()},children:[e.jsx(N,{}),"New"]}),e.jsx("div",{className:"w-1/3",children:e.jsx(B,{admin:!0})})]}),e.jsx("div",{className:"flex flex-col pb-5",children:e.jsxs("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:[e.jsx("div",{className:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",children:e.jsxs("div",{className:"overflow-hidden border border-gray-200 md:rounded-lg",children:[e.jsxs("div",{className:"p-2 flex justify-between",children:[e.jsx(_,{admin:!0,data:t}),e.jsx(P,{admin:!0})]}),e.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[e.jsx("thead",{className:"bg-gray-50",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"}),e.jsx("th",{scope:"col",className:"py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500",children:"State"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Make"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Model"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Body Type"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Year"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Price"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Mileage"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Fuel Type"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Doors"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Transmission"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Cylinders"}),e.jsx("th",{scope:"col",className:"relative py-3.5 px-4",children:e.jsx("span",{className:"sr-only",children:"Actions"})})]})}),e.jsxs("tbody",{className:"bg-white divide-y divide-gray-200",children:[(a=t==null?void 0:t.data)==null?void 0:a.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"h-[100px] p-2 text-sm font-medium text-gray-700 whitespace-nowrap",children:e.jsx("img",{className:"w-[120px] h-full",src:`../${s.images[0].url}`,alt:s.images[0].url})}),e.jsx("td",{className:"p-2 text-sm text-gray-500 whitespace-nowrap",children:s.state}),e.jsx("td",{className:"p-2 text-sm text-gray-500 whitespace-nowrap",children:s.make}),e.jsx("td",{className:"p-2 text-sm text-gray-500 whitespace-nowrap",children:s.model}),e.jsx("td",{className:"p-2 text-sm text-gray-500 whitespace-nowrap",children:s.body_type}),e.jsx("td",{className:"p-2 text-sm text-gray-500 whitespace-nowrap",children:s.year}),e.jsx("td",{className:"p-2 text-sm text-gray-500 whitespace-nowrap",children:s.price}),e.jsx("td",{className:"p-2 text-sm text-gray-500 whitespace-nowrap",children:s.mileage}),e.jsx("td",{className:"p-2 text-sm text-gray-500 whitespace-nowrap",children:s.fuel_type}),e.jsx("td",{className:"p-2 text-sm text-gray-500 whitespace-nowrap",children:s.doors}),e.jsx("td",{className:"p-2 text-sm text-gray-500 whitespace-nowrap",children:s.transmission}),e.jsx("td",{className:"p-2 text-sm text-gray-500 whitespace-nowrap",children:s.cylinders}),e.jsx("td",{className:"p-2 text-sm whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx(b,{onClick:()=>{n({id:s.id,name:s.name,permissions:s.permissions}),i()},className:"btn-sm"}),e.jsx(v,{onClick:()=>y(s.id),className:"btn-sm"})]})})]},s.id)),((m=t==null?void 0:t.data)==null?void 0:m.length)===0&&e.jsx("tr",{className:"p-8 mt-8 text-center font-bold text-2xl text-gray-600",children:e.jsx("td",{className:"py-5",colSpan:13,children:"No data found."})})]})]})]})}),((o=t==null?void 0:t.data)==null?void 0:o.length)>0&&e.jsx("div",{className:"py-2",children:e.jsx(A,{links:t.links})})]})})]})})});export{H as default};
