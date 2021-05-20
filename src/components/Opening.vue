<template>
  <div class="opening">
     <div class="content">
        <img src="http://www.emds.co.kr/file/cate/S2FrYW9UYWxrXzIwMjEwNTE4XzIzNDkwNTA1MV8wMi5wbmc=_1621401009.png" alt="오프닝이미지" id="opening_image">
      </div>
      <div class="text-right">
        <router-link v-bind:to="'Common'"><img src="http://www.emds.co.kr/file/cate/YnRuX3F1aXoucG5n_1621401718.png" alt=""></router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Opening',
  props: {
  }
}
</script>
<style lang="scss" scoped>
.opening {
    div.content {
        img {
            width: 100%;
        }
    }
}

.text-right {
    padding: 10px 55px;
    text-align: right;
}
</style>
