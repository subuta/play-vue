import Vuex from 'vuex'

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
  state,
  mutations
});
