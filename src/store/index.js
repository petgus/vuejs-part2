/*
* Example using Axios and Json-server 
*/

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const baseUrl = 'http://localhost:3000';

export default new Vuex.Store({
  // Initial state  
  state: {
      categories: []
  },
  actions: {
      loadCategories({commit}){
       
            axios
            .get(baseUrl +'/categories')
            .then(response => {
                console.log('Got some categories!', response.data);
                commit('SET_CATEGORIES',response.data);
            })
            .catch(function (error) {
                // handle error
                console.log('Axios caught an error', error);
            });
        
      },
      saveCategories({commit}, categories) {
           commit('SET_CATEGORIES',categories);
       }
  },
  mutations: {
      SET_CATEGORIES(state, categories){
          state.categories = categories;
      }
  },
//   modules: {
//   }
})
