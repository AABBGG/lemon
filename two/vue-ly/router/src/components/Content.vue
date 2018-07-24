<template>
    <div class="content">
        <div class="con-one"></div>
        <div class="con-two">
             <img src="@/img/b.png" alt="" /> 
            
        </div>
        <div class="con-three">
            <div class="con-from">
                <div class="stand">
                   <div class="stand-before">扫码登陆</div>
                     <img src="@/img/c.png" alt="" />
                      <div class="stand-after">账号登录</div>
                </div>
                <Form class="Form">
                    <FormItem>
                        <Input type="text" v-model="user.text" placeholder="您的账户和用户名" >
                        <template slot="prepend">
                            <Icon type='person' />
                        </template>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Input type="password" v-model="user.password" placeholder="福源密码">
                        <template slot="prepend">
                            <Icon type='unlocked' />
                        </template>
                        </Input>
                    </FormItem>
                    <div class="forget">忘记密码</div>
                    <FormItem>
                       <Button long @click="login" class="btn-login"> 登录</Button>
                    </FormItem>
                    <FormItem>
                        <div class="login-bottom">
                            <div class="login-bo-lefgt">
                                <img src="@/img/QQ.png" alt="" />
                                <img src="@/img/weixin.png" alt="" />
                            </div>
                            <div class="login-bo-right">
                                 <img src="@/img/d.png" alt="" />  <router-link to="/register" class="run">立即注册</router-link>
                            </div>
                        </div>          
                    </FormItem>
                </Form>
            </div>
        </div>
        <div class="con-four"></div>
    </div>
</template>

<script>

    import axios from 'axios'
    
    export default {
        data() {
            return {
                user: {
                    text:'',
                    password:''
                }
            }
        },
        methods: {
            login() {
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
    }
</script>

<style scoped lang='less'>
    .content{
        height: 400px;
        background: #97c735;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .con-one,.con-four{
            // border:  1px red solid;
            width: 300px;
        }
        .con-two,.con-three{
            // border:  1px red solid;
            width: 420px;
            display: flex;
            justify-content: center;
            align-items: center;
            .con-from{
                width: 330px;
                height: 330px;
                background: #ffffff;
                .stand{
                    padding: 0 40px;
                    border-bottom: 1px #e6e6e6 solid;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    .stand-before{
                        color: #646464;
                        font-size: 22px;
                    }
                    .stand-after{
                        color: #29a1f7;
                        font-size: 22px;
                        font-weight: bold;
                    }
                }
                .Form{                  
                    padding: 20px 30px;
                    .forget{
                        margin-left: 220px;
                    }
                    .btn-login{
                        background: #29a1f7;
                        color: #ffffff;
                    }
                    .login-bottom{
                        // background: #f0f0f0;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        .login-bo-right,.login-bo-left{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                        }
                        .login-bo-right .run{
                            color: #f80f40;
                            font-size: 16px;
                        }
                       img{
                           margin-right: 6px;
                       }
                    }
                }
            }
        }
        
    }

</style>