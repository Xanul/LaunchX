<template>
  <div class="navBar">
    <a @click="$router.push('/')">
      <div class="navLogo">
      <img src="./assets/logo.png" alt="logoNav" width="150">
      <div class="textLogo">
        <h2>Pastelería Xtabentún</h2>
        <h4>Pastelería tradicional yucateca</h4>
      </div>
    </div>
    </a>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/order">Ordenar</router-link> |
    <router-link to="/pastelero">Pastelero</router-link> 
    </nav>
  </div>
  
  <router-view/>
</template>

<style>

/* 
Color Palette
Verde fuerte: #A7E6CB
Verde claro: #DBEEBF
Naranja: #FBD4B5
Rojo claro: #FBAAA6
Rojo: #FE8C93 */

@import url('https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@100;200;300;400;500;700;800;900&display=swap');

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Arima Madurai', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  max-width: 1440px;
  margin: 0px auto;
  /* background: linear-gradient(to right, #7fdac9, #30d6f0); */
  /* background: linear-gradient(90deg, rgba(130,106,237,1) 0%, rgba(200,121,255,1) 100%); */
  /* background-color: #006c67; */
  /* background: rgba(233,153,196,0.3); */
  /* background: rgba(229,32,88,0.4); */
  background: linear-gradient(90deg, rgba(229,32,88,0.4) 0%, rgba(229, 32, 183, 0.4) 100%);
}

.navBar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: #FBAAA6; */
  /* background-color: rgba(130,106,237,1); */
  /* background-color: #003844; */
  background: rgba(133,235,226,0.8) ;
  /* background-color: #97C4E8; */
  /* background: rgba(151,196,232,0.7); */
  /* background: rgba(229,32,88,0.3); */
}

.navLogo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.textLogo {
  margin-left: 15px;
}

.textLogo > * {
  margin: 0;
}



/* nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  background-color: #A7E6CB;
} */

nav a {
  font-weight: bold;
  font-size: 21px;
  padding: 30px;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgba(229,32,88,0.9)
}
</style>
