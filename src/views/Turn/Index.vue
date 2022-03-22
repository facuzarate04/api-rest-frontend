<template>
    <div class="space-y-4">
        <div v-if="turns" class="">
            <li v-for="turn in turns" :key="turn">
                <router-link class="text-decoration underline" :to="{ name: 'show_turn', params: { id: turn.id }}">{{turn.client.name}} - {{turn.date}}</router-link>
            </li>   
        </div>
        <div v-else>
            
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return { 
            turns: null,
        }
    },
    components: {
    },
    mounted() {
        axios.get(process.env.API_URL+'/turns', localStorage.access_token)
        .then((response) => this.turns = response.data)
    }
}
</script>
