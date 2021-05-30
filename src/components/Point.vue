<template>
  <div class="point">
    <div class="content">
      <img :src="image" width="80%" alt="이미지">
    </div>
    <div class="relative mt">
      <img class="ab-right click" src="../assets/next.png" v-on:click="fnNext" width="15%" alt="NEXT">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Point',
  components: {
  },
  props: {
  },
  data() {
    return {
      image: '',
    }
  },
  mounted() {
    this.url = this.$store.state.url
    this.image = require('../assets/point-'+this.$store.state.answer.score+'.png')
  },
  methods: {
    fnNext() {
      this.$emit('gift')
    }
  }
}
</script>
<style lang="scss" scoped>
.point {
  div.content {
  }

  .button-wrap {
    padding: 10px 55px;
    text-align: right;
  }
}

.item {display: inline; margin: 0 1.2rem; cursor: pointer}

.ab-top {position: absolute; top: 0; width: 100%; text-align: center;}
.ab-right {position: absolute; top: 0; right: 1rem;}
</style>
