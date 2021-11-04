<template>
  <div>
    <button
      class="action"
      :disabled="buttonStyle === 'action-disabled'"
      :class="buttonStyle"
      @click="
        buttonStyle === 'action-danger'
          ? markAsIncomplete()
          : 'action-primary'
          ? markAsCompleted()
          : null
      "
    >
      <unicon
        :name="icon"
        width="24"
        height="24"
        class="fill-current"
        :class="buttonStyle"
      ></unicon>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { OrderStatus } from '~/store'

export enum OrderActionType {
  Primary = 'action-primary',
  Danger = 'action-danger',
  Secondary = 'action-secondary',
  Disabled = 'action-disabled',
}

export default Vue.extend({
  name: 'OrderAction',
  props: {
    icon: {
      type: String,
      required: true,
    },
    buttonStyle: {
      type: String as () => OrderActionType,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
  },
  methods: {
    markAsIncomplete() {
      this.$store.commit('updateOrderStatus', {
        orderId: this.orderId,
        status: OrderStatus.InProgress,
      })
    },
    markAsCompleted() {
      this.$store.commit('updateOrderStatus', {
        orderId: this.orderId,
        status: OrderStatus.Completed,
      })
    },
  },
})
</script>


<style>
.action {
  @apply p-2 rounded-lg ml-2 w-11 h-11 flex justify-center items-center;
}
.action-primary {
  @apply bg-enchantedWells text-white;
}
.action-danger {
  @apply bg-livelyCoral text-white;
}
.action-secondary {
  @apply bg-beluga text-enchantedWells;
}
.action-disabled {
  @apply bg-leadBelcher text-white;
}
</style>