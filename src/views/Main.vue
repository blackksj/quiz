<template>
  <div class="main" v-bind:style="{backgroundImage:'url('+main_back_image+')'}">
    <div class="wrap">
      <transition name="slide-fade">
      <div v-if="main">
        <div class="center">
          <img :src="main_image" alt="메인이미지" id="main_image">
        </div>
        <div class="center">
          <img class="click" :src="main_button_image" alt="버튼이미지" v-on:click="fnOpeningStart">
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
        url: '',
        main: false,
        main_back_image: '',
        main_image: '',
        main_button_image: '',
      }
  },
  mounted() {
    document.onselectstart = function() { return false; }  //드래그 막기
    document.ondragstart = function() { return false; }    //선택 막기
    document.ondblclick = function() { return false; }     //더블클릭 막기
    
    this.url = this.$store.state.url

    if(this.$route.query.idx == undefined) return
    
    this.$store.commit('setIdx', this.$route.query.idx)
    this.$store.dispatch('getCate').then(response => {
        let obj = response

        this.main_back_image = this.url+'file/cate/'+obj.main_back_image
        this.main_image = this.url+'file/cate/'+obj.main_image
        this.main_button_image = this.url+'file/cate/'+obj.main_button_image

        this.main = true
    }).catch(() => {});
    this.$store.dispatch('getQuestion').then(response => {
        this.$store.commit('setPoint', Math.round(100 / response.length).toString())
    }).catch(() => {});
  },
  methods: {
    fnOpeningStart() {
      this.main = false
      setTimeout(() => {this.$router.push('/Common')}, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  height: 100%;
  background-size: 100% 100%;
  .wrap {
    padding: 10px;
    .center {
      #main_image {
        width: 60%;
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
        transform: translateY(-1000px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>