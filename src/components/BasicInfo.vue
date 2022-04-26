<template>
  <div class="layui-card">
    <div class="layui-card-body>">
      <form class="layui-form" action="">
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label layui-form-required">案号 </label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text"  v-model="data.court_number" name="courtNumber" lay-verify="required" placeholder="请输入案号" autocomplete="on"
                     class="layui-input">
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label">立案时间</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" v-model="data.filing_time" id="filing_time" required lay-verify="required" placeholder="请输入立案时间" autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label">开庭时间</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" v-model="data.court_time" id="court_time" required lay-verify="required" placeholder="请输入开庭时间"
                     autocomplete="off" class="layui-input">
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label layui-form-required">开庭地点</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text" v-model="data.court_place" lay-verify="required" placeholder="请输入开庭地点"
              class="layui-input">
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label layui-form-required">审判长</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text"  v-model="data.chief_judge[0].name" placeholder="审判长姓名" autocomplete="off"
                     class="layui-input">
            </div>
          </div>
          <div class="layui-col-md1">
            <button @click="add_component('chief_judge')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                    data-type="text">
              <i class="layui-icon">&#xe654;</i>
            </button>
          </div>
      </div>
<!--        -->
      <template v-for="(item, index) in data.chief_judge.slice(1)" :key='index'>
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <label class="layui-form-label layui-form-required">审判长</label>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="text"  v-model="data.chief_judge[index+1].name" placeholder="审判长姓名" autocomplete="off"
                     class="layui-input">
            </div>
          </div>
          <div class="layui-col-md1">
            <button @click="delete_component('chief_judge',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                    data-type="text">
              <i class="layui-icon">&#xe640;</i>
            </button>
          </div>
        </div>
    </template>

    <div class="layui-form-item">
      <div class="layui-col-md2">
        <div class="layui-input-block">
          <label class="layui-form-label">审判员 </label>
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <input type="text"  v-model="data.judge[0].name" placeholder="审判员姓名" autocomplete="off" class="layui-input">
        </div>
      </div>
      <div class="layui-col-md1">
        <button @click="add_component('judge')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
        data-type="text">
        <i class="layui-icon">&#xe654;</i>
        </button>
      </div>
    </div>

  <template v-for="(item, index) in data.judge.slice(1)" :key='index'>
    <div class="layui-form-item">
      <div class="layui-col-md2">
        <div class="layui-input-block">
          <label class="layui-form-label">审判员 </label>
        </div>
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <input type="text"  v-model="data.judge[index+1].name" placeholder="审判员姓名" autocomplete="off" class="layui-input">
        </div>
      </div>
      <div class="layui-col-md1">
        <button @click="delete_component('judge',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                data-type="text">
          <i class="layui-icon">&#xe640;</i>
        </button>
      </div>
    </div>
</template>

<div class="layui-form-item">
  <div class="layui-col-md2">
    <div class="layui-input-block">
      <label class="layui-form-label ">陪审员</label>
    </div>
  </div>
  <div class="layui-col-md7">
    <div class="layui-input-block">
      <input type="text"  v-model="data.juror[0].name" placeholder="陪审员姓名" autocomplete="on"
      class="layui-input">
    </div>
  </div>
  <div class="layui-col-md1">
    <div class="layui-btn-group">
      <button @click="add_component('juror')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
      data-type="text">
      <i class="layui-icon">&#xe654;</i>
    </button>
  </div>
  </div>
</div>

<template v-for="(item, index) in data.juror.slice(1)" :key='index'>
  <div class="layui-form-item">
    <div class="layui-col-md2">
      <div class="layui-input-block">
        <label class="layui-form-label ">陪审员</label>
      </div>
    </div>
    <div class="layui-col-md7">
      <div class="layui-input-block">
        <input type="text"  v-model="data.juror[index+1].name" placeholder="陪审员姓名" autocomplete="on"
               class="layui-input">
      </div>
    </div>
    <div class="layui-col-md1">
      <div class="layui-btn-group">
        <button @click="delete_component('juror',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                data-type="text">
          <i class="layui-icon">&#xe640;</i>
        </button>
      </div>
    </div>
  </div>
</template>


<div class="layui-form-item">
  <div class="layui-col-md2">
    <div class="layui-input-block">
      <label class="layui-form-label">书记员 </label>
    </div>
  </div>
  <div class="layui-col-md7">
    <div class="layui-input-block">
      <input type="text"  v-model="data.court_clerk" name="courtClerk" placeholder="书记员姓名" autocomplete="on"
      class="layui-input">
    </div>
  </div>
</div>

<div class="layui-form-item">
  <div class="layui-col-md2">
    <div class="layui-input-block">
      <label class="layui-form-label layui-form-requireds">案由 </label>
    </div>
  </div>
  <div class="layui-col-md7">
    <div class="layui-input-block">
      <textarea  required v-model="data.court_cause" name="courtCause" placeholder="请输入案由" class="layui-textarea"></textarea>
    </div>
  </div>
</div>
<div class="layui-form-item">
  <div class="layui-input-block">
    <button class="layui-btn" @click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
  </div>
</div>
</form>
</div>
</div>
</template>

<script>
export default {
  data() {
    var data = {
      filing_time: new Date(),
      court_time: new Date(),
      court_place: '',
      chief_judge: [{name: ""}],
      judge: [{name: ""}],
      juror: [{name: ""}],
      court_clerk: '',
      court_number: '',
      court_cause: ''
    };
    if (this.$store.state.court_number != "") {
      data = JSON.parse(window.localStorage.getItem(this.$store.state.court_number)).BasicInfo;
    } else if (window.localStorage.getItem("CourtTemp") != null) {
      data = JSON.parse(window.localStorage.getItem("CourtTemp"))
    }
    return {data: data}
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
    updateQueryStringParameter(uri, key, value) {
      if(!value) {
        return uri;
      }
      var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
      var separator = uri.indexOf('?') !== -1 ? "&" : "?";
      if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
      }
      else {
        return uri + separator + key + "=" + value;
      }
    },
      save_localstorage(){
        this.$store.commit("setCourtNum",this.data.court_number)
        localStorage.setItem(this.data.court_number,JSON.stringify({BasicInfo:this.data,PlaintiffItems:[],DefendantItems:[]}))
        var newurl = this.updateQueryStringParameter(window.location.href, 'CourtNum', this.data.court_number);
        window.history.replaceState({
          path: newurl
        }, '', newurl);
      }

    },
  watch: {
    data:{
      handler() {
        var wholeItem
        if (this.$store.state.court_number == "") {
          // window.layui.layer.msg('请优先完善基本信息表格');

          wholeItem = JSON.parse(localStorage.getItem("CourtTemp"))
          wholeItem=this.data
          localStorage.setItem("CourtTemp", JSON.stringify(wholeItem))
        }
        else{
          wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          wholeItem.BasicInfo=this.data
          localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
        }
      },
      deep: true
    }
  }
  }
</script>
