<template>
    <div class="hello">
        <el-button type="primary" @click="dialogFormVisible = true" style="text-align:left">修改需求</el-button>
        <el-dialog title="变更申请" :visible.sync="dialogFormVisible" style="text-align:left" width="70%">
            <el-form :inline="true" :model="formInline" class="demo-form-inline" style="text-align:left">
                    <el-col :span="12">所属合同
                        <el-input v-model="pact" placeholder=" " size="mini" disabled="true" style="width:70%"></el-input>
                    </el-col>
                    <el-col :span="6">所属项目
                        <el-input v-model="item" placeholder=" OTC研发项目" disabled="true" 
                        style="width:50%" size="mini":required="true">
                        </el-input>
                    </el-col>
                    <el-cascader :options="options_time" v-model="time" @change="handleChange_time" placeholder="本期" size="mini" style="width:10%"></el-cascader>
                    <p></p>
                    <el-col :span="12">
                        需求来源
                        <el-cascader :options="options4" v-model="sourcedemand" @change="handleChange4" placeholder="市场" size="mini" style="width:70%"></el-cascader>&nbsp</el-col>
                    <el-col :span="11">来源备注
                        <el-input v-model="sourcenote" placeholder=" 咨询公司提出" style="width:70%" size="mini">
                        </el-input>
                    </el-col>
                    <br></br>
                    <p></p>
                    <el-col :span="12">
                        &nbsp&nbsp&nbsp优先级
                        <el-cascader :options="options_priority" v-model="priority" @change="handleChange_priority" placeholder="重要不紧急" size="mini" style="width:70%"></el-cascader>
                    </el-col>
                    <p></p>
                    <br></br>
                    <p></p>
                    <el-col :span="12">需求名称
                        <el-input v-model="demandname" placeholder="考核模块开发需求 " size="mini" disabled="true" style="width:70%"></el-input>
                    </el-col>
                    <el-col :span="11">计划工时
                        <el-input v-model="planetime" placeholder=" " size="mini" style="width:70%"></el-input>
                    </el-col>
                    <p></p><br></br>
                    <p></p>   
                    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 附件<el-button type="primary"plain size="small" >+点击上传</el-button>
                    不超过50M
                    </el-upload>
                    <p></p>
                        影响范围
                        <el-button v-on:click="handleClick1('primary','','','')" v-bind:type="v1"plain  size="small">需求</el-button>
                        <el-button v-on:click="handleClick2('','primary','','')" v-bind:type="v2"plain  size="small">验收</el-button>
                        <el-button v-on:click="handleClick3('','','primary','')" v-bind:type="v3"plain size="small">合同</el-button>
                        <el-button v-on:click="handleClick4('','','','primary')" v-bind:type="v4"plain size="small">沟通</el-button>
                    <p></p>
                    <div class="show1" v-show="show1">
                        <form :class="change">具体影响
                            <input type="radio" name="influence" value="yes">需求增加
                            <input type="radio" name="influence" value="no">需求减少
                        </form>
                    </div>
                    <div class="show2" v-show="show2">
                        <form :class="change">具体影响
                            <input type="radio" name="influence" value="yes">影响验收
                            <input type="radio" name="influence" value="no">不影响验收
                        </form>
                    </div>
                    <div class="show3" v-show="show3">
                        <form :class="change">具体影响
                            <input type="radio" name="influence" value="yes">影响合同
                            <input type="radio" name="influence" value="no">不影响合同
                        </form>
                    </div>
                    <div class="show4" v-show="show4">
                        <form :class="change">具体影响
                            <input type="radio" name="influence" value="yes">已充分沟通
                            <input type="radio" name="influence" value="no">未充分沟通
                        </form>
                    </div>
                    <p></p>
                    &nbsp&nbsp 评审组
                    <el-cascader :options="options_review" v-model="reviewgroup" 
                    @change="handleChange_review" placeholder="请选择" 
                    v-bind:disabled="input1" size="mini" style="width:60%"></el-cascader>              
                    <label for="label" @change="clickMe">
                        <input type="checkbox" id="label" v-model="ckeckVal" size="medium">需要评审
                    </label>                   
                    <p></p>                  
                    <p></p>
                    <el-col :span="22">
                        &nbsp&nbsp 抄送组
                        <el-cascader :options="options_copy" v-model="copy" 
                        @change="handleChange_copy" size="mini" style="width:90%"></el-cascader>
                    </el-col>
            <p></p><br></br><br></br>
                          <div >         
                            <div> 需求描述</div><editor ref="editorOne" v-model="one" @change="change"
                            style="width:85%"></editor>
                        </div>
                        <br></br>
                        <div display="online">
                            验收标准
                            <editor ref="editorTwo" v-model="two"label="sss"
                             @change="change" style="width:85%"></editor>
                        </div>                   
    
            
                 <!-- <el-form-item label="验收标准" :label-width="formLabelWidth"> </el-form-item>
                    <editor ref="editorTwo" v-model="detail" @change="change"style="width:85%"></editor>
               
                </el-form> -->
                
                    <el-button type="primary" @click="sure" style="text-align:right">确 定</el-button>
                    <el-col :span="20">
                        <el-button @click="dialogFormVisible = false" style="text-align:left">取 消</el-button>
                    </el-col>

                <!-- <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false" style="text-align:left">取 消</el-button>
                    <el-button type="primary" @click="sure" style="text-align:right">确 定</el-button>                   
                </div> -->
            </el-form>   
            </el-dialog>
        </div>    
