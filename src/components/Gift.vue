<template>
  <div class="gift">
    <div class="content">
      <img :src="image" width="80%" alt="이미지">
    </div>
    <div class="relative mt text-center">
      <ItemGift class="item"
            ref="itemGift0"
            :index="0"
            v-on:select="fnSelect"
            :item="item[0]"/>
      <ItemGift class="item"
            ref="itemGift1"
            :index="1"
            v-on:select="fnSelect"
            :item="item[1]"/>
      <ItemGift class="item"
            ref="itemGift2"
            :index="2"
            v-on:select="fnSelect"
            :item="item[2]"/>
      <ItemGift class="item"
            ref="itemGift3"
            :index="3"
            v-on:select="fnSelect"
            :item="item[3]"/>            
    </div>
    <div class="relative mt">
      <img class="ab-right click" src="../assets/next.png" v-on:click="fnNext" width="15%" alt="NEXT">
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
      item: [],
      goNext: false
    }
  },
  mounted() {
    this.url = this.$store.state.url
    this.image = this.url+'file/cate/'+this.cate.gift_image
    this.item = this.$store.state.cate.gift_text.split('|')
  },
  methods: {
    fnNext() {
      this.$store.state.answer.reply = this.$store.state.reply
      let strAnswer = JSON.stringify(this.$store.state.answer)

      let formData = new FormData()
      formData.append('answer', strAnswer)  

      this.$store.dispatch('postAnswer', formData)
                  .then(response => {
                      this.$emit('close')
                      return response
                  })
   

    },
    fnSelect(obj) {
      if(obj.index != 0) {this.$refs.itemGift0.fnDeSelected()}
      if(obj.index != 1) {this.$refs.itemGift1.fnDeSelected()}
      if(obj.index != 2) {this.$refs.itemGift2.fnDeSelected()}
      if(obj.index != 3) {this.$refs.itemGift3.fnDeSelected()}

      this.$store.state.answer.present = obj.item
    }
  }
}
</script>
<style lang="scss" scoped>
.gift {
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
