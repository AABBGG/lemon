<template>
    <div class="index-center">
        <div class="header-top">
            <img src="@/img/logo.png" alt="" />
            <Form>    
                <FormItem>
                    <Input class="input" type="text" placeholder="请输入关键字">
                        <template class="search"  slot="append">
                          <Button class="btn" type="primary" icon="ios-search">搜索</Button>
                        </template>
                    </Input>
                </FormItem>
            </Form>
            <div  class="header-right">
                <div class="img-left">
                    <img src="@/img/f.png" alt="" />
                    <div class="der">
                        <div>正品保障</div>
                        <div>100%正品低价</div>
                    </div>
                </div>
                <div class="img-left">
                    <img src="@/img/f.png" alt="" />
                    <div class="der">
                        <div>30天退换货</div>
                        <div>购物有保障</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom">
             <Menu mode="horizontal"  active-name="1">
                <MenuItem name="1">
                    首页
                </MenuItem>
                <MenuItem name="2">
                    全体精选
                </MenuItem>
                 <MenuItem name="5">
                    电子产品
                </MenuItem>
                <MenuItem name="5">
                    器械
                </MenuItem>
                 <MenuItem name="6">
                    
                    食品
                </MenuItem>
                 <MenuItem name="7">
                    生活
                </MenuItem>
                 <Submenu name="3">
                    <template slot="title">
                        更多
                    </template>
                    <MenuGroup title="生活">
                        <MenuItem name="3-1"> 食品</MenuItem>
                        <MenuItem name="3-2"> 食品</MenuItem>
                        <MenuItem name="3-3"> 食品</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="生活">
                        <MenuItem name="3-4">生活</MenuItem>
                        <MenuItem name="3-5">生活</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu> 
        </div>
        <div class="banner">
            <div class="banner-left"><img src="@/img/hh.png" alt=""></div>
            <div class="banner-center">
                  <Carousel autoplay loop>
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/img/h.png" alt=""></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/img/h.png" alt=""></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/img/h.png" alt=""></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/img/h.png" alt=""></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/img/h.png" alt=""></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/img/h.png" alt=""></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel"><img src="@/img/h.png" alt=""></div>
                    </CarouselItem><CarouselItem>
                        <div class="demo-carousel"><img src="@/img/h.png" alt=""></div>
                    </CarouselItem>
                </Carousel>         
            </div>
            <div class="banner-right">
                <div class="banner-con">
                        <div class="banner-logo">
                            <img src="@/img/j.png" alt="">
                        </div>
                        <div class="hello"> Hi~你好！</div>
                        <div class="btn-two">
                            <Button type="ghost" shape="circle" > <router-link to="/login">登录</router-link> </Button>
                            <Button type="ghost" shape="circle" > <router-link to="/register">注册</router-link> </Button>
                        </div>
                        <div class="free-reg">
                                <div class="reg-img">
                                    <img src="@/img/k.png" alt="" class="img-one">
                                    <img src="@/img/kk.png" alt="" >
                                </div>
                        </div>
                        <div class="free-reg">
                                <div class="reg-img">
                                    <span> <router-link to="/register">免费注册</router-link> </span>
                                    <span>积分商城</span>                               
                                </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="img-list">
            <div class="list-left">
                    <div class="left-con">
                        <img src="@/img/food.png" alt="">
                          <span>食品 / 酒饮 / 生鲜</span> 
                          <span> > </span>  
                    </div>
                    <div class="left-con">
                        <img src="@/img/child.png" alt="">
                          <span>母婴 / 玩具 / 童装</span> 
                          <span> > </span>  
                    </div>
                    <div class="left-con">
                        <img src="@/img/booth.png" alt="">
                          <span>纸巾 / 清洁 / 用品</span> 
                          <span> > </span>  
                    </div>
                    <div class="left-con">
                        <img src="@/img/soft.png" alt="">
                          <span>家居 / 家纺 / 家装 </span> 
                          <span> > </span>  
                    </div>
                    <div class="left-con">
                        <img src="@/img/girl.png" alt="">
                          <span>美妆/ 个人 / 清洁</span> 
                          <span> > </span>  
                    </div>
                    <div class="left-con">
                        <img src="@/img/girl.png" alt="">
                          <span>女装 / 男装 / 内衣 </span> 
                          <span> > </span>  
                    </div>
                    <div class="left-con">
                        <img src="@/img/booth.png" alt="">
                          <span>鞋靴 / 箱包 / 户外</span> 
                          <span> > </span>  
                    </div>
                    <div class="left-con">
                        <img src="@/img/soft.png" alt="">
                          <span>手机 / 数码 / 办公</span> 
                          <span> > </span>  
                    </div>
                    <div class="left-con">
                        <img src="@/img/food.png" alt="">
                          <span>家用电器 / 汽用品</span> 
                          <span> > </span>  
                    </div>
                    <div class="left-con">
                        <img src="@/img/child.png" alt="">
                          <span>医药 / 保健/ 成人</span> 
                          <span> > </span>  
                    </div>
                    <div class="left-con">
                        <img src="@/img/girl.png" alt="">
                          <span>旅行 / 票券 / 生活 </span> 
                          <span> > </span>  
                    </div>
            </div>
            <div class="list-right" >
                    <ul>
                        <li v-for="(item,index) in arr" :key="index">
                            <div class="li-con"> 
                                <div class="text-dir"><br>
                                    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"> {{item.name}}</div>
                                    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">{{item.age}}</div> 
                                    <div v-bind:style="{ color: threecolor, fontSize: fontSize + 'px' }">{{item.sex}}</div>
                                    <div>{{item.like}} </div>
                                    </div>                           
                                    
                                    <img src="@/img/eat.png" alt="">                            
                            </div>
                                                                   
                        </li>
                        
                    </ul>       
            </div>
        </div>
        <div class="all-start">
            <div class="all-left"><img src="@/img/across.png" alt=""></div>
            <div class="all-center">
                <div class="ce-top"><img src="@/img/blue.png" alt=""></div>
                <div class="ce-ce">全体精选</div>
                <div class="ce-bot">THE WHOLE SELECTION </div>
            </div>
            <div class="all-left"><img src="@/img/across.png" alt=""></div>
        </div>
        <div class="img-list-two">
            <div class="start-left">
                  <div class="left-top"><img src="@/img/m.png" alt=""></div> 
                  <div class="left-center">9.9抢购 > </div> 
                  <div class="left-bottom"><img src="@/img/nomoney.png" alt=""></div> 
            </div>
            <div class="start-center">
                <ul>
                    <li v-for="(item,index) in arr1" :key="index">
                        <div v-bind:style="{ color: arr1Color, fontSize: arr1Size + 'px' }">  {{item.name}} </div>  
                        <div v-bind:style="{ color: arr12Color, fontSize: arr12Size + 'px' }">  {{item.age}}</div>
                        <img src="@/img/big-start.png" alt=""> 
                    </li>
                </ul>

            </div>
            <div class="start-right">
                <ul>
                    <li v-for="(item,index) in arr2" :key="index">
                        <div v-bind:style="{ color: arr1Color, fontSize: arr1Size + 'px' }">  {{item.name}} </div>  
                        <div v-bind:style="{ color: arr12Color, fontSize: arr12Size + 'px' }">  {{item.age}}</div>
                        <img src="@/img/samllstart.png" alt=""> 
                    </li>
                </ul>
            </div>
        </div>
        <div class="all-start">
            <div class="all-left"><img src="@/img/across.png" alt=""></div>
            <div class="all-center">
                <div class="ce-top"><img src="@/img/blue.png" alt=""></div>
                <div class="ce-ce">爆款新上市</div>
                <div class="ce-bot">HOT STYLE NEW </div>
            </div>
            <div class="all-left"><img src="@/img/across.png" alt=""></div>
        </div>
        <div class="img-list-two">
            <div class="start-left">
                  <div class="left-top"><img src="@/img/m.png" alt=""></div> 
                  <div class="left-center">9.9抢购 > </div> 
                  <div class="left-bottom"><img src="@/img/nomoney.png" alt=""></div> 
            </div>
            <div class="start-center">
                <ul>
                    <li v-for="(item,index) in arr1" :key="index">
                        <div v-bind:style="{ color: arr1Color, fontSize: arr1Size + 'px' }">  {{item.name}} </div>  
                        <div v-bind:style="{ color: arr12Color, fontSize: arr12Size + 'px' }">  {{item.age}}</div>
                        <img src="@/img/big-start.png" alt=""> 
                    </li>
                </ul>

            </div>
            <div class="start-right">
                <ul>
                    <li v-for="(item,index) in arr2" :key="index">
                        <div v-bind:style="{ color: arr1Color, fontSize: arr1Size + 'px' }">  {{item.name}} </div>  
                        <div v-bind:style="{ color: arr12Color, fontSize: arr12Size + 'px' }">  {{item.age}}</div>
                        <img src="@/img/samllstart.png" alt=""> 
                    </li>
                </ul>
            </div>
        </div>
        <div class="all-start">
            <div class="all-left"><img src="@/img/across.png" alt=""></div>
            <div class="all-center">
                <div class="ce-top"><img src="@/img/blue.png" alt=""></div>
                <div class="ce-ce">懂你想要</div>
                <div class="ce-bot">KNOWN WANT YOU WANT </div>
            </div>
            <div class="all-left"><img src="@/img/across.png" alt=""></div>
        </div>
        <Search />
    </div>
