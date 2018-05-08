<template>
  <div>
  <el-button type="primary" @click="dialogrevisepwd = true">修改密码1</el-button>
    <el-dialog title="修改密码" :visible.sync="dialogrevisepwd" width="600px" @close="closeDialog('passwordruleform2')">
      <el-form :model="passwordruleform2" status-icon ref="passwordruleform2" :rules="passwordrules2" label-width="150px" >
        <el-form-item label="原密码：" prop="oldpwd">
          <el-input type="password" placeholder="请输入原密码" v-model="passwordruleform2.oldpwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="newpwd">
          <el-input type="password" placeholder="请输入新密码"  v-model="passwordruleform2.newpwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请再次输入新密码：" prop="checknewpwd">
          <el-input type="password"  placeholder="请再次输入新密码" v-model="passwordruleform2.checknewpwd" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogrevisepwd = false">取 消</el-button>
        <el-button type="primary" @click="revisePwd('passwordruleform2')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default{
    name: 'Dialog',
    data() {
      let validateOldPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入原密码！'));
        }else{
          //获取当前用户密码并校验
          /*this.$axios.post().then(function (reponse) {
            console.log(reponse);
          }).catch(function (error) {
            console.log(error);
          });*/
          if(true){
            callback();
          }else{
            callback('旧密码输入错误！');
          }
        }
      };
      var validateNewPwd = (rule,value,callback) => {
        if (value === '') {
          callback(new Error('请输入新密码！'));
        }else if(value === this.passwordruleform2.oldpwd){
          callback(new Error('新密码不能与旧密码相同！'));
        }else if(value.length < 6 || value.length > 16){
          callback(new Error('请输入6到16位密码！'));
        }else{
          if(this.passwordruleform2.checknewpwd !== ''){
            this.$refs.passwordruleform2.validateField('checknewpwd')
          }
          callback();
        }
      };
      let validateCheckPwd = (rule,value,callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码！'));
        } else if (value !== this.passwordruleform2.newpwd) {
          callback(new Error('两次输入的新密码不一致！'));
        }else if(value.length < 6 || value.length > 16){
          callback(new Error('请输入6到16位密码！'));
        } else {
          callback();
        }
      };
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
        }
      }
    },
    methods:{
      revisePwd(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogrevisepwd = false;
            this.$message({ message: "修改成功", type: "success" ,showClose : true });
          } else {
            this.$message({ message: "修改失败", type: "error" ,showClose : true });
            return false;
          }
          this.$refs[formName].resetFields();
        });
      },
      closeDialog(formName){
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>

</style>
