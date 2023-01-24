<template>
  <div>
    <div class="title">
      <img src="../../assets/logo.png" style="float:left;height:70px">
      <el-divider direction="vertical"></el-divider>
      <div class="word">
        科大国创项目管理系统
      </div>
      <div class="direction">
        <el-radio-group v-model="radio1">
          <el-radio-button label="工作台"></el-radio-button>
          <el-radio-button label="合同"></el-radio-button>
          <el-radio-button label="项目"></el-radio-button>
          <el-radio-button label="需求" ></el-radio-button>
          <el-radio-button label="缺陷"></el-radio-button>
          <el-radio-button label="PMO"></el-radio-button>
        
        </el-radio-group>
      </div>

      <div class="load">
        <i class="el-icon-user" style="font-size: 45px;" ></i>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link" >
             &ensp;用户<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">李森</el-dropdown-item>
            <el-dropdown-item command="e" divided>小明</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div class="target">
    <div class="line"></div>
        <el-menu  class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1" selected>需求看板</el-menu-item>
          <el-menu-item index="2">我的评审</el-menu-item>
          <el-menu-item index="3">需求跟踪矩阵</el-menu-item>
        </el-menu>

    </div>
  </div>

</template>

<script>
 export default {
    data () {
      return {
        radio1: '',
      };
    },
    methods:{
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>

<style >
.title{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;

}
.target{
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  height: 50px;
  /* background-color: green; */
}



.el-divider--vertical {
    display: inline-block;
    width: 1px;
    height: 4.5em;
    position: absolute;
    left: 70px;
}
.word{
    position: absolute;
    font-size: x-large;
    left: 100px;
    top: 20px;
}

.direction{
  position: absolute;
  left: 700px;
  top: 0;
  height: 100%;
  width: 427px;
  background-color:whitesmoke ;
}

.el-radio-button__inner, .el-radio-group {
  line-height: 45px;
  border:none;
  outline:none;
}

.el-radio-button:first-child .el-radio-button__inner {
  border-left: 1px solid white;

}
.load{
  position: absolute;
  right: 20px;
  width:170px;
  top: 20px;
  height: 70px;
  /* background-color: red; */
}
 .el-dropdown-link{
    cursor: pointer;
    color: #409EFF;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.el-dropdown {
    font-size: 19px;
    top: -10px;
}
</style>
