<template>
  <div>
    <el-button type="primary" round @click="downloadVisible = true">下载控件</el-button>
    <el-dialog title="下载工具" :visible.sync="downloadVisible" width="600px" :close-on-click-modal="false" custom-class="toolsdialog">
      <div style="margin-bottom: 20px">为了顺畅使用本系统，建议下载安装如下应用:</div>
      <el-row v-for="(item,idx) in tools" :key="idx">
        <el-col :span="4"><img style="width: 80px; height: 80px" :src="`${item.imgurl}`"/></el-col>
        <el-col :span="4">{{ item.name }}</el-col>
        <el-col :span="12">{{ item.describe }}</el-col>
        <el-col :span="4"><a :href="`${item.downloadurl}`" >下载</a></el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name : 'Download',
    data (){
      return{
        downloadVisible: false,
        tools:[
          {
          // imgurl : './static/bfq.png',
          imgurl : require('../assets/bfq.png'),
          name: '平台播放器',
          describe : '用于在线监控资源实时播放和历史回放，支持多窗口同时播放、截屏、录屏、3D放大等',
          downloadurl : './static/abc.exe'
          },
          {
            imgurl : require('../assets/szt.png'),
            name: '视侦通',
            describe : '视频侦查工具箱，包含视频播放、屏幕录制、视频编辑、桌面描绘、视频转码、尺寸测量、图片标注等',
            downloadurl : './static/abc.exe'
          },
          {
            imgurl : require('../assets/gjxz.png'),
            name: '下载工具',
            describe : '用于图片，视频等资源的下载',
            downloadurl : './static/abc.exe'
          },
          {
            imgurl : require('../assets/gjxz.png'),
            name: '下载工具',
            describe : '用于图片，视频等资源的下载',
            downloadurl : './static/abc.exe'
          },
          {
            imgurl : require('../assets/gjxz.png'),
            name: '下载工具',
            describe : '用于图片，视频等资源的下载',
            downloadurl : './static/abc.exe'
          },
          {
            imgurl : require('../assets/gjxz.png'),
            name: '下载工具',
            describe : '用于图片，视频等资源的下载',
            downloadurl : './static/abc.exe'
          },
          {
            imgurl : require('../assets/gjxz.png'),
            name: '下载工具',
            describe : '用于图片，视频等资源的下载',
            downloadurl : './static/abc.exe'
          },
          {
            imgurl : require('../assets/gjxz.png'),
            name: '下载工具',
            describe : '用于图片，视频等资源的下载',
            downloadurl : './static/abc.exe'
          },
          {
            imgurl : require('../assets/gjxz.png'),
            name: '下载工具',
            describe : '用于图片，视频等资源的下载',
            downloadurl : './static/abc.exe'
          },
          {
            imgurl : require('../assets/gjxz.png'),
            name: '下载工具',
            describe : '用于图片，视频等资源的下载',
            downloadurl : './static/abc.exe'
          },
          {
            imgurl : require('../assets/gjxz.png'),
            name: '下载工具',
            describe : '用于图片，视频等资源的下载',
            downloadurl : './static/abc.exe'
          }
        ]
      }
    },
    created(){
      console.log(this);
      console.log(this.$data);
    }
    // data : function(){
    //   return{
    //     downloadVisible: false
    //   }
    // }
  /*  data :function () {
      return{
        downloadVisible : false
      }
    }*/
  }
</script>
<style>
  .el-dialog__body{
    height: 500px;
    overflow: auto;
  }
</style>
