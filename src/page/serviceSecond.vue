<template>
    <div class="page">
        <navBar :isActive="true" ref="nav" :activeIndex="1" :childActiveIndex = '0'></navBar>
        <bannerBar :myIndex="0"></bannerBar>
        <contact ref="contact"></contact>
        <div class="content">
             <div class="main">
                 <section class="des">
                     <div class="left">
                         <img src="../assets/image/service-one@2x.jpg" alt="">
                     </div>
                     <div class="right">
                          <div class="title">
                              <div class="title-top">大数据+诉前量体裁衣</div>
                              <div class="title-bottom">Data Retrieval + Pre Suit Tactics</div>
                          </div>
                          <div class="cont">
                              通过对法律数据的清洗、分类及结构化处理，实现了对个案的早期诊断，帮助企业用户超前制定全面的对抗策略，使其更能从容应对诉讼。
                          </div>
                         <button class="btn" @click="contactShow"><div>预约体验PreSuit</div>
                 <div></div>
                 <div>预约体验PreSuit</div></button>
                     </div>
                 </section>
                 
             </div>
             <section class="case">
                     <div class="title-box">
                        <div class="title">使用场景</div>
<!--                        <div class="bottom">Use scene enumeration</div>-->
                    </div>
                    <div class="caseOne" :class="{active:caseOne}" style="margin-bottom:160px;">
                        <div class="left">
                           <div class="case-content-box">
                            <div class="title">
                                No.1
                            </div>
                            <div class="tip">类案检索</div>
                            <div class="case-content">A公司作为某楼盘的开发商，在竣工交付后因发现建筑物未按图纸施工，将施工单位B公司起诉至法院，涉案标的近人民币2亿元。PreSuit能迅速帮助A公司检索到支持或反对其诉求的类似案例，即至少应满足竣工交付后未按图纸施工的事实情景。传统检索手段往往会让有价值的案例石沉大海，从而无法帮助用户准确预测案件走势，甚至初期对案件风险作出错误评估。经验表明，相似度越高的案例越有机会影响法官的裁判。
                            </div>
                            </div>
                        </div>
                        <div class="right">
                            <img src="../assets/image/service-11@2x.jpg" alt="">
                        </div>
                        
                    </div>
                    <div class="caseTwo" :class="{active:caseTwo}" style="margin-bottom:160px;">
                         <div class="left ">
                            <img src="../assets/image/service-12@2x.jpg" alt="">
                         </div>
                         <div class="right">
                            <div class="case-content-box">
                             <div class="title" style="margin-top:0;">
                                No.2
                            </div>
                            <div class="tip">判赔金额预测</div>
                            <div class="case-content" style="width:469px;">A公司已实际经营多年，某天突然接到政府部分通知，告知其公司所在地恰位于附近正在施工的公路的红线区域内，须立即停业搬迁。A公司因此遭受千万元的经济损失，故拟起诉公路的产权单位B公司进行索赔。侵权索赔案件，判赔结果的不确定性，往往使企业格外担忧。PreSuit通过将裁判结果中的判赔金额进行提取，可以短时间生成判赔金额的预测分析图表，可以使企业直观的读取近年来的走势、均值、峰值等信息。掌握这些信息，也有助于帮助客户把握最佳的调解时机。
                            </div>
                            </div>
                         </div>
                    </div>
                    <div class="caseOne " :class="{active:caseThree}" style="margin-bottom:160px;">
                        <div class="left">
                           <div class="case-content-box">
                               
                          
                            <div class="title">
                                No.3
                            </div>
                            <div class="tip">诉前资源优化配置</div>
                            <div class="case-content" style="width:474px">A公司因借款纠纷拟起诉B公司，然而B公司实际是由一个自然人控制的壳公司，现A公司担忧即便案件胜诉也无法通过壳公司获得回款。PreSuit通过前期深入诊断，不会盲目按照客户的思路直接起诉，首先会在诉讼策略上通过寻找关于实际控制人与B公司存在财产混同的证据，将B公司起诉作为连带被告。其次，深入调研该案件的审理法院，可能的审判人员构以及被告代理人，在诉讼策略占据优势的基础上，再进一步匹配历史数据显示表现优异的律师同行作为工作伙伴共同完成诉讼，通过早期资源配置，实现诉讼专业+社会资源的高度整合，让客户在诉讼中处于明显的优势地位。
                            </div>
                             </div>
                        </div>
                        <div class="right case3-bc">
                            <img src="../assets/image/service-13@2x.jpg" alt="">
                        </div>
                    </div>
                     <div class="caseTwo" :class="{active:caseFour}" style="margin-bottom:116px;">
                         <div class="left ">
                            <img src="../assets/image/service-14@2x.jpg" alt="">
                         </div>
                         <div class="right">
                            <div class="case-content-box">
                             <div class="title">
                                No.4
                            </div>
                            <div class="tip">诉前/执行 可行性分析报告</div>
                            <div class="case-content" style="width:459px;">PreSuit开创性的推出了诉前分析报告，通过历史数据多维度的可视化分析，引导客户在复杂环境下做出正确的诉讼决策，避免因盲目诉讼，不仅不达目的反而遭受更多的经济成本。
                            </div>
                            </div>
                         </div>
                    </div>
                    
                 </section>
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
                caseThree: false,
                caseFour: false,
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
            aboutShow(){
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
                if (t > 2400) {
                    this.caseFour = true;
                }
            }
        },
        beforeDestroy(){
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
/*                            text-transform: uppercase;*/
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
        }
        .case {
            width:  $min-width;
            margin:0 auto;
            text-align: center;
/*
            .case1-bc {
                background: url(../assets/image/service-11@2x.jpg) no-repeat center left;
            }
            .case2-bc {
                background: url(../assets/image/service-12@2x.png) no-repeat center right;
            }
            .case3-bc {
                background: url(../assets/image/service-13@2x.png) no-repeat center left;
            }
            .case4-bc {
                background: url(../assets/image/service-14@2x.png) no-repeat center right;
            }
*/
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
                position: relative;
                height:420px;
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
                    left:0;
                    top:0;
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
                        line-height: 54px;
                        margin-top: 6px;
                        color: $main;
                        text-align: left;
                        position: relative;
                        &:after {
                            position: absolute;
                            top: 26px;
                            left: 179px;
                            content: '';
                            display: block;
                            width: 450px;
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
                        width: 465px;
                        margin-top: 28px;
                        font-size: 14px;
                        text-align: justify;
                        color: #666;
                        line-height: 34px;
                    }
                }
                .right {
                    position: absolute;
                    top:0;
                    right:0;
                    z-index: 0;
                    -webkit-transform: translateY(50px);
                    -moz-transform: translateY(50px);
                    -ms-transform: translateY(50px);
                    transform: translateY(50px);
                    opacity: 0;
                    @include transitionTime(2s);
                    img {
                        float: right;
                        width: 660px;
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
                        width: 660px;
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
                        margin-top: 61px;
                        color: $main;
                        text-align: right;
                        position: relative;
                        &:after {
                            position: absolute;
                            top: 26px;
                            right: 179px;
                            content: '';
                            display: block;
                            width: 450px;
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
                        text-align: justify;
                        color: #666;
                        line-height: 34px;
                    }
                }
            }
        }
    }

</style>
