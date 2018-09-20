<template>
        <header>
           <div class="header-top">
                <div class="header-con">
                        <div class="logo-con">
                           <router-link to="/"><img src="@/img/logo.png" alt=""></router-link> 
                                <div class="welcome">欢迎登录</div>
                        </div>
                        <div class="login-pro">
                          <router-link to="/register">没有账号？立即登录</router-link>  
                        </div>                      
                </div>
           </div>
           <div class="header-bottom">
             <img src="@/img/a.png" alt="" /> 
             <div class="att">依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版《福缘隐私政策》已上线，将更有利于保护您的个人隐私</div>  
           </div>
        </header>
</template>
<script>
    export default {
        
    }
</script>
<style lang="less">
img:hover{opacity:0.6; cursor: pointer;}
        header{
            // border: 1px red solid;
            display: flex;
            flex-direction: column;
            .header-top{
                    width:80%;
                    // border: 1px green solid;
                    margin: auto;
                    .header-con{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        .logo-con{
                             display: flex;
                             flex-direction: row;
                             align-items: center;
                             .welcome{
                                 font-size: 24px;
                                 color: #323232;
                                 margin-left: 50px;
                             }
                        }
                        .login-pro{
                            font-size: 16px;
                            color: #969696;
                        }
                    }
            }
            .header-bottom{
                height: 30px;
                background: #fff8f0;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                img{
                    margin-top:4px;
                    margin-right:4px; 

                }
            }
        }
        

</style>