<template>
    <app-layout title="Dashboard">
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <!-- <welcome /> -->
                    <br>
                    <a class="font-semibold text-xl text-gray-800 leading-tight" href="/devices" >
                       <img src="storage/logo/logo.png" alt="image" style="width: 100%; height: 100%; margin:0 auto; margin-top:20px"> 
                    </a>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    // import Welcome from '@/Jetstream/Welcome.vue'

    export default defineComponent({
        components: {
            AppLayout,
            // Welcome,
        },
    })
</script>
