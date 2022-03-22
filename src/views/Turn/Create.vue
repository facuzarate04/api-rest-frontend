<template>
    <form @submit.prevent="submitForm" class="p-10 bg-gray-200">
        <div class="p-2 space-y-2 space-x-4 flex items-center">
            <label for="date">Date</label>
            <div class="w-full">
                <Datepicker v-model="store_form.date" :allowedDates="allowedDates" :enableTimePicker="false"></Datepicker>
            </div>
        </div>
        <div class="p-2 space-y-2 space-x-4 flex space-x-4 items-center">
            <label for="duration">Duration</label>
            <input name="duration" type="number" step="0.10" class="p-1 w-full" v-model="store_form.duration">
        </div>
        <div class="p-2 mt-2 grid justify-items-center">
             <button type="submit" class="p-2 bg-teal-300 px-4">Reservar</button>
        </div>
    </form>
</template>

<script>
import axios from "axios";
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
export default {
    data() {
        return { 
            store_form: {
                client_id: 1,
                date: null,
                duration: null
            },
            allowedDates: [],
        }
    },
    components: {
        Datepicker
    },
    methods:{
        submitForm(){
            axios.post(process.env.API_URL+'/turns', this.store_form)
                 .then((response) => {
                     alert(response.data)
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                 });
        }
    },
}
</script>