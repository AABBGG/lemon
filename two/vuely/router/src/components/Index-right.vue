<template>
    <div class="index-right">
        <div class="box">
            <div class="img-box">
                    <div>
                        <img src="@/img/QQ1.png" alt=""> 联系我们<br>
                        <img src="@/img/sanma1.png" alt="">APP<br>
                        <img src="@/img/CAR1.png" alt="">购物车
                        
                        </div>
                         <div class="box-chat">
                        <img src="@/img/2.png" alt=""><br>
                       
                        <img src="@/img/CAR.png" alt=""> <br>
                        <img src="@/img/sama.png" alt=""> 观看更多内容
                        
                        </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

    }
</script>

<style scoped lang='less'>
    .index-right{
        width:15%;
        // border: 1px red solid;
           .box{
            width: auto; 
            height: 400px;
            background: #6cbdf9;
            // border: 1px red solid;
            margin-top: 170px;
            .img-box{
                position: fixed;
               div{
               }
               .box-chat img{margin-left:60px;}
            }
        }
    }
</style>