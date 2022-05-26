<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item" pane>
          <label class="layui-form-label">案号 </label>
          <div class="layui-input-block">
            <input type="text" v-model="data.court_number" @blur="courtNumChange()" placeholder="请输入案号"
                   autocomplete="on" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item" pane>
          <label class="layui-form-label ">立案时间</label>
          <div class="layui-input-block ">
            <input type="text" id="filing_time"  placeholder="请输入立案时间" autocomplete="off"
                   class="layui-input">
          </div>
        </div>
        <div class="layui-form-item" pane>
          <label class="layui-form-label">开庭时间</label>
          <div class="layui-input-block">
            <input type="text"  id="court_time" required lay-verify="required"
                   placeholder="请输入开庭时间"
                   autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item" pane>
          <label class="layui-form-label layui-form-required">开庭地点</label>
          <div class="layui-input-block">
            <input type="text" v-model="data.court_place" lay-verify="required" placeholder="请输入开庭地点"
                   class="layui-input">
          </div>
        </div>
        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter">
            审判长
          </div>
          <div class="layui-input-block ">
            <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
              <input type="text" v-model="data.chief_judge[0].name" placeholder="审判长姓名" autocomplete="off"
                     class="layui-input" style="width: 90%;float: left;" @blur="judgeChange('chief_judge',0)">
              <button @click="add_component('chief_judge')" type="button"
                      class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text" style="float: right;">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>


          <!--        -->
          <template v-for="(item, index) in data.chief_judge.slice(1)" :key='index'>

            <div class="layui-input-block myinput-block">
              <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
                <input type="text" v-model="data.chief_judge[index+1].name" placeholder="审判长姓名" autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;" @blur="judgeChange('chief_judge',index+1)">
                <button @click="delete_component('chief_judge',index+1)" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>

          </template>

        </div>


        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter">
            审判员
          </div>

          <div class="layui-input-block ">
            <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
              <input type="text" v-model="data.judge[0].name" placeholder="审判员姓名" autocomplete="off" class="layui-input"
                     style="width: 90%;float: left;" @blur="judgeChange('judge',0)">
              <button @click="add_component('judge')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text" style="float: right;">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
          <template v-for="(item, index) in data.judge.slice(1)" :key='index'>
            <div class="layui-input-block myinput-block">
              <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
                <input type="text" v-model="data.judge[index+1].name" placeholder="审判员姓名" autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;" @blur="judgeChange('judge',index+1)">
                <button @click="delete_component('judge',index+1)" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
          </template>
        </div>
        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter">
            陪审员
          </div>

          <div class="layui-input-block ">
            <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
              <input type="text" v-model="data.juror[0].name" placeholder="陪审员姓名" autocomplete="off" class="layui-input"
                     style="width: 90%;float: left;" @blur="judgeChange('juror',0)">
              <button @click="add_component('juror')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text" style="float: right;">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
          <template v-for="(item, index) in data.juror.slice(1)" :key='index'>
            <div class="layui-input-block myinput-block">
              <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
                <input type="text" v-model="data.juror[index+1].name" placeholder="陪审员姓名" autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;" @blur="judgeChange('juror',index+1)">
                <button @click="delete_component('juror',index+1)" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
          </template>
        </div>


        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter">
            人民陪审员
          </div>

          <div class="layui-input-block ">
            <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
              <input type="text" v-model="data.people_juror[0].name" placeholder="人民陪审员姓名" autocomplete="off" class="layui-input"
                     style="width: 90%;float: left;" @blur="judgeChange('people_juror',0)">
              <button @click="add_component('people_juror')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text" style="float: right;">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
          <template v-for="(item, index) in data.people_juror.slice(1)" :key='index'>
            <div class="layui-input-block myinput-block">
              <div class="layui-input-inline " style="width: 100%; margin-left:0px;">
                <input type="text" v-model="data.people_juror[index+1].name" placeholder="人民陪审员姓名" autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;" @blur="judgeChange('people_juror',index+1)">
                <button @click="delete_component('people_juror',index+1)" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
          </template>
        </div>


        <div class="layui-form-item" pane>
          <div class="layui-form-label ">
            书记员
          </div>
          <div class="layui-input-block">
            <input type="text" v-model="courtClerkName" name="courtClerk" placeholder="书记员姓名" autocomplete="off"
                   class="layui-input">
          </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter">
            案由
          </div>
          <div class="layui-input-block">
            <textarea required v-model="data.court_cause" name="courtCause" placeholder="请输入案由"
                      class="layui-textarea"></textarea>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import Datepicker from 'vuejs3-datepicker';
