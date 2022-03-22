<template>
  <div class="space-x-4 my-4">
        <Link :to="{ name: 'index_turns'}">Turns</Link>
        <Button @click="createTurn" :disabled="cantCreateNewTurn">{{createTurnText}}</Button>
    </div>
</template>

<script>
import Link from "../src/components/UI/Link.vue"
import Button from "../src/components/UI/ButtonLink.vue"
export default {
  components: {
    Link,
    Button
  },
}
</script>

<style>

</style>