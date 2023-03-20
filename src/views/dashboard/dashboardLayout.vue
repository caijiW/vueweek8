<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 ps-0">
          <nav class="nav flex-column position-fixed w-15 h-100 bg-black">
            <ul class="ps-0 text-center mt-8">
              <li class="nav-item">
                <router-link class="nav-link" to="/admin" :exact-active-class="'text-white'"
                  >產品管理</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/orders" :exact-active-class="'text-white'"
                  >訂單管理</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/coupon" :exact-active-class="'text-white'"
                  >優惠券管理</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-10">
          <section class="text-end">
            <button type="button" class="btn btn-outline-primary my-3 btn-logout" @click="logout">登出</button>
          </section>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
  <!-- <div class="container-fluid">
    <div class="row">
      <div class="col-2 ps-0 bg-black">
         <nav class="nav flex-column h-100  position-fixed w-15">
            <ul class="ps-0 text-center mt-8">
              <li class="nav-item">
                <router-link class="nav-link" to="/admin" :exact-active-class="'text-white'">產品管理</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link " to="/admin/orders" :exact-active-class="'text-white'">訂單管理</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link"  to="/admin/coupon" :exact-active-class="'text-white'">優惠券管理</router-link>
              </li>
            </ul>
          </nav>
      </div>
        <div class="col-10">
          <main>
            <router-view></router-view>
          </main>
        </div>
    </div>
  </div> -->
</template>

<script>
const { VITE_URL } = import.meta.env;
export default {
  methods: {
    checkLogin() {
      this.$http
        .post(`${VITE_URL}api/user/check`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          alert('驗證錯誤，請重新登入');
          this.$router.push('/login');
        });
    },
    logout(){
     this.$http
        .post(`${VITE_URL}logout`)
        .then((res) => {
          console.log(res);
          this.$router.push('/login');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  created() {
    //取出cookie
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)caijiToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    //放入axios headers裡 每次發請求都夾帶cookie一起送出
    this.$http.defaults.headers.common['Authorization'] = token;
    this.checkLogin();
  }
};
</script>

<style lang="scss" scoped>
a {
  color: rgba(255, 255, 255, 0.5);
}
.nav-link:hover {
  color: white;
}

.btn-logout:hover{
  color: white;
}

//  .router-link-exact-active{
//   color: white;
//  }
</style>
