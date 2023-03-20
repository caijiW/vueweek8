<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-black p-0 position-relative">
    <div class="container">
      <div class="navbar-nav d-flex align-items-center w-100">
        <router-link class="nav-link text-primary" to="/">
          <img src="/Logo.png" alt="" style="width: 60px" />
        </router-link>
        <router-link class="nav-link text-primary ms-auto px-3 py-4" to="/about">關於我們</router-link>
        <router-link class="nav-link text-primary px-3" to="/products">產品列表</router-link>
        <router-link class="nav-link text-primary px-3" to="/cart">
          <i class="bi bi-cart text-primary"></i>
        </router-link>
        <router-link class="nav-link text-primary" to="/login">後台</router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  nav::after{
    content:'';
    position: absolute;
    bottom: -28px;
  width: 100%;
  height: 28px;
    background-image: url(/lace-navbar.png);
    background-size: 33px 28px;
    background-repeat: repeat-x;
  }
</style>
