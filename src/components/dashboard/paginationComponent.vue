<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link cursor-pointer text-primary" aria-label="Previous" :class="{disabled:!pages.has_pre}" @click.prevent="$emit('changePage',pages.current_page-1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="page in pages.total_pages" :key="page+1" class="page-item" :class="{active:page===pages.current_page}">
        <a class="page-link cursor-pointer text-primary" @click.prevent="$emit('changePage',page)">{{page}}</a>
        </li>
      <li class="page-item">
        <a class="page-link cursor-pointer text-primary" aria-label="Next" :class="{disabled:!pages.has_next}" @click.prevent="$emit('changePage',pages.current_page+1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    props:['pages'],
    emits:['changePage']
}
</script>

<style lang="scss" scoped>
.active> .page-link{
  background-color: #F19DB5;
  border-color: #F19DB5;
  color: white !important;
}

</style>
