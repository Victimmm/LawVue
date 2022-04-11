<template>
  <div class="layui-card">
    <div class="layui-card-body>">
      <form class="layui-form" action="">
        <div class="layui-form-item">
          <label class="layui-form-label layui-form-required">立案时间</label>
          <div class="layui-input-block">
            <input type="text" v-model="data.filing_time" id="filing_time" required lay-verify="required" placeholder="请输入立案时间" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label layui-form-required">开庭时间</label>
          <div class="layui-input-block">
            <input type="text" v-model="data.court_time" id="court_time" required lay-verify="required" placeholder="请输入开庭时间"
            autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label layui-form-required">开庭地点</label>
          <div class="layui-input-block">
            <input type="text" v-model="data.court_place" lay-verify="required" placeholder="请输入开庭地点"
            class="layui-input">
          </div>
        </div>

        <div class="layui-form-item">
          <label class="layui-form-label layui-form-required">审判长</label>
          <div class="layui-input-inline">
            <input type="text"  v-model="data.chief_judge[0].name" lay-verify="required" placeholder="审判长姓名" autocomplete="off"
            class="layui-input">
          </div>
          <div class="layui-input-inline">
            <div class="layui-btn-group">
              <button @click="add_component('chief_judge')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
              data-type="text">
              <i class="layui-icon">&#xe654;</i>
            </button>
          </div>
        </div>
      </div>

      <template v-for="(item, index) in data.chief_judge.slice(1)" :key='index'>
        <div class="layui-form-item">
          <label class="layui-form-label layui-form-required">&nbsp;</label>
          <div class="layui-input-inline">
            <input type="text"  v-model="data.chief_judge[index+1].name" lay-verify="required" placeholder="审判长姓名" autocomplete="off"
            class="layui-input">
          </div>
          <div class="layui-input-inline">
            <div class="layui-btn-group">
              <button @click="delete_component('chief_judge',index+1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
              data-type="text">
              <i class="layui-icon">&#xe640;</i>
            </button>
          </div>
        </div>
      </div>
    </template>

    <div class="layui-form-item">
      <label class="layui-form-label layui-form-required">审判员 </label>
      <div class="layui-input-inline">
        <input type="text"  v-model="data.judge[0].name"  lay-verify="required" placeholder="审判员姓名" autocomplete="off"
        class="layui-input">
      </div>
      <div class="layui-input-inline">
        <div class="layui-btn-group">
          <button v-on:click="add_component('judge')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
          data-type="text">
          <i class="layui-icon">&#xe654;</i>
        </button>
      </div>
    </div>
  </div>

  <template v-for="(item, index) in data.judge.slice(1)" :key='index'>
    <div class="layui-form-item">
      <label class="layui-form-label layui-form-required">&nbsp;</label>
      <div class="layui-input-inline">
        <input type="text"  v-model="data.judge[index+1].name" lay-verify="required" placeholder="审判员姓名" autocomplete="off"
        class="layui-input">
      </div>
      <div class="layui-input-inline">
        <div class="layui-btn-group">
          <button @click="delete_component('judge',index+1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
          data-type="text">
          <i class="layui-icon">&#xe640;</i>
        </button>
      </div>
    </div>
  </div>
</template>

<div class="layui-form-item">
  <label class="layui-form-label ">陪审员</label>
  <div class="layui-input-inline">
    <input type="text"  v-model="data.juror[0].name" lay-verify="required" placeholder="陪审员姓名" autocomplete="on"
    class="layui-input">
  </div>
  <div class="layui-input-inline">
    <div class="layui-btn-group">
      <button v-on:click="add_component('juror')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
      data-type="text">
      <i class="layui-icon">&#xe654;</i>
    </button>
  </div>
</div>
</div>

<template v-for="(item, index) in data.juror.slice(1)" :key='index'>
  <div class="layui-form-item">
    <label class="layui-form-label layui-form-required">&nbsp;</label>
    <div class="layui-input-inline">
      <input type="text"  v-model="data.juror[index+1].name" lay-verify="required" placeholder="陪审员姓名" autocomplete="off"
      class="layui-input">
    </div>
    <div class="layui-input-inline">
      <div class="layui-btn-group">
        <button @click="delete_component('juror',index+1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
        data-type="text">
        <i class="layui-icon">&#xe640;</i>
      </button>
    </div>
  </div>
</div>
</template>


<div class="layui-form-item">
  <label class="layui-form-label layui-form-required">书记员 </label>
  <div class="layui-input-inline">
    <input type="text"  v-model="data.court_clerk" name="courtClerk" lay-verify="required" placeholder="书记员姓名" autocomplete="on"
    class="layui-input">
  </div>
</div>
<div class="layui-form-item">
  <label class="layui-form-label layui-form-required">案号 </label>
  <div class="layui-input-block">
    <input type="text"  v-model="data.court_number" name="courtNumber" lay-verify="required" placeholder="请输入案号" autocomplete="on"
    class="layui-input">
  </div>
</div>
<div class="layui-form-item">
  <label class="layui-form-label layui-form-requireds">案由 </label>
  <div class="layui-input-block">
    <textarea  required v-model="data.court_cause" name="courtCause" lay-verify="required" placeholder="请输入案由" class="layui-textarea"></textarea>
  </div>
</div>

<div class="layui-form-item">
  <div class="layui-input-block">
    <button class="layui-btn" v-on:click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
  </div>
</div>

</form>
</div>
</div>

</template>

<script>

var data;

if(localStorage.getItem("BasicInfo")==null)
{  
  data={
    filing_time:new Date(),
    court_time:new Date(),
    court_place:'',
    chief_judge:[{name:""}],
    judge:[{name:""}],
    juror:[{name:""}],
    court_clerk:'',
    court_number:'',
    court_cause:''
  };
}
else 
  data=JSON.parse(localStorage.getItem("BasicInfo"));


export default {
  data() {
    return {
      data:data
    } 
  },
  components: {
    // AddJudgeChief
    
  },
  mounted(){
    window.layui.use('laydate', function(){
      var laydate = window.layui.laydate;
      laydate.render({
              elem: '#filing_time' //指定元素
              ,format: 'yyyy年MM月dd日' //可任意组合
            });
      laydate.render({
        elem: '#court_time'
        ,type: 'datetime'
              ,format: 'yyyy年MM月dd日 HH时mm分' //可任意组合
            });
    });

    // window.layui.use(['form','laydate'], function(){

    //       // var element = window.layui.element

    //     })
  },
  methods: {

    add_component(datatype) {
      switch(datatype){
        case "chief_judge":
          //这里是值对应的处理
          this.data.chief_judge.push({name:""})
          break
          case "judge":
          //这里是值对应的处理
          this.data.judge.push({name:""})
          break
          case "juror":
          //这里是值对应的处理
          this.data.juror.push({name:""})
          break
          default:
          //这里是没有找到对应的值处理
          break
        }
      },
      delete_component(datatype,index){
        switch(datatype){
          case "chief_judge":
          //这里是值对应的处理
          this.data.chief_judge.splice(index,1)
          break
          case "judge":
          //这里是值对应的处理
          this.data.judge.splice(index,1)
          break
          case "juror":
          //这里是值对应的处理
          this.data.juror.splice(index,1)
          break
          default:
          //这里是没有找到对应的值处理
          break
        }
      },
      save_localstorage(){
        localStorage.setItem(this.data.court_number,JSON.stringify(this.data))
      }
    }
  }
</script>
