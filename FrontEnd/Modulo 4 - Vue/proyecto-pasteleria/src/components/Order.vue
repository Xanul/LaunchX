<template>
  <h1 class="pedidoTitle">Formulario de Pedido</h1>
  <form @submit.prevent="handleSubmit()" ref="anyName">
    <label>Nombre Completo</label>
    <input type="text" v-model="$store.state.name" />
    <br />
    <label>Dirección</label>
    <input type="text" v-model="$store.state.address" />
    <br />
    <label>Correo electrónico</label>
    <input type="email" v-model="$store.state.email" />
    <br />
    <label>Teléfono</label>
    <input type="number" v-model="$store.state.phone" />
    <br />
    <label>Fecha de entrega</label>
    <input type="date" v-model="$store.state.orderDate" />

    <br />
    <label>Sabor del pastel</label>
    <div class="saboresWrapper">
      <div class="checkboxOptions">
        <input type="checkbox" v-model="$store.state.sabores.balam" />
        <label>Balam (Pastel de chocolate)</label>
      </div>
      <div class="checkboxOptions">
        <input type="checkbox" v-model="$store.state.sabores.kalam" />
        <label>Kalam (Pastel de vainilla)</label>
      </div>
      <div class="checkboxOptions">
        <input type="checkbox" v-model="$store.state.sabores.kaab" />
        <label>Kaab (Pastel de tres leches)</label>
      </div>
      <div class="checkboxOptions">
        <input type="checkbox" v-model="$store.state.sabores.pakuum" />
        <label>Pakuum (Pastel de Zanahoria)</label>
      </div>
      <div class="checkboxOptions">
        <input type="checkbox" v-model="$store.state.sabores.sakan" />
        <label>Sakan (Pastel de queso de bola)</label>
      </div>
      <div class="checkboxOptions">
        <input type="checkbox" v-model="$store.state.sabores.chujuk" />
        <label>Chujuk (Pastel de guayaba)</label>
      </div>
      <div class="checkboxOptions">
        <input type="checkbox" v-model="$store.state.sabores.katum" />
        <label>Katum (Cheesecake)</label>
      </div>
      <div class="checkboxOptions">
        <input type="checkbox" v-model="$store.state.sabores.lagab" />
        <label>Lagab (Pay de manzana)</label>
      </div>
    </div>

    <br />
    <label>Decoracion del pastel</label>
    <div class="decoracionWrapper">
      <div class="checkboxOptions">
      <input type="checkbox" v-model="$store.state.adornos.fondant" />
      <label>Decoración 3d (Fondant)</label>
    </div>
    <div class="checkboxOptions">
      <input type="checkbox" v-model="$store.state.adornos.floral" />
      <label>Decoración floral</label>
    </div>
    <div class="checkboxOptions">
      <input type="checkbox" v-model="$store.state.adornos.drip" />
      <label>Decoración drip cake</label>
    </div>
    <div class="checkboxOptions">
      <input type="checkbox" v-model="$store.state.adornos.fundido" />
      <label>Chocolate fundido</label>
    </div>
    <div class="checkboxOptions">
      <input type="checkbox" v-model="$store.state.adornos.chanti" />
      <label>Crema chantilly</label>
    </div>
    <div class="checkboxOptions">
      <input type="checkbox" v-model="$store.state.adornos.crema" />
      <label>Crema pastelera</label>
    </div>
    </div>
    

    <br />
    <label>Tienes algún comentario adicional</label>
    <br />
    <textarea cols="80" rows="5" v-model="$store.state.comenta"></textarea>
    <!-- <input type="text" v-model="$store.state.comenta"> -->
    
    <div class="button">
      <button>Enviar</button>
    </div>
    
    
  </form>
</template>

<script>
export default {
  name: "orderForm",
  data () {
    return {
      sabores: [],
      adornos: [],
    }
  },
  methods: {
    handleSubmit(event){  

      for (const sabor in this.$store.state.sabores) {
        if (this.$store.state.sabores[sabor] === true){
          if (this.$store.state.saboresStock[0][sabor + 'Stock'] > 0) {
            this.sabores.push(sabor)
            this.$store.state.saboresStock[0][sabor+'Stock'] -- 
          }
          else {
            window.alert('Lo sentimos, no contamos con el sabor ' + sabor)
          }
        }
      }

      for (const adorno in this.$store.state.adornos) {
        if (this.$store.state.adornos[adorno] === true){
          if (this.$store.state.adornosStock[0][adorno + 'Stock'] > 0) {
            console.log('El adorno esta disponible');
            this.adornos.push(adorno)
            this.$store.state.adornosStock[0][adorno + 'Stock'] --
            console.log(this.$store.state.adornosStock[0]);
          }
          else {
            window.alert('Lo sentimos, no contamos con el adorno ' + adorno)
          }
          
        }
      }

      this.$store.state.pedidos.push({
        name: this.$store.state.name,
        address: this.$store.state.address,
        email: this.$store.state.email,
        phone: this.$store.state.phone,
        orderDate: this.$store.state.orderDate,
        sabores: this.sabores,
        adornos: this.adornos,
        comenta: this.$store.state.comenta
      });

      

      console.log(this.$store.state.pedidos);

      // for (const element in this.$store.state) {
      //   this.$store.state[element] = ''
      // }
      this.$refs.anyName.reset();

      this.$store.state.name = ''
      this.$store.state.address = ''
      this.$store.state.email = ''
      this.$store.state.phone = ''
      this.$store.state.orderDate = ''
      this.$store.state.comenta = ''
      for (const sabor in this.$store.state.sabores) {
        if (this.$store.state.sabores[sabor] === true){
          this.$store.state.sabores[sabor] = false
        }
      }

      for (const adorno in this.$store.state.adornos) {
        if (this.$store.state.adornos[adorno] === true){
          this.$store.state.adornos[adorno] = false
        }
      }
      console.log(this.$store.state.saboresStock);
      console.log(this.$store.state.sabores);

    }
  }
};
</script>

<style>
.saboresWrapper, .decoracionWrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
}

.saboresWrapper > div, .decoracionWrapper > div {
  margin-left: 10%;
}

.checkboxOptions {
  display: flex;
}

.checkboxOptions > label {
  font-size: 13px;
}

.checkboxOptions > input {
 width: 30px;
 height: 30px;
}

.pedidoTitle {
  font-size: 40px;
  font-weight: 800;
  margin: 25px auto;
}

form {
  max-width: 700px;
  margin: 30px auto;
  background: rgba(255, 255, 255, 0.7);
  text-align: left;
  padding: 40px;
  border-radius: 20px;
}

label {
  color: black;
  display: inline-block;
  margin: 10px 0 10px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  background: rgba(255, 255, 255, 0.8);
  color: #555;
}

textarea {
  border: 1px solid rgb(194, 191, 191);
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.enviarForm{
  display: flex;
  justify-content: center;
}

.button {
  display: flex;
  justify-content: center;
}

button {
    background: #6ca0ee;
    height: auto;
    width: auto;
    border: 0;
    padding: 10px 20px;
    margin-top: 15px;
    color: white;
    border-radius: 20px;
    font-size: 20px;
  }
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>