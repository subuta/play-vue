<template>
  <div class="hello">
    <button @click="increment">increment</button>
    <h1>{{ count }}</h1>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script lang="babel">
  import _ from 'lodash'
  import store from 'src/store.js';
  import {
    getCount
  } from 'src/states/Counter';

  export default {
    store,
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    },
    vuex: {
      getters: {
        count: state => getCount(state)
      },
      actions: {
        increment: ({ dispatch }) => {
          return dispatch({ type: 'INCREMENT' })
        },

        decrement: ({ dispatch }) => {
          return dispatch({ type: 'DECREMENT' })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
