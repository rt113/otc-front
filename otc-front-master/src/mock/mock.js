const Mock = require('mockjs')

/*
 * 向后端进行查询，获取登录口令Token
 */

Mock.mock('http://localhost:8888/userLogin/login', 'post', function (option) {
  // 这里的option是请求的相关参数
  return Mock.mock({
    status: 200,
    code: 200,
    message: '@cword(2)'
  })
})

/*
 * 向后端查询所有的项目的所有需求
 */

Mock.mock('http://localhost:8888/otc/list/demands','get',function (){
  return Mock.mock({
    "array|5-15":[{
      "name": '@cword(4,9)'+'需求',                   // 需求名称
      "owner": '@ctitle(4,9)'+'项目',                 // 需求所属项目
      "presenter": '@cname',                         // 需求提出人
      "date": '@date',                               // 需求的提出时间
      "source|1": ["市场","客户"],                    // 需求来源
      "state|1": ["未开始","已开始","已完成","已取消"],   // 需求状态
      "planetime|2-128": 128                        // 需求需要工时
    }]
  })
})

/*
 * 向后端进行查询，通过项目ID（PID），查询出该项目所有的需求
 */

// 测试时改回demanding
Mock.mock(/http:\/\/localhost:8888\/otc\/list\/demanding/,'get',(options) => {
  console.log("options = ")
  console.log(options)
  return Mock.mock({
    "array|5-15":[{
    "name" : '@ctitle(4,9)'+'需求',
    "owner": '@ctitle(4,9)'+'项目',
    "presenter": '@cname',
    "date": '@date',
    "source|1": ["市场","客户"],
    "state|1": ["未开始","已开始","已完成","已取消"],
    "planetime|2-128": 128
    }]
  })
})

/*
 * 向后端进行查询，通过项目Status（PStatus），查询出所有项目该状态的需求
 */



/*
 * 向项目模板进行查询，获取项目的ID（PID）以及项目的名称NAME（PNAME）
 */



Mock.mock("https://192.169.186.168/export/list/project",'get',function (){
  return Mock.mock({
    "array|4-9":[{
      'pid': '@increment(0)',
      'pname':'@ctitle(5,17)'
    }]
  })
})
