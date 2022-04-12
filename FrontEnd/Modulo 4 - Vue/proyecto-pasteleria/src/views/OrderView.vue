<template>
  
  <Order/>
  <Footer/>
</template>

<script>
import Order from '@/components/Order.vue'
import Footer from '@/components/Footer.vue'


export default {
    name: 'OrderView',
    components: {
        Order,
        Footer,
    }
}
</script>

<style>

</style>