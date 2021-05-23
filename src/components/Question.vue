<template>
  <div class="questionObject">
    <div class="content">
      <img :src="question_image" width="90%" alt="문제이미지">
    </div>
    <div class="relative mt text-center">
      <Item class="item"
            ref="item"
            v-for="(item, index) in arrItem" 
            v-bind:index="index"
            v-bind:item="item.item"
            v-bind:correct_yn="item.correct_yn"
            v-bind:key="item.item_idx"/>
    </div>
    <div class="relative mt">
      <img class="ab-right click" :src="count_image" v-on:click="fnNext" width="18%" alt="카운트">
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item'

export default {
  name: 'QuestionObject',
  components: {
    Item
  },
  props: {
    question: Object
  },
  data() {
    return {
      question_image: '',
      arrItem: [],
      count: 5,
      count_image: '',
      goNext: false
    }
  },
  mounted() {
    this.url = this.$store.state.url
    this.question_image = this.url+'file/question/'+this.question.question_physical_name
    this.arrItem = this.question.item

    this.fnCount()
  },
  methods: {
    fnNext() {
      if(this.goNext) return

      let arrSelectedItem = []
      let correct_yn = true

      for(let i=0; i<this.arrItem.length; i++) {
        if(correct_yn) correct_yn = this.$refs.item[i].result
        arrSelectedItem.push(this.$refs.item[i].selected)
      }

      this.$store.state.lastedSelectedItem = arrSelectedItem
      this.$emit('quizResult', {
                          "cate_idx":this.question.cate_idx, 
                          "question_idx":this.question.question_idx, 
                          "arrSelectedItem":arrSelectedItem, 
                          "correct_yn":correct_yn})

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
.questionObject {
  div.content {
    img {
        width: 100%;
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
