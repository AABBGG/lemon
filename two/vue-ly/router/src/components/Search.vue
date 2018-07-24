<template>
    <div class="list">
        <ul class="imglist">
            <li v-for="item in data" :key="item.id">
                <!-- <router-link :to="'/news/'+item.dir+'/'+item.date+'/'+item.id+'.html'">  </router-link> -->
                   <img src="@/img/shite2.jpg" alt="">
                          <div>
                                <span v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"> {{item.new}}</span>
                                <span class="old-right" v-bind:style="{ color: threecolor, fontSize: threeSize + 'px' }">{{item.old}}</span>  </div>  
                            <div v-bind:style="{ color:twocolor, fontSize: twoSize + 'px' }">  {{item.decrice}} </div>
                            <Button class="btn" type="primary">加入购物车</Button>  <Button class="btn"  type="ghost" >收藏</Button>
                
            </li>
        </ul>
        <div class="more">
                输入数字查询更多内容：<input type="text" v-model="page" >
                <Page :total="100" @on-change="send" > </Page>
        </div>
        
    </div>
</template>
<script>
    export default {

        data() {
            return {
               activeColor: '#3eb4fd',
               fontSize: 22,
               threecolor:'#969696',
               threeSize:14,
               twocolor:'#000000',
               twoSize:14,
                page:1,
                imglist: [ 
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋11'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋女22'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋女33'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋女44'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋女55'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋女66'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋77'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋女88'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋女99'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋女10'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋女11'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋女12'
                    }, {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉dffwrf'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋wrgfeaef'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾eragfseg3'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾aergfseae女44'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluzewragaef女55'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾erwfa鞋女66'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋77'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 sfgev底凉鞋女88'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 afetag带平底凉鞋女99'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluutmt eh底凉鞋女10'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿fffffffffffff凉鞋女11'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 o566665555底凉鞋女12'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧bbbbbbbbbbbbbbbbb44'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluzewragaef女55'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾erwfa鞋女66'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 oluz露趾绑带平底凉鞋77'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'eeeeeeeeeeee88'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿 afetag带平底凉鞋女99'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'aaaaaaaaaaaaaaa女10'
                    },{
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧露姿ccccccccccccc女11'
                    },
                    {
                        new:'￥79',
                        old:'￥299',
                        decrice:'欧ddddddddddddddddd凉鞋女12'
                    }
                ]
            }
        },
        computed:{
            data(){
                let num = 12
                return this.imglist.slice((this.page-1) * 12 , ((this.page-1) *12) + 12)
            }
        },
        methods: {
            send(d) {
            {{d}}
            }
        },
    }

</script>

<style lang='less'>
img:hover{opacity:0.6; cursor: pointer;}
    ul,li{
        list-style: none;
        margin: 0px;
        padding: 0px;
    }
    .list{
        ul.imglist{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            li{
                border: 2px white solid; 
                img{padding:10px;}
               .old-right{
                   margin-left: 150px
               }
                .btn{
                    margin: 0 4px 12px 30px;
                }
            }
            li:hover{
                border: 2px #3eb4fd solid
            }

        }
        .more{
            margin-top: 50px;
            margin-left: 700px;
        }
    }
</style>