<template>
  <div>
    <div>CategoryAdmin says:</div>
    <h1>{{ msg }}</h1>

    <div v-if="categories.length >0">
    
      <ul class="list-group col-sm-4" >
          <li class="list-group-item" v-for="(category, index) in categories" :key="category.id">
              <span class="category-color" :style="{background: getHslColor(category.colorHue)}">&nbsp;</span>
              {{category.name}}
              <span class="action-buttons">                
                <button v-if="index>0" @click="moveItem(index, index-1)" class="btn">&uarr;</button>
                <button v-if="index<categories.length-1" @click="moveItem(index, index+1)" class="btn">&darr;</button>
                <CategoryEditor v-model="categories[index]" :modalButtonText="'Edit'" />
              </span>
          </li>
      </ul>

    </div>
    
  </div>
</template>

<script>
import CategoryEditor from "./CategoryEditor"
import {HslColor} from "../mixins/HslColorMixin"

export default {
  name: "CategoryAdmin",
  props: {
    msg: String
  },
  components: {
    CategoryEditor
  },
  mixins: [HslColor],
    watch: {
        categories: function(){
             console.warn('Categories changed. We need to save!');
             this.$store.commit('SET_CATEGORIES',this.categories);
        }
    },
    methods: {
        moveItem(index, newIndex){
            var itemToMove = this.categories[index];
            this.categories.splice(index,1);
            this.categories.splice(newIndex,0, itemToMove);
        }
    },
    computed: {
        categories () {
            return this.$store.state.categories;
        },  
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    margin: 0 auto;
    text-align: left;
    font-size: 1.5em;
}

.category-color {
    display: inline-block;
    height: 16px;
    width: 16px;
}
</style>

<style>
.action-buttons {
    float: right;
}
</style>