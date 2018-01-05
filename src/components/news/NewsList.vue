<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsData" :key="item.id">
            <router-link :to="'/home/newsinfo/' + item.id">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <h1>{{item.title}}</h1>
                    <p class='mui-ellipsis'>
                        <span>创建时间: {{ item.add_time | dateFormate }}</span>
                        <span>点击了 {{item.click}} 次</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    import { Toast } from 'mint-ui'

    export default {
        data(){
            return {
                newsData: []
            }
        },
        created(){
            this.getNews();
        },
        methods: {
            getNews(){
                this.$http.get('api/getnewslist').then((result) => {
                    if(result.body.status == 0){
                        this.newsData = result.body.message
                    }else {
                        Toast('获取数据失败');
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mui-table-view {
        .mui-table-view-cell {
            h1 {
                font-size: 14px;
            }
            .mui-ellipsis {
                font-size: 12px;
                color: #22aaff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
