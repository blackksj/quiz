<template>
  <div class="item" v-on:click="fnReverse">
      <span class="number">{{num_image}}</span> <span v-bind:style="{ color: now_color}">{{item}}</span>
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
      this.num_image = this.index+1

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

      if(this.selected) {this.$emit('select', {"index":this.index})}
    },
    fnDeSelected() {
      this.selected = false

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
