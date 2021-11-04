<template>
  <div class="bg-ghostWhite h-screen">
    <div class="bg-white max-w-3xl mx-auto h-screen">
      <Header :title="headerTitle" :phone="phone" />
      <div id="mainContainer" class="p-2">
        <StopInfo :address="address" :comment="comment" />
        <div class="pt-6">
          <Orders :stop-id="selectedStopId" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      // change this value (0 t0 3) to see how the UI c hanges depending on the order
      selectedStopId: 0,
    }
  },
  computed: {
    headerTitle() {
      return this.$store.state.stops[this.$data.selectedStopId].name
    },
    phone() {
      return this.$store.state.stops[this.$data.selectedStopId].telephone
    },
    address() {
      return this.$store.state.stops[this.$data.selectedStopId].address
    },
    comment() {
      return this.$store.state.stops[this.$data.selectedStopId].comment
    },
    orders() {
      return this.$store.state.stops[this.$data.selectedStopId].orders
    },
  },
})
</script>
