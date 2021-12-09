<template>
    <app-layout>
            <div class="py-12 px-4">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">      
                        <form class="px-6 py-6" @submit.prevent="registDevice"  enctype="multipart/form-data">
                            <input type="hidden" name="_token" v-bind:value="csrf">
                            <h1 class="font-bold text-xl mb-2">Regist Device</h1>
                                    <div class="w-1/3 my-4">
                                        <label for="image" class="text-gray-700 select-none font-medium">Image</label>
                                        <input type="file" id="image" class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" @input="form.image = $event.target.files[0]">
                                    </div>
                                    <div v-if="errors.image">{{ errors.image }}</div>                        

                            <div class="form-group mb-4">
                                <label for="brand">Brand : </label>
                                     <select class="w-full py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="brand" placeholder="Brand" v-model="this.form.selected" style="width:30%" >
                                            <option>Apple</option>
                                            <option>Samsung</option>
                                            <option>Google</option>
                                            <option value="other">Other Brands</option>
                                    </select>
                                            <input  v-if="this.form.selected =='other'" type="text" placeholder="Brand" v-model="this.form.brand" >
                                            <input v-else-if="this.form.selected != 'other'" v-show="this.form.brand = this.form.selected">
                                    </div>
                                    <div v-if="errors.brand">{{ errors.brand }}</div>

                                    <div class="form-group mb-4">
                                            <label for="name">Name : </label>
                                            <input type="text" id="name" placeholder="Name" v-model="this.form.name" class="w-full py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" style="width:30%" >
                                    </div>
                                    <div v-if="errors.name">{{ errors.name }}</div>

                                    <div class="form-group mb-4">
                                            <label for="release">release : </label>
                                            <input type="number" id="release" placeholder="Release" v-model="this.form.release" class="w-full py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" style="width:30%" >
                                    </div>
                                    <div v-if="errors.release">{{ errors.release }}</div>

                                    <div class="form-group mb-4">
                                        <label for="spec">Spec : </label>
                                        <br>
                                        <textarea type="text" id="spec" placeholder="Spec" v-model="this.form.spec" class="w-full py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" style="width:30%" />
                                    </div>
                                    <div v-if="errors.spec">{{ errors.spec }}</div>

                                <div class="flex justify-left">
                                        <button type="submit" class="font-bold text-l mx-2 my-2">Regist</button>
                                        <a class="font-bold text-l mx-2 my-2" href="/devices" >Back</a>
                                </div>
                        </form>
                     </div>
                </div>
             </div>
        </app-layout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue'
import { useForm } from '@inertiajs/inertia-vue3'

export default {
    setup () {
    const form = useForm({
        selected: '',
        image: null,
        name: '',
        release: null,
        brand: '',
        spec : '',
    })
    function registDevice() {
              form.post('/devices', this.form)
          }
    return { form, registDevice }
  },
  components: {
      AppLayout,
},
      props: [
        'errors',
        'devices',
        'csrf',
      ],
}
</script>
<style>
    button:hover {
        color: #0077ff;
    }
</style>