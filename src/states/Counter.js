import _ from 'lodash';

export const state = {
  Counter: {
    count: 0
  }
};

export const mutations = {
  'INCREMENT': (state) => {
    return _.merge(state, {
      Counter: {
        count: state.Counter.count + 1
      }
    });
  },

  'DECREMENT': (state) => {
    return _.merge(state, {
      Counter: {
        count: state.Counter.count - 1
      }
    });
  }
};

export const getCount = (state) => {
  return state.Counter.count
};

export default {
  state,
  mutations
}
