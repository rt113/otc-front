<template>
  <div>
    <div class="border"></div>
    <div class="target">
      <el-menu class="el-menu-demo2"  mode="horizontal" style=" border-bottom: none;">
        <el-menu-item index="1">需求看板</el-menu-item>
        <el-menu-item index="2" @click="audit">我的评审</el-menu-item>
        <el-menu-item index="3" @click="martix">需求跟踪矩阵</el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
  </div>


</template>

<script>
  export default {
    methods:{
      audit(){
        this.$router.push({name:'Audit'});
      },
      martix(){
        this.$router.push({name:'Martix'});
      }
    }
  }
</script>

<style>
.el-menu-demo2.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #409EFF;
    color: #409EFF;
}
.border{
 position: absolute;
  top: 6.5%;
  left: 0;
  right: 0;
  width: 100%;
  height: 1.75%;
  background-color: #F8F8FF;
}
.target{
  position: absolute;
  top: 8%;
  left: 0;
  right: 0;
  width: 100%;
  height: 5%;
}

</style>
