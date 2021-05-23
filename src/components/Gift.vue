<template>
  <div class="gift">
    <div class="content">
      <img :src="image" alt="이미지">
    </div>
    <div class="relative mt text-center">
      <ItemGift class="item"
            ref="itemGift"
            :index="0"
            :item="item[0]"/>
      <ItemGift class="item"
            ref="itemGift"
            :index="1"
            :item="item[1]"/>
      <ItemGift class="item"
            ref="itemGift"
            :index="2"
            :item="item[2]"/>
      <ItemGift class="item"
            ref="itemGift"
            :index="3"
            :item="item[3]"/>            
    </div>
    <div class="relative mt">
      <img class="ab-right click" src="../assets/next.png" v-on:click="fnNext" alt="NEXT">
    </div>
  </div>
</template>

<script>
import ItemGift from '@/components/ItemGift'

export default {
  name: 'Gift',
  components: {
    ItemGift
  },
  props: {
      cate: Object,
  },
  data() {
    return {
      image: '',
      item: ['던킨도너츠', '스타벅스', '베스킨라빈스', '투썸플레이스'],
      goNext: false
    }
  },
  mounted() {
    this.url = this.$store.state.url
    this.image = this.url+'file/cate/'+this.cate.gift_image
  },
  methods: {
    fnNext() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.gift {
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
