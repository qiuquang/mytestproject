<template>
  <div>
    <el-button type="primary" round @click="downloadVisible = true">下载控件</el-button>
    <el-dialog title="下载工具" :visible.sync="downloadVisible">
      <span>为了顺畅使用本系统，建议下载安装如下应用:</span>
      <el-row v-for="item in tools">
        <el-col :span="8">{{ item.name }}</el-col>
        <el-col :span="8">{{ item.describe }}</el-col>
        <el-col :span="8"><a href="`${item.downloadurl}`">下载</a></el-col>
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
          img : '/abc',
          name: '播放器',
          describe : '描述11',
          downloadurl : '../assets/abc.exe'
          },
          {
            img : '/abc',
            name: '播放器2',
            describe : '描述22',
            downloadurl : '../assets/abc.exe'
          }
        ]
      }
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

</style>
