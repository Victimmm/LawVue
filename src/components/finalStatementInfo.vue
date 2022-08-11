<template >
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item" pane>
          <div class="layui-form-label">审判员</div>
          <div class="layui-input-block">
            <textarea type="text" class="layui-textarea" v-model="data.judge_finalstatement" style="height: 38px;min-height:38px"></textarea>
          </div>
        </div>

      <template v-for="(item, index) in data.final_statement_info" :key="index">
        <div class="layui-form-item" pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
<!--              <input type="text" v-model="data.final_statement_info[0].name" placeholder="请输入原被告" autocomplete="off"-->
<!--                     class="layui-input" style="width: 100%;float: left;">-->
              <VueMultiselect :option-height="38" :show-labels="false" v-model="data.final_statement_info[index].name"
                              :options="getPlaintiffName" placeholder="请选择原被告"
                              style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
<!--                <VueMultiselect :option-height="38" :show-labels="false"-->
<!--                                v-model="data.final_statement_info[index].final_statement"-->
<!--                                :options=option_statement placeholder="请选择陈述意见"-->
<!--                                :taggable="true"-->
<!--                                style="line-height: 16px; min-height: 38px;float:left;width: 90%;"></VueMultiselect>-->
                <input type="text" v-model="data.final_statement_info[index].final_statement"   placeholder="请输入最后陈述意见" autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;">
<!--                <div v-show="index != '0'">-->
                  <button @click="delete_component('final_statement_info',index)" type="button" class="layui-btn layui-btn-sm layui-btn-danger"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe640;</i>
                  </button>
<!--                </div>-->
                <!--                <div v-show="index == '0'">-->
                <button @click="add_component('final_statement_info',index+1)" type="button" class="layui-btn layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
                <!--                </div>-->
              </div>

            </div>
          </div>
        </div>
      </template>

<!--        <template v-for="(item, index) in data.final_statement_info.slice(1)" :key="index">-->
<!--          <div class="layui-form-item" pane>-->
<!--            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">-->
<!--              <div class="layui-input-inline" style="margin-left:0px ;">-->
<!--                <VueMultiselect :option-height="38" :show-labels="false" v-model="data.final_statement_info[index+1].name"-->
<!--                                :options="getPlaintiffName" placeholder="请选择原被告"-->
<!--                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>-->
<!--&lt;!&ndash;                <input type="text" v-model="data.final_statement_info[index+1].name" placeholder="请输入原被告" autocomplete="off"&ndash;&gt;-->
<!--&lt;!&ndash;                     class="layui-input" style="width: 100%;float: left;">&ndash;&gt;-->
<!--              </div>-->

<!--            <div class="layui-input-block">-->
<!--              <div class="myselect-div">-->
<!--                <input type="text" v-model="data.final_statement_info[index+1].final_statement"  placeholder="请输入最后陈述意见" autocomplete="off"-->
<!--                       class="layui-input" style="width: 90%;float: left;">-->
<!--                <button @click="delete_component('final_statement_info',index+1)" type="button" class="layui-btn layui-btn-sm layui-btn-danger"-->
<!--                        data-type="text" style="float: right;">-->
<!--                  <i class="layui-icon">&#xe640;</i>-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          </div>-->
<!--        </template>-->
      </form>
    </div>
  </div>
</template>

<script>
import VueMultiselect from "vue-multiselect";
// } else data = JSON.parse(localStorage.getItem("final_form"));
// console.log(data);
export default {
  data() {
    var data;
// if (localStorage.getItem("final_form") == null) {
    data = {
      final_statement_info: [{
        name: "", //原被告
        final_statement: "", //最后陈述意见
      }],
      judge_finalstatement:"双方发表最后陈述意见。",
    };

    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "finalStatementInfo" in wholeItem) {
      data = wholeItem.finalStatementInfo
    }
    return {
      option_statement:['坚持诉讼请求','坚持答辩意见'],
      // name_list: [],
      data: data,
    };

  },

  computed:{
    getPlaintiffName: {
      get() {

        let string1 = this.$store.state.plaintiff_item.filter(i=> i.accuser && i.accuser.trim()).map(function (e) {
          return  (e.accuser_short==''?e.accuser:e.accuser_short) + '（原告）' ;
        })
        let string2 = this.$store.state.defendant_item.filter(i=> i.defendant && i.defendant.trim()).map(function (e) {
          return (e.defendant_short==''?e.defendant:e.defendant_short) + '（被告）' ;
        })
        let string3 = this.$store.state.third_party_item.filter(i=> i.third_party && i.third_party.trim()).map(function (e) {
          return (e.third_party_short==''?e.third_party:e.third_party_short) + '（第三人）' ;
        })
        return string1.concat(string2).concat(string3)

      }
    },
  },
  components: {
    VueMultiselect
  },
  methods: {
    add_component(datatype, index) {
      switch (datatype) {
        case "final_statement_info":
          this.data.final_statement_info.splice(index,0,{
            name: "", //原告
            final_statement: "", //最后陈述意见
          });
          break;
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "final_statement_info":
          //这里是值对应的处理
          if (this.data.final_statement_info.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.final_statement_info.splice(index, 1);
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
            wholeItem.finalStatementInfo = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    },
    // name_list: {
    //   handler() {
    //     var origin_data = [{
    //       name: "", //原被告
    //       final_statement: "", //最后陈述意见
    //     }]
    //     this.data.final_statement_info = origin_data
    //
    //     if (this.name_list != '') {
    //       this.data.final_statement_info[0].name = this.name_list[0]
    //       if (this.name_list[0].search("原告") != -1) {
    //         this.data.final_statement_info[0].final_statement = "坚持诉讼请求"
    //       } else {
    //         this.data.final_statement_info[0].final_statement = "坚持答辩意见"
    //       }
    //       for (let p = 1; p < this.name_list.length; p++) {
    //         let name = this.name_list[p]
    //         let statement = ''
    //         if (name.search("原告") != -1) {
    //           statement = "坚持诉讼请求"
    //         } else {
    //           statement = "坚持答辩意见"
    //         }
    //         this.data.final_statement_info.push({
    //           name: name, //原被告
    //           final_statement: statement, //最后陈述意见
    //         });
    //       }
    //     }
    //   },
    // },


    // getPlaintiffName() {
    //   let string1 = this.$store.state.plaintiff_item.filter(i=> i.accuser && i.accuser.trim()).map(function (e) {
    //     return (e.accuser_short==''?e.accuser:e.accuser_short) + '（原告）' ;
    //   })
    //   let string2 = this.$store.state.defendant_item.filter(i=> i.defendant && i.defendant.trim()).map(function (e) {
    //     return (e.defendant_short==''?e.defendant:e.defendant_short) + '（被告）' ;
    //   })
    //   let string3 = this.$store.state.third_party_item.filter(i=> i.third_party && i.third_party.trim()).map(function (e) {
    //     return (e.third_party_short==''?e.third_party:e.third_party_short) + '（第三人）' ;
    //   })
    //   this.name_list = string1.concat(string2).concat(string3)
      // console.log(this.name_list)
      // if (this.name_list.length > 1){
      //   this.data.pre_name_list = this.name_list
      // }

    // },

  },
}
</script>

<style scoped>

</style>