<template>
  <div class="questionOx">
     <div class="content">
        <img src="http://www.emds.co.kr/file/cate/S2FrYW9UYWxrXzIwMjEwNTE4XzIzNDkwNTA1MV8wMi5wbmc=_1621401009.png" alt="오프닝이미지" id="opening_image">
      </div>
      <div class="relative mt">
        <img class="ab-right click" src="../assets/yes.png" v-on:click="$emit('quiz')" alt="YES">
      </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionOx',
  props: {
  },
  data() {
    return {
      
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.questionOx {
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
</style>
