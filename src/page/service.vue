<template>
    <div class="page">
        <navBar :isActive="true" ref="nav" :activeIndex="1" :childActiveIndex = '1'></navBar>
        <bannerBar :myIndex="1"></bannerBar>
        <contact ref="contact"></contact>
        <div class="content">
             <div class="main">
                 <section class="des">
                     <div class="left">
                         <img src="../assets/image/service21@2x.jpg" alt="">
                     </div>
                     <div class="right">
                          <div class="title">
                              <div class="title-top">极速高效常法服务</div>
                              <div class="title-bottom">EXTREMELY FAST, EFFICIENT ADN EFFICIENT SERVICE</div>
                          </div>
                          <div class="cont">为了满足企业更多的常规需求，Pre Suit 同样引入了常法顾问服务。但我们更高效、更及时、更能满足您对每一项需求的期待;此外，我们也将起草律师函、催款函、律师见证等业务明确纳入常法服务的范畴，有效避免了对用户的二次收费。
                          </div>
                          <button class="btn" @click="contactShow"><div>预约体验PreSuit</div>
                 <div></div>
                 <div>预约体验PreSuit</div></button>
                     </div>
                 </section>
                 <section class="case">
                     <div class="title-box">
                        <div class="title">使用场景列举</div>
                        <div class="bottom">Use scene enumeration</div>
                    </div>
                    <div class="caseOne" style="margin-bottom:160px;" :class="{active:caseOne}">
                        <div class="left">
                            <div class="title">
                                No.1
                            </div>
                            <div class="tip">人工智能+合同审批</div>
                            <div class="case-content">Pre Suit 应用了标准化的合同审批流程，根据不同企业的行业特征及实际需要，在合同批阅过程中为企业定制标准 化合同模版，累积形成企业的标准合同库。而对于交易对手提供的非标合同，则从风险角度由人工智能+专业人士 双重批注，将风险类型和风险等级明确提示给企业用户。
                            </div>
                        </div>
                        <div class="right">
                            <img src="../assets/image/service22@2x.jpg" alt="">
                        </div>
                        
                    </div>
                    <div class="caseTwo" style="margin-bottom:160px;" :class="{active:caseTwo}">
                         <div class="left">
                             <img src="../assets/image/service24@2x.jpg" alt="">
                         </div>
                         <div class="right">
                             <div class="title">
                                No.2
                            </div>
                            <div class="tip">法律咨询</div>
                            <div class="case-content" style="width:387px;">Pre Suit 认真对待企业用户的每一次提问，为保证回复的高效性，我们承诺普通咨询 2 小时内回复、疑难咨询 24 小时内回复;为保证回复的准确度，我们持续整合公司法、劳动法、税法、侵权等领域的专家;为保证回复的完整性，我们将回复先以书面形式提交给客户，方便企业高管和各部门间同步获取信息，随后我们将在客户方便的时段进行电话回访
                            </div>
                         </div>
                    </div>
                    <div class="caseOne" style="margin-bottom:116px;" :class="{active:caseThree}">
                        <div class="left">
                            <div class="title">
                                No.3
                            </div>
                            <div class="tip">客户资料私有化存档</div>
                            <div class="case-content">服务期内产生的所有用户数据，都将为 Pre Suit 高度珍视。我们将您的资料妥善保管，便于您随时查看，了解企业成长的痕迹，同时我们将通过服务数据挖掘企业所在行业/地区的高频风险点，定时向企业用户推送有关的法律更新和培训定制咨询
                            </div>
                        </div>
                        <div class="right">
                            <img src="../assets/image/service23@2x.jpg" alt="">
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
                caseTwo: false,
                caseThree: false
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
                if (t > 1900) {
                    this.caseThree = true;
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
    .banner {
        width: 100%;
        padding-top: 100px;
        overflow: hidden;
        img {
            float: left;
            width: 100%;
        }
        .box {
            position: relative;
            overflow: hidden;
            .title-box {
                position: absolute;
                margin: 0 auto;
                left: 0;
                right: 0;
                top: 50%;
                margin-top: -52px;
                text-align: center;
                .top {
                    font-size: 60px;
                    line-height: 60px;
                    color: #fff;
                }
                .bottom {
                    text-transform: uppercase;
                    font-size: 24px;
                    line-height: 24px;
                    margin-top: 19px;
                    color: #fff;
                }
            }
        }
    }
    
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
                    height: 420px;
                    position: relative;
                    &:after {
                        display: block;
                        content: '';
                        clear: both;
                    }
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
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 1;
                        text-align: left;
                        -webkit-transform: translateX(-80px);
                        -moz-transform: translateX(-80px);
                        -ms-transform: translateX(-80px);
                        transform: translateX(-80px);
                        opacity: 0;
                        @include transitionTime(2s);
                        -webkit-transition-delay: 1s;
                        -ms-transition-delay: 1s;
                        -moz-transition-delay: 1s;
                        transition-delay: 1s;
                        .title {
                            font-size: 72px;
                            line-height: 24px;
                            margin-top: 61px;
                            color: $main;
                            text-align: left;
                            position: relative;
                            &:after {
                                position: absolute;
                                top: 26px;
                                left: 179px;
                                content: '';
                                display: block;
                                width: 350px;
                                height: 1px;
                                background: $main;
                            }
                        }
                        .tip {
                            font-size: 30px;
                            line-height: 30px;
                            color: #333333;
                            margin-top: 49px;
                        }
                        .case-content {
                            width: 380px;
                            margin-top: 28px;
                            font-size: 14px;
                            color: #666;
                            text-align: justify;
                            line-height: 35px;
                        }
                    }
                    .right {
                        position: absolute;
                        right: 0;
                        top: 0;
                        z-index: 0;
                        -webkit-transform: translateY(50px);
                        -moz-transform: translateY(50px);
                        -ms-transform: translateY(50px);
                        transform: translateY(50px);
                        opacity: 0;
                        @include transitionTime(2s);
                        img {
                            float: right;
                            width: 746px;
                            height: 420px;
                        }
                    }
                }
                .caseTwo {
                    &:after {
                        display: block;
                        content: '';
                        clear: both;
                    }
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
                        float: left;
                        -webkit-transform: translateY(80px);
                        -moz-transform: translateY(80px);
                        -ms-transform: translateY(80px);
                        transform: translateY(80px);
                        opacity: 0;
                        @include transitionTime(2s);
                        img {
                            float: left;
                            width: 746px;
                            height: 420px;
                        }
                    }
                    .right {
                        float: right;
                        text-align: right;
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
                        .title {
                            font-size: 72px;
                            line-height: 54px;
                            margin-top: 24px;
                            color: $main;
                            text-align: right;
                            position: relative;
                            &:after {
                                position: absolute;
                                top: 26px;
                                right: 179px;
                                content: '';
                                display: block;
                                width: 350px;
                                height: 1px;
                                background: $main;
                            }
                        }
                        .tip {
                            font-size: 30px;
                            line-height: 30px;
                            color: #333333;
                            margin-top: 49px;
                        }
                        .case-content {
                            width: 380px;
                            margin-top: 28px;
                            font-size: 14px;
                            color: #666;
                            text-align: justify;
                            text-align-last: right;
                            line-height: 35px;
                        }
                    }
                }
            }
        }
    }

</style>
