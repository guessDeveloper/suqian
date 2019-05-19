<template>
    <div class="contact" :class={show:isShow}>
         <div class="cover" @click="hide">
         </div>
         <div class="contact-content" >
             <div class="contact-middle" :class="{move:isMove}">
                    <div class="title">预约联系</div>
                    <div class="close-btn iconfont iconx" @click="hide"></div>
                    <div class="box">
                        <div class="box-line must">
                            <span class="name">您的姓名：</span> <div class="input-box" style="width:472px;"><input type="text" placeholder="请输入姓名" v-model.trim='name'></div>
                        </div>
                        <div class="box-line must">
                            <span class="name">企业名称： </span><div class="input-box" style="width:472px;"><input type="text" placeholder="请输入企业名称" v-model.trim="company"></div>
                        </div>
                        <div class="box-line">
                             <span class="name">身份选择： </span><el-radio v-model="radio" label="1">企业负责人</el-radio>
                                      <el-radio v-model="radio" label="2">法务人员</el-radio>
                                      <el-radio v-model="radio" label="3">行政人员</el-radio>
                                      <el-radio v-model="radio" label="4">其它</el-radio>
                              <div class="input-box" style="width:106px;float:right;">
                                  <input type="text" v-model.trim="other" :disabled="radio!=4">
                              </div> 
                        </div>
                        <div class="box-line must">
                            <span class="name">联系电话： </span>
                            <div class="input-box" style="width:227px;"><input type="text" placeholder="请输联系电话" v-model.trim="phone"></div>
                            <el-date-picker
                              v-model="date"
                              type="datetime"
                              placeholder="预约时间选择"
                              value-format = 'yyyy-MM-dd HH:mm:ss'
                             >
                            </el-date-picker>
                        </div>
                        <div class="box-line">
                            <span class="name">地址：</span>
                            <div class="input-box" style="width:472px;"><input type="text" placeholder="请输地址" v-model="adress"></div>
                        </div>
                        <div class="box-line">
                            <span class="name">备注：</span>
                            <div class="input-box" style="width:472px;"><textarea name="" id="" cols="30" rows="10" v-model="bei"></textarea></div>
                        </div>
                        <button class="btn" @click="Submit">确认预约</button>
                    </div>
             </div>
         </div>
        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isShow: false,
                isMove: false,
                radio: 1,
                name: '',
                date: '',
                company: '',
                phone: '',
                adress: '',
                bei: '',
                other: ''
            }
        },
        methods: {
            show() {
                this.isShow = true;
                this.bodyOvefolw();
                setTimeout(() => {
                    this.isMove = true;
                }, 0)
            },
            hide() {
                this.isShow = false;
                this.isMove = false;
                this.bodyAuto();
            },
            bodyOvefolw() {
                let body = document.getElementsByTagName("body")[0];
                body.setAttribute("style", "overflow:hidden;");
            },
            bodyAuto() {
                let body = document.getElementsByTagName("body")[0];
                body.setAttribute("style", "");
            },
            // 提交
            Submit() {
                if (this.name == '') {
                    this.$message({
                        message: '请输入姓名',
                        customClass: 'contact-message',
                        iconClass: 'iconfont iconts',
                        center: true
                    });
                    return false
                }
                if (this.company == '') {
                    this.$message({
                        message: '请输入企业名称',
                        customClass: 'contact-message',
                        iconClass: 'iconfont iconts',
                        center: true
                    });
                    return false
                }
                if (this.phone == '') {
                    this.$message({
                        message: '请输入手机号',
                        customClass: 'contact-message',
                        iconClass: 'iconfont iconts',
                        center: true
                    });
                    return false
                }
                if (!(/^1[34578]\d{9}$/.test(this.phone))) {
                    this.$message({
                        message: '请输入正确的手机号',
                        customClass: 'contact-message',
                        iconClass: 'iconfont iconts',
                        center: true
                    });
                    return false
                }
                let pama = this.$qs.stringify({
                    name: this.name, // 姓名
                    company: this.company, //  企业名称
                    identity: this.radio, // 身份 0 未定义,1 企业负责人,2 服务人员,3 行政人员,4 其他
                    customize: this.other, // 自定义身份
                    phone: this.phone, //string 联系电话
                    time: this.date, //预约时间 例: 2019 - 05 - 11 11: 11: 11
                    address: this.adress, //string 地址
                    comment: this.bei
                })
                this.$axios.post(`${this.$host}/suqian/public/order/add`, pama).then(res => {
                    if (res.data.code == '10000') {
                        this.hide();
                        this.name="";
                        this.company = '';
                        this.other = '';
                        this.phone = '';
                        this.date= '';
                        this.adress = '';
                        this.bei = '';
                        this.$message({
                            message: '预约成功',
                            customClass: 'contact-message',
                            iconClass: 'iconfont iconcg',
                            center: true
                        })

                    } else {
                        this.$message({
                            message: res.data.msg,
                            customClass: 'contact-message',
                            iconClass: 'iconfont iconcw',
                            center: true
                        });
                    }
                })
            }
        }
    }

