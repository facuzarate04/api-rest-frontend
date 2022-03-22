<template>
    <router-link :to="to" :class="classes">
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        props: ['to', 'active'],

        computed: {
            classes() {
                return this.active
                            ? 'inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-teal-700 transition duration-150 ease-in-out'
                            : 'inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
            }
        },
    }
</script>