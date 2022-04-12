<template>
    <div class="glass"></div>
    <img src="../assets/zanahoriaCake.jpg" alt="" width="1440" height="400">
</template>

<script>
export default {
    name: 'Head',
}
</script>

<style scoped>
.glass {
    width: 1440px;
    height: 400px;
    background-color: black;
    opacity: 50%;
    position: absolute;
    z-index: 3;
}
img {
    object-fit: cover;
    opacity: 90%;
    position: relative;
    z-index: 1;
}
</style>