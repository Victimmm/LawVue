
<template>
  <div class="layui-card">
    <div class="layui-card-body>">
    <form class="layui-form layui-form-pane">
      <div class="layui-form-item">
            <label class="layui-form-label" style="text-align: center">审判员</label>
          <div class="layui-input-block">
            <textarea type="text" class="layui-input" style="text-align: center">下面进行举证质证，首先原告进行举证</textarea>
          </div>
      </div>
      <div class="layui-form-item" pane>
        <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
          <div class="layui-input-inline" style="margin-left:0px ;">
            <input type="text" v-model="data.accshowd_evidence[0].accshow_evidence" placeholder="证据名称" autocomplete="off"
                   class="layui-input" style="line-height: 16px;width: 250px; min-height: 38px">
          </div>
          <div class="layui-input-block">
            <div class="myselect-div">
              <input type="text" v-model="data.accshowd_evidence[0].accshow_content" placeholder="证明事项" autocomplete="off"
                     class="layui-input" style="width: 90%;float: left;">
              <button @click="add_component('accshowd_evidence')" type="button"
                      class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text" style="float: right;">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
        </div>
        <template v-for="(item, index) in data.accshowd_evidence.slice(1)" :key="index">

          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <input type="text" v-model="data.accshowd_evidence[0].accshow_evidence" placeholder="证据名称" autocomplete="off"
                     class="layui-input" style="line-height: 16px;width: 250px; min-height: 38px">
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text" v-model="data.accshowd_evidence[index+1].accshow_content" placeholder="证明事项" autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;">
                <button @click="delete_component('accshowd_evidence',1)" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="layui-form-item" pane>
            <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
          <div class="layui-input-block">
            <textarea v-model="data.accshowd_evidence[0].accshow_fact_reason" placeholder="理由" class="layui-textarea"></textarea>
          </div>
      </div>

<div class="layui-card">
  <div class="layui-card-body>">
    <div class="layui-form-item" pane>
      <label class="layui-form-label" style="text-align: center">审判员</label>
      <div class="layui-input-block">
        <textarea type="text" class="layui-input" style="text-align: center">被告对原告提交的证据进行质证</textarea>
      </div>
    </div>

    <div class="layui-form-item" pane>
      <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
        <div class="layui-input-inline" style="margin-left:0px ;">
          <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.accshowd_query_evidence[0].accshow_defendant"
                          :options="$store.state.defendantname" placeholder="请选择被告"
                          style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
        </div>
        <div class="layui-input-block">
          <div class="myselect-div">
            <input type="text"  v-model="data.accshowd_query_evidence[0].accshow_query_evidence" placeholder="证据名称" autocomplete="off"
                   class="layui-input" style="width: 90%;float: left;">
            <button @click="add_component('accshowd_query_evidence')" type="button"
                    class="layui-btn layui-btn-primary layui-btn-sm"
                    data-type="text" style="float: right;">
              <i class="layui-icon">&#xe654;</i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="layui-form-item" pane>
      <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
          <label class="layui-form-label" style="text-align: center">真实性</label>
        <div class="layui-input-block">
          <div class="myselect-div">
            <div class="myradiomargin" style="width: 100%;float: left;">
              <input type="radio" value="true" v-model="data.accshowd_query_evidence[0]. accshow_facticity" class="myradio" checked><label>是</label>
              <input type="radio" value="false" v-model="data.accshowd_query_evidence[0].accshow_facticity" class="myradio"><label>否</label>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
        <label class="layui-form-label" style="text-align: center">合法性</label>
        <div class="layui-input-block">
          <div class="myselect-div">
            <div class="myradiomargin" style="width: 100%;float: left;">
              <input type="radio" value="true" v-model="data.accshowd_query_evidence[0].accshow_legality" class="myradio" checked><label>是</label>
              <input type="radio" value="false" v-model="data.accshowd_query_evidence[0].accshow_legality" class="myradio"><label>否</label>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
        <label class="layui-form-label" style="text-align: center">相关性</label>
        <div class="layui-input-block">
          <div class="myselect-div">
            <div class="myradiomargin" style="width: 100%;float: left;">
              <input type="radio" value="true" v-model="data.accshowd_query_evidence[0].accshow_relevance" class="myradio" checked><label>是</label>
              <input type="radio" value="false" v-model="data.accshowd_query_evidence[0].accshow_relevance" class="myradio"><label>否</label>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-form-item" pane>
        <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
        <div class="layui-input-block">
          <textarea v-model="data.accshowd_evidence[0].accshow_fact_reason" placeholder="理由" class="layui-textarea"></textarea>
        </div>
      </div>
    </div>
  </div>
