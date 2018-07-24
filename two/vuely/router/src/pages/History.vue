<template>
    <div>
        <div class="header">
             <ul class="order">
                <li>我的订单 /</li>
                <li>客户服务▼</li>
                <li>/手机版</li>
                <li> /更多▼</li>
            </ul>   
        </div>
        <div class="header-bottom">
            <div class="header-con">
                <router-link to="/"><img src="@/img/logo.png" alt=""></router-link> 
                <div class="tab">                 
                <Menu mode="horizontal"  active-name="1" class="menu">
                    <MenuItem name="1">
                        <router-link to="/"> 返回首页</router-link>
                    </MenuItem>
                    <router-link to="/culture">
                    <MenuItem name="2">
                        企业文化
                    </MenuItem></router-link>
                    <MenuItem name="5">
                        企业历程
                    </MenuItem>
                    <MenuItem name="5">
                        器械
                    </MenuItem>
                    <MenuItem name="6">                       
                        团队展示
                    </MenuItem>
                    <MenuItem name="7">
                        实时动态
                    </MenuItem>
                </Menu>

                </div>
            </div>
        </div>
        <div class="content">
            <div class="text">
                <div class="text-top">
                    <div class="top-left">
                       <div class="com">企业背景</div> 
                        <div>Enterprise background</div> 
                        <hr ><br><br><br>
                       <div class="img-text"> 福缘实体联盟是由央企背景企业中润国投、江山集团等多家企业联合发起，联合多位企业家和行业专家鼎力打造的“移动互联网+新实体+全数据+全产业链”资源共享的消费营销平台。旗下拥有网络科技公司、传媒公司、品牌管理公司、商学院等子公司。
                                                在共享经济的时代背景下，福缘实体联盟以互联网为平台，大数据为支撑，科技为引擎，创新商业模式，全力整合资源，服务中小微企业，助推国家供给侧改革，拉动内需；在实现消费者向消费商的转变中，“花本来就该花的钱，得以前得不到的东西”，让消费商成为自由财富的经营者，构筑大家共赢的分享经济平台。
                                                我们坚持“内外双向发展”战略，在抓好国内发展的同时，将紧跟国家“一带一路”发展战略走出国门，全球布局谋求更大发展。<br><br><br><br><br>

                        <div class="com">企业背景</div>     
                            <div>Enterprise background</div> 
                            <hr >
                        </div>
                    </div>
                    
                    <div class="top-right"><img src="@/img/high.png" alt=""></div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp; 立足长远，我们传承中华文明，以责任、爱心为企业发展之魂，壮大规模，塑造品牌，力<br>争三年实现上市的企业奋斗目标.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;李克强总理将“共享经济”写入政府工作报告并提出“站在互联网+的风口上顺势而为，会使中国经济飞起来”、“把以互联网为载体线上线下互动的新型消费搞得红红火火”。 这更使我们坚定信心，走出一条国际化的发展道路出来。 紧跟国家发展战略，把握“共享经济”的时代趋势，依托“西部开发”、“精准扶贫”的政策要求，共同发展。结合国务院关于重庆自贸区发展的总体方案要求，福缘实体联盟应运而生，乘势而上。<br>
福缘实体联盟由中润国投等央企联合发起，以中华民族优秀传统文化为统领，以责任、爱心、奉献为灵魂，联合国内外大型企业、依托国内外的行业资源、运用国际最先进的大数据分析技术，共同打造国际化智慧消费的实体平台！<br>
 &nbsp;&nbsp;&nbsp;&nbsp;福缘实体联盟以移动互联网为工具，大数据技术为支撑，高科技为引擎，整合中小微企业资源，创新商业模式，以“移动互联网+新实体+大数据+全产业链”，指在连结厂家、商家与消费商共同去产能、去库存、去杠杆，促进中小微企业健康发展。加快消费者向消费商的转变，实现共享共富的梦想。我们决心将“智慧城市• 福缘实体联盟”打造成“一带一路”国家战略的示范项目。<br>
播放实体联盟宣传视频<br>
            <img  class="learn" style="margin-left: 100px" src="@/img/learn.png" alt="">
            </div>
        </div>
        <Final />
    </div>
</template>
<script>
    import Final from '@/components/Final'
    export default {
            components:{

           Final
        }
    }
</script>

<style scoped lang='less'>
        ul,li{list-style: none; margin: 0; padding: 0px;}
        img:hover{opacity:0.6; cursor: pointer;}
        .header{
            background: #e6e6e6;
            height: 36px;
            ul{
                display: flex;
                flex-direction: row;
                // align-items: center;
                margin-left: 61%;
                li{
                    cursor: pointer;
                    margin: 0 10px;
                    margin-top: 8px;
                }
            }
        }
        .header-bottom{
            box-shadow: 2px 2px 2px gray ;
            .header-con{
                width:70%;
                margin: 0 auto;
                // border: 1px red solid;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .menu{
                    margin-top: 70px;
                }
            }
        }
        .content{
            width: 70%;
            // border:  1px red solid;
            margin:  0 auto;
            .text{
                .text-top{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .top-left{
                        display: flex;
                        flex-direction: column;
                        .com{
                            color: #323232;
                            font-size: 20px;
                        }
                        .img-text{
                            font-size: 14px;
                            color: #323232;
                        }
                        hr{
                            background: #29a1f7;
                            width: 60px;
                        }
                    }
                }
            }
        }
    
</style>