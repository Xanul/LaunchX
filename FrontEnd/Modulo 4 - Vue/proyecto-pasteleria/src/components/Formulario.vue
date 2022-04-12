<template>
  <h1>Prueba de formulario</h1>
  <form>
      <label>Nombre</label>
      <input type="text" v-model="$store.state.name">
      <br>
      <select v-model="$store.state.role">
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
      </select>
  </form>
  <p>Tu nombre es {{$store.state.name}}</p>
  <p>Tu rol es {{$store.state.role}}</p>
</template>

<script>
export default {
    name: 'Prueba de formulario',
    
}
</script>

<style>

</style>