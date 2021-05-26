<template>
  <div class="item" v-on:click="fnReverse">
      <img :src="num_image"> <span v-bind:style="{ color: now_color}">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: 'ItemOx',
  props: {
      index: Number,
      item: String,
      correct_yn: String,
  },
  data() {
    return {
        num_image: '',
        default_color: '#000',
        selected_color: '#fff',
        now_color: '#000',
        selected: false,
        result: false
    }
  },
  mounted() {
      this.num_image = require('../assets/'+(this.index+1)+'.png')
      if(this.correct_yn == 'right') {
        this.result = this.selected
      } else if(this.correct_yn == 'wrong') {
        this.result = !this.selected
      }
  },
  methods: {
    fnReverse() {
      this.selected = !this.selected
      if(!this.selected) this.now_color = this.default_color
      else if(this.selected) this.now_color = this.selected_color

      if(this.correct_yn == 'right') {
        this.result = this.selected
      } else if(this.correct_yn == 'wrong') {
        this.result = !this.selected
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  line-height: 2.2rem;
  font-size: 2.2rem;
   
  * {vertical-align: middle;}
}
</style>
