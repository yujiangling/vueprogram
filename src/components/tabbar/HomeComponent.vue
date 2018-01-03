<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in bannerimg" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

    </div>
</template>

<script>

    import { Toast } from 'mint-ui'
    
    export default {
        data(){
            return {
                bannerimg: []
            }
        },
        created(){
            this.getBannerImg();
        },
        methods: {
            getBannerImg(){
                this.$http.get("http://vue.studyit.io/api/getlunbo").then( result => {
                    if(result.body.status == 0 ){
                        this.bannerimg = result.body.message;
                        console.log(result.body.message);
                    }else {
                        Toast('获取轮播图失败....');
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
