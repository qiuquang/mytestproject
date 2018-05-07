<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <!--<dialog></dialog>-->
    <el-button type="primary" @click="dialogrevisepwd = true">修改密码1</el-button>
    <el-dialog title="修改密码" :visible.sync="dialogrevisepwd" custom-class="pwddia">
      <el-form :model="passwordruleform2" status-icon ref="passwordruleform2" :rules="passwordrules2" label-width="150px" >
        <el-form-item label="原密码：" prop="oldpwd">
          <el-input type="password" v-model="passwordruleform2.oldpwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="newpwd">
          <el-input type="password" v-model="passwordruleform2.newpwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请再次输入新密码：" prop="checknewpwd">
          <el-input type="password" v-model="passwordruleform2.checknewpwd" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!--<el-button @click="dialogrevisepwd = false">取 消</el-button>-->
        <el-button type="primary" @click="revisePwd('passwordruleform2')">确 定</el-button>

      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    var validateOldPwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入原密码！'));
      }else{
        console.log('校验validateOldPwd通过');
      }
    };
    var validateNewPwd = (rule,value,callback) => {
      if (value === '') {
        callback(new Error('请输入新密码！'));
      } else if(value === this.passwordruleform2.oldpwd){
        callback(new Error('新密码不能与旧密码相同！'));
      }else{
        console.log('校验validateNewPwd通过');
      }
    };
    var validateCheckPwd = (rule,value,callback) => {
      if (value === '') {
        callback(new Error('请再次输入新密码！'));
      } else if (value !== this.passwordruleform2.newpwd) {
        callback(new Error('两次输入密码不一致！'));
      } else {
        console.log('校验validateCheckPwd通过')
      }
    }
    return {
      dialogrevisepwd:false,
      passwordruleform2:{
        oldpwd:'',
        newpwd:'',
        checknewpwd:''
      },
      passwordrules2:{
        oldpwd:[ {validator: validateOldPwd, trigger: 'blur'} ],
        newpwd:[ {validator: validateNewPwd, trigger: 'blur'}],
        checknewpwd:[{ validator: validateCheckPwd,trigger:'blur' }]
      },
      close(){
        alert('guanb');

    }
    }
  },
  methods:{
    revisePwd(formName){
      this.dialogrevisepwd=false;
      console.log(formName);
      console.log(this)
      console.log(this.$refs[formName]);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid);
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-dialog__header{
  text-align: left;
}
  .pwddia{
    width:600px;
  }
</style>
