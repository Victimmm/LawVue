<template>
  <!--权利告知-->
  <div>
    <el-radio v-model="radio1" label="1" size="large">Option 1</el-radio>
    <el-radio v-model="radio1" label="2" size="large">Option 2</el-radio>
  </div>
  <form class="layui-form">
  <h1 style="text-align:center">权利告知（带*为必填项）</h1>
  <div class="layui-fluid">
    <div class="layui-form-item">
      <div class="layui-row">
        <div class="layui-col-md1">
          <label>审判员</label>
        </div>
        <div class="layui-col-md11">
          <textarea name="ta1" type="text" class="layui-input " style="height: 200px;" >
审判员：依据《中华人民共和国民事诉讼法》的规定，当事人在法庭上享有下列权利：
1.原告有权承认、变更、放弃自己的诉讼请求，被告有权反驳原告的诉讼请求或提起反诉；
2.当事人有权申请回避；
3.当事人有权举证；
4.当事人有权辩论、有权请求法庭调解
当事人在享有上述权利的同时，负有以下义务：
1.当事人有依法行使诉讼权利的义务；
2.当事人有听从法庭指挥、遵守法庭纪律的义务；
3.当事人有如实陈述事实、如实举证的义务。
上述诉讼权利和义务双方是否听清？
          </textarea>
        </div>
      </div>
    </div>
    <div class="layui-form-item">
      <div class="layui-row">
        <div class="layui-col-md1">
          <label>原告</label>
        </div>
        <div class="layui-col-md11">
          <textarea type="text" class="layui-input" style="height: 50px;">听清楚了</textarea>
        </div>
      </div>
    </div>
    <div class="layui-form-item">
      <div class="layui-row">
        <div class="layui-col-md1">
          <label>被告</label>
        </div>
        <div class="layui-col-md11">
          <textarea type="text" class="layui-input" style="height: 50px;">听清楚了</textarea>
        </div>
      </div>
    </div>
    <div class="layui-form-item">
      <div class="layui-row">
        <div class="layui-col-md1">
          <label>审判员</label>
        </div>
        <div class="layui-col-md11">
            <textarea name="ta4" type="text" class="layui-input " style="height: 50px;">审判员：当事人对审判员和书记是否申请回避？</textarea>
        </div>
      </div>
    </div>
    <div class="layui-form-item">
      <div class="layui-row">
        <div class="layui-col-md1">
          <label>原告</label>
        </div>
        <div class="layui-col-md3">
          <div class="layui-form-item">
            <input type="radio" value="1" v-model="data.accuser_avoid" lay-filter="accuser_avoid" name="accuser_avoid" title="不申请回避" checked>
            <input type="radio" value="2" v-model="data.accuser_avoid" lay-filter="accuser_avoid" name="accuser_avoid" title="申请回避" >
          </div>
        </div>
      </div>
    </div>
    <div class="layui-form-item">
      <div class="layui-row">
        <div class="layui-col-md1">
          <label>被告</label>
        </div>
        <div class="layui-col-md3">
          <div class="layui-form">
            <input type="radio" value="1"  v-model="data.defendant_avoid" lay-filter="defendant_avoid" name="defendant_avoid" title="不申请回避" checked>
            <input type="radio" value="2"  v-model="data.defendant_avoid" lay-filter="defendant_avoid" name="defendant_avoid" title="申请回避" >
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="layui-form-item">
      <div class="layui-input-block">
        <button class="layui-btn" v-on:click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
      </div>
    </div>
  </form>
</template>

<script type="text/javascript" >
  var data;
  if(localStorage.getItem("right_inform")==null){
    data={
      accuser_avoid:'',
      defendantd_avoid:'',
    };
  }else
    data=JSON.parse(localStorage.getItem("right_inform"));
  // console.log(data)
export default {
  data(){
    return {data:data}
  },
  mounted(){
    window.layui.use('form', function(){
      // var element = window.layui.element
      var form = window.layui.form;
      form.on('radio(defendant_avoid)', function(value){
        data.defendant_avoid=value.value
      })
      form.on('radio(accuser_avoid)', function(value){
        data.accuser_avoid=value.value
      })
    })
  },
  methods:{

    save_localstorage(){
      localStorage.setItem('right_inform',JSON.stringify(this.data))
    }
  }
}
</script>

<style scoped>

</style>