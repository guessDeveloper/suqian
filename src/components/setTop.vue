<template>
    <div class="top" :class="{show:show}" @click="scrollTo">
         <div class="icon iconfont iconzd ">
             
         </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               show:false
            }
        },
        mounted(){
             window.addEventListener('scroll', this.scrollTop, true);
        },
        methods:{
            scrollTop(){
                var t = document.documentElement.scrollTop || document.body.scrollTop;
                if(t>300){
                    this.show = true;
                }else{
                    this.show = false;
                }
            },
            scrollTo(){
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0
            }
        }
    }

</script>

<style scoped="true" lang="scss">
    .top {
        position: fixed;
        opacity: 0;
        width: 50px;
        height: 50px;
        right: 20px;
        z-index: 1000;
        text-align: center;
        bottom: 113px;
        background: $main;
        cursor: pointer;
        &:hover {
            .icon {
                animation: move 1s infinite;
            }
        }
        &.show{
            opacity: 1;
        }
        .icon {
            @include transition;
            margin-top: 20px;
            font-size: 42px;
            color: #fff;
        }
    }
    
    @-webkit-keyframes move {
        0% {
            margin-top: 20px;
            opacity: 0;
        }
        100% {
            margin-top: 13px;
            opacity: 1
        }
    }
    @-moz-keyframes move {
        0% {
            margin-top: 20px;
            opacity: 0;
        }
        100% {
            margin-top: 13px;
            opacity: 1
        }
    }
      @-o-keyframes move {
        0% {
            margin-top: 20px;
            opacity: 0;
        }
        100% {
            margin-top: 13px;
            opacity: 1
        }
    }
    @keyframes move {
        0% {
            margin-top: 20px;
            opacity: 0;
        }
        100% {
            margin-top: 13px;
            opacity: 1
        }
    }

</style>
