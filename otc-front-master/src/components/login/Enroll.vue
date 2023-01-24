<template>
  <div class="enroll-container">
    <div class="enroll-box">
      <div class="enroll-form">
        <el-form ref="form" :model="enrollForm" class="form" label-width="80px">
          <el-form-item label="账户注册" >
          </el-form-item>
          <el-form-item label="手机号:">
            <el-input v-model="enrollForm.phone_num" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="用户名:">
            <el-input v-model="enrollForm.user" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="输入密码:">
            <el-input v-model="enrollForm.password" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码:">
            <el-input v-model="enrollForm.again" placeholder="请再次输入密码" type="password"></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" >取消</el-button>
            <el-button type="primary" @click="register">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Enroll",
  data() {
    return {
      enrollForm: {
        phone_num: '',
        code: '',
        password: ''
      }

    }
  }


}
</script>

<style scoped>
.enroll-container{
  height: 100%;
  background: #cccccc;
}
.enroll-box{
  position: absolute;
  height: 500px;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.enroll-text{
  position: absolute;
  top: 0;
  height: 3.5%;
  width: 100%;
  background: #cccccc;
  line-height: 1%;
  text-align: center;
}
.enroll-form{
  box-sizing: border-box;
  position: absolute;
  top: 3.5%;
  height: 96.5%;
  width: 100%;
  padding: 50px 40px;
  background: #cccccc;
}
.btn{
  width: 100%;
  background-color: #2a97fe !important;
}
.form>>>.el-form-item__content{
  line-height: 20px;
}

</style>
