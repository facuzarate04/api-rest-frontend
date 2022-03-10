<template>
    <div class="">
        <li v-for="turn in turns" :key="turn">
            <router-link class="text-decoration underline" :to="'/show/'+turn.id">{{turn.client.name}} - {{turn.date}}</router-link>
        </li>
        
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return { 
            turns: null,
            url: process.env.BACKEND_URL
        }
    },
    mounted() {
        axios.get(this.url+'/turns')
        .then((response) => this.turns = response.data)
    }
}
</script>
