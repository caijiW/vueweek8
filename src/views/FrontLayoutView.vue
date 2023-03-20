<template>
  <NavbarComponent></NavbarComponent>
  <main>
    <router-view></router-view>
    <!-- <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-xxx">Dark</button>
    <p class="text-xxx">123</p>
    <h3 class="test-wahaha">ㄏ哈哈哈哈哈哈</h3>
    <p class="fs-1">測試用</p>
    <h1 class="mb-6">標題</h1> -->
  </main>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
export default {
  components: {
    NavbarComponent
  }
}
</script>
