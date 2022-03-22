<template>
    <div v-if="turn" class="p-2 bg-gray-300 space-y-4">
        <h1 class="">{{turn.client.name}}</h1>
        <h1 class="">{{turn.client.email}}</h1>
        <h1 class="">{{turn.date}}</h1>
        <h4 class="">{{turn.duration}}</h4>
        <router-link :to="'/turns/'+turn.id+'/edit'" class="">Edit</router-link>
    </div>
</template>

<script>
import axios from "axios";
import 'vue3-date-time-picker/dist/main.css'
export default {
    data() {
        return { 
            turn: null,
        }
    },
    mounted() {
        axios.get(process.env.API_URL+'/turns/'+this.$route.params.id)
        .then((response) => 
                this.turn = response.data,
            )
    },
}
</script>