<template>
  <div class="modal" tabindex="-1" ref="modal" id="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-white">{{ isNew ? '新增商品' : '修改商品內容' }}</h5>
          <i
            class="bi bi-x-lg bg-dark text-white cursor-pointer fs-5 fw-bold"
            data-bs-dismiss="modal"
          ></i>
        </div>
        <VForm ref="productModalForm" @submit="updatItem" v-slot="{ errors }">
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <template v-if="modalTempProduct.imageUrl">
                    <img :src="modalTempProduct.imageUrl" class="w-100" />
                  </template>
                </div>
                <div class="col-8">
                  <ul
                    v-if="modalTempProduct.imagesUrl.length > 0"
                    class="d-flex w-100 scrollBar p-0"
                  >
                    <!-- <ul
                  v-if="Array.isArray(modalTempProduct.imagesUrl)"
                  class="d-flex w-100 scrollBar p-0"
                > -->
                    <li
                      v-for="(image, key) in modalTempProduct.imagesUrl"
                      :key="image + 1"
                      class="me-1 w-50 flex-shrink-0 position-relative"
                    >
                      <button
                        type="button"
                        class="position-absolute w-50 h-15 bg-primaryLight border-0"
                        @click="setMainImg(key)"
                      >
                        設為主圖
                      </button>
                      <button
                        type="button"
                        class="position-absolute end-0 w-50 h-15 bg-danger border-0"
                        @click="deleteImg(key)"
                      >
                        移除
                      </button>
                      <img :src="modalTempProduct.imagesUrl[key]" alt="" class="productImgs" />
                    </li>
                  </ul>
                  <p v-else>還未新增任何圖片</p>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-6">
                  <input
                    type="file"
                    class="file mb-3 form-control"
                    id="inputFile"
                    @change="uploadImage"
                  />
                </div>
                <div class="col-6">
                  <div class="input-group mb-3">
                    <span class="input-group-text">上傳網址</span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                      v-model="modalTempProduct.imagesUrl[modalTempProduct.imagesUrl.length]"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="mb-3">
                    <label for="input-productTitle" class="form-label">商品名稱</label>
                    <VField
                      type="text"
                      class="form-control"
                      id="input-productTitle"
                      placeholder="請輸入商品名稱"
                      v-model="modalTempProduct.title"
                      name="商品名稱"
                      :class="{ 'is-invalid': errors['商品名稱'] }"
                      rules="required"
                    ></VField>
                    <ErrorMessage name="商品名稱"></ErrorMessage>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <label for="input-productOriginPrice" class="form-label">原價</label>
                    <VField
                      type="text"
                      class="form-control"
                      id="input-productOriginPrice"
                      placeholder="請輸入商品原價"
                      v-model.number="modalTempProduct.origin_price"
                      name="商品原價"
                      :class="{ 'is-invalid': errors['商品原價'] }"
                      rules="required"
                    ></VField>
                    <ErrorMessage name="商品原價"></ErrorMessage>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <label for="input-productPrice" class="form-label">商品售價</label>
                    <VField
                      type="text"
                      class="form-control"
                      id="input-productPrice"
                      placeholder="請輸入商品售價"
                      v-model.number="modalTempProduct.price"
                      name="商品售價"
                      :class="{ 'is-invalid': errors['商品售價'] }"
                      rules="required"
                    ></VField>
                    <ErrorMessage name="商品售價"></ErrorMessage>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="mb-3">
                    <label for="input-productCategory" class="form-label">分類</label>
                    <input
                      class="form-check-input ms-3 me-2"
                      type="radio"
                      id="categoryOld"
                      value="categoryOld"
                      v-model="categoryType"
                    />
                    <label class="form-check-label" for="categoryOld"> 原有分類 </label>
                    <input
                      class="form-check-input ms-3 me-2"
                      type="radio"
                      id="categoryNew"
                      value="categoryNew"
                      v-model="categoryType"
                    />
                    <label class="form-check-label" for="categoryNew"> 新增分類 </label>
                    <template v-if="categoryType === 'categoryOld'">
                      <VField
                        class="form-select"
                        v-model="modalTempProduct.category"
                         name="分類"
                        :class="{ 'is-invalid': errors['分類'] }"
                        rules="required"
                        as="select"
                      >
                        <option value="">請選擇</option>
                        <option
                          v-for="category in sortOldCategory"
                          :key="category + 1"
                          :value="category"
                        >
                          {{ category }}
                        </option>
                      </VField>
                      <ErrorMessage name="分類"></ErrorMessage>
                    </template>
                    <template v-else>
                      <VField
                        type="text"
                        class="form-control"
                        id="input-productCategory"
                        placeholder="請輸入商品分類"
                        v-model="modalTempProduct.category"
                        name="分類"
                        :class="{ 'is-invalid': errors['分類'] }"
                        rules="required"
                      ></VField>
                      <ErrorMessage name="分類"></ErrorMessage>
                    </template>
                  </div>
                  <div class="mb-3">
                    <label for="input-productUnit" class="form-label">單位</label>
                    <VField
                      type="text"
                      class="form-control"
                      id="input-productUnit"
                      placeholder="請輸入商品單位"
                      v-model="modalTempProduct.unit"
                      name="單位"
                      :class="{ 'is-invalid': errors['單位'] }"
                      rules="required"
                    ></VField>
                    <ErrorMessage name="單位"></ErrorMessage>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <label for="input-productDescription" class="form-label">商品敘述</label>
                    <textarea
                      class="form-control"
                      id="input-productDescription"
                      rows="4"
                      style="height: 120px; resize: none"
                      v-model="modalTempProduct.description"
                    ></textarea>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mb-3">
                    <label for="input-productContent" class="form-label">商品說明</label>
                    <textarea
                      class="form-control"
                      id="input-productContent"
                      rows="4"
                      style="height: 120px; resize: none"
                      v-model="modalTempProduct.content"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4 d-flex">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="input-productEnabled"
                      v-model="modalTempProduct.is_enabled"
                    />
                    <label class="form-check-label" for="input-productEnabled"> 啟用 </label>
                  </div>
                  <div class="form-check ms-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="input-productRecommend"
                      v-model="modalTempProduct.recommend"
                    />
                    <label class="form-check-label" for="input-productRecommend"> 推薦 </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap';
