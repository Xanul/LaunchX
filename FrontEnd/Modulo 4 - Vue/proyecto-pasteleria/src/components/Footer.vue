<template>
  <div class="footerContainer">
    <div class="navLogo" id="footerLogo">
      <img src="../assets/logo.png" alt="logoNav" width="150" />
      <div class="textLogo">
        <h3>Pastelería Xtabentún</h3>
        <h5>Pastelería tradicional yucateca</h5>
      </div>
    </div>
    <div class="contactInfo">
      <p>Ubicada en Mérida Yucatán, México</p>
      <p>Calle 17 #500 x 49 y 51 Colonia Centro.</p>
      <p>Teléfonos: 9991123423 y 9991234333</p>
      <p>Horario de atención: lun – vie de 9:00 a 19:00</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footerContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  margin-top: 40px;
  background: rgba(133,235,226,0.8);
}

.contactInfo > p {
  font-size: 13px;
}

#footerLogo {
  font-size: 15px;
}

#footerLogo > img {
  width: 100px;
}

</style>

