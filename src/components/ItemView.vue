<template>
  <div class="item">
      <span class="number">{{num_image}}</span> <span v-bind:style="{ color: now_color}">{{item}}</span>
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

      this.num_image = this.index+1
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

.number {
  display: inline-block; width: 1.5rem; height: 1.5rem; line-height: 1.5rem;
  font-size: 1.5rem;
  background-color: #2b2e83; color: #fff;
  border-radius: 2em; padding: 0.3em;
}
</style>
