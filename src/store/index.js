import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // Initial state  
  state: {
      isLoading: false,
      categories: [
        {"id": 1, "name": "Vue", "colorHue": 50},
        {"id": 2, "name": "Sass", "colorHue": 50},
        {"id": 3, "name": "Html", "colorHue": 50},
        {"id": 4, "name": "Webpack", "colorHue": 50}
      ]
  },
//   actions: {
//       saveCategories({commit}, categories) {
//            commit('SAVE_CATEGORIES',categories);
//        }
//   },
  mutations: {
      SAVE_CATEGORIES(state, categories){
          state.categories = categories;
      }
  },
//   modules: {
//   }
})