</script>
<style scoped="true" lang="scss">
    .contact {
        position: fixed;
        display: none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2000;
        &.show {
            display: block;
        }
        .contact-message {
            background: #fff;
        }
        .cover {
            width: 100%;
            height: 100%;
            background: #000;
            opacity: .5;
        }
        .contact-middle {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 640px;
            height: 610px;
            margin-top: -205px;
            background: #fff;
            text-align: center;
            @include transition;
            &.move {
                margin-top: -305px;
            }
            .close-btn {
                position: absolute;
                width: 40px;
                height: 40px;
                background: $main;
                top: 0;
                right: 0;
                cursor: pointer;
                color: #fff;
                font-size: 17px;
                line-height: 40px;
            }
            .title {
                display: inline-block;
                font-size: 24px;
                line-height: 24px;
                color: $main;
                padding: 0 100px;
                margin-top: 30px;
                margin-bottom: 50px;
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
            .box {
                width: 560px;
                margin: 0 auto;
                $border-color: #C8C8C8;
                $font-color: #333333;
                .box-line {
                    /*                    height:40px;*/
                    line-height: 40px;
                    margin-bottom: 20px;
                    position: relative;
                    &.must::before {
                        position: absolute;
                        content: '*';
                        font-size: 14px;
                        color: #F85252;
                        display: inline-block;
                        left: -8px;
                    }
                    &:after {
                        content: '';
                        display: block;
                        clear: both;
                    }
                    .name {
                        float: left;
                        width: 70px;
                        font-size: 14px;
                        color: $font-color;
                        margin-right: 18px;
                        text-align: left;
                    }
                    .input-box {
                        float: left;
                        input {
                            display: block;
                            padding: 0 14px;
                            width: 100%;
                            box-sizing: border-box;
                            color: $font-color;
                            height: 40px;
                            font-size: 14px;
                            line-height: 40px;
                            border: 1px solid $border-color;
                            @include transition;
                            &:focus {
                                border-color: $main;
                            }
                        }
                        textarea {
                            display: block;
                            width: 100%;
                            box-sizing: border-box;
                            height: 76px;
                            padding: 5px 14px;
                            color: $font-color;
                            font-size: 14px;
                            resize: none;
                            line-height: 22px;
                            border: 1px solid $border-color;
                            @include transition;
                            font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
                            &:focus {
                                border-color: $main;
                            }
                        }
                    }
                    label {
                        float: left;
                        line-height: 40px;
                        margin-right: 16px;
                        &.el-radio {
                            color: #999;
                            .el-radio__label {
                                padding-left: 6px!important;
                                color: #999;
                            }
                        }
                        &.is-checked {
                            color: $main;
                        }
                    }
                    .el-date-editor--datetime {
                        float: right;
                        input {
                            border-radius: none;
                        }
                    }
                }
                .btn {
                    display: block;
                    width: 100%;
                    margin-top: 40px;
                    height: $btn-height;
                    background: $main;
                    font-size: 14px;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }
    
    .el-input__inner {
        border-radius: none;
    }

</style>
