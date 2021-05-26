<template>
  <div class="questionRight">
    <div class="content">
      <img :src="image" width="90%" alt="이미지">
    </div>
    <div class="relative mt text-center">
      <ItemView class="item"
            ref="item"
            v-for="(item, index) in arrItem" 
            v-bind:index="index"
            v-bind:item="item.item"
            v-bind:correct_yn="item.correct_yn"
            v-bind:selected_item="item.selected"
            v-bind:color="'fff100'"
            v-bind:key="item.item_idx"/>
    </div>
    <div class="relative mt">
      <img class="ab-right click" :src="count_image" v-on:click="fnNext" width="15%" alt="카운트">
    </div>
  </div>
</template>

<script>
import ItemView from '@/components/ItemView'

export default {
  name: 'QuestionRight',
  components: {
    ItemView
  },
  props: {
    question: Object
  },
  data() {
    return {
      image: '',
      arrItem: [],
      count: 5,
      count_image: '',
      goNext: false
    }
  },
  mounted() {
    this.url = this.$store.state.url
    this.image = this.url+'file/right/'+this.question.right_physical_name
    for(let i=0; i<this.question.item.length; i++) {
      this.question.item[i].selected = this.$store.state.lastedSelectedItem[i]
    }
    this.arrItem = this.question.item

    this.fnCount()
  },
  methods: {
    fnNext() {
      if(this.goNext) return
      
      this.$emit('quizPromote')

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
.questionRight {
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