</template>
<script>
import Search from '@/components/Search'
    export default {
        components:{
            Search
        },
       data() {    
           return {
               activeColor: '#646464',
               fontSize: 12,
               threecolor:'#3eb4fd',
               fontSize:16,
               arr1Color:'#323232',
               arr1Size:18,
               arr12Color:'#3eb4fd',
               arr12Size:14,
               arr2:[
                {
                       name:'游戏笔记本电脑',
                       age:'撩女神一见就够！'
                   },{
                       name:'游戏笔记本电脑',
                       age:'撩女神一见就够！'
                   },{
                       name:'游戏笔记本电脑',
                       age:'撩女神一见就够！'
                   }
               ],
               arr1:[
                   {
                       name:'游戏笔记本电脑',
                       age:'撩女神一见就够！'
                   },{
                       name:'游戏笔记本电脑',
                       age:'撩女神一见就够！'
                   },{
                       name:'游戏笔记本电脑',
                       age:'撩女神一见就够！'
                   },{
                       name:'游戏笔记本电脑',
                       age:'撩女神一见就够！'
                   },{
                       name:'游戏笔记本电脑',
                       age:'撩女神一见就够！'
                   },{
                       name:'游戏笔记本电脑',
                       age:'撩女神一见就够！'
                   }
               ],
               arr: [
                   {
                    name:'【直降220】',
                    age:'眼部按摩仪  ',
                    sex:'￥128',
                    like:'原价:218'
                   },
                   {
                    name:'【直降220】',
                    age:'眼部按摩仪  ',
                    sex:'￥128',
                    like:'原价:218'
                   },
                   {
                    name:'【直降220】',
                    age:'眼部按摩仪  ',
                    sex:'￥128',
                    like:'原价:218'
                   },
                   {
                    name:'【直降220】',
                    age:'眼部按摩仪 ',
                    sex:'￥128',
                    like:'原价:218'
                   },{
                    name:'【直降220】',
                    age:'眼部按摩仪 ',
                    sex:'￥128',
                    like:'原价:218'
                   },{
                    name:'【直降220】',
                    age:'眼部按摩仪 ',
                    sex:'￥128',
                    like:'原价:218'
                   },{
                    name:'【直降220】',
                    age:'眼部按摩仪 ',
                    sex:'￥128',
                    like:'原价:218'
                   },{
                    name:'【直降220】',
                    age:'眼部按摩仪 ',
                    sex:'￥128',
                    like:'原价:218'
                   }
                ]
           
           
           

           
           }
       },
    }
