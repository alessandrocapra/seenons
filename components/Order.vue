<template>
  <div
    class="bg-ghostWhite mb-2 rounded-lg p-4 flex items-center justify-between"
  >
    <div class="flex items-center">
      <unicon
        :name="icon"
        width="32"
        height="32"
        class="bg-beluga text-brainstemGrey fill-current p-6 rounded-lg"
      ></unicon>
      <div class="flex flex-col pl-4">
        <div class="flex pb-2">
          <h3 class="font-medium">{{ orderType }}</h3>
          <span
            class="py-1 px-2 ml-2 text-xs font-medium uppercase rounded-lg"
            :class="orderStatusStyle"
            >{{ orderStatusText }}</span
          >
        </div>
        <p class="font-light text-sm pr-2">
          {{ orderDescription }}
        </p>
      </div>
    </div>
    <div class="flex">
      <order-actions :order-id="orderId" :status="orderStatus" />
    </div>
  </div>
</template>
  
<script lang="ts">
import Vue from 'vue'
import OrderActionsVue from './OrderActions.vue'
import { Order, OrderStatus, OrderType } from '~/store'

export default Vue.extend({
  components: { OrderActions: OrderActionsVue },
  props: {
    data: {
      type: Object as () => Order,
      required: true,
    },
  },
  computed: {
    orderId(): string {
      return this.data.order_id
    },
    orderStatusText(): string {
      return OrderStatus[this.data.status]
    },
    orderStatus(): number {
      return this.data.status
    },
    orderStatusStyle(): string {
      if (this.orderStatus === OrderStatus.New) {
        return 'bg-heavenGates'
      } else if (
        this.orderStatus === OrderStatus.Pending ||
        this.orderStatus === OrderStatus.InProgress
      ) {
        return 'bg-sunShower'
      }

      return 'bg-celticSpring'
    },
    orderType(): string {
      return this.data.type === OrderType.Dropoff ? 'Dropoff' : 'Pickup'
    },
    orderDescription(): string {
      return `${this.data.quantity} x ${this.data.size} ${this.data.stream_type}`
    },
    icon(): string {
      return this.data.type === OrderType.Dropoff
        ? 'arrow-to-bottom'
        : 'top-arrow-from-top'
    },
  },
})
</script>

<style>
.action {
  @apply p-2 rounded-lg ml-2;
}
.action-primary {
  @apply bg-enchantedWells text-white;
}
.action-remove {
  @apply bg-livelyCoral text-white;
}
.action-secondary {
  @apply bg-beluga text-enchantedWells;
}
.action-disabled {
  @apply bg-leadBelcher text-white;
}
</style>
