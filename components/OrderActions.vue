<template>
  <div class="flex">
    <order-action
      icon="pen"
      :button-style="editButtonStyle"
      :order-id="orderId"
    />
    <order-action
      v-if="showCheckIcon"
      icon="check"
      :button-style="checkButtonStyle"
      :order-id="orderId"
    />
    <order-action
      v-else
      icon="minus"
      :button-style="removeButtonStyle"
      :order-id="orderId"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OrderActionVue, { OrderActionType } from './generic/OrderAction.vue'
import { OrderStatus } from '~/store'
export default Vue.extend({
  components: {
    OrderAction: OrderActionVue,
  },
  props: {
    status: {
      type: Number as () => OrderStatus,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
  },
  computed: {
    showCheckIcon(): boolean {
      return this.status !== OrderStatus.Completed
    },
    checkButtonStyle(): OrderActionType {
      if (
        this.status === OrderStatus.Pending ||
        this.status === OrderStatus.Completed ||
        this.status === OrderStatus.New
      ) {
        return OrderActionType.Disabled
      }
      // for InProgress or Scheduled
      return OrderActionType.Primary
    },
    editButtonStyle(): OrderActionType {
      if (
        this.status === OrderStatus.Pending ||
        this.status === OrderStatus.Completed ||
        this.status === OrderStatus.New
      ) {
        return OrderActionType.Disabled
      }
      // for InProgress or Scheduled
      return OrderActionType.Secondary
    },
    removeButtonStyle(): OrderActionType {
      return OrderActionType.Danger
    },
  },
})
</script>