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
						            <h3 class="text-2xl text-center">{{ devices.brand }}</h3>
                                            <img :src="`/${devices.image}`" alt="image" style="width: 100%; height: 400px; margin:0 auto; margin-top:20px">
                                             <div class="text-red" v-if="errors.image">{{ errors.image }}</div>
							        <div class="mt-4 mb-4 md:flex md:justify-between">
								        <div class="mb-4 md:mr-2 md:mb-0">
                                            <label for="brand">Name</label>
							                    <div class="mb-4">
								                    <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									                        type="text" id="name" :value="devices.name" readonly />
                                                        <div class="text-red" v-if="errors.name">{{ errors.name }}</div> 

                                                    <label for="release">Released</label>
                                                    <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									                        type="number" id="release" :value="devices.release" readonly />
                                                        <div class="text-red" v-if="errors.name">{{ errors.release }}</div>

                                                    <label for="spec">Spec</label>
                                                        <textarea class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									                        type="text" id="spec" :value="devices.spec" readonly />
                                                        <div class="text-red" v-if="errors.name">{{ errors.spec}}</div>                                                        
                                                    </div>
                                            </div>
                                        </div>
                                                <div class="flex justify-left">
                                                        <button class="mx-2" @click="edit(devices)" style="font-color-black">Edit</button>
                                                        <button class="mx-2" @click="destroy(devices)" style="font-color-black">Delete</button>
                                                </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Edit Modal -->
                                    <dialog-modal :show="isEnabled" >
                                        <template #title>
							                    <div class="mb-4">
                                                    <img :src="`/${devices.image}`" alt="image" style="width: 100%; height: 400px; margin:0 auto; margin-top:20px">
                                                </div>                                        
                                        </template>
                                        <template #content>
                                            <div class="mb-4">
                                                    <label for="image" class="text-gray-700 select-none font-medium">Image</label>
                                                    <input type="file" id="image" class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" @input="devices.image = $event.target.files[0]">
                                                    <br>                                               

                                                	<label for="brand">Name</label>
                                                    <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									                    type="text" id="name" v-model="devices.name" />  
                        
                                                    <label for="release">Released</label>
                                                    <input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									                    type="number" id="release" v-model="devices.release" />

                                                    <label for="spec">Spec</label>
                                                        <textarea class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									                    type="text" id="spec" v-model="devices.spec" />
                                            </div>
                                        </template>
                                        <template #footer>
                                             <button class="mx-2" @click="update(devices)" style="font-color-black">Update</button>
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
            'devices',
            'errors',
        ],
        data() {
            return {
                isEnabled: false,
                isUpdatable: true,
            }
        },
        methods: {
                destroy: function(devices) {
                    if (!confirm('Are you sure want to remove?')) return;
                    devices._method = 'delete';
                    this.$inertia.delete('/devices'+ '/' + devices.id)
                },
                edit: function(devices){
                    this.isEnabled = true;
                    this.isUpdatable = false;
                    this.form = Object.assign({}, devices);
                },
                update: function(devices){
                    if (!confirm('Are you sure want to change?')){
                        this.isUpdatable = true;
                        this.isEnabled = false;
                        return;
                    }else {
                        devices._method = 'PUT';
                        this.$inertia.post('/devices/' + devices.id, devices);
                        this.isUpdated = true;
                        this.isEnabled = false;
                    }
                }
        },
    }
</script>
<style>
    button:hover {
        color: #ff0077;
    }
</style>