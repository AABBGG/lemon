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
        <div class="body">
            <Left />
            <Center />
            <Right />
        </div>
        <Final />
    </div>
</template>

<script>
    import Left from '@/components/Index-left'
    import Center from '@/components/Index-center'
    import Right from '@/components/Index-right'
    import Final from '@/components/Final'
    export default {
        components:{
           Left,
           Center,
           Right,
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
        .body{
            display: flex;
            flex-direction: row;
        }

    
</style>