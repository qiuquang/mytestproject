<template>
  <el-container>
    <el-tabs type="card" @tab-click="changetab">
      <el-tab-pane label="大数据服务器">
        <el-form label-width="80px" :model="BigDateServer" ref="BigDateServer">
          <em style="color: #f00; width: 1px;height: 1px">*</em>
          <el-form-item label="IP" style="margin-left: 1px">
            <el-input v-model="BigDateServer.BigDateServer_ip"></el-input>
          </el-form-item>
          <el-form-item label="端口">
            <el-input v-model="BigDateServer.BigDateServer_port"></el-input>
          </el-form-item>
          <el-form-item label="路径">
            <el-input v-model="BigDateServer.BigDateServer_address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="视频分析服务器">
        <el-form label-width="80px" ref="IvaServer">
          <el-form-item label="IP">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="端口">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="是否启用">
            <el-select v-model="IvaServer.IvaServer_inuse">
              <el-option label="是" value="true"></el-option>
              <el-option label="否" value="false"></el-option>
            </el-select>
          </el-form-item>
          <el-button type="primary">保存</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Domain服务器">
        <el-form label-width="80px" ref="DomainConfig">
          <el-form-item label="IP">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="端口">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="路径">
            <el-input></el-input>
          </el-form-item>
          <el-button type="primary">保存</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="GIS服务器">
        <el-form label-width="80px" ref="GISServer">
          <el-form-item label="IP">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="端口">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password"></el-input>
          </el-form-item>
          <el-form-item label="路径">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="聚合开始">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="聚合结束">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="热点开始">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="热点结束">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="初始经度">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="初始纬度">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="初始层级">
            <el-input></el-input>
          </el-form-item>
          <el-button type="primary">保存</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="集成平台">
        <el-form label-width="80px" ref="authSys">
          <el-form-item label="IP">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="端口">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="路径">
            <el-input></el-input>
          </el-form-item>
          <el-button type="primary">保存</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="视图库服务器">
        <el-form label-width="80px" ref="ViewServer">
          <el-form-item label="IP">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="端口">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="路径">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </el-container>
</template>
<script>
export default {
  name:'Config',
  data(){
    return{
        BigDateServer :{
          // name : '大数据服务器',
          BigDateServer_ip:'',
          BigDateServer_port:'',
          BigDateServer_address:''
        },
        IvaServer :{
          name : '视频分析服务器',
          IvaServer_ip:'',
          IvaServer_port:'',
          IvaServer_inuse:''
        },
        DomainConfig :{
          name :'Domain服务',
          DomainConfig_ip:'',
          DomainConfig_port:'',
          DomainConfig_address:''
        },
        GISServer : {
          name : 'GIS服务器',
          GISServer_ip:'',
          GISServer_port:'',
          GISServer_userName:'',
          GISServer_pwd:'',
          GISServer_address:'',
          GISServer_clusterStart:'',
          GISServer_clusterEnd:'',
          GISServer_titleStart:'',
          GISServer_titleEnd:'',
          GISServer_lon:'',
          GISServer_lat:'',
          GISServer_level:''
        },
        authSys : {
          name : '集成平台',
          authSys_ip:'',
          authSys_port:'',
          authSys_address:''
        },
        ViewServer : {
          name : '视图库服务器',
          ViewServer_ip:'',
          ViewServer_port:'',
          ViewServer_userName:'',
          ViewServer_pwd:'',
          ViewServer_address:'',
        }
    }
  },
  methods:{
    changetab:function () {
      console.log(this.$refs);
      console.log(11)
    }
  },
  created:function () {
    console.log(this)
  },
}
</script>


<style scoped>
.el-form{
  width: 300px;
  margin:0 auto;
}
.el-form-item{
  margin-bottom: 10px;
}
  .el-form{
    text-align: center;
  }
.el-form-item__label{
  background: url();
}
</style>
