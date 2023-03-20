<template>
  <productModal
    ref="modal"
    :tempProduct="tempProduct"
    @updateItem="getProductsList"
    :isNew="isNew"
    :pages="pages"
  ></productModal>
  <delProductModal ref="delModal" :tempProduct="tempProduct" @delProduct="getProductsList" :pages="pages"></delProductModal>
  <section class="text-end">
    <button type="button" class="btn btn-primary mt-6 mb-3" @click="addTempProduct('create')">
      新增商品
    </button>
  </section>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">主圖</th>
        <th scope="col">商品名稱</th>
        <th scope="col">分類</th>
        <th scope="col">原價</th>
        <th scope="col">售價</th>
        <th scope="col">啟用</th>
        <th scope="col">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, i) in products" :key="product.id" class="align-middle">
        <td>
          <img :src="product.imageUrl" :alt="product.title" class="productsListImg" />
        </td>
        <td>{{ product.title }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.origin_price }}</td>
        <td>{{ product.price }}</td>
        <td>
          <template v-if="product.is_enabled">
            <i class="bi bi-check-circle-fill fs-5 text-success"></i>
          </template>
          <span v-else>–</span>
        </td>
        <td>
          <i
            class="bi bi-pencil-square fs-5 pe-1 icon-edit cursor-pointer"
            @click="addTempProduct('edit', product)"
          ></i>
          |
          <i class="bi bi-trash-fill fs-5 ps-1 icon-delete cursor-pointer"
          @click="addTempProduct('del', product)"></i>
        </td>
      </tr>
    </tbody>
  </table>
  <pagination :pages="pages" @changePage="getProductsList"></pagination>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import productModal from '../../components/dashboard/ProductModal.vue';
import delProductModal from '../../components/dashboard/delProductModal.vue';
import pagination from '../../components/dashboard/paginationComponent.vue';
export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      isNew: true,
      pages:{}
    };
  },
  components: { productModal, delProductModal, pagination },
  methods: {
    getProductsList(page=1) {
      this.$http
        .get(`${VITE_URL}api/${VITE_PATH}/admin/products?page=${page}`)
        .then((res) => {
          console.log(res);
          this.pages=res.data.pagination;
          console.log('商品列表', res.data.products);
          this.products = res.data.products;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addTempProduct(status, product) {
      //console.log(this.$refs.modal.Modal);
      //console.log(status);
      if (status === 'create') {
        this.isNew=true;
        this.tempProduct = {
          category: '',
          is_enabled: false,
          recommend: false,
          imagesUrl: []
        };
        this.$refs.modal.Modal.show();
      } else if(status==='edit'){
        this.isNew = false;
        this.tempProduct = JSON.parse(JSON.stringify(product));
        //之後補上正確商品後可刪
        console.log(this.tempProduct.imagesUrl);
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = [];
          console.log(this.tempProduct.imagesUrl);
        }
        //
        this.$refs.modal.Modal.show();
      }else{
        console.log(this.$refs);
        this.tempProduct = JSON.parse(JSON.stringify(product));
        //之後補上正確商品後可刪
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = [];
          console.log(this.tempProduct.imagesUrl);
        }
        //
        this.$refs.delModal.modal.show();
      }
    }
  },
  mounted() {
    this.getProductsList();
  }
};
</script>
<style lang="scss" scoped>
.productsListImg {
  width: 100px;
  height: 70px;
  object-fit: cover;
}

.icon-edit:hover {
  color: #5aa572;
}

.icon-delete:hover {
  color: #e94738;
}
</style>
