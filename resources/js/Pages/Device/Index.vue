<template>
    <app-layout>
 <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <div v-for="device in devices.data" :key="device.id" >
    <div class="bg-gray-200 rounded overflow-hidden shadow-lg">
      <div>
           <button @click="show(device)"  class="w-full h-auto" >
              <img :src='device.image' style="width: 400px; height: 300px; margin:0 auto; margin-top:20px" alt="image">
          </button>
      </div>

      <div class="px-6 py-4">
          <p class="font-bold text-xl mb-2">{{ device.brand }}</p>
          <p class="font-bold text-gray-700 text-base">{{ device.name }}</p>
      </div>

      <div class="px-6 py-4 pb-2">
          <span class="inline-block py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Released : {{ device.release }}</span>
      </div>
    </div>
    </div>
 </div>
<pagination class="px-4 py-4" :links="devices.links" />
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout.vue'
    import Pagination from '@/Jetstream/Pagination.vue'

export default {
    props:['devices','user'],
      components: {
        AppLayout,
        Pagination,
      },
  methods: {
    show: function(devices) {
      this.$inertia.get('/devices/' + devices.id)
    },
  }
}
</script>