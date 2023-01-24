<template id="home">
  <div class="hello">
    <div class="wrap">
      <div class="title">
        <img src="../../assets/logo.png" style="float:left;height:60px">
        <el-divider direction="vertical"></el-divider>
        <div class="word">
          科大国创项目管理系统
        </div>
        <div class="direction">
        <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" style=" border-bottom: none;">
            <el-menu-item index="1" class="el-menu-demo1"  @click="other">工作台</el-menu-item>
            <el-menu-item index="2" class="el-menu-demo1"  @click="other">合同</el-menu-item>
            <el-menu-item index="3" class="el-menu-demo1"  @click="other">项目</el-menu-item>
            <el-menu-item index="4"  class="el-menu-demo1" @click="goDemands">需求</el-menu-item>
            <el-menu-item index="5"  class="el-menu-demo1" @click="other">缺陷</el-menu-item>
            <el-menu-item index="6" class="el-menu-demo1"  @click="other">PMO</el-menu-item> 
          </el-menu>
        </div>

        <div class="load">
          <i class="el-icon-user" style="font-size: 30px;" ></i>
          <el-dropdown>
          <span class="el-dropdown-link" >李森
           <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item >修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import middle1 from "./Text"
export default {
  components: {
   middle1,

  },
  data () {
    return {
      radio1: '',
    };
  },
  methods:{
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
    logout(){
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    goDemands(){
      this.$router.push('/text');
      this.$router.push('/martix')
    },
    other(){
      this.$router.push('/other')
    }
  }

};
</script>


<style >
 .el-menu-demo1.el-menu-item.is-active{
       background-color: #409EFF !important;
      
        color: #fff !important;
 }

.wrap{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 6%;
  width: 100%;
  background-color: #eeeeee;
}
.title{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #ffffff;
}

.el-divider--vertical {
  display: inline-block;
  width: 1px;
  height: 3.5em;
  position: absolute;
  left: 70px;
}
.word{
  position: absolute;
  font-size: x-large;
  left: 100px;
  top: 12px;
}

.direction{
  position: absolute;
  left: 700px;
  top: 0;
  height: 100%;
  width: 430px;
}
.el-menu-demo1.direction.direction.el-menu-item.is-active {
    background-color: #409EFF;
   color: white;
}




.load{
  position: absolute;
  width:100px;
  top: 20px;
  right: 0;
  height: 70px;
}
.el-dropdown-link{
  cursor: pointer;
  color: #409EFF;
  font-size: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown {
  font-size: 19px;
  top: -10px;
}
</style>
