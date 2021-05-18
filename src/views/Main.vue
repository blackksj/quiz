<template>
  <div class="main">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'Main',
  components: {
  },
  data() {
      return {

      }
  },
  mounted() {
      this.$store.commit("setCateIdx", {cate_idx:this.$route.query.cate_idx})
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>