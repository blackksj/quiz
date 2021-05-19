<template>
  <div class="common" style="background-image:url('http://www.emds.co.kr/file/cate/S2FrYW9UYWxrXzIwMjEwNTE4XzIzNTMwMjczOC5wbmc=_1621356778.png')">
     <div class="wrap">
       <transition name="slide-fade">
       <Opening class="box"
                v-if="opening" />
       </transition>
       <transition name="slide-fade">
       <Information class="box"
              v-if="information"  />
       </transition>
    </div>
  </div>
</template>

<script>
import Opening from '@/components/Opening'
import Information from '@/components/Information'

export default {
  name: 'Common',
  components: {
    Opening,
    Information
  },
  data() {
    return {
      opening: false,
      information: false,
    }
  },
  mounted() {
    this.opening = true;
  }
}
</script>
<style lang="scss" scoped>
.common {
  height: 100%;
  background-size: 100% 100%;
  .wrap {
    padding: 50px;
    text-align: center;
    
    .box {
      display: inline-block;
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