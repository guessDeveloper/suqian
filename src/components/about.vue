<template>
    <div class="about-box" :class={show:isShow}>
        <div class="about-waves"></div>
        <div class="about-content" :class="{move:contentShow}">
            <div class="title-box">
                <div class="title">关于我们</div>
<!--                <div class="bottom">About us</div>-->
                
            </div>
            <div class="con">
                 <p>一直以来，我们始终面向企业客户提供专业的法律服务并专门花精力解决他们复杂、疑难且标的额较高的商业纠纷。过往的诉讼业绩形成了我们当下的行业竞争力。历史的经验告诉我们，重大诉讼通常会影响一个企业的生命周期，有时一个失败的诉讼决策可以令企业的财富积累一夜间付之东流。所以，我们坚信：诉讼决策与企业其他的经济决策同等重要。</p>
 <p>大多数企业家虽然看中诉讼结果，但却对诉讼本身没有足够的信心，始终认为诉讼充满了太多无法把控的不确定性。然而，这种不确定性事实上是可以通过方法和技术手段有效降低的，从而大幅提高企业的胜诉率。并且，这套方法和技术是可以被企业充分利用，从而有效避免诉讼初期采用了错误的诉讼策略。</p>
           <p> 因此，对企业而言，把法律服务延伸至诉前的诸多细节上是极具价值的。于是，便有了“PreSuit诉前”。</p>
            </div>
            <div class="close-btn iconfont iconx" @click="hide()"></div>
        </div>
    </div>
</template>

<script>
    import ShaderProgram from '@/assets/js/wave.js'
    export default {

        data() {
            return {
                isShow: false,
                contentShow: false
            }
        },
        mounted() {


        },
        methods: {
            show() {
                this.isShow = true;
                setTimeout(() => {
                    this.wave();
                    this.contentShow = true;
                }, 0)

                this.bodyOvefolw();
            },
            hide() {
                this.isShow = false;
                this.contentShow = false;
                this.bodyAuto();
            },
            wave() {
                const pointSize = 2.5

                const waves = new ShaderProgram(document.querySelector('.about-waves'), {
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
            bodyOvefolw() {
                let body = document.getElementsByTagName("body")[0];
                body.setAttribute("style", "overflow:hidden;");
            },
            bodyAuto() {
                let body = document.getElementsByTagName("body")[0];
                body.setAttribute("style", "");
            }
        }
    }

</script>

<style scoped="true" lang='scss'>
    .about-box {
        position: fixed;
        display: none;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: $about-bc;
        z-index: 2000;
        &.show {
            display: block;
        }
        .about-waves {
            width: 100%;
            height: 100%;
        }
        .about-content {
            position: absolute;
            top: 50%;
            overflow: hidden;
            margin: 0 auto;
            left: 0;
            right: 0;
            opacity: 0;
            margin-top: -205px;
            width: 640px;
            height: 490px;
            /*            background: #fff;*/
            text-align: center;
            @include transition;
            &.move {
                opacity: 1;
                margin-top: -245px;
            }
            .close-btn {
                position: absolute;
                top: 0;
                right: 0;
                width: 40px;
                height: 40px;
                color: #fff;
                line-height: 40px;
                background: $main;
                cursor: pointer;
            }
            .title-box {
                display: inline-block;
                .title {
                    line-height: 32px;
                    font-size: 32px;
                    color: $title-color;
                    margin-bottom: 19px;
                    padding: 0 100px;
                    margin-top: 59px;
                    position: relative;
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
                    line-height: 12px;
                    text-transform: uppercase;
                    color: $title-tip-color;
                }
            }
            .con {
                width: 632px;
                height: 320px;
                line-height: 35px;
                color: #fff;
                text-indent: 30px;
                text-align: justify;
                font-size: 14px;
                margin: 0 auto;
                margin-top: 3px;
            }
        }
    }

</style>
