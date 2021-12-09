<template>
    <app-layout>
 <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <div v-for="device in devices.data" :key="device.id" >
    <div class="bg-gray-200 rounded overflow-hidden shadow-lg">
      <div>
        <!-- <button @click="openModal()" :props="device" class="w-full h-auto"  > -->
           <button @click="show(device)"  class="w-full h-auto" >
              <img :src=device.image style="width: 400px; height: 300px; margin:0 auto; margin-top:20px" alt="image">
          </button>
      </div>

      <div class="px-6 py-4">
          <p class="font-bold text-xl mb-2">{{ device.brand }}</p>
          <p class="font-bold text-gray-700 text-base">{{ device.name }}</p>
      </div>

      <div class="px-6 py-4 pb-2">
          <span class="inline-block py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Released : {{ device.release }}</span>
      </div>


<!-- This element is to trick the browser into centering the modal contents. -->
  <!-- <dialog-modal :show="isOpen == true" >
    <template #title>
      <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
				id="name"	readonly/> 
        <h1 v-bind="device">{{ device.name }}</h1>
    </template>

    <template #content>
            <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
				id="spec"	v-model="form.spec" readonly />
    </template>

    <template #footer>
             <button @click="closeModal()">
                Close
            </button>
    </template>
</dialog-modal> -->



    </div>
    </div>
 </div>
<pagination class="px-4 py-4" :links="devices.links" />
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout.vue'
    import Pagination from '@/Jetstream/Pagination.vue'
    // import DialogModal from '@/Jetstream/DialogModal.vue'
    // import { computed } from '@vue/runtime-core'
    // import { usePage } from '@inertiajs/inertia-vue3'

export default {
    props:['devices'],
      components: {
        AppLayout,
        Pagination,
      },
      data(){
        return{
          // isOpen: false,
        }
      },
  methods: {
    show: function(devices) {
      this.$inertia.get('/devices/' + devices.id)
    },
  }
}
</script>