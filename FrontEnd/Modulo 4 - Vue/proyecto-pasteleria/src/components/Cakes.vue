<template>
<div class="cakesWrapper">
    <h1 class="menuTitle">Menú de Pasteles</h1>
  <div class="mainMenu">
      <div class="menuItem">
        <img src="../assets/chocoCake.jpg" alt="Pastel Chocolate" width="200" height="150">
        <p>Balam (Pastel de Chocolate)</p>
        <p>$300</p>
      </div>
      <div class="menuItem">
        <img src="../assets/vainillaCake.jpg" alt="Pastel Vainilla" width="200" height="150">
        <p>Kalam (Pastel de Vainilla)</p>
        <p>$250</p>
      </div>
      <div class="menuItem">
        <img src="../assets/zanahoriaCake.jpg" alt="Pastel Zanahoria" width="200" height="150">
        <p>Pakuum (Pastel de Zanahoria)</p>
        <p>$280</p>
      </div>
      <div class="menuItem">
        <img src="../assets/quesobolaCake.jpg" alt="Pastel Queso Bola" width="200" height="150">
        <p>Sakan (Pastel de queso de bola)</p>
        <p>$320</p>
      </div>
      <div class="menuItem">
        <img src="../assets/guayabaCake.webp" alt="Pastel Guayaba" width="200" height="150">
        <p>Chujuk (Pastel de guayaba)</p>
        <p>$300</p>
      </div>
      <div class="menuItem">
        <img src="../assets/treslechesCake.jpg" alt="Pastel Tres Leches" width="200" height="150">
        <p>Kaab (Pastel de tres leches)</p>
        <p>$275</p>
      </div>
      <div class="menuItem">
        <img src="../assets/cheeseCake.jpg" alt="Cheesecake" width="200" height="150">
        <p>Katum (Cheesecake)</p>
        <p>$250</p>
      </div>
      <div class="menuItem">
        <img src="../assets/manzanaCake.webp" alt="Pastel Chocolate" width="200" height="150">
        <p>Lagab (Pay de manzana)</p>
        <p>$265</p>
      </div>
  </div>
</div>
  
</template>

<script>
export default {
    name: 'cakes'
}
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

h1 {
    text-align: center;
    margin: 10px auto;
}

.menuTitle {
  font-size: 40px;
  font-weight: 800;
  margin: 25px auto;
}

.mainMenu{
    
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
    align-content: center;
    gap: 20px;  
    column-gap: 30px;
}
.menuItem {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10%;
    background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.1)
    );
    padding-top: 15px;
    font-weight: 800;
    box-shadow: 5px 5px 8px rgba(0,0,0,0.2);
    
}

.menuItem:hover {
    transform: scale(1.05,1.05);
}

.menuItem > p {
    /* background-color: red; */
    margin-top: 0px;
}

.menuItem > img {
    border-radius: 10%;
    margin-bottom: 5px;
}


</style>