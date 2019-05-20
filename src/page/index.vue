<template>
<div class="page">
    <navBar :isActive="notTop" ref="nav" :activeIndex = '0'></navBar>
    <BannerBar @btn="contactShow"></BannerBar>
    <contact ref="contact"></contact>

    <div class="page-content">
       <section class="special">
           <div class="title-box">
                <div class="title">Pre Suit正在为越来越多的企业用户提供<br>含数据支持的最优诉前决策，实现诉讼净利润</div>
<!--
                <div class="bottom">Pre Suit is providing data support for more and more enterprise users<br>
Optimal pre-trial decision-making to achieve litigation net profit</div>
-->
                <div class="arrow"></div>
            </div>
            <div class="special-content">
                <div class="item">
                    <div class="icon-box">
                    <div class="iconfont iconsqfxbg"></div>
    </div>
                    <div class="item-content">
                        <div class="name">诉前分析报告</div>
                        <div class="dis">通过类案检索分析诉讼趋势、预测判赔金额；通过深度挖掘诉讼参与者的历史数据，形成法官、代理人及客户的精准自画像；从而有效帮助企业提前预知个案诉讼价值以及可行的诉讼策略。
                        </div>
                    </div>
                </div>
                <div class="item">
                   
                     <div class="item-content">
                    <div class="name">诉前资源配置</div>
                    <div class="dis">审理地区、审判人员、代理人均是造成案件结果不确定性的关键因素，为大幅降低不确定性、提高胜诉率，PreSuit针对不同个案为企业匹配数据所遴选出的经验/资源型的律师搭档，形成律师+的服务团队。
                    </div>
                    
    </div>
                                   <div class="iconfont iconsqzypz"></div>

                </div>
                <div class="item">
                                                       <div class="iconfont iconsqdytj"></div>

                     <div class="item-content">
                    <div class="name">诉前多元调解</div>
                    <div class="dis">PreSuit更能帮助企业及早发现判决结果可能不利的案件并称之为“预警”案件，当触发“预警”案件时我们会首先结合历史数据预判出合理的谈判金额区间并指导客户利用信息不对称的优势，在恰当时机介入多元调解，最大幅度减少诉...&nbsp;&nbsp;<span class="">更多</span>
                     
                    </div>
                    <div class="disDetail">PreSuit更能帮助企业及早发现判决结果可能不利的案件并称之为“预警”案件，当触发“预警”案件时我们会首先结合历史数据预判出合理的谈判金额区间并指导客户利用信息不对称的优势，在恰当时机介入多元调解，最大幅度减少诉讼带来的时间和经济成本。</div>
    </div>

                </div>
                <div class="item">
                    
                     <div class="item-content">
                    <div class="name">诉前服务性价比</div>
                         <div class="dis">对PreSuit而言，一次成功的服务意味着为企业节省了多少诉讼开支，又为企业实现了多少诉讼收益，即诉讼净利润。
                    </div>
                    
                    
                    </div>
                                        <div class="iconfont iconcgfwxjb"></div>

                </div>
            </div>
<!--
            <div class="canvas-box" id="particlesS">
                <canvas class="particles-js-canvas-el" style="width: 100%; height: 100%;positon:absolute;top:0;left:0;"></canvas>
            </div>
-->
       </section>
        <section class="service">
            <div class="title-box">
                <div class="title">服务模块</div>
