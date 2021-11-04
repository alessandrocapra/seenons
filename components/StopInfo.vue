<template>
  <div>
    <InfoItem
      title="Address"
      title-icon="map-marker"
      action="Go"
      action-icon="location-arrow"
      >{{
        fullAddress || 'Addres not available, please contact us for support'
      }}</InfoItem
    >
    <InfoItem title="Comment" title-icon="comment-alt">{{
      comment || 'No comment to show'
    }}</InfoItem>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { StopAddress } from '~/store'
export default Vue.extend({
  props: {
    address: {
      type: Object as () => StopAddress,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  computed: {
    fullAddress() {
      const {
        street,
        house_number: number,
        town,
        postal_code: postalCode,
        country,
      } = this.address
      return `${street} ${number}, ${postalCode} ${town} (${country})`
    },
  },
})
</script>