<template>
  <div class="question">
     <div class="content">
        <img src="http://www.emds.co.kr/file/cate/S2FrYW9UYWxrXzIwMjEwNTE4XzIzNDkwNTA1MV8wMi5wbmc=_1621401009.png" alt="오프닝이미지" id="opening_image">
      </div>
      <div class="button-wrap">
        <router-link v-bind:to="'Common'"><img src="http://www.emds.co.kr/file/cate/YnRuX3F1aXoucG5n_1621401718.png" alt=""></router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
  }
}
</script>
<style lang="scss" scoped>
.question {
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