<!--                <div class="bottom">SERVICE MODULE</div>-->
            </div>
            <div class="service-box">
                <div class="service-item">
                    <div class="icon iconfont icondsj"></div>
                    <div class="title">大数据+诉前量体裁衣</div>
                    <div class="content">通过对法律数据的清洗、分类及结构化处理，实现了对个案的早期诊断，帮助企业用户超前制定全面的对抗策略，使其更能从容应对诉讼。</div>
                    <a class="sever-btn btn" href="#/serviceSecond">
                      <div>点击查看</div>
                      <div></div>
                      <div>点击查看</div>
                    </a>
                </div>
                <div class="service-item">
                    <div class="icon iconfont iconjsgx"></div>
                    <div class="title">极速高效常法服务</div>
                    <div class="content">为了满足企业更多的常规需求，PreSuit同样引入了常法顾问服务。但我们更高效、更及时、更能满足您对每一项需求的期待；此外，我们也将起草律师函、催款函、律师见证等业务明确纳入常法服务的范畴，有效避免了对企业的二次收费。
                    </div>
                     <a class="sever-btn btn" href="#/service">
                      <div>点击查看</div>
                      <div></div>
                      <div>点击查看</div>
                    </a>
                </div>
                <div class="service-item last">
                    <div class="icon iconfont iconssrz"></div>
                    <div class="title">诉讼融资</div>
                    <div class="content">PreSuit通过智能高效的前期案件筛选，为部分案件提供第三方资金支持，投资款项包括但不限于诉讼费、财产保全费、鉴定费、公告费、评估费等，使企业实现零成本启动诉讼。
                    </div>
                     <a class="sever-btn btn" href="#/serviceThrid">
                      <div>点击查看</div>
                      <div></div>
                      <div>点击查看</div>
                    </a>
                </div>
            </div>
        </section>
        <div class="product">
            <div class="title-box">
                <div class="title">诉前.视角</div>
                <div class="bottom">PreSuit如何看待一场诉讼</div>
            </div>
            <div class="product-box" :class="{active:productActive}">

                <div class="ge half c1">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="ge half c2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="ge c3 big">
                    <div class="name">诉讼收益预测</div>
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="ge c4 big">
                    <div class="name">“无讼”判定</div>
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="ge c5 half">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="ge c6 big">
                    <div class="name">诉讼预期管理</div>
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="ge c7 big">
                   <div class="name">诉讼成本控制</div>
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="ge c8 big">
                    <div class="name">败诉风险预警</div>
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="ge c9 big">
                    <div class="name">第三方资金支持</div>
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="ge c10 half">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="ge c11 big">
                    <div class="name">律师+</div>
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="ge c12 half">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="ge c13 big">
                    <div class="name">诉讼/调解</div>
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>

            </div>
            <div class="canvas-box" id="particlesT">
                <canvas class="particles-js-canvas-el" style="width: 100%; height: 100%;positon:absolute;top:0;left:0;"></canvas>
            </div>
        </div>


        <section class="ad">
            <div class="title">
                诉讼只是过程, PreSuit更追求收益
            </div>


            <button class="btn" @click="contactShow">
                 <div>预约体验PreSuit</div>
                 <div></div>
                 <div>预约体验PreSuit</div>
            </button>
        </section>

        <foot @contact="aboutShow"></foot>
        <top></top>
    </div>

