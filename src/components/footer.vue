<template>
    <footer>
        <div class="footer-bigbox">
         <div class="footer-box">
             <h1 class="logo-box">
                 <a href="" class="logo iconfont iconlogo"></a>
                 <div class="des">诉讼不只是过程，PreSuit更追求收益</div>
                 <div class="share">
                     <a class="" href="">
                         <span class="iconfont iconwb"></span>
                     </a>
                     <a class="" href="">
                         <span class="iconfont iconf"></span>
                     </a>
                     <a class="last" href="">
                         <span class="iconfont iconin"></span>
                     </a>
                 </div>
             </h1>
             <div class="footer-bottom ">
<!--
                 <ul class="footer-bottom-item one">
                     <li class="head">导航</li>
                     <li class="line"></li>
                     <li>
                         <a href="">首页</a>
                     </li>
                     <li>
                         <a href="">服务介绍</a>
                     </li>
                     <li>
                         <a href="">关于我们</a>
                     </li>
                 </ul>
-->
<!--
                 <ul class="footer-bottom-item two">
                     <li class="head">工作时间</li>
                     <li class="line"></li>
                     <li>
                         <a >周一至周五：上午8点至下午6点</a>
                     </li>
                     <li>
                         <a >
                             假期：星期六、星期天、所有法定假日
                        </a>
                     </li>
                    
                 </ul>
                 <ul class="footer-bottom-item three">
                     <li class="head">联系我们</li>
                     <li class="line"></li>
                     <li>
                         <a > <span class="iconfont icondd"></span>天津市河西区富裕中心2号楼16层</a>
                     </li>
                     <li>
                         <a ><span class="iconfont icondh"></span>+86 180 8890 8888</a>
                     </li>
                     <li>
                         <a style="padding-left:50px;">010 - 488 - 6026</a>
                     </li>
                      <li>
                         <a ><span class="iconfont iconyj"></span>SuqianPresuit@126.com</a>
                     </li>
                 </ul>
-->             
                  <div class="footer-list">
                      <a class="footer-item" href="/">首页</a>
                      <a class="footer-item" href="/#/serviceSecond">服务介绍</a>
                      <a class="footer-item" style="margin-right:0;" @click="showContact">关于我们</a>
                  </div>
             </div>
             
         </div>
         
         <div class="waves"></div> 
         </div>
         <div class="footer-band">
                 Copyright  2019 itsylec.com | <a href="http://www.beian.miit.gov.cn" target="_blank">京ICP备19020572号-1</a>
         </div>
     </footer>
</template>
<script>
    import ShaderProgram from '@/assets/js/wave.js'
    export default {
        data() {
            return {

            }
        },
        mounted() {
            const pointSize = 2.5

            const waves = new ShaderProgram(document.querySelector('.waves'), {
                texture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAC/goGvDhmwcExrVjWzrm29TRqqSKenRXVklANSIUE8mRkGpv+HOfAAABCElEQVQ4y4VT13LDMAwLrUHteO+R9f/fWMfO6dLaPeKVEECRxOULWsEGpS9nULDwia2Y+ALqUNbAWeg775zv+sA4/FFRMxt8U2FZFCVWjR/YrH4/H9sarclSKdPMWKzb8VsEeHB3m0shkhVCyNzeXeAQ9Xl4opEieX2QCGnwGbj6GMyjw9t1K0fK9YZunPXeAGsfJtYjwzxaBnozGGorYz0ypK2HzQSYx1y8DgSRo2ewOiyh2QWOEk1Y9OrQV0a8TiBM1a8eMHWYnRMy7CZ4t1CmyRkhSUvP3gRXyHOCLBxNoC3IJv//ZrJ/kxxUHPUB+6jJZZHrpg6GOjnqaOmzp4NDR48OLxn/H27SRQ08S0ZJAAAAAElFTkSuQmCC',
                uniforms: {
                    size: {
                        type: 'float',
                        value: pointSize
                    },
                    field: {
                        type: 'vec3',
                        value: [0, 0, 0]
                    },
                    speed: {
                        type: 'float',
                        value: 5
                    },
                },
                vertex: `
    #define M_PI 3.1415926535897932384626433832795

    precision highp float;

    attribute vec4 a_position;
    attribute vec4 a_color;

    uniform float u_time;
    uniform float u_size;
    uniform float u_speed;
    uniform vec3 u_field;
    uniform mat4 u_projection;

    varying vec4 v_color;

    void main() {

      vec3 pos = a_position.xyz;

      pos.y += (
        cos(pos.x / u_field.x * M_PI * 8.0 + u_time * u_speed) +
        sin(pos.z / u_field.z * M_PI * 8.0 + u_time * u_speed)
      ) * u_field.y;

      gl_Position = u_projection * vec4( pos.xyz, a_position.w );
      gl_PointSize = ( u_size / gl_Position.w ) * 100.0;

      v_color = a_color;

    }`,
                fragment: `
    precision highp float;

    uniform sampler2D u_texture;

    varying vec4 v_color;

    void main() {

      gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);

    }`,
                onResize(w, h, dpi) {

                    const position = [],
                        color = []

                    const width = 400 * (w / h)
                    const depth = 400
                    const height = 3
                    const distance = 5

                    for (let x = 0; x < width; x += distance) {
                        for (let z = 0; z < depth; z += distance) {

                            position.push(-width / 2 + x, -30, -depth / 2 + z)
                            color.push(0, 1 - (x / width) * 1, 0.5 + x / width * 0.5, z / depth)

                        }
                    }

                    this.uniforms.field = [width, height, depth]

                    this.buffers.position = position
                    this.buffers.color = color

                    this.uniforms.size = (h / 400) * pointSize * dpi

                },
            })
        },
        methods:{
            showContact(){
                this.$emit('contact')
            }
        }
    }

