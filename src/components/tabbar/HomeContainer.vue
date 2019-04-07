<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000" :showIndicators="false">
      <!-- 在组件中 -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 轮播图区域 -->

    <!-- 九宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">图片共享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
    <!-- 九宫格区域 -->

  </div>
</template>

<script>
//业务逻辑
export default {
  data() {
    //v-for
    return {
      lunbotuList: [] // 保存轮播图
    };
  },
  created() {
    //创建组件立即调用
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http
        .get("https://api.apiopen.top/getImages")
        .then(result => {
          // console.log(result.body);
          if (result.body.code === 200) {
            //成功了
            this.lunbotuList = result.body.result;
            console.log("加载轮播图成功");
          } else {
            //失败
            console.log("加载轮播图失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item:nth-child(1) {
    background-color: red;
  }
  .mint-swipe-item:nth-child(2) {
    background-color: blue;
  }
  .mint-swipe-item:nth-child(3) {
    background-color: green;
  }
  img {
    width: 100%;
    height: 100%;
  }

}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    .mui-media-body{
       font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>
