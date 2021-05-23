<template>
    <div>
        <div class="baseLoadingBar" v-on:click="btnLoadingBar">
            <img src="../assets/loading.gif">
        </div>
    </div>
</template>

<script>
    export default {
        name: "base-loading-bar",
        props: {
        },
        data() {
            return {
                topPosLodingbar: 0
            }
        },
        mounted() {
        },
        methods: {
            btnLoadingBar(e) {
                e.preventDefault()

                this.$emit('loadingBarClose')
            }
        }
    }
</script>

<style lang="scss" scoped>
.baseLoadingBar {
    position: fixed;
    top: 0; 
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.5);
    text-align: center;

    img {
        margin-top: 20rem;
        vertical-align: middle;
        opacity: 0.8;
    }
}
</style>