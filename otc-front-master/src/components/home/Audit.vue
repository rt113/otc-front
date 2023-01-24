<template id="audit">
  <div class="middle">
    <div class="body">
      <div class="cleft">
        <div class="cleft-top">
          <div class="word1">需求评审结果</div>
          <div class="check">
            <el-checkbox v-model="checked2" disabled>全部项目</el-checkbox>
          </div>
        </div>
        <div class="cleft-bottom">
          <div class="word2">
            <el-col :span="12">
              <el-menu
                class="el-menu-vertical-demo">
                <!--                @open="handleOpen"-->
                <!--                @close="handleClose">-->
                <template>
                  <el-menu-item v-for="(item,index) in leftMenu"
                                :key="item.pid"
                                :index="index.toString()"
                                @click="refreshX(item.pid)">
                    <span slot="title">{{item.pname}}</span>
                  </el-menu-item>
                </template>
              </el-menu>
            </el-col>
          </div>
        </div>
      </div>
      <div class="cright">
        <div class="cright1">
          <el-menu  class="el-menu-demo" mode="horizontal">
            <template>
              <el-menu-item index="34" @click="refreshY(-1)">
                全部评审
              </el-menu-item>
              <el-menu-item index="35" @click="refreshY(optionStatus['0'])">
                今日评审
              </el-menu-item>
              <el-menu-item index="36" @click="refreshY(optionStatus['1'])">
                本周评审
              </el-menu-item>
              <el-menu-item index="37" @click="refreshY(optionStatus['2'])">
                本月评审
              </el-menu-item>
            </template>
          </el-menu>
        </div>
        <div class="cright2">
          <el-table
            :data="tableData"
            style="width: 100%">
            <template>
              <el-table-column v-for="(item,index) in tableColumn"
                               :key="index"
                               :prop="item.prop"
                               :label="item.label"
                               :width="item.width"
              >
              </el-table-column>
            </template>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Editoritem from '../wangEditor/Editoritem'
export default {
  components: {Editoritem},
  data() {
    return {
      checked2: true,
      choser:{
        x: -1,
        y: -1
      },
      tableData: [],  // 是所有项目的所有需求
      tableColumn:[
        {
          prop:"owner",
          label:"所属项目",
          width:"200"
        }, {
          prop:"name",
          label:"需求名称",
          width:"250"
        },{
          prop:"presenter",
          label:"提出人",
          width:"130"
        },{
          prop:"date",
          label:"提出时间",
          width:"200"
        },{
          prop:"",//这里确实不是确定是什么字段
          label:"标记",
          width:"100"
        },{
          prop:"",
          label:"结果",
          width:"180"
        }
      ],
      optionData: '', // 是某个项目的需求
      leftMenu:[],  // 是所有项目列表，定时查询
      optionStatus:{
        0:'今日评审',
        1:'本周评审',
        2:'本月评审',
      },  // 评审的时间,
    };
  },
  methods: {
    getAllList(){
      var that =this;   // 获取所有项目的需求
      this.$axios.get("otc/list/demands")
        .then(res => {
          that.tableData = res.data;
        })
        .catch(err => {
          alert(err)
        });
    },
    getdataList(vid,vstatus){   // 获取某个项目的需求
      var that = this;
      this.$axios.get("otc/list/demanding",{
        params:{
          pid: vid,
          dstatus: vstatus
        }
      })
        .then(res => {
          that.tableData = res.data;
          if (vid !== -1){
            for (let i = 0; i < that.tableData.length; i++) {
              that.$set(that.tableData[i],'owner',that.leftMenu.filter(value => value.pid===vid)[0].pname)
            }
          }
          that.tableData = that.Resort(this.tableData);
        })
        .catch(err => {
          debugger;
          alert(err)
        });
    },
    getLeftMenu(){    // 获取所有的项目
      this.$http.get("https://192.169.186.168/export/list/project")
        .then(res => {
          this.leftMenu = res.data.array;
        })
        .catch(err => console.log(err));
    },
    refreshX(id){
      this.choser.x = id;
      this.getdataList(this.choser.x,this.choser.y);
    },
    refreshY(status){
      this.choser.y = status;
      this.getdataList(this.choser.x,this.choser.y);
    },
    findKey(obj, value, compare = (a, b) => a === b){
      return Object.keys(obj).find(k => compare(obj[k], value))
    },
    Resort(arr){
      return arr.sort(this.sortRule)
    },
    sortRule(a,b){
      return this.findKey(this.optionStatus,a.state) - this.findKey(this.optionStatus,b.state);
    },

  },
  created() {    // 创建时先获取所有的项目的所有需求
    this.getLeftMenu();
    this.getAllList();
  },

  mounted() {
  },

  //wangeditor
  change(val) {
    console.log(val)
  },

};

</script>

<style>
.el-menu-item>.el-menu--horizontal{
  font-weight: bold;
  font-size: 14px;
  border-bottom: none;
}
.middle{
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 83%;
  background-color: #eeeeee;
}
.body{
  position: absolute;
  top:40px;
  left: 20px;
  right:40px;
  bottom: 30px;
  background-color: white;
}
.cright{
  position: absolute;
  width:80%;
  right: 0;
  top: 0;
  bottom: 0;
}
.cright1{
  position: absolute;
  top: 20px;
  height: 10%;
  left:0;
  width: 50%;
  /* background-color: red; */
}

.cright2{
  position: absolute;
  height:75%;
  bottom: 60px;
  width:100%;
  /* background-color: red; */
}
.cleft{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 20%;
}

.cleft-top{
  position: absolute;
  top: 0;
  height:13%;
  left: 0;
  width: 100%;
  /* background-color: red; */
}
.word1{
  position: absolute;
  left: 20px;
  top:30px;
  font-size: 18px;
  font-weight: 600;
}
.check{
  position: absolute;
  right: 10px;
  top:30px;
}
.el-checkbox__label {
  font-size: 20px;

}

.cleft-bottom{
  position: absolute;
  bottom: 0;
  height:85%;
  left: 25px;
  right:0;
  /* background-color: gold; */
}
.word2{
  position: absolute;
  text-align: left;
  font-size:18px;
  font-weight: 500;
}


</style>
