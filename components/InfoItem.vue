<template>
  <div id="infoItem" class="bg-ghostWhite m-2 rounded-lg">
    <div class="flex items-center p-4 justify-between">
      <div class="flex flex-col pb">
        <div class="flex items-center pb-2">
          <unicon
            :name="titleIcon"
            width="24"
            height="24"
            class="text-enchantedWells fill-current"
          ></unicon>
          <h3 class="font-medium text-black pl-1">{{ title }}</h3>
        </div>
        <p class="font-light text-sm pr-2">
          <slot></slot>
        </p>
      </div>
      <button
        v-if="action && actionIcon"
        class="
          text-enchantedWells
          bg-beluga
          font-bold
          text-base
          p-2
          flex
          items-center
          rounded-lg
        "
      >
        <unicon
          :name="actionIcon"
          width="20"
          height="20"
          class="text-enchantedWells fill-current p-1"
        ></unicon>
        {{ action }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Stop } from '~/store'
export default Vue.extend({
  name: 'InfoItem',
  props: {
    title: { type: String, required: true },
    titleIcon: { type: String, required: true },
    action: { type: [String, Boolean], default: false },
    actionIcon: { type: [String, Boolean], default: false },
  },
  computed: {
    stop(): Stop {
      return this.$store.state.stops[0]
    },
  },
})
</script>