</script>
<style scoped lang='less'>
        ul,li{list-style: none;padding: 0;margin: 0;}
        img:hover{opacity:0.6; cursor: pointer;}
        .index-center{
        width: 70%;
        // border: 1px red solid;
        background: #f5f5f5;
        .header-top{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .input{
               width: 360px;
               margin-top:10px; 
               .btn{
                   background: #3eb4fd;
                   color: #ffffff;
               }           
            }
            .header-right{
                display: flex;
                flex-direction: row;
                .img-left{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
            }
        }
        .banner{
            display: flex;
            flex-direction: row;
            background: #6cbdf9;
            .banner-center{
                width: 650px;
                img{
                    width: 650px;
                    height: 400px;
                }
                
            }
            .banner-right{
                position: relative;
                .banner-con{
                    position: absolute;
                    left: -12px;
                    margin-top: 56px;
                    width: 190px;
                    height: 300px;
                    background: white;
                    
                    .banner-logo{
                        position: relative;
                        top: -22px;
                        left: 2px;
                        img{
                        position: absolute;                          
                            width: 170px;
                        }
                    }
                    .hello{margin-top: 50px; text-align: center;}
                    .btn-two{
                        margin: 28px 0 0 24px;
                        Button{
                            width: 75px;
                            border: 1px #3eb4fd solid;
                            color: #3eb4fd;
                        }
                    }
                    .free-reg{
                       .reg-img{
                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                            img{margin-left: 26px}
                            .img-one{
                                margin-top: 30px;
                            }
                       }
                    }
                }
            }
        }
        .img-list{
            display: flex;
            flex-direction: row;
                .list-left{
                    // border: 1px blue solid;
                    width: 384px;
                    .left-con{
                        display: flex;
                        flex-direction: row;
                        align-items: center; 
                        span:nth-of-type(2){
                          margin-left: 68px;
                        }
                    }
                }
                .list-right{
                    // border: 1px green solid;  
                    ul{
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        li{
                            margin-top: 22px;
                            border-top: 1px gray solid;
                        }
                        .li-con{
                            display: flex;
                            flex-direction: row;
                        }
                    }                 
                }
        }
        .all-start{
             margin-top:16px; 
            height: 100px;
            background: #ffffff;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .all-left img{
                    width: 400px;
            }
            .all-center{
               
                 display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .ce-ce{
                    font-size: 24px;
                }
                .ce-bot{
                    font-size: 12px;
                }
            }
        }
        .img-list-two{
            margin-top:16px; 
            // border:1px red solid;
            background: #ffffff;
            display: flex;
            flex-direction: row;
            // justify-content: space-between;

            .start-left{
                // border: 1px green solid;
                width: 250px;
                .left-top img{
                    height: 270px;
                }
                .left-bottom img{
                    height: 90px;
                }
            }
            .start-center{
                // border: 1px red solid;
                width: 634px;
                ul{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    li{
                        border: 1px #dcdcdc solid;
                    }
                }
            }
            .start-right{
                    ul li{
                        border-top: 1px #dcdcdc solid;
                        img{
                            margin-left: 60px;
                        }
                    }
            }
        }
    }
</style>