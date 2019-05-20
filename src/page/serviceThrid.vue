<template>
    <div class="page">
        <navBar :isActive="true" ref="nav" :activeIndex="1" :childActiveIndex = '2'></navBar>
        <bannerBar :myIndex="2"></bannerBar>
        <contact ref="contact"></contact>
        <div class="content">
             <div class="main">
                 <section class="des">
                     <div class="left">
                         <img src="../assets/image/service-31@2x.jpg" alt="">
                     </div>
                     <div class="right">
                          <div class="title">
                              <div class="title-top">诉讼融资</div>
                              <div class="title-bottom">Litigation financing</div>
                          </div>
                          <div class="cont">Pre Suit 通过智能高效的前期案件筛选，为部分案件提供第三方诉讼资助，对企业涉诉案件进行投资，投资款项包括但不限于诉讼费、财产保全费、鉴定费、公告费、评估费等等，使企业实现 0 成本享受诉讼权益。Pre Suit 待客户收到款项后按一定比例收取费用。
                          <p>(该服务仅面向已购买第一或第二项服务的用户开放)</p>
                          </div>
                          <button class="btn" @click="contactShow"><div>预约体验PreSuit</div>
                 <div></div>
                 <div>预约体验PreSuit</div></button>
                     </div>
                 </section>
                 <section class="case">
                     <div class="title-box">
                        <div class="title">使用场景</div>
<!--                        <div class="bottom">Use scene enumeration</div>-->
                    </div>
                    <div class="caseOne" style="margin-bottom:133px;" :class={active:caseOne}>
                        <div class="left">
                            <div class="title">
                                No.1
                            </div>
<!--                            <div class="tip">合规培训沙龙</div>-->
                            <div class="case-content">企业资金紧缺，但诉讼又迫在眉睫，诉讼融资可以实现企业零成本获取诉讼收益。PreSuit为企业撮合第三方融资
                            </div>
                        </div>
                        <div class="right">
                            <img src="../assets/image/service-32@2x.jpg" alt="">
                        </div>
                        
                    </div>
                    <div class="caseTwo" style="margin-bottom:120px;" :class="{active:caseTwo}">
                         <div class="left">
                             <img src="../assets/image/service-33@2x.jpg" alt="">
                         </div>
                         <div class="right">
                             <div class="title">
                                No.2
                            </div>
<!--                            <div class="tip">律师+审计+财务咨询联合出具的企业内控风险报告（定制）</div>-->
                            <div class="case-content">市面上第三方诉讼融资平台正在兴起，然而企业在案件胜诉率方面无法说服投资方，融资形同虚设。PreSuit帮企业提供全面的案件分析报告
                            </div>
                         </div>
                    </div>
                  
                 </section>
             </div>
        </div>
        <ad @btn="contactShow"></ad>
        <foot @contact="aboutShow"></foot>
         <top></top>
         <loading ref="loading"></loading>
    </div>
</template>
<script>
    import navBar from '@/components/nav.vue'
    import foot from '@/components/footer.vue'
    import ad from '@/components/ad.vue'
    import bannerBar from '@/components/OtherBanner.vue'
    import contact from '@/components/contact.vue'
    import top from '@/components/setTop.vue'
     import loading from '@/components/loading.vue'
    export default {
        data() {
            return {
                caseOne: false,
                caseTwo: false
            }
        },
        mounted() {
            window.addEventListener('scroll', this.haldscroll, true);
               let _this = this;
           $(document).ready(function(){
               _this.$refs.loading.hide();
           })
        },
        methods: {
            contactShow() {
                this.$refs.contact.show();
            },
            aboutShow() {
                this.$refs.nav.showAbout();
            },
            haldscroll() {
                var t = document.documentElement.scrollTop || document.body.scrollTop;
                if (t > 900) {
                    this.caseOne = true;
                }
                if (t > 1400) {
                    this.caseTwo = true;
                }

            }
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.haldscroll, true);
        },
        components: {
            navBar,
            foot,
            ad,
            bannerBar,
            contact,
            top,
            loading
        }
    }

