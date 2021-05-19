<template>
  <div class="main" style="background-image:url('http://www.emds.co.kr/file/cate/S2FrYW9UYWxrXzIwMjEwNTE4XzIzMjYzMjUyNS5wbmc=_1621356778.png')">
    <div class="wrap">
      <transition name="slide-fade">
      <div v-if="main">
        <div class="center">
          <img src="http://www.emds.co.kr/file/cate/bWFpbl9pbWFnZS5wbmc=_1621396283.png" alt="메인이미지" id="main_image">
        </div>
        <div class="center">
          <router-link v-bind:to="'Common'"><img src="http://www.emds.co.kr/file/cate/S2FrYW9UYWxrXzIwMjEwNTE4XzIzNDkxNjA1Ny5wbmc=_1621401009.png" alt=""></router-link>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
  },
  data() {
    return {
      main: false,
    }
  },
  mounted() {
    this.main = true
  }
}
</script>
<style lang="scss" scoped>
.main {
  height: 100%;
  background-size: 100% 100%;
  .wrap {
    padding: 50px;
    .center {
      #main_image {
        max-width: 1000px;
        width: 100%;
      }
      text-align: center;
    }
  }
}

.slide-fade-enter-active {
      animation: move-in .5s;
  }
.slide-fade-leave-active {
    animation: move-in .5s reverse;
}
@keyframes move-in {
    0% {
        transform: translateY(-500px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>