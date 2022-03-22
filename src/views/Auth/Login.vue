<template>
    <!-- component -->
    <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div @submit.prevent="submitForm" class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <form class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="text-3xl text-center mb-8">Sign In</h1>
                <div class="mb-4 space-y-2">
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded"
                        name="email"
                        placeholder="Email" 
                        v-model="auth_form.email"
                        />
                     <p v-if="errors.email" class="text-sm text-red-400">{{errors.email}}</p>
                </div>
                <div class="mb-4 space-y-2">
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded"
                        name="password"
                        placeholder="Password" 
                        v-model="auth_form.password"
                        />
                     <p v-if="errors.password" class="text-sm text-red-400">{{errors.password}}</p>
                </div>
                <button
                    type="submit"
                    class="w-full text-center py-3 rounded bg-blue-400 text-white hover:bg-green-dark focus:outline-none my-1"
                >Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            auth_form: {
                email: null,
                password: null,
            },
            errors: []
        }
    },
    components: {

    },
    methods: {
        submitForm(){
            axios.post(process.env.API_URL+'/login', this.auth_form)
                 .then((response) => {
                    localStorage.user = response.data.user
                    localStorage.access_token = response.data.access_token
                    
                    this.$router.push('/turns')
                 })
                 .catch((error) => {
                     this.errors = error.response.data.errors
                 });
        },
    },
}
</script>