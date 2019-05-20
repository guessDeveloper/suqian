<template>
  <div class="ad">
      <div class="middle">
         诉讼只是过程, PreSuit更追求收益
         <button class="btn" @click="btnClick"><div>预约体验PreSuit</div>
                 <div></div>
                 <div>预约体验PreSuit</div></button>
      </div>
  </div>    

</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            btnClick() {
                this.$emit('btn')
            }
        }

    }

</script>
<style scoped="true" lang="scss">
    .ad {
        width: 100%;
        min-width: $min-width;
        border-top: 1px solid rgba(0, 0, 0, .1);
        .middle {
            width: $min-width;
            margin: 0 auto;
            height: 330px;
            line-height: 330px;
            font-size: 44px;
            text-align: left;
            color: $main;
            .btn {
                float: right;
                width: $btn-width;
                margin-top: 135px;
                height: $btn-height;
                background: $main;
                font-size: 14px;
                color: #fff;
                @include btnColor;
            }
        }
    }

</style>