</div>
</template>
<script>
    import navBar from '@/components/nav.vue'
    import BannerBar from '@/components/bannerBar.vue'
    import foot from '@/components/footer.vue'
    import contact from '@/components/contact.vue'
    import top from '@/components/setTop.vue'
    export default {

        data() {
            return {
                notTop: false,
                productActive: false,
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, true);
            
            particlesJS('particlesT',

                {
                    "particles": {
                        "number": {
                            "value": 30,
                            "density": {
                                "enable": true,
                                "value_area": 1000
                            }
                        },
                        "color": {
                            "value": "#C8AC48"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#C8AC48"
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
                            "value": 5,
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
                            "color": "#C8AC48",
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
                                "size": 40,
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
//           particlesJS('particlesS',
//
//                {
//                    "particles": {
//                        "number": {
//                            "value": 30,
//                            "density": {
//                                "enable": true,
//                                "value_area": 1000
//                            }
//                        },
//                        "color": {
//                            "value": "#e2e2e2"
//                        },
//                        "shape": {
//                            "type": "circle",
//                            "stroke": {
//                                "width": 0,
//                                "color": "#e2e2e2"
//                            },
//                            "polygon": {
//                                "nb_sides": 5
//                            },
//                            "image": {
//                                "src": "img/github.svg",
//                                "width": 100,
//                                "height": 100
//                            }
//                        },
//                        "opacity": {
//                            "value": 1,
//                            "random": false,
//                            "anim": {
//                                "enable": false,
//                                "speed": 1,
//                                "opacity_min": 0.1,
//                                "sync": false
//                            }
//                        },
//                        "size": {
//                            "value": 5,
//                            "random": true,
//                            "anim": {
//                                "enable": false,
//                                "speed": 40,
//                                "size_min": 0.1,
//                                "sync": false
//                            }
//                        },
//                        "line_linked": {
//                            "enable": true,
//                            "distance": 150,
//                            "color": "#e2e2e2",
//                            "opacity": 1,
//                            "width": 1
//                        },
//                        "move": {
//                            "enable": true,
//                            "speed": 2,
//                            "direction": "none",
//                            "random": false,
//                            "straight": false,
//                            "out_mode": "out",
//                            "attract": {
//                                "enable": false,
//                                "rotateX": 600,
//                                "rotateY": 1200
//                            }
//                        }
//                    },
//                    "interactivity": {
//                        "detect_on": "canvas",
//                        "events": {
//                            "onhover": {
//                                "enable": true,
//                                "mode": "repulse"
//                            },
//                            "onclick": {
//                                "enable": true,
//                                "mode": "push"
//                            },
//                            "resize": true
//                        },
//                        "modes": {
//                            "grab": {
//                                "distance": 400,
//                                "line_linked": {
//                                    "opacity": 1
//                                }
//                            },
//                            "bubble": {
//                                "distance": 400,
//                                "size": 40,
//                                "duration": 2,
//                                "opacity": 8,
//                                "speed": 3
//                            },
//                            "repulse": {
//                                "distance": 200
//                            },
//                            "push": {
//                                "particles_nb": 4
//                            },
//                            "remove": {
//                                "particles_nb": 2
//                            }
//                        }
//                    },
//                    "retina_detect": true,
//                    "config_demo": {
//                        "hide_card": false,
//                        "background_color": "#b61924",
//                        "background_image": "",
//                        "background_position": "50% 50%",
//                        "background_repeat": "no-repeat",
//                        "background_size": "cover"
//                    }
//                }
//
//            );
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll, true);
        },
        methods: {

            handleScroll() {
                var t = document.documentElement.scrollTop || document.body.scrollTop;
                if (t > 0) {
                    this.notTop = true;
                } else {
                    this.notTop = false;
                }
                if (t > document.querySelector('.product').offsetTop + 500) {
                    //                    console.log(document.querySelector('.product').offsetTop)
                    this.productActive = true;
                }

            },
            aboutShow() {
                this.$refs.nav.showAbout();
            },
            contactShow() {
                this.$refs.contact.show();
            }
        },
        components: {
            navBar,
            BannerBar,
            foot,
            contact,
            top
        }
    }

</script>
<style scoped="true" lang="scss">
    .page {}
    
    .red {
        $co: $main;
        color: $co;
    }
    
    .page-content {
        position: relative;
        width: 100%;
        top: 100vh;
        z-index: 100;
        min-width: $min-width;
    }
    
    .product {
        width: 100%;
        height: 842px;
        text-align: center;
        position: relative;
        background: url(../assets/image/cptz-bc.png) no-repeat center bottom;
        @include backSize(100%);
        background-color: #fff;
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }
        .canvas-box {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 0;
        }
        .title-box {
            display: inline-block;
            .title {
                line-height: 32px;
                font-size: 32px;
                color: $title-color;
                margin-bottom: 19px;
                padding: 0 100px;
                position: relative;
                margin-top: 100px;
                &:before {
                    position: absolute;
                    content: '';
                    left: 0;
                    top: 50%;
                    margin-top: -1px;
                    display: block;
                    width: 80px;
                    height: 2px;
                    background: $title-color;
                }
                &:after {
                    position: absolute;
                    content: '';
                    right: 0;
                    top: 50%;
                    margin-top: -1px;
                    display: block;
                    width: 80px;
                    height: 2px;
                    background: $title-color;
                }
            }
            .bottom {
                font-size: 12px;
                color: $title-tip-color;
            }
        }
        .product-box {
            width: 1080px;
            height: 539px;
            margin: 0 auto;
            margin-top: 60px;
            position: relative;
            z-index: 10;
            @include transition;
            &.active {
                .ge {
                    @include transition;
                    -webkit-transform: scale(1);
                    -moz-transform: scale(1);
                    -ms-transform: scale(1);
                    transform: scale(1);
                }
            }
            .ge {
                position: absolute;
                width: 145px;
                height: 167px;
                line-height: 167px;
                font-size: 16px;
                color: #333333;
                -webkit-transform: scale(0);
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                transform: scale(0);
                &.big:hover {
                    /*
                    -webkit-transform: scale(1.1);
                    -moz-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    transform: scale(1.1);
*/
                    @include transitionDelay(0s);
                    .name {
                        color: #fff;
                    }
                    .hex-brick {
                        background: $main;
                        color: #fff;
                    }
                }
                &.half {
                    opacity: .5;
                }
                .name {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    right: 0;
                    line-height: 167px;
                    font-size: 16px;
                    color: $main;
                    z-index: 2;
                    @include transition;
                }
                .hex-brick {
                    position: absolute;
                    top: 50%;
                    margin-top: -42px;
                    width: 143px;
                    height: 84px;
                    z-index: 0;
                    border-left: 1px solid $main;
                    border-right: 1px solid $main;
                    background: #fff;
                    /*                    @include transition;*/
                }
                .h2 {
                    -webkit-transform: rotate(60deg);
                    -moz-transform: rotate(60deg);
                    -ms-transform: rotate(60deg);
                    transform: rotate(60deg);
                }
                .h3 {
                    -webkit-transform: rotate(-60deg);
                    -moz-transform: rotate(-60deg);
                    -ms-transform: rotate(-60deg);
                    transform: rotate(-60deg);
                }
            }
            .c1 {
                left: 0;
                top: 249px;
            }
            .c2 {
                top: 0;
                left: 144px;
                @include transitionDelay(.1s);
            }
            .c3 {
                left: 216px;
                top: 124px;
                @include transitionDelay(.2s);
            }
            .c4 {
                top: 249px;
                left: 144px;
                @include transitionDelay(.3s);
            }
            .c5 {
                top: 124px;
                left: 359px;
                @include transitionDelay(.4s);
            }
            .c6 {
                top: 0;
                left: 431px;
                @include transitionDelay(.5s);
            }
            .c7 {
                top: 0;
                left: 575px;
                @include transitionDelay(.6s);
            }
            .c8 {
                top: 249px;
                left: 431px;
                @include transitionDelay(.7s);
            }
            .c9 {
                top: 249px;
                left: 575px;
                @include transitionDelay(.8s);
            }
            .c10 {
                top: 249px;
                left: 719px;
                @include transitionDelay(.9s);
            }
            .c11 {
                top: 124px;
                left: 791px;
                @include transitionDelay(1s);
            }
            .c12 {
                top: 124px;
                left: 935px;
                @include transitionDelay(1.1s);
            }
            .c13 {
                top: 374px;
                left: 359px;
                @include transitionDelay(1.2s);
            }
        }
    }
    
    .service {
        $title-color: #fff;
        $content-title: #000;
        $content-color: #666666;
        width: 100%;
        min-width: $min-width;
        height: 800px;
        background: url(../assets/image/fuwu-bj.jpg) no-repeat center bottom;
        @include backSize(cover);
        -webkit-background-attachment: fixed;
        -ms-background-attachment: fixed;
        -moz-background-attachment: fixed;
        background-attachment: fixed;
        text-align: center;
        .title-box {
            display: inline-block;
            .title {
                line-height: 32px;
                font-size: 32px;
                color: $title-color;
/*                margin-bottom: 19px;*/
                padding: 0 100px;
                position: relative;
                margin-top: 80px;
                &:before {
                    position: absolute;
                    content: '';
                    left: 0;
                    top: 50%;
                    margin-top: -1px;
                    display: block;
                    width: 80px;
                    height: 2px;
                    background: $title-color;
                }
                &:after {
                    position: absolute;
                    content: '';
                    right: 0;
                    top: 50%;
                    margin-top: -1px;
                    display: block;
                    width: 80px;
                    height: 2px;
                    background: $title-color;
                }
            }
            .bottom {
                font-size: 12px;
                text-transform: uppercase;
                color: $title-tip-color;
            }
        }
        .service-box {
            width: 1200px;
            margin: 0 auto;
            margin-top: 84px;
            height: 480px;
            .service-item {
                float: left;
                width: 355px;
                position: relative;
                height: 100%;
                background: #fff;
                margin-right: 67px;
                &.last {
                    margin-right: 0;
                }
/*
                &:hover {
                    .btn {
                       @include btnColor;
                        color: #fff;
                    }
                }
*/
                .icon {
                    width: 119px;
                    height: 114px;
                    font-size: 114px;
                    color: $main;
                    font-weight: 100;
                    margin: 0 auto;
                    margin-top: 41px;
                }
                .title {
                    color: $content-title;
                    font-size: 18px;
                    line-height: 18px;
                    margin-top: 37px;
                    text-align: center;
                }
                .content {
                    margin-top: 23px;
                    color: $content-color;
                    font-size: 12px;
                    padding: 0 34px;
                    height: 90px;
                    text-align: justify;
                    line-height: 24px;
                }
                .btn {
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    bottom: 48px;
                    width: 285px;
                    height: 48px;
                    color: $main;
                    margin-top: 47px;
                    font-size: 12px;
                    background-color: #fff;
                    border: 1px solid $main;
                    cursor: pointer;
                    @include transition;
                }
            }
        }
    }
    
    .ad {
        width: 100%;
        height: 350px;
        overflow: hidden;
        /*        float:left;*/
        background: url(../assets/image/fuwu.jpg) no-repeat center center;
        @include backSize(cover);
        .title {
            font-size: 48px;
            color: #fff;
            text-align: center;
            line-height: 48px;
            margin-top: 77px;
        }
        .btn {
            display: block;
            width: $btn-width;
            height: $btn-height;
            @include btnColor;
            margin: 0 auto;
            margin-top: 67px;
            color: #fff;
        }
    }
    
    .special {
        width: 100%;
        text-align: center;
        background: #fff;
        overflow: hidden;
        position: relative;
        .canvas-box{
            position: absolute;
            width:100%;
            height:100%;
                top:0;
            left:0;
            z-index: 0;
        }
        &::before{
            content:'';
            position: absolute;
            display: block;
            top:0;
            left:0;
            width:100%;
            height:100%;
            z-index: 1;
        }
        .title-box {
            display: inline-block;
            position: relative;
            .title {
                font-size: 32px;
                margin-top: 93px;
                line-height: 44px;
                color: $content-title-color;
                margin-bottom: 10px;
            }
            .bottom {
                color: $content-title-bottom-cl;
                font-size: 12px;
                text-transform: uppercase;
                line-height: 22px;
            }
            padding-bottom:29px;
            .arrow {
                width: 0;
                height: 0;
                border-top: 10px solid #E2E2E2;
                border-left: 9px solid transparent;
                border-right: 9px solid transparent;
                border-bottom: 10px solid transparent;
                position: absolute;
                left: 50%;
                margin-left: -9px;
                bottom: -10px;
                cursor: pointer;
            }
        }
        .special-content {
            width: $min-width;
            margin: 0 auto;
            margin-top: 63px;
            margin-bottom: 160px;
            height: 315px;
            position: relative;
            z-index: 2;
            padding-top: 0 px;
            &::before {
                content: '';
                position: absolute;
                display: block;
                top: 0;
                left: 600px;
                width: 0;
                height: 100%;
                border-left: 1px solid #F1F1F1;
            }
            &::after {
                content: '';
                position: absolute;
                display: block;
                width: 100%;
                left: 0;
                top: 50%;
                height: 0;
                border-bottom: 1px solid #F1F1F1;
            }
            .item {
                width: 50%;
                float: left;
                &:nth-child(1) {
                    padding-bottom: 50px;
                }
                &:nth-child(2) {
                    padding-bottom: 50px;
                }
                &:nth-child(3) {
                    padding-top: 50px;
                    &:hover {
                        .disDetail {
                            display: block;
                            opacity: 1;
                        }
                        .dis {
                            display: none;
                            opacity: 0;
                        }
                    }
                }
                &:nth-child(4) {
                    padding-top: 50px;
                    
                }
                &:nth-child(2n) {
                    .item-content {
                        float: right;
                    }
                    .iconfont {
                        float: right;
                    }
                }
                &:hover{
                    .iconfont{
                        color:$main;
                    }
                }
                .iconfont {
                    float: left;
                    color: #C8C8C8;
                    font-size: 76px;
                    margin-right: 30px;
                    @include transition;
                }
                .item-content {
                    float: left;
                    width: 425px;
                    text-align: left;
                    .name {
                        font-size: 20px;
                        line-height: 20px;
                        margin-bottom: 9px;
                        color: $main;
                    }
                    .dis {
                        display: block;
                        font-size: 12px;
                        color: #999;
                        @include transition;
                        opacity: 1;
                        text-align: justify;
                        line-height: 24px;
                        span{
                            color:$main;
                        }
                    }
                    .disDetail {
                        display: none;
                        opacity: 0;
                        @include transition;
                        font-size: 12px;
                        color: #999;
                        text-align: justify;
                        line-height: 24px;
                    }
                }
            }
        }
    }

</style>
