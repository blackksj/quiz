<template>
  <div class="opening">
     <div class="content">
        <img :src="image" alt="오프닝이미지" id="opening_image">
      </div>
      <div class="text-right">
        <img class="click" :src="button_image" v-on:click="$emit('information')" alt="Yu Quiz?">
      </div>


  </div>
</template>

<script>
export default {
  name: 'Opening',
  props: {
      cate: Object,
  },
  data() {
    return {
      url: '',
      image: '',
      button_image: ''
    }
  },
  mounted() {
    this.url = this.$store.state.url
    this.image = this.url+'file/cate/'+this.cate.opening_image
    this.button_image = this.url+'file/cate/'+this.cate.opening_button_image
  }
}
</script>
<style lang="scss" scoped>
.opening {
    div.content {
        img {
            width: 100%;
        }
    }
}

.text-right {
    padding: 10px 55px;
    text-align: right;
}
</style>
