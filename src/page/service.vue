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
                              <div class="title-top">法财税一体化常法服务</div>
                              <div class="title-bottom">Tax Issues Involved Legal Counseling</div>
                          </div>
                          <div class="cont">PreSuit用力冲破传统法律服务边界，直击企业刚需，开创性地吸收并整合了税务专家作为长期合作伙伴。作为企业的常法顾问，PreSuit借助专业嗅觉随时帮助企业更早发现值得筹划的问题，并与税务专家强强联合为企业共同制定行之有效的解决方案。
                          </div>
                          <button class="btn" @click="contactShow"><div>预约体验PreSuit</div>
                 <div></div>
                 <div>预约体验PreSuit</div></button>
                     </div>
                 </section>
                 <section class="case">
                     <div class="title-box">
                        <div class="title">服务事项</div>
<!--                        <div class="bottom">Use scene enumeration</div>-->
                    </div>
                    <div class="caseOne" style="margin-bottom:160px;" :class="{active:caseOne}">
                        <div class="left">
                            <div class="title">
                                No.1
                            </div>
                            <div class="tip">涉税服务</div>
                            <div class="case-content">PreSuit以税为切入点，致力于为企业用户提供可价值量化的常法服务，从此告别“顾”而“不问”的黯淡历史。通过为企业合理节省税负，优化企业利润。
                            </div>
                        </div>
                        <div class="right">
                            <img src="../assets/image/service22@2x.png" alt="">
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
                            <div class="tip">合同审阅/法律咨询</div>
                            <div class="case-content" style="width:387px;">PreSuit应用了标准化的合同审批流程，为企业定制标准化合同模版；对企业提供的非标合同，则从风险类型和风险等级明确提供专业修改意见。同时，PreSuit认真对待企业用户的每一次提问，为保证回复的高效性，我们承诺普通咨询2小时内回复，疑难咨询24小时内回复。
                            </div>
                         </div>
                    </div>
                    <div class="caseOne" style="margin-bottom:116px;" :class="{active:caseThree}">
                        <div class="left">
                            <div class="title">
                                No.3
                            </div>
                            <div class="tip">客户资料私有化存档</div>
                            <div class="case-content">服务期内产生的所有用户数据，都将为PreSuit高度珍视。我们将企业资料妥善保管，记录企业成长轨迹，便于企业随时查看；同时我们不断通过累积的数据挖掘出企业所在行业/地区的高频风险点，定时向企业推送有关的法律资讯。
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
         <top :show="showBackTop"></top>
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
                caseThree: false,
                 showBackTop:false
            }
        },
        mounted() {

 window.addEventListener('scroll', this.haldscroll, true);
            let _this = this;
            $(document).ready(function() {
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
                if(t>300){
                    this.showBackTop = true;
                }else{
                    this.showBackTop = false;
                }
                if (t > 1400) {
                    this.caseTwo = true;
                }
                if (t > 1900) {
                    this.caseThree = true;
                    window.removeEventListener('scroll', this.haldscroll, true);
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
                            /*                            text-transform: uppercase;*/
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
                            text-align-last: left;
                            line-height: 35px;
                        }
                    }
                }
            }
        }
    }

</style>
