<template>
  <div class="questionObject">
    <div class="content">
      <img :src="question_image" width="80%" alt="문제이미지">
    </div>
    <div class="relative mt text-center" v-if="question_type=='object'">
      <Item class="item"
            ref="item"
            v-on:select="fnSelect"
            v-for="(item, index) in arrItem" 
            v-bind:index="index"
            v-bind:item="item.item"
            v-bind:correct_yn="item.correct_yn"
            v-bind:key="item.item_idx"/>
    </div>
    <div class="relative mt text-center" v-if="question_type=='ox'">
      <ItemOx class="item"
            ref="item"
            v-on:select="fnSelect"
            v-for="(item, index) in arrItem" 
            v-bind:index="index"
            v-bind:item="item.item"
            v-bind:correct_yn="item.correct_yn"
            v-bind:key="item.item_idx"/>
    </div>
    <div class="relative mt">
      <img class="ab-right click" :src="count_image" v-on:click="fnNext" width="10%" alt="카운트">
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item'
import ItemOx from '@/components/ItemOx'

export default {
  name: 'QuestionObject',
  components: {
    Item,
    ItemOx
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
      question_type: '',
      reply_type: '',
      goNext: false
    }
  },
  mounted() {
    this.url = this.$store.state.url
    this.question_image = this.url+'file/question/'+this.question.question_physical_name
    this.arrItem = this.question.item

    this.question_type = this.question.question_type
    this.reply_type = this.question.reply_type

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
      
      //setTimeout(this.fnCount, 1500)
    },
    fnSelect(obj) {
      if(this.reply_type == 'one') {
        for(let i=0; i<this.$refs.item.length; i++) {
          if(obj.index != i) this.$refs.item[i].fnDeSelected()
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.questionObject {
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
