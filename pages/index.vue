<template>
  <StopDetails />
</template>

<script lang="ts">
import Vue from 'vue'
import StopDetailsVue from './StopDetails.vue'

export default Vue.extend({
  components: {
    StopDetails: StopDetailsVue,
  },
})
</script>