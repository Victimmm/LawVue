<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item" pane>
          <div class="layui-form-label">审判员</div>
            <div class="layui-input-block">
              <textarea type="text" class="layui-textarea" style="height: 38px;min-height:38px">当事人是否同意电子送达裁判文书？</textarea>
            </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.delivery_info[0].name"
                              :options="deliveryFormGetAccuserMergeDefendant" placeholder="请选择原被告"
                              style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <div class="myradiomargin" style="width: 90%;float: left;">
                  <input type="radio"  lay-ignore  v-model="data.delivery_info[0].is_delivery" value="1" class="myradio">
                  <label>同意</label>
                  <input type="radio" lay-ignore v-model="data.delivery_info[0].is_delivery" value="2" class="myradio">
                  <label>不同意</label>
                </div>
                <button @click="add_component('delivery_info')" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="layui-form-item layui-form-required" v-if="data.delivery_info[0].is_delivery==1" pane>
          <label class="layui-form-label">电子邮件地址</label>
          <div class="layui-input-block">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <input type="text" v-model="data.delivery_info[0].email"  placeholder="电子邮件地址" autocomplete="off"
                     class=" layui-input ">
            </div>
          </div>
        </div>
        <div class="layui-form-item layui-form-required" v-if="data.delivery_info[0].is_delivery==2" pane>
          <label class="layui-form-label">纸质文书送达地址</label>
          <div class="layui-input-block">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <input type="text" v-model="data.delivery_info[0].email"  placeholder="纸质文书送达地址" autocomplete="off"
                     class=" layui-input ">
            </div>
          </div>
        </div>

        <template v-for="(item, index) in data.delivery_info.slice(1)" :key="index">
          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.delivery_info[index+1].name"
                                :options="deliveryFormGetAccuserMergeDefendant" placeholder="请选择原被告"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 90%;float: left;">
                    <input type="radio"  lay-ignore v-model="data.delivery_info[index+1].is_delivery" value="1" class="myradio">
                    <label>同意</label>
                    <input type="radio" lay-ignore v-model="data.delivery_info[index+1].is_delivery" value="2" class="myradio">
                    <label>不同意</label>
                  </div>
                  <button @click="delete_component('delivery_info',index+1)" type="button"
                          class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="layui-form-item" v-if="data.delivery_info[index+1].is_delivery==1" pane>
            <label class="layui-form-label">电子邮件地址</label>
            <div class="layui-input-block">
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <input type="text" v-model="data.delivery_info[index+1].email" placeholder="电子邮件地址" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
          </div>

          <div class="layui-form-item" v-if="data.delivery_info[index+1].is_delivery==2" pane>
            <label class="layui-form-label">纸质文书送达地址</label>
            <div class="layui-input-block">
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <input type="text" v-model="data.delivery_info[index+1].email" placeholder="纸质文书送达地址" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
          </div>
        </template>
      </form>
    </div>
  </div>

</template>

<script>
import VueMultiselect from "vue-multiselect";
export default {
  data() {
    var data;
    data = {
      delivery_info:[
        {
          name: "",
          is_delivery: "1",
          email: ""
        },
      ],
      clerk_statement:'',
      clerk_statement_list:['审判员最后陈述',]
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null && "deliveryInfo" in wholeItem){
      data=wholeItem.deliveryInfo
    }
    return {
      data: data,
    };
  },

  components: {
    VueMultiselect
  },

  mounted() {
    window.layui.use('form', () => {
      var form = window.layui.form
          form.render()
          // , element = layui.element
    });
  },

  computed:{
    deliveryFormGetAccuserMergeDefendant: {
      get() {
        let string1 = this.$store.state.plaintiff_item.map(e =>(e.accuser_short==''?e.accuser:e.accuser_short)+'（原告）').filter(i => i && i.trim())
        let string2 = this.$store.state.defendant_item.map(e =>(e.defendant_short==''?e.defendant:e.defendant_short)+'（被告）').filter(i => i && i.trim())
        return string1.concat(string2)
      },
    },
  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        case "delivery_info":
          this.data.delivery_info.push({
            name: "",
            is_delivery: "1",
            email: "",
          });
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "delivery_info":
          //这里是值对应的处理
          this.data.delivery_info.splice(index, 1);
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
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
          if (wholeItem != null) {
            wholeItem.deliveryInfo = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>