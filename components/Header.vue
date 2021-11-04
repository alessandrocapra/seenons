<template>
  <div class="bg-enchantedWells flex content-center p-4">
    <button class="w-12 h-12">
      <unicon
        name="arrow-left"
        width="32"
        height="32"
        class="text-white fill-current"
      ></unicon>
    </button>

    <h1 class="flex-grow self-center text-center font-bold text-xl text-white">
      {{ title }}
    </h1>
    <button v-show="phone" class="w-12 h-12" @click="callCustomer">
      <unicon
        name="phone"
        width="32"
        height="32"
        class="text-white fill-current"
      ></unicon>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    phone: { type: String, default: null },
  },
  methods: {
    callCustomer() {
      window.open('tel:' + this.phone)
    },
  },
}
</script>
