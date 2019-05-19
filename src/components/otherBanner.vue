<template>
    <div class="banner">
        <div class="box" >
            <img :src="bannerList[myIndex].imageUrl" alt="">
            <div class="title-bigbox">
            <div class="title-box">
                <div class="top">{{bannerList[myIndex].top}}</div>
                <div class="bottom">{{bannerList[myIndex].bottom}}</div>
            </div>
            </div>
            <div class="cav-box" id="particleE">
            <canvas class="particles-js-canvas-el"  style="width: 100%; height: 100%;positon:absolute;top:0;left:0;"></canvas>
            </div>
         </div>
            
    </div>
</template>
<script>
    export default {
        data() {
            return {

                bannerList: [{
                    top: '大数据+诉前量体裁衣',
                    bottom: 'Big data + pre-litigation tailoring',
                    imageUrl: require("../assets/image/banner1@2x.jpg")
                }, {
                    top: '极速高效常法服务',
                    bottom: 'Extremely fast, efficient and efficient service',
                    imageUrl: require("../assets/image/banner2@2x.jpg")
                }, {
                    top: '诉讼融资',
                    bottom: 'Litigation financing',
                    imageUrl: require("../assets/image/banner3@2x.jpg")
                }]
            }
        },
        mounted() {
            let img = new Image();
            img.src = this.bannerList[this.myIndex].imageUrl;
            img.onload = function() {
                particlesJS('particleE',

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

            }


        },
        props: [
            "myIndex"
        ]
    }

</script>
<style scoped="true" lang="scss">
    .banner {
        width: 100%;
        min-width: $min-width;
        padding-top: 100px;
        overflow: hidden;
        img {
            float: left;
            width: 100%;
        }
        .box {
            position: relative;
            overflow: hidden;
            .cav-box {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1;
            }
            .title-bigbox {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 5;
            }
            .title-box {
                position: absolute;
                margin: 0 auto;
                left: 0;
                right: 0;
                top: 50%;
                margin-top: -52px;
                z-index: 5;
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

</style>
