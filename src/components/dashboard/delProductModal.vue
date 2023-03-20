<template>
  <div class="modal" tabindex="-1" ref="delmodal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">刪除商品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="mb-2">你要刪除<strong>{{tempProduct.title}}</strong>嗎?</p>
          <p class="text-danger fs-additional">刪除後即無法復原</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="delProduct">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap';
import {mapActions} from 'pinia';
import AdminAllProducts from '../../stores/AdminAllProducts';
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
    data(){
        return{
            modal:null
        }
    },
    props:['tempProduct','pages'],
    emits:['delProduct'],
    methods:{
        delProduct(){
            console.log(this.tempProduct.id);
            const id = this.tempProduct.id;
            this.$http.delete(`${VITE_URL}api/${VITE_PATH}/admin/product/${id}`)
            .then((res) => {
                console.log(res);
                this.$emit('delProduct',this.pages.current_page);
                this.getAllProducts();
            })
            .catch((err) => {
                console.log(err);
            })
            this.modal.hide();
        },
        ...mapActions(AdminAllProducts,['getAllProducts'])

    },
    mounted(){
        this.modal = new bootstrap.Modal(this.$refs.delmodal);
    }
};
</script>
