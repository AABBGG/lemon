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
                    <MenuItem name="2">
                        企业文化
                    </MenuItem>
                    <router-link to="/history">
                    <MenuItem name="5">
                        企业历程
                    </MenuItem></router-link>
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
        <div class="img">
            <img src="@/img/image.png" alt="">
        </div>
        <div class="content">
            <div class="text"> <span style="font-size:18px;">公司精神/</span>  The company spirit of</div>
            <div class="img-text">
                <div><img src="@/img/house.png" alt=""></div>
                <div class="text-box"> <img src="@/img/n.png" alt=""> 公司是我家，公司伴我成长<br>
                       凡是进入公司的，都是同等对待，帮助公司员工成长，学习，走向成功。“一家<br>人，一辈子，一条心，只做一件事。” 
                </div>
            </div>
            <div class="text"> <span style="font-size:18px;">企业准则 /</span>   The company rules</div>
            <div class="img-text">
                
                <div class="text-box"> <img src="@/img/n.png" alt=""> 团队利益就是我的利益<br>
                       公司准则“公司的利益就是自己的利益，团队的利益就是自己的利益，<br>大家的利益就是自己的利益。”
                </div>
                <div><img src="@/img/tea.png" alt=""></div>
            </div>
        <div>企业准则 / The company rules</div>
        <div class="card">
            <ul>
                <li><img src="@/img/ant.png" alt=""><br> <span>创新思维</span> <br>公司为我们全体家人提供学习、深造的条件及机会，努力提高家人的整体素质和水平，全体家人刻苦学习及分享讲课的技巧以及招商技术，造就一支思想新，作风硬、业务强、技术精的精英队伍！</li>
                <li><img src="@/img/hand.png" alt=""><br><span>精英队伍</span><br>公司实行“岗薪制”的分配制度，为家人提供收入和福利保证，并给予家人以稳定的生活。公司为家人提供平等的竞争环境和晋升机会</li>
                <li><img src="@/img/shuan.png" alt=""><br><span>团结互助</span><br>公司要求求真务实的工作作风，提高工作效率，同事会带领家人们团结互助，同舟共济，发扬集体合作和集体创造精神，增强大家庭的凝聚力和向心力。</li>

            </ul>
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
        .img img{
                width: 100%;
        }
        .content {
            width: 70%;
            // border: red 1px solid;
            margin:  0 auto;
            .text{
                width: 70%;
                margin-left: 150px;
                text-align: center;
              margin-top: 30px;
             margin-bottom: 30px;
            }
            .img-text{
                display: flex;
                flex-direction: row;
                align-items: center;
                .text-box{
                    margin-left: 50px;
                }
            }
            .card{
                margin-bottom: 130px;
                ul{
                    display: flex;
                flex-direction: row;
                li{
                     width: 260px;
                    height: 260px;
                    // padding: 20px;
                    margin: 0 26px;
                    img{
                        width: 260px;
                        height: 260px;
                    }
                    span{font-size: 20px;}
                }
                }
                
            }
        }
    
</style>