</script>
<style scoped="true" lang="scss">
    footer {
        position: relative;
        z-index: 200;
        .footer-band {
                width: 100%;
                height: 79px;
                line-height: 79px;
                border-top: 1px solid rgba(255, 255, 255, .2);
                background: #24242C;
                font-size: 12px;
                color: #EEEEEE;
            text-align: center;
            a{
               color: #EEEEEE;
                font-size: 12px;
            }
            }
        .footer-bigbox {
            width: 100%;
            height: 719px;
            background: #24242C;
            position: relative;
            min-width: $min-width;
            
            .footer-box {
                width: $min-width;
                position: absolute;
                top: 0;
                z-index: 10;
                margin: 0 auto;
                left: 0;
                right: 0;
                .logo-box {
                    text-align: center;
                    margin-top: 67px;
                    .logo {
                        color: #fff;
                        font-size: 30px;
                        font-weight: 100;
                    }
                    .des {
                        font-size: 12px;
                        color: #999999;
                        line-height: 12px;
                        margin-top: 21px;
                    }
                    .share {
                        display: inline-block;
                        overflow: hidden;
                        margin-top: 29px;
                        font-weight: 100;
                        a {
                            float: left;
                            width: 24px;
                            color: #fff;
                            height: 24px;
                            line-height: 24px;
                            background: #666666;
                            margin-right: 25px;
                            text-decoration: none;
                            span {
                                opacity: .5;
                            }
                        }
                        .iconwb {
                            font-size: 14px;
                        }
                        .iconf {
                            font-size: 17px;
                        }
                        .iconin {
                            font-size: 14px;
                        }
                        .last {
                            margin-right: 0;
                        }
                    }
                }
                .footer-bottom {
                    margin-top: 78px;
                    text-align: center;
                    .footer-bottom-item {
                        float: left;
                        li {
                            display: block;
                            line-height: 54px;
                            font-size: 14px;
                            color: #666666;
                            a {
                                color: #666666;
                                display: block;
                                text-decoration: none;
                            }
                            &.line {
                                margin-top: 15px;
                                margin-bottom: 24px;
                            }
                        }
                        .head {
                            font-size: 18px;
                            color: #fff;
                            opacity: .5;
                        }
                        &.one {
                            margin-right: 263px;
                            .line {
                                width: 111px;
                                height: 0;
                                border-top: 1px solid #FFFFFF;
                                opacity: .1;
                            }
                        }
                        &.two {
                            margin-right: 249px;
                            .line {
                                width: 201px;
                                height: 0;
                                border-top: 1px solid #FFFFFF;
                                opacity: .1;
                            }
                        }
                        &.three {
                            .line {
                                width: 201px;
                                height: 0;
                                border-top: 1px solid #FFFFFF;
                                opacity: .1;
                            }
                            .iconfont {
                                vertical-align: middle;
                            }
                            .icondd {
                                font-size: 22px;
                                margin-right: 30px;
                                margin-left: -2px;
                            }
                            .icondh {
                                font-size: 17px;
                                margin-right: 29px;
                            }
                            .iconyj {
                                font-size: 13px;
                                margin-right: 29px;
                            }
                        }
                    }
                }
            }
            .waves {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                canvas {
                    background: #24242C;
                }
            }
        }
    }
    .footer-list{
        display: inline-block;
        .footer-item{
            float:left;
            width:91px;
            height:36px;
            line-height: 36px;
            text-align: center;
            font-size:14px;
            color:#fff;
            opacity: .2;
            margin-right:40px;
            border:1px solid #fff;
            cursor: pointer;
           @include transition;
            &:hover{
                opacity: 1;
                background-color:$main;
                color:#fff;
                border-color:$main;
            }
        } 
    }
</style>
