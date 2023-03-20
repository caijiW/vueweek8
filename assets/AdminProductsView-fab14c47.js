import{m as D,n as N,q as S,s as $,M as C,_ as k,r as b,o as a,c as r,a as e,t as g,b as c,w as E,g as F,F as f,f as w,h as _,j as y,u as P,x as M,y as A,p as R,e as L,d as x}from"./index-d710a93e.js";import{p as H}from"./paginationComponent-ceb5beab.js";const{VITE_URL:q,VITE_PATH:B}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"caiji_hexschool",BASE_URL:"/vueweek8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},I=D("AdminAllProductsStore",{state:()=>({allProducts:[]}),actions:{getAllProducts(){N.get(`${q}api/${B}/admin/products/all`).then(s=>{console.log(s),this.allProducts=s.data.products}).catch(s=>{console.log(s)})}}});const{VITE_URL:U,VITE_PATH:V}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"caiji_hexschool",BASE_URL:"/vueweek8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},j={props:["tempProduct","isNew","pages"],data(){return{Modal:null,file:null,modalTempProduct:{category:"",is_enabled:!1,recommend:!1,imagesUrl:[]},categoryType:"categoryOld"}},emits:["updateItem"],methods:{updatItem(){let s="post",o=`${U}api/${V}/admin/product`,n="新增未成功";this.isNew||(s="put",o=`${U}api/${V}/admin/product/${this.modalTempProduct.id}`,n="編輯未成功"),this.$http[s](o,{data:this.modalTempProduct}).then(p=>{console.log(p),this.$emit("updateItem",this.pages.current_page),this.getAllProducts(),this.Modal.hide()}).catch(p=>{console.log(p),alert(n)})},uploadImage(s){this.file=s.target.files[0];const o=new FormData;o.append("file-to-upload",this.file),this.$http.post(`${U}api/${V}/admin/upload`,o).then(n=>{console.log(n),this.modalTempProduct.imagesUrl.push(n.data.imageUrl)}).catch(n=>{console.dir(n.response)})},setMainImg(s){const o=this.modalTempProduct.imagesUrl[s];this.modalTempProduct.imagesUrl.splice(s,1),this.modalTempProduct.imagesUrl.unshift(o)},deleteImg(s){this.modalTempProduct.imagesUrl.splice(s,1),this.modalTempProduct.imageUrl=this.modalTempProduct.imagesUrl[0],document.querySelector("#inputFile").value=""},...S(I,["getAllProducts"])},watch:{modalTempProduct:{handler(){this.modalTempProduct.imageUrl=this.modalTempProduct.imagesUrl[0]},deep:!0},categoryType(){console.log("123"),this.modalTempProduct.category="",console.log(this.modalTempProduct.category)},tempProduct(){console.log(this.$refs.productModalForm),this.modalTempProduct=this.tempProduct,this.categoryType="categoryOld",document.querySelector("#inputFile").value=""}},computed:{...$(I,["allProducts"]),sortOldCategory(s){console.log(s);const o=Object.values(this.allProducts);let n={};return n=new Set(o.map(p=>p.category)),n}},mounted(){this.Modal=new C(this.$refs.modal),this.$refs.modal.addEventListener("hidden.bs.modal",()=>{this.$refs.productModalForm.resetForm()}),this.getAllProducts()}},m=s=>(R("data-v-e85271a8"),s=s(),L(),s),J={class:"modal",tabindex:"-1",ref:"modal",id:"modal"},z={class:"modal-dialog modal-xl"},G={class:"modal-content"},K={class:"modal-header bg-dark"},Q={class:"modal-title text-white"},W=m(()=>e("i",{class:"bi bi-x-lg bg-dark text-white cursor-pointer fs-5 fw-bold","data-bs-dismiss":"modal"},null,-1)),X={class:"modal-body"},Y={class:"container"},Z={class:"row"},ee={class:"col-4"},oe=["src"],te={class:"col-8"},se={key:0,class:"d-flex w-100 scrollBar p-0"},le=["onClick"],de=["onClick"],ie=["src"],ce={key:1},ae={class:"row mt-2"},re={class:"col-6"},ne={class:"col-6"},me={class:"input-group mb-3"},ue=m(()=>e("span",{class:"input-group-text"},"上傳網址",-1)),pe={class:"row"},he={class:"col-4"},_e={class:"mb-3"},ge=m(()=>e("label",{for:"input-productTitle",class:"form-label"},"商品名稱",-1)),Pe={class:"col-4"},fe={class:"mb-3"},be=m(()=>e("label",{for:"input-productOriginPrice",class:"form-label"},"原價",-1)),Te={class:"col-4"},ve={class:"mb-3"},ye=m(()=>e("label",{for:"input-productPrice",class:"form-label"},"商品售價",-1)),Ue={class:"row"},Ve={class:"col-4"},we={class:"mb-3"},xe=m(()=>e("label",{for:"input-productCategory",class:"form-label"},"分類",-1)),Ie=m(()=>e("label",{class:"form-check-label",for:"categoryOld"}," 原有分類 ",-1)),ke=m(()=>e("label",{class:"form-check-label",for:"categoryNew"}," 新增分類 ",-1)),Ee=m(()=>e("option",{value:""},"請選擇",-1)),Me=["value"],Ae={class:"mb-3"},Se=m(()=>e("label",{for:"input-productUnit",class:"form-label"},"單位",-1)),Ce={class:"col-4"},Re={class:"mb-3"},Le=m(()=>e("label",{for:"input-productDescription",class:"form-label"},"商品敘述",-1)),Oe={class:"col-4"},De={class:"mb-3"},Ne=m(()=>e("label",{for:"input-productContent",class:"form-label"},"商品說明",-1)),$e={class:"row"},Fe={class:"col-4 d-flex"},He={class:"form-check"},qe=m(()=>e("label",{class:"form-check-label",for:"input-productEnabled"}," 啟用 ",-1)),Be={class:"form-check ms-3"},je=m(()=>e("label",{class:"form-check-label",for:"input-productRecommend"}," 推薦 ",-1)),Je=m(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),e("button",{type:"submit",class:"btn btn-primary"},"Save changes")],-1));function ze(s,o,n,p,t,i){const u=b("VField"),h=b("ErrorMessage"),v=b("VForm");return a(),r("div",J,[e("div",z,[e("div",G,[e("div",K,[e("h5",Q,g(n.isNew?"新增商品":"修改商品內容"),1),W]),c(v,{ref:"productModalForm",onSubmit:i.updatItem},{default:E(({errors:d})=>[e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[t.modalTempProduct.imageUrl?(a(),r("img",{key:0,src:t.modalTempProduct.imageUrl,class:"w-100"},null,8,oe)):F("",!0)]),e("div",te,[t.modalTempProduct.imagesUrl.length>0?(a(),r("ul",se,[(a(!0),r(f,null,w(t.modalTempProduct.imagesUrl,(l,T)=>(a(),r("li",{key:l+1,class:"me-1 w-50 flex-shrink-0 position-relative"},[e("button",{type:"button",class:"position-absolute w-50 h-15 bg-primaryLight border-0",onClick:O=>i.setMainImg(T)}," 設為主圖 ",8,le),e("button",{type:"button",class:"position-absolute end-0 w-50 h-15 bg-danger border-0",onClick:O=>i.deleteImg(T)}," 移除 ",8,de),e("img",{src:t.modalTempProduct.imagesUrl[T],alt:"",class:"productImgs"},null,8,ie)]))),128))])):(a(),r("p",ce,"還未新增任何圖片"))])]),e("div",ae,[e("div",re,[e("input",{type:"file",class:"file mb-3 form-control",id:"inputFile",onChange:o[0]||(o[0]=(...l)=>i.uploadImage&&i.uploadImage(...l))},null,32)]),e("div",ne,[e("div",me,[ue,_(e("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[1]||(o[1]=l=>t.modalTempProduct.imagesUrl[t.modalTempProduct.imagesUrl.length]=l)},null,512),[[y,t.modalTempProduct.imagesUrl[t.modalTempProduct.imagesUrl.length]]])])])]),e("div",pe,[e("div",he,[e("div",_e,[ge,c(u,{type:"text",class:P(["form-control",{"is-invalid":d.商品名稱}]),id:"input-productTitle",placeholder:"請輸入商品名稱",modelValue:t.modalTempProduct.title,"onUpdate:modelValue":o[2]||(o[2]=l=>t.modalTempProduct.title=l),name:"商品名稱",rules:"required"},null,8,["modelValue","class"]),c(h,{name:"商品名稱"})])]),e("div",Pe,[e("div",fe,[be,c(u,{type:"text",class:P(["form-control",{"is-invalid":d.商品原價}]),id:"input-productOriginPrice",placeholder:"請輸入商品原價",modelValue:t.modalTempProduct.origin_price,"onUpdate:modelValue":o[3]||(o[3]=l=>t.modalTempProduct.origin_price=l),modelModifiers:{number:!0},name:"商品原價",rules:"required"},null,8,["modelValue","class"]),c(h,{name:"商品原價"})])]),e("div",Te,[e("div",ve,[ye,c(u,{type:"text",class:P(["form-control",{"is-invalid":d.商品售價}]),id:"input-productPrice",placeholder:"請輸入商品售價",modelValue:t.modalTempProduct.price,"onUpdate:modelValue":o[4]||(o[4]=l=>t.modalTempProduct.price=l),modelModifiers:{number:!0},name:"商品售價",rules:"required"},null,8,["modelValue","class"]),c(h,{name:"商品售價"})])])]),e("div",Ue,[e("div",Ve,[e("div",we,[xe,_(e("input",{class:"form-check-input ms-3 me-2",type:"radio",id:"categoryOld",value:"categoryOld","onUpdate:modelValue":o[5]||(o[5]=l=>t.categoryType=l)},null,512),[[M,t.categoryType]]),Ie,_(e("input",{class:"form-check-input ms-3 me-2",type:"radio",id:"categoryNew",value:"categoryNew","onUpdate:modelValue":o[6]||(o[6]=l=>t.categoryType=l)},null,512),[[M,t.categoryType]]),ke,t.categoryType==="categoryOld"?(a(),r(f,{key:0},[c(u,{class:P(["form-select",{"is-invalid":d.分類}]),modelValue:t.modalTempProduct.category,"onUpdate:modelValue":o[7]||(o[7]=l=>t.modalTempProduct.category=l),name:"分類",rules:"required",as:"select"},{default:E(()=>[Ee,(a(!0),r(f,null,w(i.sortOldCategory,l=>(a(),r("option",{key:l+1,value:l},g(l),9,Me))),128))]),_:2},1032,["modelValue","class"]),c(h,{name:"分類"})],64)):(a(),r(f,{key:1},[c(u,{type:"text",class:P(["form-control",{"is-invalid":d.分類}]),id:"input-productCategory",placeholder:"請輸入商品分類",modelValue:t.modalTempProduct.category,"onUpdate:modelValue":o[8]||(o[8]=l=>t.modalTempProduct.category=l),name:"分類",rules:"required"},null,8,["modelValue","class"]),c(h,{name:"分類"})],64))]),e("div",Ae,[Se,c(u,{type:"text",class:P(["form-control",{"is-invalid":d.單位}]),id:"input-productUnit",placeholder:"請輸入商品單位",modelValue:t.modalTempProduct.unit,"onUpdate:modelValue":o[9]||(o[9]=l=>t.modalTempProduct.unit=l),name:"單位",rules:"required"},null,8,["modelValue","class"]),c(h,{name:"單位"})])]),e("div",Ce,[e("div",Re,[Le,_(e("textarea",{class:"form-control",id:"input-productDescription",rows:"4",style:{height:"120px",resize:"none"},"onUpdate:modelValue":o[10]||(o[10]=l=>t.modalTempProduct.description=l)},null,512),[[y,t.modalTempProduct.description]])])]),e("div",Oe,[e("div",De,[Ne,_(e("textarea",{class:"form-control",id:"input-productContent",rows:"4",style:{height:"120px",resize:"none"},"onUpdate:modelValue":o[11]||(o[11]=l=>t.modalTempProduct.content=l)},null,512),[[y,t.modalTempProduct.content]])])])]),e("div",$e,[e("div",Fe,[e("div",He,[_(e("input",{class:"form-check-input",type:"checkbox",id:"input-productEnabled","onUpdate:modelValue":o[12]||(o[12]=l=>t.modalTempProduct.is_enabled=l)},null,512),[[A,t.modalTempProduct.is_enabled]]),qe]),e("div",Be,[_(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"input-productRecommend","onUpdate:modelValue":o[13]||(o[13]=l=>t.modalTempProduct.recommend=l)},null,512),[[A,t.modalTempProduct.recommend]]),je])])])])]),Je]),_:1},8,["onSubmit"])])])],512)}const Ge=k(j,[["render",ze],["__scopeId","data-v-e85271a8"]]),{VITE_URL:Ke,VITE_PATH:Qe}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"caiji_hexschool",BASE_URL:"/vueweek8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},We={data(){return{modal:null}},props:["tempProduct","pages"],emits:["delProduct"],methods:{delProduct(){console.log(this.tempProduct.id);const s=this.tempProduct.id;this.$http.delete(`${Ke}api/${Qe}/admin/product/${s}`).then(o=>{console.log(o),this.$emit("delProduct",this.pages.current_page),this.getAllProducts()}).catch(o=>{console.log(o)}),this.modal.hide()},...S(I,["getAllProducts"])},mounted(){this.modal=new C(this.$refs.delmodal)}},Xe={class:"modal",tabindex:"-1",ref:"delmodal"},Ye={class:"modal-dialog"},Ze={class:"modal-content"},eo=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{class:"modal-title"},"刪除商品"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),oo={class:"modal-body"},to={class:"mb-2"},so=e("p",{class:"text-danger fs-additional"},"刪除後即無法復原",-1),lo={class:"modal-footer"},io=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function co(s,o,n,p,t,i){return a(),r("div",Xe,[e("div",Ye,[e("div",Ze,[eo,e("div",oo,[e("p",to,[x("你要刪除"),e("strong",null,g(n.tempProduct.title),1),x("嗎?")]),so]),e("div",lo,[io,e("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=(...u)=>i.delProduct&&i.delProduct(...u))},"確認")])])])],512)}const ao=k(We,[["render",co]]);const{VITE_URL:ro,VITE_PATH:no}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"caiji_hexschool",BASE_URL:"/vueweek8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},mo={data(){return{products:[],tempProduct:{},isNew:!0,pages:{}}},components:{productModal:Ge,delProductModal:ao,pagination:H},methods:{getProductsList(s=1){this.$http.get(`${ro}api/${no}/admin/products?page=${s}`).then(o=>{console.log(o),this.pages=o.data.pagination,console.log("商品列表",o.data.products),this.products=o.data.products}).catch(o=>{console.log(o)})},addTempProduct(s,o){s==="create"?(this.isNew=!0,this.tempProduct={category:"",is_enabled:!1,recommend:!1,imagesUrl:[]},this.$refs.modal.Modal.show()):s==="edit"?(this.isNew=!1,this.tempProduct=JSON.parse(JSON.stringify(o)),console.log(this.tempProduct.imagesUrl),this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[],console.log(this.tempProduct.imagesUrl)),this.$refs.modal.Modal.show()):(console.log(this.$refs),this.tempProduct=JSON.parse(JSON.stringify(o)),this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[],console.log(this.tempProduct.imagesUrl)),this.$refs.delModal.modal.show())}},mounted(){this.getProductsList()}},uo=s=>(R("data-v-1bde1ffc"),s=s(),L(),s),po={class:"text-end"},ho={class:"table table-hover"},_o=uo(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col"},"主圖"),e("th",{scope:"col"},"商品名稱"),e("th",{scope:"col"},"分類"),e("th",{scope:"col"},"原價"),e("th",{scope:"col"},"售價"),e("th",{scope:"col"},"啟用"),e("th",{scope:"col"},"編輯")])],-1)),go=["src","alt"],Po={key:0,class:"bi bi-check-circle-fill fs-5 text-success"},fo={key:1},bo=["onClick"],To=["onClick"];function vo(s,o,n,p,t,i){const u=b("productModal"),h=b("delProductModal"),v=b("pagination");return a(),r(f,null,[c(u,{ref:"modal",tempProduct:t.tempProduct,onUpdateItem:i.getProductsList,isNew:t.isNew,pages:t.pages},null,8,["tempProduct","onUpdateItem","isNew","pages"]),c(h,{ref:"delModal",tempProduct:t.tempProduct,onDelProduct:i.getProductsList,pages:t.pages},null,8,["tempProduct","onDelProduct","pages"]),e("section",po,[e("button",{type:"button",class:"btn btn-primary mt-6 mb-3",onClick:o[0]||(o[0]=d=>i.addTempProduct("create"))}," 新增商品 ")]),e("table",ho,[_o,e("tbody",null,[(a(!0),r(f,null,w(t.products,(d,l)=>(a(),r("tr",{key:d.id,class:"align-middle"},[e("td",null,[e("img",{src:d.imageUrl,alt:d.title,class:"productsListImg"},null,8,go)]),e("td",null,g(d.title),1),e("td",null,g(d.category),1),e("td",null,g(d.origin_price),1),e("td",null,g(d.price),1),e("td",null,[d.is_enabled?(a(),r("i",Po)):(a(),r("span",fo,"–"))]),e("td",null,[e("i",{class:"bi bi-pencil-square fs-5 pe-1 icon-edit cursor-pointer",onClick:T=>i.addTempProduct("edit",d)},null,8,bo),x(" | "),e("i",{class:"bi bi-trash-fill fs-5 ps-1 icon-delete cursor-pointer",onClick:T=>i.addTempProduct("del",d)},null,8,To)])]))),128))])]),c(v,{pages:t.pages,onChangePage:i.getProductsList},null,8,["pages","onChangePage"])],64)}const Vo=k(mo,[["render",vo],["__scopeId","data-v-1bde1ffc"]]);export{Vo as default};
