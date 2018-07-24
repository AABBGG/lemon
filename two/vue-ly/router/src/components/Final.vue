<template>
    <div class="footer">
        <div class="footerwidth">
            <div class="footer-top">
                <ul>
                    <li>-企业文化-</li>
                    <li>-团队展示-</li>
                    <li>-模式介绍-</li>
                    <li>-服务保障-</li>
                    <li>-售后服务-</li>
                </ul>
            </div>
            <div class="footer-bottom">
                       <ul>
                            <li>企业简介</li>
                            <li>企业荣誉</li>
                        </ul>

                         <ul>
                            <li>企业价值观</li>
                            <li>发展历程</li>
                        </ul>
                        <ul>
                            <li>团队成员</li>
                            <li>团队精神</li>
                        </ul>

                         <ul>
                            <li>媒体报道</li>
                            <li>团队视频</li>
                        </ul>
                        <ul>
                            <li>企业产品</li>
                            <li>项目模式</li>
                        </ul>

                         <ul>
                            <li>合作方式</li>
                            <li>项目招商</li>
                        </ul>
                        <ul>
                            <li>正品保证</li>
                            <li>退货返运费</li>
                        </ul>

                         <ul>
                            <li>正品保证</li>
                            <li>退货返运费</li>
                        </ul>
                        <ul>
                            <li>7天无理由放心退</li>
                            <li>7x15小时客户服务</li>
                        </ul>

                         <ul>
                            <li>退货政策</li>
                            <li>退款方式和时效</li>
                        </ul>
            </div>
           <div class="footer-logo">
               <div> <img src="@/img/footer.png" alt=""></div>
            <div>Copyright© 福缘实体联盟 版权所有              渝ICP备17004877号-2         渝公网安备 50010302001324号</div>
            <div><img src="@/img/footerimg.jpg" alt=""></div> 
           </div>
        </div>        
    </div>
</template>

<script>
    export default {
        
    }
</script>
<style scoped lang='less'>
        ul,li{list-style: none; margin: 0; padding: 0px;}
        img:hover{opacity:0.6; cursor: pointer;}
    .footer{
        margin-top: 20px;
        background: #e6e6e6;
        // border:1px red solid;
        height: 280px;        
        .footerwidth{
            width: 70%;
            padding-top: 16px;
            margin: 0 auto;
             div{
                  margin: 0 auto;
             }
            .footer-top{
                margin-top: 60px;
                font-size: 16px;
                color: #323232;
                ul{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                }
                
            }
            .footer-bottom{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            .footer-logo{
     div:nth-of-type(1){margin-left: 30px;}
     div:nth-of-type(2){margin-left:220px;}
     div:nth-of-type(3){margin-left: 230px;}
     div{
         margin-top: 20px;
     }
            }
        }
    }
</style>