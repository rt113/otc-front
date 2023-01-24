<template>
  <div class="Login_container">

    <div class="Login_box">

<!--      左边区域-->
      <div class="box-left">
<!--        图片上的文本信息-->
        <div>

        </div>
      </div>



<!--      右边区域-->
      <div class="box-right">
        <!--      文本区域-->
        <div class="login-text">
              系统登录
        </div>

        <div  v-on:keyup.13="Login">
          <el-form ref="LoginFormRef" label-width="0px" class="login_form item" :model="loginForm" :rules="LoginFormRules">
            <!--用户名-->
            <el-form-item prop="loginName">
              <el-input v-model="loginForm.loginName" placeholder="请输入用户名" class="inputDeep" auto-complete="on">
              </el-input>
            </el-form-item>
            <!--密码-->
            <el-form-item prop="password" >
              <el-input v-model="loginForm.password" placeholder="请输入密码"  type="password" class="inputDeep" auto-complete="on">
              </el-input>
            </el-form-item>
            <el-form-item >
              <el-button type="primary" round width="100px" class="btn" @click="Login">登录</el-button>
            </el-form-item>
            <el-form-item >
              <div class="item-left"><a href="">忘记密码</a></div>
              <div class="item-right"><a href="#">注册账号</a></div>
            </el-form-item>
          </el-form>
        </div>
        <div>
        </div>
      </div>
    </div>
    <Enroll v-if="isShow" />
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        loginName:'',
        password:''
      },
      //表单验证规则
      LoginFormRules:{
        loginName:[
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 4, max: 20, message: '用户名在 4 到 20 个字符', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 5, max: 10, message: '密码在 3 到 20 个字符', trigger: 'blur' }
        ]
      }
    }

    },
    methods: {
      Login() {
        this.$refs.LoginFormRef.validate(async valid => {
            if (!valid) return
            const {data: res} = await this.$http.post('userLogin/login', this.loginForm)
            if (res.code !== 200) return this.$message.error(res.msg)
            this.$message.success('登录成功!')
            // 1. 将登录成功之后的 token,保存到客户端的 sessionStorage(会话机制/只在当前页面生效)中 localStorage(持久话机制/关闭页面也不会忘记数据)
            //   1.1 项目中除了登录之外的API接口,必须在登录之后才能访问
            //   1.2 token 只应在当前网站打开期间生效, 所以将 token 保存在 sessionStorage中
            window.sessionStorage.setItem('token', res.data)
            // 2. 通过编程式路由导航跳转到后台主页,路由地址是 /home
            this.$router.push('/home')
          }
        )
      },
    }
}
</script>

<style scoped>
.Login_container{
  height: 100%;
  min-width: 1000px;
  z-index:-10;
  zoom: 1;
  background-color: #eeeeee;
  /*background: url(../assets/background.jpg);*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  /*-webkit-background-size: cover;*/
  /*-o-background-size: cover;*/
  /*background-position: center 0;*/
}
.Login_box{
  height: 600px;
  width: 1000px;
  top: 50%;
  right: 50%;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);

}
.box-left{
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 50%;
  height: 100%;
  width: 50%;
  color: white;
  background: url("../../assets/login.png") center ;
}
.box-right{
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 50%;
}
.login-text{
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
  height: 10%;
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.login_form{
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 60%;
  width: 100%;
  padding: 0 60px;
  -webkit-transform: translate(-50%, -50%);

}
.btn{
  width: 100%;
  background-color: #2a97fe !important;
}
.item-left{
  float: left;
}
.item-right{
  float: right;
}

.inputDeep>>>.el-input__inner {
  border: 0;
  border-bottom: 0.5px solid #000;
  border-radius: 0;
}
.item>>>.el-form-item__content{
  line-height: 60px;
}
a{
  text-decoration: none;
  color: #2a97fe;
}
</style>
