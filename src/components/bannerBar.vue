<template>
<div class="bannerbox">
    <div class="banner-bc" id="particles">
        <canvas class="particles-js-canvas-el" style="width: 100%; height: 100%;positon:absolute;top:0;left:0;"></canvas>
    </div>
   
    <div class="banner-image"   v-for="(item,index2) in bannerList"  :class="{active:activeIndex == index2}" :style="'background:url('+item.images+') no-repeat center center;'"></div>
    <div class="banner-list">
        <div class="banner-item" v-for="(item,index) in bannerList" :class="{active:activeIndex == index}">
            <div class="banner-content">
                <div class="title">
                    {{item.ch_name}}
                </div>
                <div class="des">{{item.ch_content}}</div>
                <button class="btn" @click="btnClick"><div>预约体验PreSuit</div>
                 <div></div>
                 <div>预约体验PreSuit</div></button>
            </div>
        </div>
        <div class="iconfont iconzuo" @click="clickLeft" v-show="bannerList.length>1"></div>
        <div class="iconfont iconyou" @click="clickRight" v-show="bannerList.length>1"></div>
        <div class="point-box">
           <ul>
            <li class="point-item" v-for="(item,index2) in bannerList" v-show="bannerList.length>1" :class="{active:index2 == activeIndex,last:index2 ==bannerList.length-1 }"></li>
            </ul>
        </div>
        <div class="iconfont iconxjt" @click='scrollBottom'></div>

    </div>
