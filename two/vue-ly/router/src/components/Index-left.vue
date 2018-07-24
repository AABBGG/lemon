<template>
    <div class="index-left">
        <div class="box"> </div>
        <div class="box1">
            <div class="box1-con">
                <router-link to="/history">
                <div>企业历程</div>
                <div>history</div></router-link>
            </div>
            <div class="box2-con">
                <router-link to="/culture">
                <div>企业文化</div>
                <div>culture</div></router-link>
            </div>
            <div class="box3-con">
                <div>我的顾客</div>
                <div>My customers</div>
            </div>
            <div class="box4-con">
                <div>我的顾客</div>
                <div>My customers</div>
            </div>
            <div class="box5-con">
                <div>我的顾客</div>
                <div>My customers</div>
            </div>
            <div class="box6-con">
                <div>我的顾客</div>
                <div>My customers</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>

<style scoped lang='less'>
img:hover{opacity:0.6; cursor: pointer;}
    .index-left{
        width: 15%;
        // border: 1px red solid;
        .box{
            width: auto; 
            height: 400px;
            background: #6cbdf9;
            // border: 1px red solid;
            margin-top: 170px;
        }
        .box1{
            position: fixed;
            z-index: 2;
            .box1-con{
                border: 1px #7895f7 solid;
                box-shadow: 2px 2px 2px gray; 
                margin-left: 120px;
                margin-top: -480px;
                padding: 10px;
                div{
                    text-align: center;
                }
            }
            .box1-con:hover{
                background: #7895f7;
                color: white;
                  cursor: pointer;
            }
            
            .box2-con,.box3-con,.box4-con,.box5-con,.box6-con,.box7-con{
                border: 1px #7895f7 solid;
                box-shadow: 2px 2px 2px gray; 
                margin-left: 120px;
                margin-top: 10px;
                padding: 10px;
                  cursor: pointer;
                div{
                    text-align: center;
                }
            }
            .box2-con:hover,.box3-con:hover,.box4-con:hover,.box5-con:hover ,.box6-con:hover,.box2-con:hover{
                background: #7895f7;
                color: white;
                cursor: pointer;
            }
            
        }
    }


</style>