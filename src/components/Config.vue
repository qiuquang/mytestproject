<template>
  <el-container>
    <el-tabs type="card" @tab-click="changetab">
      <el-tab-pane label="大数据服务器">
        <el-form label-width="85px" :model="BigDateServer" ref="BigDateServer" status-icon :rules="configrules">
          <el-form-item label="IP" prop="BigDateServer_ip">
            <el-input v-model="BigDateServer.BigDateServer_ip"></el-input>
          </el-form-item>
          <el-form-item label="端口" prop="BigDateServer_port">
            <el-input v-model="BigDateServer.BigDateServer_port"></el-input>
          </el-form-item>
          <el-form-item label="路径" prop="BigDateServer_address">
            <el-input v-model="BigDateServer.BigDateServer_address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="视频分析服务器">
        <el-form label-width="85px" :model="IvaServer" ref="IvaServer" status-icon :rules="configrules">
          <el-form-item label="IP" prop="IvaServer_ip">
            <el-input v-model="IvaServer.IvaServer_ip"></el-input>
          </el-form-item>
          <el-form-item label="端口" prop="IvaServer_port">
            <el-input v-model="IvaServer.IvaServer_port"></el-input>
          </el-form-item>
          <el-form-item label="是否启用" prop="IvaServer_inuse">
            <el-select v-model="IvaServer.IvaServer_inuse" placeholder="请选择是否启用">
              <el-option label="是" value="true"></el-option>
              <el-option label="否" value="false"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="Domain服务器">
        <el-form label-width="85px" :model="DomainConfig" ref="DomainConfig" status-icon :rules="configrules">
          <el-form-item label="IP" prop="DomainConfig_ip">
            <el-input v-model="DomainConfig.DomainConfig_ip"></el-input>
          </el-form-item>
          <el-form-item label="端口" prop="DomainConfig_port">
            <el-input v-model="DomainConfig.DomainConfig_port"></el-input>
          </el-form-item>
          <el-form-item label="路径" prop="DomainConfig_address">
            <el-input v-model="DomainConfig.DomainConfig_address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="GIS服务器">
        <div style="height: 600px; overflow: auto" >
        <el-form label-width="85px" :model="GISServer" ref="GISServer" status-icon :rules="configrules">
          <el-form-item label="IP" prop="GISServer_ip">
            <el-input v-model="GISServer.GISServer_ip"></el-input>
          </el-form-item>
          <el-form-item label="端口" prop="GISServer_port">
            <el-input v-model="GISServer.GISServer_port"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="GISServer_userName">
            <el-input v-model="GISServer.GISServer_userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="GISServer_pwd">
            <el-input type="password" v-model="GISServer.GISServer_pwd"></el-input>
          </el-form-item>
          <el-form-item label="路径" prop="GISServer_address">
            <el-input v-model="GISServer.GISServer_address"></el-input>
          </el-form-item>
          <el-form-item label="聚合开始" prop="GISServer_clusterStart">
            <el-input v-model="GISServer.GISServer_clusterStart"></el-input>
          </el-form-item>
          <el-form-item label="聚合结束" prop="GISServer_clusterEnd">
            <el-input v-model="GISServer.GISServer_clusterEnd"></el-input>
          </el-form-item>
          <el-form-item label="热点开始" prop="GISServer_titleStart">
            <el-input v-model="GISServer.GISServer_titleStart"></el-input>
          </el-form-item>
          <el-form-item label="热点结束" prop="GISServer_titleEnd">
            <el-input v-model="GISServer.GISServer_titleEnd"></el-input>
          </el-form-item>
          <el-form-item label="初始经度" prop="GISServer_lon">
            <el-input v-model="GISServer.GISServer_lon"></el-input>
          </el-form-item>
          <el-form-item label="初始纬度" prop="GISServer_lat">
            <el-input v-model="GISServer.GISServer_lat"></el-input>
          </el-form-item>
          <el-form-item label="初始层级" prop="GISServer_level">
            <el-input v-model="GISServer.GISServer_level"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存</el-button>
          </el-form-item>
        </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="集成平台">
        <el-form label-width="85px" :model="authSys" ref="authSys" status-icon :rules="configrules">
          <el-form-item label="IP" prop="authSys_ip">
            <el-input v-model="authSys.authSys_ip"></el-input>
          </el-form-item>
          <el-form-item label="端口" prop="authSys_port">
            <el-input v-model="authSys.authSys_port"></el-input>
          </el-form-item>
          <el-form-item label="路径" prop="authSys_address">
            <el-input v-model="authSys.authSys_address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="视图库服务器">
        <el-form label-width="85px" :model="ViewServer" ref="ViewServer" status-icon :rules="configrules">
          <el-form-item label="IP" prop="ViewServer_ip">
            <el-input v-model="ViewServer.ViewServer_ip"></el-input>
          </el-form-item>
          <el-form-item label="端口" prop="ViewServer_port">
            <el-input v-model="ViewServer.ViewServer_port"></el-input>
          </el-form-item>
          <el-form-item label="路径" prop="ViewServer_address">
            <el-input v-model="ViewServer.ViewServer_address"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="ViewServer_userName">
            <el-input v-model="ViewServer.ViewServer_userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="ViewServer_pwd">
            <el-input type="password" v-model="ViewServer.ViewServer_pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存</el-button>
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
    let validate = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入原密码！'));
      }else{
        callback();
      }
    };
    return{
        BigDateServer :{
          name : '大数据服务器',
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
        },
        configrules : {
          BigDateServer_ip :[ {required: true,  message: '请输入IP!', trigger: 'blur'} ],
          BigDateServer_port :[ {required: true,  message: '请输入端口!', trigger: 'blur'} ],
          BigDateServer_address :[ {required: true,  message: '请输入路径!', trigger: 'blur'} ],
          IvaServer_ip:[ {required: true,  message: '请输入IP!', trigger: 'blur'} ],
          IvaServer_port:[ {required: true,  message: '请输入端口!', trigger: 'blur'} ],
          IvaServer_inuse:[ {required: true,  message: '请输入路径!', trigger: 'change'} ],
          DomainConfig_ip:[ {required: true,  message: '请输入IP!', trigger: 'blur'} ],
          DomainConfig_port:[ {required: true,  message: '请输入端口!', trigger: 'blur'} ],
          DomainConfig_address:[ {required: true,  message: '请输入路径!', trigger: 'blur'} ],
          GISServer_ip:[ {required: true,  message: '请输入IP!', trigger: 'blur'} ],
          GISServer_port:[ {required: true,  message: '请输入端口!', trigger: 'blur'} ],
          GISServer_userName:[ {required: true,  message: '请输入用户名!', trigger: 'blur'} ],
          GISServer_pwd:[ {required: true,  message: '请输入密码!', trigger: 'blur'} ],
          GISServer_address:[ {required: true,  message: '请输入路径!', trigger: 'blur'} ],
          GISServer_clusterStart:[ {required: true,  message: '请输入聚合开始!', trigger: 'blur'} ],
          GISServer_clusterEnd:[ {required: true,  message: '请输入聚合结束!', trigger: 'blur'} ],
          GISServer_titleStart:[ {required: true,  message: '请输入热点开始!', trigger: 'blur'} ],
          GISServer_titleEnd:[ {required: true,  message: '请输入热点结束!', trigger: 'blur'} ],
          authSys_ip:[ {required: true,  message: '请输入IP!', trigger: 'blur'} ],
          authSys_port:[ {required: true,  message: '请输入端口!', trigger: 'blur'} ],
          authSys_address:[ {required: true,  message: '请输入路径!', trigger: 'blur'} ],
          ViewServer_ip:[ {required: true,  message: '请输入IP!', trigger: 'blur'} ],
          ViewServer_port:[ {required: true,  message: '请输入端口!', trigger: 'blur'} ],
          ViewServer_userName:[ {required: true,  message: '请输入用户名!', trigger: 'blur'} ],
          ViewServer_pwd:[ {required: true,  message: '请输入密码!', trigger: 'blur'} ],
          ViewServer_address:[ {required: true,  message: '请输入路径!', trigger: 'blur'} ],
        }
    }
  },
  // watch :{
  //   BigDateServer : function () {
  //     this.$http.post('http://localhost:3003/BigDateServer')
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (response) {
  //         console.log(response);
  //       });
  //   }
  // },
  methods:{
    changetab:function (){
      console.log(11)
    }
  },
  created:function () {
    this.$http.get('http://localhost:3000/configData')
      .then((response) => {
        console.log(response);
        this.BigDateServer = response.data[0];
        this.IvaServer = response.data[0];
        this.DomainConfig = response.data[0];
        this.authSys = response.data[0];
        this.ViewServer = response.data[0];
        this.GISServer = response.data[0];
      })
      // .then(function (response) {
      //   console.log(1);
      //   console.log(this);
      //   console.log(response.data[0]);
      // })
      .catch(function (response) {
        console.log(2);
        console.log(response);
      });
    // console.log(this)
  },
}
</script>


<style scoped>
.el-form{
  width: 300px;
  margin:0 auto;
}
.el-form{
  text-align: center;
}
.el-container{
  /*background: #f00 ;*/
}
</style>