</div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                bannerList: [
                    //                    {
                    //                    ch_content: "法律工作的细致性和严肃性，决定了这是一份对客户而言容错率极低的工作。Pre Suit 正在做的是把传统法律服务 向前延展一公里，最大限度降低企业诉讼的不确定性",
                    //                    ch_name: " 使每一次的客户体验卓尔不凡",
                    //                    en_content: "i am english content",
                    //                    en_name: "i am english title",
                    //                    id: 1,
                    //                    images: "http://www.502ui.com/suqian/public/upload/201905111713135cd702a99484c.gif",
                    //                    sort: 1,
                    //                }, {
                    //                    ch_content: "我是中文内容啦啦啦",
                    //                    ch_name: "我是中文标题",
                    //                    en_content: "i am english content",
                    //                    en_name: "i am english title",
                    //                    id: 1,
                    //                    images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558231429&di=331d99b9149603ce7818cb5b6bd728a7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.liexue.cn%2Fuploadfile%2Fattachment%2Feditor%2F201705%2F1495599803jvkdn.jpg',
                    //                    sort: 1,
                    //                }
                ],
                activeIndex: 0,
                timer: ''


            }
        },
        mounted() {
            this.getBannerList();


            particlesJS('particles',

                {
                    "particles": {
                        "number": {
                            "value": 40,
                            "density": {
                                "enable": true,
                                "value_area": 1000
                            }
                        },
                        "color": {
                            "value": "#fff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#fff"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.4,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#fff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 20,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    "config_demo": {
                        "hide_card": false,
                        "background_color": "#b61924",
                        "background_image": "",
                        "background_position": "50% 50%",
                        "background_repeat": "no-repeat",
                        "background_size": "cover"
                    }
                }

            );


        },
        methods: {
            btnClick() {
                this.$emit('btn');
            },
            getBannerList() {
                this.$axios.post(`${this.$host}/suqian/public/banner/flist`, {}).then(res => {
                    this.bannerList = res.data.data;
                    this.$nextTick(() => {
                        $('.banner-item').removeClass('active');
                        setTimeout(() => {
                            $('.banner-item').eq(this.activeIndex).addClass('active');
                            this.move();
                        }, 200)
                    })
                })
            },
            clickLeft() {
                this.activeIndex += -1;
                if (this.activeIndex < 0) {
                    this.activeIndex = this.bannerList.length - 1;
                }
                clearInterval(this.timer);

            },
            clickRight() {
                this.activeIndex += 1;
                if (this.activeIndex > this.bannerList.length - 1) {
                    this.activeIndex = 0;
                }
                clearInterval(this.timer)
            },
            scrollBottom() {
                $('html,body').animate({
                    scrollTop: ($(window).height() - 90) + "px"
                }, 500);
            },
            move() {
                this.timer = setInterval(() => {
                    this.activeIndex += 1;
                    if (this.activeIndex > this.bannerList.length - 1) {
                        this.activeIndex = 0;
                    }
                }, 7000)
            }
        },
        components: {}
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @-webkit-keyframes scroll {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            -webkit-transform: translateY(20px);
            -ms-transform: translateY(20px);
            transform: translateY(20px);
        }
    }
    
    @-moz-keyframes scroll {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            -webkit-transform: translateY(20px);
            -ms-transform: translateY(20px);
            transform: translateY(20px);
        }
    }
    
    @-ms-keyframes scroll {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            -webkit-transform: translateY(20px);
            -ms-transform: translateY(20px);
            transform: translateY(20px);
        }
    }
    
    @keyframes scroll {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            -webkit-transform: translateY(20px);
            -ms-transform: translateY(20px);
            transform: translateY(20px);
        }
    }
    
    .bannerbox {
        position: fixed;
        min-width: $min-width;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
        _position: absolute;
        _bottom: auto;
        _top: expression(eval(document.documentElement.scrollTop));
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        .banner-bc {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 1;
        }
        .banner-image {
            position: absolute;
            opacity: 0;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            @include transition;
            z-index: 0;
            /*            background: url(../assets/image/bj@2x.jpg) no-repeat center center;*/
            -webkit-background-size: cover!important;
            -ms-background-size: cover!important;
            -moz-background-size: cover!important;
            background-size: cover!important;
            &.active {
                opacity: 1;
            }
        }
        .banner-list {
            width: 100%;
            min-width: $min-width;
            height: 100vh;
            position: relative;
            text-align: center;
            &:before {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                z-index: 2;
            }
            .iconzuo {
                position: absolute;
                top: 50%;
                margin-top: -40px;
                left: 40px;
                opacity: .5;
                font-size: 40px;
                line-height: 80px;
                color: #fff;
                cursor: pointer;
                @include transition;
                z-index: 7;
                &:hover {
                    opacity: 1;
                }
            }
            .iconyou {
                position: absolute;
                top: 50%;
                opacity: .5;
                margin-top: -40px;
                right: 40px;
                font-size: 40px;
                line-height: 80px;
                color: #fff;
                cursor: pointer;
                @include transition;
                z-index: 7;
                &:hover {
                    opacity: 1;
                }
            }
            .iconxjt {
                position: absolute;
                display: inline-block;
                margin: 0 auto;
                font-size: 59px;
                left: 0;
                right: 0;
                color: #fff;
                bottom: 100px;
                z-index: 7;
                cursor: pointer;
                -webkit-animation-duration: 1s;
                animation-duration: 1s;
                -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
                -webkit-animation-name: scroll;
                animation-name: scroll;
            }
            .point-box {
                position: absolute;
                left: 0;
                right: 0;
                margin: 0 auto;
                bottom: 20px;
                overflow: hidden;
                text-align: center;
                ul {
                    display: inline-block;
                    .point-item {
                        float: left;
                        width: 8px;
                        height: 8px;
                        background: #fff;
                        margin-right: 30px;
                        border-radius: 50%;
                        opacity: .5;
                        @inlcude transition;
                        &.active {
                            opacity: 1;
                        }
                        &.last {
                            margin-right: 0;
                        }
                    }
                }
            }
            .banner-item {
                &.active {
                    .banner-content {
                        opacity: 1;
                        -webkit-transform: translateY(0);
                        -ms-transform: translateY(0);
                        -moz-transform: translateY(0);
                        transform: translateY(0);
                        z-index: 6;
                        @include transition;
                        @include transitionDelay(.4s);
                    }
                }
                .banner-content {
                    position: absolute;
                    opacity: 0;
                    margin: 0 auto;
                    left: 0;
                    right: 0;
                    top: 50%;
                    margin-top: -129px;
                    z-index: 4;
                    -webkit-transform: translateY(100px);
                    -ms-transform: translateY(100px);
                    -moz-transform: translateY(100px);
                    transform: translateY(100px);
                    .title {
                        font-size: 72px;
                        text-align: center;
                        line-height: 72px;
                        color: $banner-font-color;
                        margin-bottom: 30px;
                    }
                    .des {
                        width: 755px;
                        margin: 0 auto;
                        font-size: 16px;
                        line-height: 32px;
                        height: 66px;
                        text-align: center;
                        color: $banner-font-color;
                        margin-bottom: 36px;
                    }
                    .btn {
                        display: block;
                        margin: 0 auto;
                        width: 250px;
                        height: 60px;
                        font-size: 14px;
                        background: $main;
                        color: #fff;
                        border: 0;
                    }
                }
            }
        }
        img {
            width: 100%;
        }
    }

</style>
