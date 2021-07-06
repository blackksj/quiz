<template>
  <div class="item" v-on:click="fnReverse">
      <span class="number">{{num_image}}</span> <span v-bind:style="{ color: now_color}">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: 'ItemGift',
  props: {
      index: Number,
      item: String,
  },
  data() {
    return {
        num_image: '',
        default_color: '#000',
        selected_color: '#fff100',
        now_color: '#000',
        selected: false,
        result: false
    }
  },
  mounted() {
      this.num_image = this.index+1
  },
  methods: {
    fnReverse() {
      this.selected = !this.selected
      if(!this.selected) this.now_color = this.default_color
      else if(this.selected) this.now_color = this.selected_color

      if(this.selected) {this.$emit('select', {"index":this.index, "item":this.item})}
    },
    fnDeSelected() {
      this.selected = false

      if(!this.selected) this.now_color = this.default_color
      else if(this.selected) this.now_color = this.selected_color
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  line-height: 1.2rem;
  font-size: 1.2rem;
   
  * {vertical-align: middle;}
}

.number {
  display: inline-block; width: 1em; height: 1em;
  background-color: #2b2e83; color: #fff;
  border-radius: 2em; padding: 0.3em;
}
</style>
