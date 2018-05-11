<template>
  <div>
  <el-button type="primary" @click="dialogrevisepwd = true">修改密码1</el-button>
  <el-dialog title="修改密码" :visible.sync="dialogrevisepwd" width="600px" @close="closeDialog('passwordruleform2')" :close-on-click-modal="false">
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
        let pattern = new RegExp('[^A-Za-z0-9_]+');//只允许数字字母
        if (value === '') {
          callback(new Error('请输入原密码！'));
        }else if(pattern.test(value)){//添加正则验证
          callback(new Error('只允许输入数字和字母！'))
        }else{
          //获取当前用户密码并校验
          this.$http({
            method : 'get',
            url : 'http://localhost:3000/password',
            data : {
              oldpwd : value
            }
          }).then(function (response) {
            // console.log(response);
            if(value !== response.data.oldpwd){
              callback(new Error('旧密码输入错误！'));
            }else{
              callback();
            }
          }).catch(function (error) {
            console.log(error);
            console.log('旧密码输入错误那错了！');
          });
        }
      };
      let validateNewPwd = (rule,value,callback) => {
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
        console.log(this)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this);
            console.log(this.passwordruleform2.checknewpwd);
            this.$http.post('http://localhost:3000/password',{oldpwd : this.passwordruleform2.newpwd}).then((response) => {
              this.dialogrevisepwd = false;
              console.log(1)
              console.log(this)
              this.$refs[formName].resetFields();
              this.$message({ message: "修改成功", type: "success" ,showClose : true });
            }).catch((err) => {
              this.$message({ message: "修改失败", type: "error" ,showClose : true });
              return false;
            })
          }
        });
      },
      closeDialog(formName){
        console.log(formName);
        console.log(this.$refs);
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>

</style>
