<template>
  <div class="p-2">
    <h2 class="sectionHeading">
      Pending orders ({{ `${pendingOrders.length}/${totalNumberOrders}` }})
    </h2>
    <order v-for="order in pendingOrders" :key="order.order_id" :data="order" />
    <no-orders
      v-if="pendingOrders.length === 0"
      :message="'No pending orders to show.'"
    />
    <h2 class="sectionHeading mt-6">
      Completed orders ({{ `${completedOrders.length}/${totalNumberOrders}` }})
    </h2>
    <order
      v-for="order in completedOrders"
      :key="order.order_id"
      :data="order"
    />
    <no-orders
      v-if="completedOrders.length === 0"
      :message="'No completed orders to show.'"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import OrderVue from './Order.vue'
import NoOrdersVue from './NoOrders.vue'
import { Order, OrderStatus } from '~/store'

export default Vue.extend({
  components: {
    Order: OrderVue,
    NoOrders: NoOrdersVue,
  },
  props: {
    stopId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    orders(): Order[] {
      return this.getOrdersOfStop(this.stopId)
    },
    pendingOrders(): Order[] | undefined {
      return this.orders.filter(
        (order) =>
          order.status === OrderStatus.Scheduled ||
          order.status === OrderStatus.InProgress
      )
    },
    completedOrders(): Order[] | undefined {
      return this.orders.filter(
        (order) => order.status === OrderStatus.Completed
      )
    },
    totalNumberOrders(): number {
      return this.orders.length
    },
    ...mapGetters({
      getCompletedOrdersOfStop: 'getCompletedOrdersOfStop',
      getOrdersOfStop: 'getOrdersOfStop',
    }),
  },
})
</script>
  
<style>
.sectionHeading {
  @apply font-medium text-lg;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

