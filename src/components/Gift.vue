<template>
  <div class="gift">
    <div class="content">
      <img :src="image" width="80%" alt="이미지">
    </div>
    <div class="relative mt text-center">
      
      <ItemGift class="item"
            ref="item"
            v-on:select="fnSelect"
            v-for="(item, index) in arrItem" 
            v-bind:index="index"
            v-bind:item="item"
            v-bind:key="item"/>
           
    </div>
    <div class="relative mt">
      <img class="ab-right click" src="../assets/next.png" v-on:click="fnNext" width="10%" alt="NEXT">
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
      arrItem: [],
      goNext: false
    }
  },
  mounted() {
    this.url = this.$store.state.url
    this.image = this.url+'file/cate/'+this.cate.gift_image
    this.arrItem = this.$store.state.cate.gift_text.split('|')
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
      for(let i=0; i<this.$refs.item.length; i++) {
          if(obj.index != i) this.$refs.item[i].fnDeSelected()
        }

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
