import{_ as u,o as p,c as _,a as e,h as a,j as d,k as c,l as m,p as h,e as f}from"./index-d710a93e.js";const{VITE_URL:w}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"caiji_hexschool",BASE_URL:"/vueweek8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},v={data(){return{user:{username:"",password:""}}},methods:{logIn(){if(this.user.username==""||this.user.password==""){alert("請輸入帳號密碼");return}this.$http.post(`${w}admin/signin`,this.user).then(o=>{console.log(o);const{token:s,expired:l}=o.data;document.cookie=`caijiToken=${s}; expires=${new Date(l)}`,this.$router.push("/admin")}).catch(o=>{console.log(o),alert("登入失敗"),this.user.username="",this.user.password=""})}}},i=o=>(h("data-v-72737c01"),o=o(),f(),o),g={class:"container"},I={class:"row justify-content-center align-item-center"},b={class:"col-6"},y=i(()=>e("h2",null,"後臺傳送門",-1)),x={ref:"form"},V={class:"mb-3"},k=i(()=>e("label",{for:"input-email",class:"form-label"},"帳號",-1)),E={class:"mb-5"},S=i(()=>e("label",{for:"input-password",class:"form-label"},"密碼",-1)),T={class:"d-grid"};function D(o,s,l,L,r,n){return p(),_("div",g,[e("div",I,[e("div",b,[y,e("form",x,[e("div",V,[k,a(e("input",{type:"email",class:"form-control",id:"input-email","onUpdate:modelValue":s[0]||(s[0]=t=>r.user.username=t),onKeyup:s[1]||(s[1]=c((...t)=>n.logIn&&n.logIn(...t),["enter"]))},null,544),[[d,r.user.username]])]),e("div",E,[S,a(e("input",{type:"password",class:"form-control",id:"input-password","onUpdate:modelValue":s[2]||(s[2]=t=>r.user.password=t),onKeyup:s[3]||(s[3]=c((...t)=>n.logIn&&n.logIn(...t),["enter"]))},null,544),[[d,r.user.password]])]),e("div",T,[e("button",{type:"submit",class:"btn btn-primary",onClick:s[4]||(s[4]=m((...t)=>n.logIn&&n.logIn(...t),["prevent"]))},"送出")])],512)])])])}const U=u(v,[["render",D],["__scopeId","data-v-72737c01"]]);export{U as default};
