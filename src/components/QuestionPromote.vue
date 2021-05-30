<template>
  <div class="questionPromote">
    <div class="content">
      <img :src="image" width="80%" alt="이미지">
    </div>
    <div class="relative mt">
      <img class="ab-right click" :src="count_image" v-on:click="fnNext" width="10%" alt="카운트">
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionPromote',
  components: {
  },
  props: {
    question: Object
  },
  data() {
    return {
      image: '',
      count: 5,
      count_image: '',
      goNext: false
    }
  },
  mounted() {
    this.url = this.$store.state.url
    this.image = this.url+'file/promote/'+this.question.promote_physical_name

    this.fnCount()
  },
  methods: {
    fnNext() {
      if(this.goNext) return
      
      this.$emit('quizNext')

      this.goNext = true
    },
    fnCount() {

      if(this.count == 0) {
        this.fnNext()

        return
      }

      this.count_image = require('../assets/count_'+(this.count--)+'.png')
      
      setTimeout(this.fnCount, 1500)
    }
  }
}
</script>
<style lang="scss" scoped>
.questionPromote {
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
