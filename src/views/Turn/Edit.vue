<template>
    <div v-if="turn" class="">
        <form action="" class="p=5 bg-gray-200 w-1/2">
            <div class="p-2 space-y-2 space-x-4">
                <label for="date">Date</label>
                <Datepicker v-model="update_form.date" :allowedDates="allowedDates"></Datepicker>
            </div>
            <div class="p-2 space-y-2 space-x-4">
                <label for="duration">Duration</label>
                <input name="duration" type="number" step="0.10" class="" v-model="update_form.duration">
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
export default {
    data() {
        return { 
            update_form: {
                client_id: null,
                date: null,
                duration: null
            },
            turn: null,
            allowedDates: [],
        }
    },
    components: {
        Datepicker
    },
    watch: {
        turn: function() {
            this.update_form.client_id = this.turn.client.id
            this.update_form.date = this.turn.date
            this.update_form.duration = this.turn.duration
        }
    },
    beforeMount() {
        axios.get(process.env.API_URL+'/turns/'+this.$route.params.id+'/edit')
        .then((response) => {
                this.turn = response.data.turn;
                this.allowedDates = response.data.allowedDates;
            })
    },
}
</script>