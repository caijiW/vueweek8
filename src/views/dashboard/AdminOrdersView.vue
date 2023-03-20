<template>
  <OrderModal
    ref="orderModal"
    :tempOrder="tempOrder"
    @updateOrder="getOrdersList"
    :pages="pages"
  ></OrderModal>
  <delOrderModalVue
    ref="delOrderModal"
    :tempOrder="tempOrder"
    @delOrder="getOrdersList"
  ></delOrderModalVue>
  <h2>訂單</h2>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">訂單編號</th>
        <th scope="col">客戶名字</th>
        <th scope="col">客戶信箱</th>
        <th scope="col">付款</th>
        <th scope="col">狀態</th>
        <th scope="col">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(order, i) in orders" :key="order + 1" class="align-middle">
        <td>{{ order.create_at }}</td>
        <td>{{ order.user.name }}</td>
        <td>{{ order.user.email }}</td>
        <td>
          <template v-if="order.is_paid">
            <i class="bi bi-check-circle-fill fs-5 text-success"></i>
          </template>
          <span v-else>–</span>
        </td>
        <td>
          <template v-if="order.step">
            {{ order.step }}
          </template>
          <p v-else class="m-0">未確認</p>
        </td>
        <td>
          <i
            class="bi bi-pencil-square fs-5 pe-1 icon-edit cursor-pointer"
            @click="addTempOrder('edit', order)"
          ></i>
          |
          <i
            class="bi bi-trash-fill fs-5 ps-1 icon-delete cursor-pointer"
            @click="addTempOrder('del', order)"
          ></i>
        </td>
      </tr>
    </tbody>
  </table>
  <paginationComponent :pages="pages" @changePage="getOrdersList"></paginationComponent>
</template>

<script>
import OrderModal from '../../components/dashboard/OrderModal.vue';
import delOrderModalVue from '../../components/dashboard/delOrderModal.vue';
import paginationComponent from '../../components/dashboard/paginationComponent.vue';
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      orders: [],
      tempOrder: {},
      pages: {}
    };
  },
  components: {
    OrderModal,
    delOrderModalVue,
    paginationComponent
  },
  methods: {
    getOrdersList(page = 1) {
      this.$http
        .get(`${VITE_URL}api/${VITE_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          console.log(res);
          this.pages = res.data.pagination;
          this.orders = res.data.orders;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addTempOrder(status, order) {
      //console.log(status,order);
      this.tempOrder = JSON.parse(JSON.stringify(order));
      if (status === 'edit') {
        if (this.tempOrder.step === undefined) {
          this.tempOrder.step = '';
        }

        this.$refs.orderModal.Modal.show();
      } else if (status === 'del') {
        this.$refs.delOrderModal.Modal.show();
      }
    }
  },
  mounted() {
    this.getOrdersList();
  }
};
</script>

<style lang="scss" scoped>
.icon-edit:hover {
  color: #5aa572;
}

.icon-delete:hover {
  color: #e94738;
}
</style>