import AdminAllProductsStore from '../../stores/AdminAllProducts';
import { mapActions, mapState } from 'pinia';
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  props: ['tempProduct', 'isNew', 'pages'],
  data() {
    return {
      Modal: null,
      file: null,
      modalTempProduct: {
        category: '',
        is_enabled: false,
        recommend: false,
        imagesUrl: []
      },
      categoryType: 'categoryOld'
    };
  },
  emits: ['updateItem'],
  methods: {
    updatItem() {
      //console.log('modal自己的', this.modalTempProduct);
      //console.log('外部傳入', this.tempProduct);
      // console.log('isNew', this.isNew);
      let method = 'post';
      let site = `${VITE_URL}api/${VITE_PATH}/admin/product`;
      let errMessage = '新增未成功';
      if (!this.isNew) {
        method = 'put';
        site = `${VITE_URL}api/${VITE_PATH}/admin/product/${this.modalTempProduct.id}`;
        errMessage = '編輯未成功';
      }
      this.$http[method](site, { data: this.modalTempProduct })
        .then((res) => {
          console.log(res);
          //用外部的方法
          this.$emit('updateItem', this.pages.current_page);
          //從store傳入
          this.getAllProducts();
          this.Modal.hide();
        })
        .catch((err) => {
          console.log(err);
          //console.log(err.response.data.message);
          alert(errMessage);
        });
    },
    uploadImage(e) {
      //console.log('上傳圖片');
      // console.log(e);
      //console.log(this.modalTempProduct.imagesUrl);
      //console.dir(e.target.files[0]);
      this.file = e.target.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', this.file);

      this.$http
        .post(`${VITE_URL}api/${VITE_PATH}/admin/upload`, formData)
        .then((res) => {
          console.log(res);
          this.modalTempProduct.imagesUrl.push(res.data.imageUrl);
          //改到watch裡
          //this.modalTempProduct.imageUrl=this.modalTempProduct.imagesUrl[0];
        })
        .catch((err) => {
          console.dir(err.response);
        });
    },
    setMainImg(index) {
      //console.log(index);
      //console.log(this.modalTempProduct.imagesUrl[index]);
      //2張圖片位置互換
      // [this.modalTempProduct.imagesUrl[0], this.modalTempProduct.imagesUrl[index]] = [
      //   this.modalTempProduct.imagesUrl[index],
      //   this.modalTempProduct.imagesUrl[0]
      // ];
      const mainImg = this.modalTempProduct.imagesUrl[index];
      //console.log(mainImg);
      this.modalTempProduct.imagesUrl.splice(index, 1);
      this.modalTempProduct.imagesUrl.unshift(mainImg);
    },
    deleteImg(index) {
      this.modalTempProduct.imagesUrl.splice(index, 1);
      this.modalTempProduct.imageUrl = this.modalTempProduct.imagesUrl[0];
      document.querySelector('#inputFile').value = '';
    },
    ...mapActions(AdminAllProductsStore, ['getAllProducts'])
  },
  watch: {
    modalTempProduct: {
      handler() {
        // console.log(n);
        this.modalTempProduct.imageUrl = this.modalTempProduct.imagesUrl[0];
      },
      deep: true
    },
    categoryType() {
      console.log('123');
      this.modalTempProduct.category = '';
      console.log(this.modalTempProduct.category);
      
    },
    tempProduct() {
      console.log(this.$refs.productModalForm);
      //this.$refs.productModalForm.resetForm();
      this.modalTempProduct = this.tempProduct;

      this.categoryType = 'categoryOld';
      document.querySelector('#inputFile').value = '';
    }
  },
  computed: {
    ...mapState(AdminAllProductsStore, ['allProducts']),
    sortOldCategory(n) {
      console.log(n);
      const categoryArr = Object.values(this.allProducts);
      let newCategoryArr = {};
      newCategoryArr = new Set(categoryArr.map((item) => item.category));
      return newCategoryArr;
    }
  },
  mounted() {
    this.Modal = new bootstrap.Modal(this.$refs.modal);
    this.$refs.modal.addEventListener('hidden.bs.modal', () => {
      this.$refs.productModalForm.resetForm();
    });
    this.getAllProducts();
  }
};
</script>

<style lang="scss" scoped>
.btn-close {
  color: white;
}

.scrollBar {
  overflow-x: scroll;
  button {
    top: -50px;
    transition: 0.3s;
  }
  li:hover button {
    top: 0px;
  }
}

.scrollBar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f5f5f5;
}

.scrollBar::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}
.scrollBar::-webkit-scrollbar-thumb {
  border-radius: 8px;
  /* 	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
  background-color: #f19db5;
}

.productImgs {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// .scrollBar li {
//   &::before,&::after {
//     content: '設為主圖';
//     text-align: center;
//     line-height: 50px;
//     position: absolute;
//     top: -50px;
//     width: 50%;
//     height: 50px;
//     background-color: #fadce2;
//     transition: 0.3s;
//   }
//   &::after{
//     content:'移除';
//     right: 0;
//     background-color: #E94738;
//   }
//   &:hover::before{
//     top: 0;
//   }
//   &:hover::after{
//     top: 0;
//   }
// }
</style>