</script>
<style scoped lang="scss">
    .content {
        width: 100%;
        min-width: $min-width;
        position: relative;
        &:before {
            content: '';
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            margin: 0 auto;
            left: 0;
            right: 0;
            top: -60px;
            border: 30px solid transparent;
            border-bottom-color: #fff;
        }
        .main {
            width: $min-width;
            margin: 0 auto;
            .des {
                overflow: hidden;
                padding-bottom: 30px;
                padding-top: 100px;
                .left {
                    float: left;
                    width: 530px;
                    height: 480px;
                    background: $main;
                    img {
                        float: left;
                        width: 541px;
                        height: 490px;
                        margin: 20px 0 0 20px;
                    }
                }
                .right {
                    float: right;
                    .title {
                        .title-top {
                            margin-top: 72px;
                            font-size: 36px;
                            color: $main;
                            line-height: 36px;
                        }
                        .title-bottom {
                            font-size: 18px;
                            color: #E2E2E2;
                            text-transform: uppercase;
                            line-height: 18px;
                            margin-top: 24px;
                        }
                    }
                    .cont {
                        margin-top: 28px;
                        width: 556px;
                        font-size: 14px;
                        line-height: 35px;
                        color: #333333;
                        p{
                            color:#999999;
                        }
                    }
                    .btn {
                        width: $btn-width;
                        height: $btn-height;
                        line-height: $btn-height;
                        font-size: 16px;
                        background: $main;
                        color: #fff;
                        margin-top: 62px;
                        @include btnColor;
                    }
                }
            }
            .case {
                text-align: center;
                .title-box {
                    display: inline-block;
                    margin-bottom: 89px;
                    .title {
                        line-height: 32px;
                        font-size: 32px;
                        color: $title-color;
                        margin-bottom: 19px;
                        padding: 0 100px;
                        position: relative;
                        margin-top: 139px;
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
                .caseOne {
                    width: 100%;
                    height: 520px;
                    position: relative;
                    &.active {
                        .left {
                            -webkit-transform: translateX(0px);
                            -moz-transform: translateX(0px);
                            -ms-transform: translateX(0px);
                            transform: translateX(0px);
                            opacity: 1;
                        }
                        .right {
                            -webkit-transform: translateY(0px);
                            -moz-transform: translateY(0px);
                            -ms-transform: translateY(0px);
                            transform: translateY(0px);
                            opacity: 1;
                        }
                    }
                    .left {
                        float: left;
                        text-align: center;
                        width: 525px;
                        height: 430px;
                        background: #fff;
                        -webkit-transform: translateX(-80px);
                        -moz-transform: translateX(-80px);
                        -ms-transform: translateX(-80px);
                        transform: translateX(-80px);
                        opacity: 0;
                        @include transitionTime(2s);
                        margin-top: 45px;
                        -webkit-transition-delay: 1s;
                        -ms-transition-delay: 1s;
                        -moz-transition-delay: 1s;
                        transition-delay: 1s;
                        -webkit-box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                        -ms-box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                        -moz-box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                        .title {
                            font-size: 72px;
                            line-height: 54px;
                            margin-top: 117px;
                            color: $main;
                            text-align: center;
                            position: relative;
                        }
                        .tip {
                            font-size: 30px;
                            line-height: 30px;
                            color: #333333;
                            margin-top: 49px;
                        }
                        .case-content {
                            width:299px;
                            margin: 0 auto;
                            margin-top: 48px;
                            font-size: 14px;
                            text-align: justify;
                            color: #666;
                            line-height: 35px;
                        }
                    }
                    .right {
                        position: absolute;
                        top: 0;
                        right: 0;
                        z-index: -1;
                        -webkit-transform: translateY(50px);
                        -moz-transform: translateY(50px);
                        -ms-transform: translateY(50px);
                        transform: translateY(50px);
                        opacity: 0;
                        @include transitionTime(2s);
                        img {
                            float: right;
                            width: 831px;
                            height: 520px;
                        }
                    }
                }
                .caseTwo {
                    width: 100%;
                    height: 520px;
                    position: relative;
                    &.active {
                        .left {
                            -webkit-transform: translateY(0px);
                            -moz-transform: translateY(0px);
                            -ms-transform: translateY(0px);
                            transform: translateY(0px);
                            opacity: 1;
                        }
                        .right {
                            -webkit-transform: translateX(0px);
                            -moz-transform: translateX(0px);
                            -ms-transform: translateX(0px);
                            transform: translateX(0px);
                            opacity: 1;
                        }
                    }
                    .left {
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: -1;
                        img {
                            float: left;
                            width: 831px;
                            height: 520px;
                        }
                        -webkit-transform: translateY(80px);
                        -moz-transform: translateY(80px);
                        -ms-transform: translateY(80px);
                        transform: translateY(80px);
                        opacity: 0;
                        @include transitionTime(2s);
                    }
                    .right {
                        float: right;
                        text-align: center;
                        width: 525px;
                        height: 430px;
                        background: #fff;
                        margin-top: 45px;
                        -webkit-transform: translateX(50px);
                        -moz-transform: translateX(50px);
                        -ms-transform: translateX(50px);
                        transform: translateX(50px);
                        opacity: 0;
                        @include transitionTime(2s);
                        -webkit-transition-delay: 1s;
                        -ms-transition-delay: 1s;
                        -moz-transition-delay: 1s;
                        transition-delay: 1s;
                        -webkit-box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                        -ms-box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                        -moz-box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                        .title {
                            font-size: 72px;
                            line-height: 54px;
                            margin-top: 117px;
                            color: $main;
                            text-align: center;
                            position: relative;
                        }
                        .tip {
                            width: 436px;
                            margin: 0 auto;
                            font-size: 30px;
                            text-align: center;
                            line-height: 44px;
                            color: #333333;
                            margin-top: 42px;
                        }
                        .case-content {
                            width: 359px;
                            margin: 0 auto;
                            margin-top: 48px;
                            font-size: 14px;
                            text-align: justify;
                            color: #666;
                            line-height: 35px;
                        }
                    }
                }
            }
        }
    }

</style>