</template>

<script>
import Editor from '@/components/wangEditor'
export default {
    name: 'demo3',
    components: { Editor },
    data() {
        return {
             detail: "",
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '240px',
            pact: '    ',
            item: 'OTC研发项目',
            input1: true,
            c1: '需求增加',
            s1: '需求减少',
            v1: 'primary',
            show1: false,
            show2: false,
            show3: false,
            show4: false,           
            ckeckVal: false,
            sourcenote:'',
            planetime:'',           
            options_copy: [
                {
                    value: '1',
                    label: 'components',
                    children: [{
                        value: '1',
                        label: 'input'
                    },
                    {
                        value: '2',
                        label: 'swipper'
                    }]

                },
                {
                    value: '2',
                    label: 'views'
                },
                {
                    value: '3',
                    label: 'actions'
                }
            ],




            options_time: [
                {
                    value: '2',
                    label: '本期'
                },
                {
                    value: '1',
                    label: '往年',
                    children: [{
                        value: '1',
                        label: '去年'
                    },
                    {
                        value: '2',
                        label: '前年'
                    }]
                },
            ],
            options_review: [
                {
                    value: '1',
                    label: '别人审评',
                    children: [{
                        value: '1',
                        label: '1组'
                    },
                    {
                        value: '2',
                        label: '2组'
                    }]

                },
                {
                    value: '2',
                    label: '自己审评'
                },
                {
                    value: '3',
                    label: '直接通过'
                }
            ],
        }
        fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
    
    },
    methods: {
        change(val) {
            console.log(val)
        },
        handleClick1: function(v1, v2, v3, v4) {
            this.show1 = true,
                this.show2 = false,
                this.show3 = false,
                this.show4 = false,
                this.v1 = v1; this.v2 = v2; this.v3 = v3; this.v4 = v4;
        },
        handleClick2: function(v1, v2, v3, v4) {
            this.show1 = false,
                this.show2 = true,
                this.show3 = false,
                this.show4 = false,
                this.v2 = v2; this.v1 = v1; this.v3 = v3; this.v4 = v4;
        },
        handleClick3: function(v1, v2, v3, v4) {
            this.show1 = false,
                this.show2 = false,
                this.show3 = true,
                this.show4 = false,
                this.v3 = v3; this.v1 = v1; this.v2 = v2; this.v4 = v4;
        },
        handleClick4: function(v1, v2, v3, v4) {
            this.show1 = false,
                this.show2 = false,
                this.show3 = false,
                this.show4 = true,
                this.v4 = v4; this.v1 = v1; this.v2 = v2; this.v3 = v3;
        },
        clickMe() {
            var that = this;
            if (that.ckeckVal) {             
                that.input1 = false;             
            } else {              
                that.input1 = true;
                that.reviewgroup = '请选择';
            }
        },      
        sure(){
            this.dialogFormVisible = false;
            // const formData = {
            //     options_time:this.options_time,
            //     options4:this.options4,
            //     sourcenote:this.sourcenote,
            //     options_priority:this.options_priority,
            //     planetime:this.planetime,
            //     influence:this.influence, influence1: this.influence1, influence2: this.influence2, influence3: this.influence3,
            //     options_copy:this.options_copy,
            //     editorOne:this.editorOne, editorTwo: this.editorTwo,

            // }
            // axios.post('/demand',formData).then(res =>{
            //     console.log(res)
            // })
            let that = this
            that.$axios.get("https://192.169.186.168/export/list/demands", {
                params: {
                        options_time:this.options_time,
                options4:this.options4,
                sourcenote:this.sourcenote,
                options_priority:this.options_priority,
                planetime:this.planetime,
                influence:this.influence, influence1: this.influence1, influence2: this.influence2, influence3: this.influence3,
                options_copy:this.options_copy,
                editorOne:this.editorOne, editorTwo: this.editorTwo,
                }
            }).then((res) => {
                console.log(res)
            });
        },      
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
            return this.$confirm(`确定移除 ${file.name}？`);
        }
    }
    
}
</script>


<style>

.w-e-toolbar {
    display: flex;
    padding: 0 6px;
    flex-wrap: wrap;
    position: relative;
    left: 7%;
    top:-20px;
}

.w-e-text-container {
    position: relative;
    height: 100%;
    left: 7%;
    top: -20px;
}

.bright2 {
    position: absolute;
    font-size: 18px;
    top: 30px;
    height: 10%;
    right: 10px;
    width: 130px;
    /* background-color: red; */
}


</style>
