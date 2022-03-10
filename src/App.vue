
<template>
  <div class="p-5">
    <div id="app" class="p-10">
      <div class="inline-flex space-x-4">
        <router-link class="" to="/turns">Turns</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return { 
            url: process.env.BACKEND_URL
        }
    },
}
</script>
