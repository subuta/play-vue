import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import Counter from './states/Counter.js';

// app initial state
const state = {
  ...Counter.state
};

// define possible mutations
const mutations = {
  ...Counter.mutations
};

// create the store
export default new Vuex.Store({
  strict: true,
  state,
  mutations
});
