<template>
  <div class="flavorsWrapper">
    <h1 class="flavorsTitle">Decoraciones disponibles</h1>
    <h2 class="flavorsSubtitle">Los precios de la decoración pueden variar <br> dependiendo del diseño solicitado</h2>
    <div class="mainMenu">
      <div class="menuItem">
        <img src="../assets/fondantFlavor.jpg" alt="Fondant" width="200" height="150" />
        <p>Decoración 3D (Fondant)</p>
        <p>$150</p>
      </div>
      <div class="menuItem">
        <img src="../assets/floralFlavor.jpg" alt="Floral" width="200" height="150" />
        <p>Decoración Floral</p>
        <p>$100</p>
      </div>
      <div class="menuItem">
        <img src="../assets/dripFlavor.webp" alt="Drip" width="200" height="150" />
        <p>Decoración Drip Cake</p>
        <p>$100</p>
      </div>
      <div class="menuItem">
        <img src="../assets/chocolateFlavor.jpg" alt="Chocolate" width="200" height="150" />
        <p>Chocolate fundido</p>
        <p>$200</p>
      </div>
      <div class="menuItem">
        <img src="../assets/chantillyFlavor.jpg" alt="Chantilly" width="200" height="150" />
        <p>Crema Chantilly</p>
        <p>$80</p>
      </div>
      <div class="menuItem">
        <img src="../assets/cremaFlavor.png" alt="Crema" width="200" height="150" />
        <p>Crema Pastelera</p>
        <p>$100</p>
      </div>
    </div>
  </div>
  <div class="orderButton">
    <h1 class="orderText">Hacer un pedido</h1>
    <button @click="$router.push('order')" class="ordButton">Hacer Pedido</button>
  </div>

    

</template>

<script>
export default {
  name: "flavors",
};
</script>

<style>


h2 {
    text-align: center;
    margin: 10px auto;
}

.flavorsTitle {
  font-size: 40px;
  margin-top: 25px;
  margin-bottom: 0px;
}

.flavorsSubtitle {
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 25px;
}

.orderText {
  font-size:40px;
  margin-top: 25px;
  margin-bottom: 10px;
}

.orderButton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.ordButton {
    background: #6ca0ee;
    height: auto;
    width: auto;
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
    font-size: 20px;
}
</style>