</div>
  <template v-for="(item, index) in data.accshowd_query_evidence.slice(1)" :key="index">
    <div class="layui-card">
      <div class="layui-card-body>">
        <div class="layui-form-item" pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.accshowd_query_evidence[index+1].accshow_defendant"
                              :options="$store.state.defendantname" placeholder="请选择被告"
                              style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text"  v-model="data.accshowd_query_evidence[index+1].accshow_query_evidence" placeholder="证据名称" autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;">
                <button @click="delete_component('accshowd_query_evidence',1)" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <label class="layui-form-label" style="text-align: center">真实性</label>
            <div class="layui-input-block">
              <div class="myselect-div">
                <div class="myradiomargin" style="width: 100%;float: left;">
                  <input type="radio" value="true" v-model="data.accshowd_query_evidence[index+1].accshow_facticity" class="myradio" checked><label>是</label>
                  <input type="radio" value="false" v-model="data.accshowd_query_evidence[index+1].accshow_facticity" class="myradio"><label>否</label>
                </div>
              </div>
            </div>
          </div>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <label class="layui-form-label" style="text-align: center">合法性</label>
            <div class="layui-input-block">
              <div class="myselect-div">
                <div class="myradiomargin" style="width: 100%;float: left;">
                  <input type="radio" value="true" v-model="data.accshowd_query_evidence[index+1].accshow_legality" class="myradio" checked><label>是</label>
                  <input type="radio" value="false" v-model="data.accshowd_query_evidence[index+1].accshow_legality" class="myradio"><label>否</label>
                </div>
              </div>
            </div>
          </div>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <label class="layui-form-label" style="text-align: center">相关性</label>
            <div class="layui-input-block">
              <div class="myselect-div">
                <div class="myradiomargin" style="width: 100%;float: left;">
                  <input type="radio" value="true" v-model="data.accshowd_query_evidence[index+1].accshow_relevance" class="myradio" checked><label>是</label>
                  <input type="radio" value="false" v-model="data.accshowd_query_evidence[index+1].accshow_relevance" class="myradio"><label>否</label>
                </div>
              </div>
            </div>
          </div>
          <div class="layui-form-item" pane>
            <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
            <div class="layui-input-block">
              <textarea v-model="data.accshowd_query_evidence[index+1].accshow_fact_reason" placeholder="理由" class="layui-textarea"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  </form>
</div>
</div>
</template>

<script>

//   };
// } else data = JSON.parse(localStorage.getItem("accshow_form"));
// console.log(data);
import VueMultiselect from "vue-multiselect";

export default {

  data() {
    var selectItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(selectItem != null && "CourtInves" in selectItem) {
      data = selectItem.CourtInves
      if ("judge" in selectItem.BasicInfo) {
        data.selected_judge = selectItem.BasicInfo.judge
      }
      if ("PlaintiffItems" in selectItem && selectItem.PlaintiffItems.length > 0) {
        for (var i = 0; i < selectItem.PlaintiffItems.length; i++) {
          data.selected_accuser[i] = {name: selectItem.PlaintiffItems[i].accuser}
        }
      }
      if ("DefendantItems" in selectItem && selectItem.DefendantItems.length > 0) {
        for (var j = 0; j < selectItem.DefendantItems.length; j++) {
          data.selected_defendant[j] = {name: selectItem.DefendantItems[j].defendant}
        }
      }
    }
    var data;
// if (localStorage.getItem("accshow_form") == null) {
    data = {
      //第一个动态生成的json accshowd_evidence 包含以下3个信息
      accshowd_evidence: [
        {
          accshow_evidence: "" , //证据名称(原告举证表 原告提出)
          accshow_content: "" , //证明事项(原告举证表 原告提出)
          accshow_fact_reason:"" , //事实和理由(被告质证)
        },
      ],
      //第二个动态生成的json accshod_query_evidence 包含以下10个信息
      accshowd_query_evidence: [
        {
          accshow_content: "" , //证明事项
          accshow_fact_reason: "" , //事实和理由
          accshow_defendant: "" , //被告姓名
          accshow_facticity: "true" , //真实性
          accshow_legality: "true", //合法性
          accshow_relevance: "true", //关联性

        },
      ],}
      var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
      if(wholeItem!=null && "accshow_form" in wholeItem){
      data=wholeItem.accshow_form
    }
    return {data:data}
  },
  mount(){

  },

  components: {
      VueMultiselect
  },
  methods: {

    add_component(datatype) {
      switch (datatype) {
        case "accshowd_evidence":
          //accshowd_evidence 模块的数据加入
          this.data.accshowd_evidence.push({
            accshow_evidence: "" , //证据名称(原告举证表 原告提出)
            accshow_content: "" , //证明事项(原告举证表 原告提出)
            accshow_fact_reason:"" , //事实和理由(被告质证)
          });
          break;
        case "accshowd_query_evidence":
          //这里是值对应的处理
          this.data.accshowd_query_evidence.push({
            accshow_content: "" , //证明事项
            accshow_fact_reason: "" , //事实和理由
            accshow_defendant: "" , //被告姓名
            accshow_query_evidence: "" , //证据名称 （被告质证）
            accshow_query_reason: "" , //真实性理由
            accshow_facticity: "true" , //真实性
            accshow_legality: "true", //合法性
            accshow_relevance: "true", //关联性
          });
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "accshowd_evidence":
          //这里是值对应的处理
          this.data.accshowd_evidence.splice(index, 1);
          break;
        case "accshowd_query_evidence":
          //这里是值对应的处理
          this.data.accshowd_query_evidence.splice(index, 1);
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    // save_localstorage() {
    //   localStorage.setItem("accshow_form", JSON.stringify(this.data));
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
          if (wholeItem != null) {
            wholeItem.accshow_form = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    }
  },
};
</script>


<style type="text/css">
.layui-table-cell {
  height: auto;
  line-height: 28px;
  margin-top: 15px;
}
</style>
