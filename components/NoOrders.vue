<template>
  <div
    class="
      bg-ghostWhite
      mb-2
      rounded-lg
      p-2
      flex
      items-center
      justify-center
      h-20
      font-light
    "
  >
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    message: {
      type: String,
      required: true,
    },
  },
})
</script>