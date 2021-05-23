<template>
  <div class="close">
    <div class="content">
      <img :src="image" alt="이미지">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Close',
  components: {
  },
  props: {
      cate: Object,
  },
  data() {
    return {
      image: '',
      goNext: false
    }
  },
  mounted() {
    this.url = this.$store.state.url
    this.image = this.url+'file/cate/'+this.cate.close_image
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.close {
  div.content {
    img {
        width: 100%;
    }
  }
}
</style>
