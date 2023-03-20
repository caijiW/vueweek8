<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-white">編輯訂單</h5>
          <i
            class="bi bi-x-lg bg-dark text-white cursor-pointer fs-5 fw-bold"
            data-bs-dismiss="modal"
          ></i>
        </div>
        <div class="modal-body">
          <!-- <p>Modal body text goes here.</p> -->

          <div class="container">
            <div class="row">
              <div class="col-12">
                <div
                  class="border rounded-top p-3 m-0 d-flex justify-content-between align-items-center cursor-pointer"
                  :class="collapseOpen?'':'rounded-bottom'"
                  data-bs-toggle="collapse"
                  href="#collapseOrder"
                  aria-expanded="false"
                  aria-controls="collapseOrder"
                  @click="collapseOpen = !collapseOpen"
                >
                  <p class="m-0">訂購商品</p>
                  <i
                    class="bi bi-chevron-down fs-5 cursor-pointer"
                    :class="{ iconTransform: collapseOpen }"
                  ></i>
                </div>
                <div class="collapse" id="collapseOrder">
                  <div class="card card-body border border-top-0 rounded-0 rounded-bottom">
                    <ul class="p-0">
                      <li
                        v-for="product in modalTempOrder.products"
                        :key="product.id"
                        class="d-flex mb-3"
                      >
                        <img
                          :src="product.product.imageUrl"
                          :alt="product.product.title"
                          class="orderImg me-2"
                        />
                        <div class="d-flex flex-d flex-column justify-content-between w-50">
                          <p>{{ product.product.title }}</p>
                          <div>
                            <span>$ {{ product.product.price }}</span>
                            <span class="ms-4">x {{ product.qty }}</span>
                          </div>
                        </div>
                        <p class="ms-auto mt-auto mb-0">NT${{ product.total }}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="my-3">
                  <label for="input-orderCreatNum" class="form-label">訂單編號</label>
                  <input
                    type="text"
                    class="form-control"
                    id="input-orderCreatNum"
                    v-model="modalTempOrder.create_at"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <template v-if="modalTempOrder.user">
                <div class="col-6">
                  <div class="mb-3">
                    <label for="input-orderName" class="form-label">客戶姓名</label>
                    <input
                      type="text"
                      class="form-control"
                      id="input-orderName"
                      v-model="modalTempOrder.user.name"
                    />
                    <p>{{ modalTempOrder?.user?.name }}</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-3">
                    <label for="input-orderEmail" class="form-label">客戶信箱</label>
                    <input
                      type="email"
                      class="form-control"
                      id="input-orderEmail"
                      v-model="modalTempOrder.user.email"
                    />
                  </div>
                </div>
              </template>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="mb-3">
                  <label for="input-orderPay" class="form-label">付款</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="modalTempOrder.is_paid"
                  >
                    <option :value="modalTempOrder.is_paid">
                      {{ modalTempOrder.is_paid ? '已付款' : '未付款' }}
                    </option>
                    <option :value="!modalTempOrder.is_paid">
                      {{ modalTempOrder.is_paid ? '未付款' : '已付款' }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">訂單狀態</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="modalTempOrder.step"
                  >
                    <option value="">未確認</option>
                    <option value="待付款">待付款</option>
                    <option value="待出貨">待出貨</option>
                    <option value="已出貨">已出貨</option>
                    <option value="待退貨">待退貨</option>
                    <option value="已退貨">已退貨</option>
                    <option value="已完成">已完成</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="updateOrder">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap';
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  props: ['tempOrder', 'pages'],
  emits: ['updateOrder'],
  data() {
    return {
      Modal: null,
      modalTempOrder: {},
      collapseOpen: false
    };
  },
  methods: {
    updateOrder() {

      //console.log(this.modalTempOrder);
      const id = this.modalTempOrder.id;
      this.$http
        .put(`${VITE_URL}api/${VITE_PATH}/admin/order/${id}`, { data: this.modalTempOrder })
        .then((res) => {
          console.log(res);
          this.$emit('updateOrder', this.pages.current_page);
        })
        .catch((err) => {
          console.log(err);
        });
      this.Modal.hide();
    }
  },
  watch: {
    tempOrder() {
      this.modalTempOrder = this.tempOrder;
      //console.log(this.modalTempOrder.user.name);
      //console.log(this.modalTempOrder.products);

      const newArr = Object.values(this.modalTempOrder.products);
      //console.log('訂單', newArr);
      //抓出字數超過30的
      // const overNum = newArr.filter((item) => item.product.title.length > 3);
      // console.log('字數超過3',overNum);

      newArr.forEach((item, index) => {
        console.log(item.product.title, item.product.title.length, index);
        if (item.product.title.length > 30) {
          newArr[index].product.title = item.product.title.substring(0, 30) + '...';
        }
        return newArr;
      });
      this.modalTempOrder.products = newArr;
    }
  },
  mounted() {
    this.Modal = new bootstrap.Modal(this.$refs.modal);
  }
};
</script>

<style lang="scss" scoped>
.iconTransform {
  // transform: rotate(180deg);
  transform: scaleY(-1);
  transition: 0.3s;
}

.orderImg {
  width: 100px;
  height: 80px;
  object-fit: cover;
}
</style>
