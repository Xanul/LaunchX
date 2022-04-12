<template>
  <h1 class="inventaTitle">Pedidos e Inventario</h1>
  <div class="tableWrapper">
    <div class="table1">
      <table>
        <thead>
          <tr>
            <th>Nombre del Cliente</th>
            <th>Direccion</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Fecha de entrega</th>
            <th>Sabor</th>
            <th>Adorno</th>
            <th>Comentario</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pedido in this.$store.state.pedidos" :key="pedido">
            <td>{{ pedido.name }}</td>
            <td>{{ pedido.address }}</td>
            <td>{{ pedido.email }}</td>
            <td>{{ pedido.phone }}</td>
            <td>{{ pedido.orderDate }}</td>
            <td>{{ pedido.sabores }}</td>
            <td>{{ pedido.adornos }}</td>
            <td>{{ pedido.comenta }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table2">
      <table>
        <thead>
          <th>Balam</th>
          <th>Kalam</th>
          <th>Kaab</th>
          <th>Pakuum</th>
          <th>Sakan</th>
          <th>Chujuk</th>
          <th>Katum</th>
          <th>Lagab</th>
        </thead>
        <tbody>
          <tr
            v-for="elemento in this.$store.state.saboresStock"
            :key="elemento"
          >
            <td>{{ elemento.balamStock }}</td>
            <td>{{ elemento.kalamStock }}</td>
            <td>{{ elemento.kaabStock }}</td>
            <td>{{ elemento.pakuumStock }}</td>
            <td>{{ elemento.sakanStock }}</td>
            <td>{{ elemento.chujukStock }}</td>
            <td>{{ elemento.katumStock }}</td>
            <td>{{ elemento.lagabStock }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table3">
      <table>
        <thead>
          <th>Fondant</th>
          <th>Floral</th>
          <th>Drip</th>
          <th>Fundido</th>
          <th>Chantilly</th>
          <th>Crema</th>
        </thead>
        <tbody>
          <tr v-for="adorno in this.$store.state.adornosStock" :key="adorno">
            <td>{{ adorno.fondantStock }}</td>
            <td>{{ adorno.floralStock }}</td>
            <td>{{ adorno.dripStock }}</td>
            <td>{{ adorno.fundidoStock }}</td>
            <td>{{ adorno.chantiStock }}</td>
            <td>{{ adorno.cremaStock }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  
</template>

<script>
export default {
  name: "Inventario",
  
  
};
</script>

<style scoped>
.tableWrapper {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 20px;
}

.inventaTitle {
  margin-top: 3%;
}

table,
th,
td {
  border: 1px solid;
}

table {
  margin: 2% 2%;
}

th {
  height: 10px;
  padding: 10px;
}

td {
  width: 200px;
  padding: 10px;
}


</style>