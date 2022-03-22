<template>
  <div class="p-2">
    <div class="my-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cantCreateNewTurn: false,
      createTurnText: "New Turn"
    }
  },
  methods: {
    createTurn: function() {
        axios.get('http://localhost/api/turns/create', this.store_form)
        .then((response) => {
          if(response.data.canCreate) {
            this.$router.push('/turns/create')
          }else {
            this.cantCreateNewTurn = true
            this.createTurnText = "Not turns allowed"
          }
            
        })
        .catch((error) => {
            // error.response.status Check status code
        });
    }
  },
  beforeMount() {
    
  }
}
</script>
