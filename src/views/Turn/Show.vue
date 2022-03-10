<template>
    <div class="">
        {{turn}}
        <form action="" class="p=5 bg-gray-200">
            <div class="p-2 space-y-2 space-x-4">
                <label for="date">Date</label>
                <input type="date" class="" v-model="update_form.date">
            </div>
            <div class="p-2 space-y-2 space-x-4">
                <label for="date">Duration</label>
                <input type="numeric" step="0.10" class="" v-model="update_form.duration">
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return { 
            update_form: {
                client_id: null,
                date: null,
                duration: null
            },
            turn: null,
            url: process.env.BACKEND_URL
        }
    },
    mounted() {
        axios.get(this.url+'/turns/1')
        .then((response) => this.turn = response.data)
    }
}
</script>