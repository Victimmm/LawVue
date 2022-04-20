
<template>

  <div class="layui-card">
    <div class="layui-card-body>">
      <form class="layui-form">
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <div class="layui-form-label">审判员</div>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-input-block">
              <textarea type="text" class="layui-input">法庭调查结束，现在进行法庭辩论，首先原告发表辩论意见</textarea>
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-col-md3">
            <input type="text" v-model="data.argued_accuser[0].argue_accuser"   placeholder="原告" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-col-md6">
            <input type="text" v-model="data.argued_accuser[0].argue_accuser_argue"   placeholder="原告辩论意见" autocomplete="off"
                   class="layui-input" style="margin-left:12px">
          </div>
          <div class="layui-col-md1">
            <button @click="add_component('argued_accuser')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                    data-type="text">
              <i class="layui-icon">&#xe654;</i>
            </button>
          </div>
        </div>

        <div class="layui-form-item">
          <div class="layui-col-md3">
            <input type="text" v-model="data.argued_defendant[0].argue_defendant"  placeholder="被告" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-col-md6">
            <input type="text" v-model="data.argued_defendant[0].argue_defendant_argue" placeholder="被告辩论意见" autocomplete="off"
                   class="layui-input" style="margin-left:12px">
          </div>
          <div class="layui-col-md1">
            <button @click="add_component('argued_defendant')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                    data-type="text">
              <i class="layui-icon">&#xe654;</i>
            </button>
          </div>
        </div>

        <template v-for="(item, index) in data.argued_accuser.slice(1)" :key="index">
          <div class="layui-form-item">
            <div class="layui-col-md3">
              <input type="text" v-model="data.argued_accuser[index+1].argue_accuser"   placeholder="原告" autocomplete="off" class="layui-input">
            </div>
            <div class="layui-col-md6">
              <input type="text" v-model="data.argued_accuser[index+1].argue_accuser_argue"   placeholder="原告辩论意见" autocomplete="off"
                     class="layui-input" style="margin-left:12px">
            </div>
            <div class="layui-col-md1">
              <button @click="delete_component('argued_accuser',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text">
                <i class="layui-icon">&#xe640;</i>
              </button>
            </div>
          </div>
        </template>

        <template v-for="(item, index) in data.argued_defendant.slice(1)" :key="index">
          <div class="layui-form-item">
            <div class="layui-col-md3">
              <input type="text" v-model="data.argued_defendant[index+1].argue_defendant"  placeholder="被告" autocomplete="off" class="layui-input">
            </div>
            <div class="layui-col-md6">
              <input type="text" v-model="data.argued_defendant[index+1].argue_defendant_argue" placeholder="被告辩论意见" autocomplete="off"
                     class="layui-input" style="margin-left:12px">
            </div>
            <div class="layui-col-md1">
              <button @click="delete_component('argued_defendant',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text">
                <i class="layui-icon">&#xe640;</i>
              </button>
            </div>
          </div>
        </template>

        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <div class="layui-form-label">是否反诉</div>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-row">
              <input type="radio" v-model="data.argue_is_counterclaim" class="myradio" value="true" >
              <label>反诉</label>
              <input type="radio" v-model="data.argue_is_counterclaim" class="myradio" value="false">
              <label>不反诉</label>
            </div>
          </div>
        </div>
        <div v-show="data.argue_is_counterclaim=='true'">
          <div class="layui-form-item">
            <div class="layui-col-md3">
              <input type="text" v-model="data.argued_counterd[0].argue_counter_defendant" placeholder="原告(反诉被告)" autoComplete="off" class="layui-input">
            </div>
            <div class="layui-col-md6">
              <input type="text" v-model="data.argued_counterd[0].argue_counter_defendant_debate" placeholder="原告(反诉被告)辩论意见" autoComplete="off"
                    style="margin-left: 12px" class="layui-input">
            </div>
            <div class="layui-col-md1">
              <button @click="add_component('argued_counterd')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>

          <div class="layui-form-item">
            <div class="layui-col-md3">
              <input type="text" name="title" v-model="data.argued_countera[0].argue_counter_accuser" placeholder="被告(反诉原告)"
                     class="layui-input">
            </div>
            <div class="layui-col-md6">
              <input type="text" name="title" v-model="data.argued_countera[0].argue_counter_accuser_debate" placeholder="被告(反诉原告)辩论意见"
                     style="margin-left: 12px" class="layui-input">
            </div>
            <div class="layui-col-md1">
              <button @click="add_component('argued_countera')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>

          <template v-for="(item, index) in data.argued_counterd.slice(1)" :key="index">
          <div class="layui-form-item">
            <div class="layui-col-md3">
              <input type="text" v-model="data.argued_counterd[index+1].argue_counter_defendant" placeholder="原告(反诉被告)" autoComplete="off" class="layui-input">
            </div>
            <div class="layui-col-md6">
              <input type="text" v-model="data.argued_counterd[index+1].argue_counter_defendant_debate" placeholder="原告(反诉被告)辩论意见" autoComplete="off"
                     style="margin-left: 12px" class="layui-input">
            </div>
            <div class="layui-col-md1">
              <button @click="delete_component('argued_counterd',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text">
                <i class="layui-icon">&#xe640;</i>
              </button>
            </div>
          </div>
          </template>

          <template v-for="(item, index) in data.argued_countera.slice(1)" :key="index">
          <div class="layui-form-item">
            <div class="layui-col-md3">
              <input type="text" name="title" v-model="data.argued_countera[index+1].argue_counter_accuser" placeholder="被告(反诉原告)"
                     class="layui-input">
            </div>
            <div class="layui-col-md6">
              <input type="text" name="title" v-model="data.argued_countera[index+1].argue_counter_accuser_debate" placeholder="被告(反诉原告)辩论意见"
                     style="margin-left: 12px" class="layui-input">
            </div>
            <div class="layui-col-md1">
              <button @click="delete_component('argued_countera',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text">
                <i class="layui-icon">&#xe640;</i>
              </button>
            </div>
          </div>
          </template>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button class="layui-btn" v-on:click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
          </div>
        </div>
        <hr>
      </form>
    </div>
  </div>
