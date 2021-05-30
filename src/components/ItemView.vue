<template>
  <div class="item">
      <img :src="num_image" width="3%"> <span v-bind:style="{ color: now_color}">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: 'ItemView',
  props: {
      index: Number,
      item: String,
      correct_yn: String,
      selected_item: Boolean,
      color: String,
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
      if(this.selected_item) this.now_color = '#'+this.color

      this.num_image = require('../assets/'+(this.index+1)+'.png')
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.item {
  line-height: 2rem;
  font-size: 2rem;
   
  * {vertical-align: middle;}
}
</style>
