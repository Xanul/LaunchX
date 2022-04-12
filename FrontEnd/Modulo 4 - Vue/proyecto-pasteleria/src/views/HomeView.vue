<template>
  <div class="home">
    <!-- <div class="mainLogo">
      <div class="logo">
        <img alt="logoPasteleria" src="../assets/logo.png" width="400">
      </div>
      <div class="textoLogo">
        <h1>Pastelería Xtabentún</h1>
        <h4>Pastelería tradicional yucateca</h4>
      </div>
    </div> -->
    <Head/>
    <Cakes/>
    <Flavors/>
    <Footer/>  
  </div>
</template>

<script>
import Info from '@/components/Info.vue'
import Cakes from '@/components/Cakes.vue'
import Flavors from '@/components/Flavors.vue'
import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Info,
    Cakes,
    Flavors,
    Head,
    Footer
  }
  
}
</script>

<style scoped>

h1 {
  margin: 0px;
}

.mainLogo {
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  
}

</style>
 