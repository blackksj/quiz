<template>
    <div v-if="message" class="baseAlertMessageWrap">
        <div class="alertBackground"></div>
        <div class="alertMessageWrap">
            <div class="alertMessage">
                <div class="btnWrap">
                    <button id="btnAlertMessageClose" v-on:click="btnAlertMessageClose">
                        닫기
                    </button>
                </div>
                <div class="message" v-html="message">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "base-alert-message",
        props: {
            message: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
            btnAlertMessageClose(e) {
                e.preventDefault()

                this.$emit('btnClose');
            }
        },
        watch: {
        }
    }
</script>

<style lang="scss" scoped>
.baseAlertMessageWrap {
    .alertBackground {
        z-index: 99998;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #ccc;
        opacity: 0.5;
    }

    .alertMessageWrap {
        z-index: 99999;
        position: fixed;
        font-size: 2rem;
        top:300px;
        width: 100%;

        .alertMessage {
            border: 1px solid #ccc;
            background-color: #fff;
            border-radius: 10px;
            border-radius: 10px;
            width: 600px;
            padding: 5px 10px 20px 10px;
            margin: 0 auto;

            .btnWrap {
                text-align: right;
                margin-right: 5px;

                #btnAlertMessageClose {
                    cursor: pointer;
                    background-color: #ccc;
                    color: #000;
                    border: 1px solid #ccc;
                    line-height: 2rem;
                    font-size: 1rem;                    
                    border-radius: 0.2rem;
                }
            }

            .message {
                color: #666;
                padding: 20px 20px;
            }
        }
    }
}
</style>