<template>
  <div>
    <h2>Another component using VUEX to track state</h2>
    
    <div v-if="categories.length >0">    
      <ul class="list-group col-sm-4" >
          <li class="list-group-item" v-for="category in categories" :key="category.id" :style="{background: getHslColor(category.colorHue)}">
              {{category.name}}
          </li>
      </ul>
    </div>

  </div>
</template>

<script>
import {HslColor} from "../mixins/HslColorMixin"

export default {
  name: "SomeComponent",
    mixins: [HslColor],
    computed: {
        categories () {
            return this.$store.state.categories;
        }       
    },
};
</script>
<style scoped>
ul {
    margin: 0 auto;
    text-align: left;
    font-size: 1.5em;
}
</style>