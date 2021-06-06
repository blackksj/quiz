<template>
  <div class="point">
    <div class="content">
      <div class="rect"><img :src="common_top_image"/></div>
        <div class="content_background" v-bind:style="{backgroundImage:'url('+common_cen_image+')'}">
            <img src="http://www.emds.co.kr/img/your_point.png" alt="">
            {{point}}
        </div>
        <div class="rect">
          <img :src="common_bottom_image"/>
        </div>
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
      url: '',
      image: '',
      point: 0,

      cate: {},
      common_top_image: '',
      common_cen_image: '',
      common_bottom_image: '',
    }
  },
  mounted() {
    this.url = this.$store.state.url
    this.cate = this.$store.state.cate

    this.common_top_image = this.url+'file/cate/'+this.cate.common_top_image
    this.common_cen_image = this.url+'file/cate/'+this.cate.common_cen_image
    this.common_bottom_image = this.url+'file/cate/'+this.cate.common_bottom_image

    //this.image = require('../assets/point-'+this.$store.state.answer.score+'.png')
    this.point = this.$store.state.answer.score
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
    .content_background {
      margin-top: -5px;
      background-repeat: repeat-y;
      background-size: 100%;
      font-size: 10rem;
      padding: 4rem 1rem;
      font-weight: bold;
      color: #666;
    }
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