export default {
  data() {
    var data = {
      filing_time: "",
      court_time: "",
      court_place: '',
      chief_judge: [{name: ""}],
      judge: [{name: ""}],
      juror: [{name: ""}],
      people_juror:[{name: ""}],
      court_clerk: '',
      court_number: '',
      court_cause: ''
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "BasicInfo" in wholeItem) {
      data = JSON.parse(window.localStorage.getItem(this.$store.state.court_number)).BasicInfo;
    } else if (window.localStorage.getItem("CourtTemp") != null) {
      data = JSON.parse(window.localStorage.getItem("CourtTemp"))
    }
    return {data: data}
  },
  // components: {
  //   Datepicker
  // },
  mounted() {
    window.layui.use('laydate', () => {
      var laydate = window.layui.laydate;
      laydate.render({
        elem: '#filing_time', //指定元素
        type: 'datetime',
        format: 'yyyy年MM月dd日', //可任意组合
        value: this.data.filing_time,
        done: (value) => {
          this.data.filing_time = value
          // console.log(value,this); //得到日期生成的值，如：2017-08-18
        }
      });
      laydate.render({
        elem: '#court_time',
        type: 'datetime',
        value: this.data.court_time,
        format: 'yyyy年MM月dd日 HH时mm分', //可任意组合
        done: (value) => {
          this.data.court_time = value
          // console.log(value); //得到日期生成的值，如：2017-08-18
        }
      });
    });
  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        case "chief_judge":
          //这里是值对应的处理
          this.$store.commit('add_components', ['chief_judge'])
          this.data.chief_judge.push({name: ""})
          break
        case "judge":
          //这里是值对应的处理
          this.$store.commit('add_components', ['judge'])
          this.data.judge.push({name: ""})
          break
        case "juror":
          //这里是值对应的处理
          this.$store.commit('add_components', ['juror'])
          this.data.juror.push({name: ""})
          break
        case "people_juror":
          this.$store.commit('add_components', ['people_juror'])
          this.data.people_juror.push({name: ""})
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "chief_judge":
          //这里是值对应的处理
          this.$store.commit('delete_components', ['chief_judge', index])
          this.data.chief_judge.splice(index, 1)
          break
        case "judge":
          //这里是值对应的处理
          this.$store.commit('delete_components', ['judge', index])
          this.data.judge.splice(index, 1)
          break
        case "juror":
          //这里是值对应的处理
          this.$store.commit('delete_components', ['juror', index])
          this.data.juror.splice(index, 1)
          break
        case "people_juror":
          this.$store.commit('delete_components', ['people_juror', index])
          this.data.people_juror.splice(index, 1)
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    updateQueryStringParameter(uri, key, value) {
      if (!value) {
        return uri;
      }
      var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
      var separator = uri.indexOf('?') !== -1 ? "&" : "?";
      if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
      } else {
        return uri + separator + key + "=" + value;
      }
    },
    courtNumChange() {
      if (this.data.court_number !="" &&this.$store.state.court_number == "") {
        // localStorage.setItem(this.data.court_number,JSON.stringify({BasicInfo:this.data}))
        localStorage.setItem(this.data.court_number, JSON.stringify({
          BasicInfo: this.data,
          PlaintiffItems: [],
          DefendantItems: []
        }))
        localStorage.removeItem("CourtTemp")
      } else if (this.data.court_number != this.$store.state.court_number) {// 在已有案号的前提下修改案号，将之前的案号数据拷贝至新的 localstorage ，同时删除旧的
        var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
        if (wholeItem != null && "BasicInfo" in wholeItem) {
          wholeItem.BasicInfo = this.data
          localStorage.setItem(this.data.court_number, JSON.stringify(wholeItem))
          console.log(this.$store.state.court_number)
          localStorage.removeItem(this.$store.state.court_number)
        }
      }

      this.$store.commit("setCourtNum", this.data.court_number)
      var newurl = this.updateQueryStringParameter(window.location.href.split("#")[0], 'CourtNum', this.data.court_number);
      window.history.replaceState({
        path: newurl
      }, '', newurl);
    },
    judgeChange(type, index) {
      switch (type) {
        case "chief_judge":
          //这里是值对应的处理
          this.$store.commit('judgeChange', ['chief_judge', index, this.data.chief_judge[index].name])
          break
        case "judge":
          //这里是值对应的处理
          this.$store.commit('judgeChange', ['judge', index, this.data.judge[index].name])
          break
        case "juror":
          //这里是值对应的处理
          this.$store.commit('judgeChange', ['juror', index, this.data.juror[index].name])
          break
        case "people_juror":
          this.$store.commit('judgeChange', ['people_juror', index,this.data.people_juror[index].name])
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    }

  },
  watch: {
    data: {
      handler() {
        var wholeItem
        if (this.$store.state.court_number == "") {
          // window.layui.layer.msg('请优先完善基本信息表格');
          wholeItem = JSON.parse(localStorage.getItem("CourtTemp"))
          wholeItem = this.data
          localStorage.setItem("CourtTemp", JSON.stringify(wholeItem))
        } else {
          wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          if (wholeItem != null) {
            wholeItem.BasicInfo = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    }
  },
  computed: {
    courtClerkName: {
      get() {
        return this.$store.state.court_clerk
      },
      set(value) {
        this.data.court_clerk = value
        this.$store.commit('updateCourt_Clerk', value)
      }
    }
  }
}
</script>
