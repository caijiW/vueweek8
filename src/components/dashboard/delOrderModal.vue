<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">刪除商品</h5>
          <i
            class="bi bi-x-lg bg-dark text-white cursor-pointer fs-5 fw-bold"
            data-bs-dismiss="modal"
          ></i>
        </div>
        <div class="modal-body">
          <p class="mb-2">
            你要刪除<strong>{{ tempOrder.id }}</strong
            >嗎?
          </p>
          <p class="text-danger fs-additional">刪除後即無法復原</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="delOrder">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap';
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  props: ['tempOrder'],
  emits:['delOrder'],
  methods: {
    delOrder() {
      const id = this.tempOrder.id;
      // console.log(id);
       this.$http
        .delete(`${VITE_URL}api/${VITE_PATH}/admin/order/${id}`)
        .then((res) => {
          console.log(res);
          this.$emit('delOrder');
        })
        .catch((err) => {
          console.log(err);
        });
      this.Modal.hide();
    }
  },
  mounted() {
    this.Modal = new bootstrap.Modal(this.$refs.modal);
  }
};
</script>
