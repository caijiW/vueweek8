<template>
  <div class="container">
    <div class="row justify-content-center align-item-center">
      <div class="col-6">
        <h2>後臺傳送門</h2>
        <form ref="form">
          <div class="mb-3">
            <label for="input-email" class="form-label">帳號</label>
            <input
              type="email"
              class="form-control"
              id="input-email"
              v-model="user.username"
              @keyup.enter="logIn"
             
            />
          </div>
          <div class="mb-5">
            <label for="input-password" class="form-label">密碼</label>
            <input
              type="password"
              class="form-control"
              id="input-password"
              v-model="user.password"
              @keyup.enter="logIn"
            />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary" @click.prevent="logIn">送出</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL } = import.meta.env;
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    logIn() {
      if (this.user.username == '' || this.user.password == '') {
        alert('請輸入帳號密碼');
        return;
      }

      this.$http
        .post(`${VITE_URL}admin/signin`, this.user)
        .then((res) => {
          console.log(res);
          const { token, expired } = res.data;
          document.cookie = `caijiToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/admin');
        })
        .catch((err) => {
          console.log(err);
          alert('登入失敗');
          this.user.username = '';
          this.user.password = '';
        });
    }
  }
};
</script>

<style lang="scss" scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>
