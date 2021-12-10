<template>
    <app-layout>
            <div class="py-12 px-4">
                <div class=" max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                                                   
		                <!-- Container -->
		                <div class="container mx-auto">
			                <div class="flex justify-center px-3 my-3">
				                <!-- Row -->
					            <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						            <h3 class="text-2xl text-center">{{ device.brand }}</h3>
                                            <img :src="`/${device.image}`" alt="image" style="width: 100%; height: 400px; margin:0 auto; margin-top:20px">
                                    <div class="mt-4 mb-4 md:flex md:justify-between">
								        <div class="mb-4 md:mr-2 md:mb-0">
                                            <label for="brand">Name</label>
							                    <div class="mb-4">
								                    <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									                        type="text" id="name" :value="device.name" readonly />
                                                        <div class="text-red" v-if="errors.name">{{ errors.name }}</div> 

                                                    <label for="release">Released</label>
                                                    <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									                        type="number" id="release" :value="device.release" readonly />
                                                        <div class="text-red" v-if="errors.name">{{ errors.release }}</div>

                                                    <label for="spec">Spec</label>
                                                        <textarea class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									                        type="text" id="spec" :value="device.spec" readonly />
                                                        <div class="text-red" v-if="errors.name">{{ errors.spec}}</div>                                                        
                                                    </div>
                                            </div>
                                        </div>
                                                <div class="flex justify-left">
                                                        <button class="mx-2" @click="edit(device)" style="font-color-black">Edit</button>
                                                        <button class="mx-2" @click="destroy(device)" style="font-color-black">Delete</button>
                                                </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Edit Modal -->
                                    <dialog-modal :show="isEnabled" >
                                        <template #title>
                            
                                        </template>
                                        <template #content>
                                            <div class="mb-4" >
                                                        <label for="image" class="text-gray-700 select-none font-medium">Image</label>
                                                        <input type="file" id="image" class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" @input="device.image = $event.target.files[0]">
                                                        <br>

                                                    <div class="form-group my-2">
                                                        <label for="brand">Brand : </label>
                                                            <select id="brand" placeholder="Brand" v-model="form.selected" class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" style="width:30%" >
                                                                <option>Apple</option>
                                                                <option>Samsung</option>
                                                                <option>Google</option>
                                                                <option value="other">Other Brands</option>
                                                            </select>
                                                                <input  v-if="form.selected =='other'" type="text" placeholder="Brand" v-model="device.brand" >
                                                                <input v-else-if="form.selected != 'other'" v-show="device.brand = form.selected">
                                                    </div>
                                                        <div v-if="errors.brand">{{ errors.brand }}</div>                                               

                                                	<label for="brand">Name</label>
                                                    <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									                    type="text" id="name" v-model="device.name" /> 
                                                    <div class="text-red" v-if="errors.name">{{ errors.name }}</div>                                                          
                        
                                                    <label for="release">Released</label>
                                                    <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									                    type="number" id="release" v-model="device.release" />
                                                     <div class="text-red" v-if="errors.name">{{ errors.release }}</div>

                                                    <label for="spec">Spec</label>
                                                    <textarea class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									                    type="text" id="spec" v-model="device.spec" />
                                                    <div class="text-red" v-if="errors.name">{{ errors.spec}}</div>     
                                            </div>
                                        </template>
                                        <template #footer>
                                             <button class="mx-2" @click="update(device)" style="font-color-black">Update</button>
                                        </template>
                                    </dialog-modal>

                            </div>
				        </div>
			        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout.vue'
    import DialogModal from '@/Jetstream/DialogModal.vue'

    export default {
        components: {
            AppLayout,
            DialogModal,
        },
        props:[
            'device',
            'errors',
        ],
        data() {
            return {
                isEnabled: false,
                isUpdatable: true,
                form:{
                    selected: this.device.brand,
                },
            }
        },
        methods: {
                destroy: function(device) {
                    if (!confirm('Are you sure want to remove?')) return;
                    device._method = 'delete';
                    this.$inertia.delete('/devices'+ '/' + device.id)
                },
                edit: function(device){
                    this.isEnabled = true;
                    this.isUpdatable = false;
                    this.form = Object.assign({}, device);
                },
                update: function(device){
                    if (!confirm('Are you sure want to change?')){
                        this.isUpdatable = true;
                        this.isEnabled = false;
                        return;
                    }else {
                        device._method = 'PUT';
                        this.$inertia.post('/devices/' + device.id, device);
                        this.isUpdated = true;
                        this.isEnabled = false;
                    }
                },
        },
    }
</script>
<style>
    button:hover {
        color: #ff0077;
    }
</style>