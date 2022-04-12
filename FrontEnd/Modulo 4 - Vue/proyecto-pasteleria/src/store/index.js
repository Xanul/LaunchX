import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '',
    address: '',
    email: '',
    phone: '',
    orderDate: '',
    comenta: '',
    sabores: {
      balam: false,
      kalam: false,
      kaab: false,
      pakuum: false,
      sakan: false,
      chujuk: false,
      katum: false,
      lagab: false,
    },
    adornos: {
      fondant: false,
      floral: false,
      drip: false,
      fundido: false,
      chanti: false,
      crema: false,
    },
    pedidos: [],
    saboresStock: [{
      balamStock: 4,
      kalamStock: 12,
      kaabStock: 9,
      pakuumStock: 11,
      sakanStock: 8,
      chujukStock: 5,
      katumStock: 2,
      lagabStock: 1,
    }],
    adornosStock: [{
      fondantStock: 11,
      floralStock: 20,
      dripStock: 19,
      fundidoStock: 9,
      chantiStock: 7,
      cremaStock: 12,
    }]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
