import{_ as n,r as i,o,c as a,a as t,F as c,f as d,t as _,b as u,w as p,d as h}from"./index-d710a93e.js";const{VITE_URL:m,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"caiji_hexschool",BASE_URL:"/vueweek8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},x={data(){return{products:[]}},mounted(){this.$http.get(`${m}api/${f}/products`).then(e=>{console.log(e),this.products=e.data.products}).catch(e=>{console.log(e)})}},g=t("h2",null,"products page",-1),k={class:"d-flex flex-wrap gap-3"},V=["src","alt"],E={class:"card-body"},v={class:"card-title"},T=t("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. ",-1);function $(e,b,w,y,r,R){const l=i("router-link");return o(),a(c,null,[g,t("div",k,[(o(!0),a(c,null,d(r.products,s=>(o(),a("div",{key:s.title,class:"card",style:{width:"18rem"}},[t("img",{src:s.imageUrl,class:"card-img-top",alt:s.title},null,8,V),t("div",E,[t("h5",v,_(s.title),1),T,u(l,{to:`product/${s.id}`,class:"btn btn-primary"},{default:p(()=>[h("看產品")]),_:2},1032,["to"])])]))),128))])],64)}const B=n(x,[["render",$]]);export{B as default};