</template>

<script>

// } else data = JSON.parse(localStorage.getItem("argue_form"));
// console.log(data);
export default {
  data() {
    var data;
// if (localStorage.getItem("argue_form") == null) {
    data = {
      argued_accuser:[
        {
          argue_accuser: "" ,                  //原告
          argue_accuser_argue: "" ,            //辩论意见(原告)
        }
      ],
      argued_defendant:[{
        argue_defendant: "" ,                //被告
        argue_defendant_argue: "" ,          //辩论意见(被告)
      }],
      argue_is_counterclaim: "false",          //是否反诉
      argued_counterd:[{
        argue_counter_defendant:"" ,       //原告(反诉被告)
        argue_counter_defendant_debate: "", //反诉被告辩论意见
      }],
      argued_countera:[{
        argue_counter_accuser: "" ,          //被告(反诉原告)
        argue_counter_accuser_debate: "" ,   //反诉原告辩论意见
      }],
    }
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if("argue_form" in wholeItem){
      data=wholeItem.argue_form
    }
    return {
      data: data,
    };
  },
  mounted(){
    // let that=this;
    // window.layui.use('form', function(){
    //   var form = window.layui.form;
    //   form.on('radio(argue_is_counterclaim)', function(value){
    //     that.data.argue_is_counterclaim=value.value;
    //   })
    // })
  },
  updated: function () {

  },
  components: {
  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        case "argued_accuser":
          this.data.argued_accuser.push({
            argue_accuser: "" ,                  //原告
            argue_accuser_argue: "" ,            //辩论意见(原告)
          });
          break;
        case "argued_defendant":
          this.data.argued_defendant.push({
            argue_defendant: "" ,                //被告
            argue_defendant_argue: "" ,          //辩论意见(被告)
          });
          break;
        case "argued_counterd":
          this.data.argued_counterd.push({
            argue_counter_defendant:"" ,       //原告(反诉被告)
            argue_counter_defendant_debate: "", //反诉被告辩论意见
          });
          break;
        case "argued_countera":
          this.data.argued_countera.push({
            argue_counter_accuser: "" ,          //被告(反诉原告)
            argue_counter_accuser_debate: "" ,   //反诉原告辩论意见
          });
          break;
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "argued_accuser":
          //这里是值对应的处理
          this.data.argued_accuser.splice(index, 1);
          break;
        case "argued_defendant":
          //这里是值对应的处理
          this.data.argued_defendant.splice(index, 1);
          break;
        case "argued_counterd":
          //这里是值对应的处理
          this.data.argued_counterd.splice(index, 1);
          break;
        case "argued_countera":
          //这里是值对应的处理
          this.data.argued_countera.splice(index, 1);
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    // save_localstorage() {
    //   localStorage.setItem("argue_form", JSON.stringify(this.data));
    // },
  },
  watch: {
    data:{
      handler() {
        //如何根据数据存储
        if (this.$store.state.court_number == "") {
          // window.layui.layer.msg('请优先完善基本信息表格');
        }
        else{
          var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          wholeItem.argue_form=this.data
          localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
        }
      },
      deep: true
    }
  },
}
</script>

<style scoped>

</style>