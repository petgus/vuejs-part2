<template>
  <span>
    <b-button @click="modalShow = !modalShow" size="sm">{{modalButtonText}}</b-button>
    <b-modal v-model="modalShow" :title="modalButtonText" @ok="okWasPressed" @cancel="cancelWasPressed">

      <p v-if="value.id">We are editing category.id = {{value.id}}</p>
      <input ref="name" type="text" v-model="localCategory.name" placeholder="Enter category name" />

       <color-picker :hue="localCategory.colorHue" @input="colorChange"></color-picker>

    </b-modal>
  </span>
</template>

<script>
import { BButton, BModal } from "bootstrap-vue";
import ColorPicker from "@radial-color-picker/vue-color-picker";

export default {
  name: "CategoryEditor",
  components: {
    BButton,
    BModal,
    ColorPicker
  },
  props: {
    value: Object,

    modalButtonText: {
      type: String,
      default: "Edit"
    }
  },
  data() {
    return {
      modalShow: false,
      hue: 0, // Current color hue in the color picker
      localCategory : {...this.value} // Create a local clone
    };
  },
  methods: {

    okWasPressed() {
       // Update the category we have referenced as v-model from the parent component with the values from our clone
       Object.assign(this.value, this.localCategory);
       this.$emit('input', this.value);
    },

    cancelWasPressed() {
        Object.assign(this.localCategory, this.value); // Reset to initial state
    },

    colorChange(hue) {
        this.localCategory.colorHue = hue;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css";

.rcp {
    margin-top:20px;
    height: 100px;
    width: 100px;
}
</style>
