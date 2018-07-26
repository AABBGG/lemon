<template>
    <div class="page">
            <div class="header">
                    <div class="head">
                        <div class="logo">
                           <router-link to="/"><img src="@/img/logo.png" alt=""></router-link> 
                            <div class="welcome">欢迎注册</div>
                        </div>
                        <div class="logo-left"> <router-link to="/login">已有账号？请登录</router-link> </div>
                    </div>
            </div> 
            <div class="content">
                <Form>    
                    <FormItem>
                        用户名<Input type="text" v-model="user.email"  placeholder="您的账号和登录名">
                            <!-- <span slot="prepend">123</span> -->
                            <template slot="prepend">
                                <Icon type="person" />
                            </template>
                        </Input>
                    </FormItem>
                    <FormItem>
                        设置密码
                        <Input type="password" v-model="user.password"  placeholder="设置福缘密码（不少于6位）">
                        <template slot="prepend">
                                <Icon type="unlocked" />
                            </template>
                        </Input>
                    </FormItem>
                    <FormItem>
                        确认密码
                        <Input type="password" v-model="user.surepwd" placeholder="请再次输入密码">
                        <template slot="prepend">
                                <Icon type="unlocked" />
                            </template>
                        </Input>
                    </FormItem>
                    <FormItem>
                        手机号码
                        <Input type="text" v-model="user.number"  placeholder="建议使用常用手机">
                            <!-- <span slot="prepend">123</span> -->
                            <template slot="prepend">
                                <Icon type="iphone" />
                            </template>
                        </Input>
                    </FormItem>
                    <FormItem>
                        所在区域
                        <Select placeholder="建议填写常住地址" >
                            <Option value="beijing">beijing</Option>
                            <Option value="shanghai">shanghai</Option>
                            <Option value="shenzhen">shenzhen</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        验证码
                        <Input  type="text" v-model="user.verifiy" placeholder="验证">
                            <template slot="prepend">
                                <Icon type="lock-combination" />
                            </template>
                        </Input>
                                <img :src="url" @click="key =new Date().getTime()" />
                    </FormItem>
                    <FormItem>
                        <Button long @click="register" class="btn"> 注册</Button>
                    </FormItem>
                    <FormItem>
                    <router-link to="/">已有账号？立即登录</router-link>
                    </FormItem>
                </Form>
                <div class="from-right">
                            <img src="@/img/e.png" alt="">
                </div>
            </div>     
            <Footer />
    </div>   
</template>
<script>
    import axios from 'axios'
    import Footer from '@/components/Footer'

    export default {
        components:{
            Footer
        },
        data() {
            return {
                user:{
                    email:'',
                    password:'',
                    surepwd:'',
                    number:'',
                    verifiy:''
                },
                key: new Date().getTime()
            }
        },
        methods:{
            register(){
                 axios
                .post('/api?action=register',this.user)
                .then(({data})=>{
                    console.log(data)
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        },
        computed: {
            url() {
                return 'http://111.231.196.120:4000/api/verifiycode.gif?' + this.key 
            }
        },

    }
</script>
<style scoped lang='less'>
        .header{
              box-shadow: 0px 2px 3px  gray;
        }
        .head{
            width: 70%;
            margin:10px auto ;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          
            .logo{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                .welcome{
                    margin-left: 20px;
                    color: #323232;
                    font-size: 24px;
                }
            }
            .logo-left{
                color: #323232;
                font-size: 16px;
            }
        }
        .content{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
             Form{
                 width: 420px;
                // border: 1px red solid; 
                .btn{
                    background: #29a1f7;
                    color: #ffffff;
                }
             }
             .from-right img{
                 margin-left: 70px;
             }
        }
</style>