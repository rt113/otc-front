<template>
  <div class="middle">
    <div class="body">
      <div class="bleft">
        <div class="bleft-top">
          <div class="word1">需求跟踪</div>
          <div class="check">
            <el-checkbox v-model="checked2" disabled>全部项目</el-checkbox>
          </div>
        </div>
        <div class="bleft-bottom">
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
      <div class="bright">

        <div class="bar">
          <div class="bright1">
            <el-menu  class="el-menu-demo3" mode="horizontal" style=" border-bottom: none;" >
              <template>
                <el-menu-item index="29" @click="refreshY(-1)">
                  全部需求
                </el-menu-item>
                <el-menu-item index="30" @click="refreshY(optionStatus['0'])">
                  未开始需求
                </el-menu-item>
                <el-menu-item index="31" @click="refreshY(optionStatus['1'])">
                  已开始需求
                </el-menu-item>
                <el-menu-item index="32" @click="refreshY(optionStatus['2'])">
                  已完成需求
                </el-menu-item>
                <el-menu-item index="33" @click="refreshY(optionStatus['3'])">
                  已取消需求
                </el-menu-item>
              </template>
            </el-menu>
          </div>
          <div class="bright2">
            <el-button type="primary" @click="dialogFormVisible = true">新增需求</el-button>

            <el-dialog title="新增需求" :visible.sync="dialogFormVisible" :before-close="handleClose" >
              <el-form :model="textForm" class="el-input--small" size="mini">

                <el-row style="padding-bottom: 0">
                  <el-col span="12">
                    <el-form-item label="所属合同" :label-width="formLabelWidth" :required="true" >
                      <el-select v-model="textForm.contract" placeholder="请选择" class="form-select">
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col span="8">
                    <el-form-item label="所属项目" :label-width="formLabelWidth" :required="true">
                      <el-select v-model="textForm.project" placeholder="请选择" class="form-select">
                        <el-option label="item.name" value="item.id" v-for="item in leftMenu" :key="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col span="4">
                    <el-form-item label="期数" label-width="50px">
                      <el-select v-model="textForm.periods" placeholder="请选择" class="form-select">
                        <el-option label="item+'期'" value="item" v-for="item in 10" :key="item"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row>

                  <el-col span="12">
                    <el-form-item label="需求来源" :label-width="formLabelWidth" :required="true">
                      <el-select v-model="textForm.source" placeholder="请选择" class="form-select">
                        <el-option label="n" value="shanghai"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <el-col span="12">
                    <el-form-item label="来源备注" :label-width="formLabelWidth" >
                      <el-input v-model="textForm.remark" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-form-item label="优先级" :label-width="formLabelWidth" :required="true">
                  <el-select v-model="textForm.priority" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                  </el-select>
                </el-form-item>

                <el-row>
                  <el-col span="12">
                    <el-form-item label="需求名称" :label-width="formLabelWidth" :required="true">
                      <el-input v-model="textForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>

                  <el-col span="12">
                    <el-form-item label="计划工时" :label-width="formLabelWidth">
                      <el-input v-model="textForm.hour" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-form-item label="附件" :label-width="formLabelWidth">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button size="small"><i class="el-icon-plus"></i>点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </el-form-item>

                <el-form-item label="评审人" :label-width="formLabelWidth">
                  <el-select v-model="textForm.group" placeholder="请选择" class="form-select">
                    <el-option label="区域一" value="shanghai"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="需求描述" :label-width="formLabelWidth" :required="true">
                  <Editoritem ref="editorOne" v-model="detail"  @change="change"></Editoritem>
                </el-form-item>

                <el-form-item label="验收标准" :label-width="formLabelWidth">
                  <Editoritem ref="editorTwo" v-model="detail"  @change="change"></Editoritem>
                </el-form-item>
              </el-form>

              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                <el-button @click="dialogFormVisible = false">取 消</el-button>
              </div>
            </el-dialog>

          </div>
        </div>
        <div class="bright3">
          <el-table
            :cell-style="setCellColor"
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            style=" width: 100%">
            <template>
              <el-table-column v-for="(item,index) in tableColumn"
                               :key="index"
                               :prop="item.prop"
                               :label="item.label"
                               :width="item.width"
              >
              </el-table-column>
            </template>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-link icon="el-icon-circle-check" style="font-size: 20px;"></el-link>
                <el-link icon="el-icon-remove-outline"  style="font-size: 20px;"></el-link>
                <el-link icon="el-icon-edit"  style="font-size: 20px;"></el-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="bright4">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="tableData.length">
          </el-pagination>
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
          prop:"name",
          label:"需求名称",
          width:"250"
        
        },{
          prop:"owner",
          label:"所属项目",
          width:"200"
        },{
          prop:"presenter",
          label:"提出人",
          width:"130"
        },{
          prop:"date",
          label:"提出时间",
          width:"200"
        },{
          prop:"source",
          label:"需求来源",
          width:"180"
        },{
          prop:"state",
          label:"状态",
          width:"100"
        },{
          prop:"planetime",
          label:"计划工时",
          width:"180"
        }
      ],  // 表格每列的定义
      optionData: '', // 是某个项目的需求
      leftMenu:[],  // 是所有项目列表，定时查询
      optionStatus:{
        0:'未开始',
        1:'已开始',
        2:'已完成',
        3:'已取消'
      },  // 需求的状态,有 未开始，已开始，已完成，已取消
      dialogFormVisible: false,
      //新增需求的form表单
      textForm: {
        contract:'',
        project:'',
        periods:'',
        source:'',
        remark:'',
        priority:'',
        name:'',
        hours:'',
        group:''
      },
      //文件上传列表
      fileList: [],
      //新增需求表单label宽
      formLabelWidth: '80px',
      //wangeditor
      detail:"",
      //表格分页
      currentPage1: 1,
      pageSize: 10,
      currentPage: 1

    };
  },
  methods: {
    
        setCellColor({row,column,rowIndex,columnIndex}){

        if(columnIndex===0){

            return 'color:#239ce6;';

        }

    },
    getAllList(){     // 获取所有项目的需求
      this.$http.get("otc/list/demands")
        .then(res => {
          this.tableData = res.data.array;
          this.tableData = this.Resort(this.tableData);
        })
        .catch(err => {
          alert(err)
        });
    },
    getdataList(vid,vstatus){   // 获取某个项目的需求
      var that = this;
      debugger;
      this.$http.get("otc/list/demanding",{
        params:{
          pid: vid,
          dstatus: vstatus
        }
      })
        .then(res => {
          that.tableData = res.data.array;
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
    //新增需求关闭
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //wangeditor
    change(val) {
      console.log(val)
    },

    //上传
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  },
  created() {    // 创建时先获取所有的项目的所有需求
    this.getLeftMenu();
    this.getAllList();
  },

  mounted() {
  },

};

</script>

<style scoped>
.el-table th {
    background-color: #F5F5F5;

}
.el-menu-item {
    width: fit-content;
}
 .el-menu {
      border-right: 0;
    }
.el-menu-demo3.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #409EFF;
    color: #409EFF;
}
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
   background-color: 		#F8F8FF;
}
.body{
  position: absolute;
  top:30px;
  left: 20px;
  right:40px;
  bottom: 30px;
  background-color: white;
}
.bright{
  position: absolute;
  width:80%;
  right: 0;
  top: 0;
  bottom: 0;
}

.bar{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10%;
}
.bright1{
  position: absolute;
  top: 20px;
  height: 10%;
  left:0;
  width: 40%;
  /* background-color: red; */
}
.bright2{
  position: absolute;
  font-size: 18px;
  top: 30px;
  height: 10%;
  right: 10px;
  width:130px;
  /* background-color: red; */
}
.bright3{
  position: absolute;
  top: 100px;
  height:90%;
  bottom: 60px;
  width:100%;
  /* background-color: red; */
}
.bright4{
  position: absolute;
  bottom: 5px;
  right: 10px;
  width: 15%;
  height: 48px;
  /* background-color: gold; */
}
.bleft{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 20%;
}

.bleft-top{
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
.bleft-bottom{
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
.form-select{
  width: 100%;
}
.el-dialog__header {
  border-bottom: 1px solid #e8e8e8;
}
</style>
