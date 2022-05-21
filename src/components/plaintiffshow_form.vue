<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter">
            审判员
          </div>
          <div class="layui-input-block">
            <textarea  class="layui-textarea" value="下面进行举证质证，首先原告进行举证" style="height: 38px;min-height: 38px"></textarea>
          </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <input type="text" v-model="data.plaintiff_show_evidence_part[0].plaintiff_show_evidence" placeholder="证据名称"
                     autocomplete="off"
                     class="layui-input" style="line-height: 16px;width: 160px; min-height: 38px">
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <input type="text" v-model="data.plaintiff_show_evidence_part[0].plaintiff_show_content" placeholder="证明事项"
                       autocomplete="off"
                       class="layui-input" style="width: 90%;float: left;margin-left:0px ;">
                <button @click="add_component('plaintiff_show_evidence_part')" type="button"
                        class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text" style="float: right;">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </div>
          <template v-for="(item, index) in data.plaintiff_show_evidence_part.slice(1)" :key="index">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px; height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <input type="text" v-model="data.plaintiff_show_evidence_part[index+1].plaintiff_show_evidence" placeholder="证据名称"
                       autocomplete="off"
                       class="layui-input" style="line-height: 16px;width: 160px; min-height: 38px">
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.plaintiff_show_evidence_part[index+1].plaintiff_show_content" placeholder="证明事项"
                         autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="delete_component('plaintiff_show_evidence_part',1)" type="button"
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
          <div class="layui-form-label divcenter">
            事实和理由
          </div>
          <div class="layui-input-block">
            <textarea v-model="data.plaintiff_show_fact_reason" placeholder="理由"
                      class="layui-textarea"></textarea>
          </div>
        </div>

        <div class="site-border-cyan" style="width:80%">
          <hr class="hr-solid-content" data-content="被告对原告提交的证据进行质证">
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter">
            审判员
          </div>
          <div class="layui-input-block">
            <textarea  class="layui-textarea" value="被告对原告提交的证据进行质证" style="height: 38px;min-height: 38px"></textarea>
          </div>
        </div>

        <div class="layui-form-item" pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-input-inline" style="margin-left:0px ;">
              <VueMultiselect :option-height="38" :show-labels="false"
                              v-model="data.defendent_query_part[0].query_defendant"
                              :options="$store.state.defendantname" placeholder="请选择被告"
                              style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div">
                <VueMultiselect :option-height="38" :show-labels="false"
                                v-model="data.defendent_query_part[0].query_evidence"
                                :options=getProofPlaintiff placeholder="请选择证据名称"
                                style="line-height: 16px;width: 90%; min-height: 38px;float:left;"></VueMultiselect>
                <button @click="add_component('defendent_query_part')" type="button"
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
                  <input type="radio" value="true" v-model="data.defendent_query_part[0]. query_facticity"
                         class="myradio"><label>是</label>
                  <input type="radio" value="false" v-model="data.defendent_query_part[0].query_facticity"
                         class="myradio"><label>否</label>
                </div>
              </div>
            </div>
          </div>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <label class="layui-form-label" style="text-align: center">合法性</label>
            <div class="layui-input-block">
              <div class="myselect-div">
                <div class="myradiomargin" style="width: 100%;float: left;">
                  <input type="radio" value="true" v-model="data.defendent_query_part[0].query_legality"
                         class="myradio"><label>是</label>
                  <input type="radio" value="false" v-model="data.defendent_query_part[0].query_legality"
                         class="myradio"><label>否</label>
                </div>
              </div>
            </div>
          </div>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <label class="layui-form-label" style="text-align: center">相关性</label>
            <div class="layui-input-block">
              <div class="myselect-div">
                <div class="myradiomargin" style="width: 100%;float: left;">
                  <input type="radio" value="true" v-model="data.defendent_query_part[0].query_relevance"
                         class="myradio"><label>是</label>
                  <input type="radio" value="false" v-model="data.defendent_query_part[0].query_relevance"
                         class="myradio"><label>否</label>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="layui-form-item" pane>
          <div class="layui-form-label divcenter">
            事实和理由
          </div>
          <div class="layui-input-block">
              <textarea v-model="data.defendent_query_part[0].query_fact_reason" placeholder="理由"
                        class="layui-textarea"></textarea>
          </div>
        </div>
        <template v-for="(item, index) in data.defendent_query_part.slice(1)" :key="index">
          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38" :show-labels="false"
                                v-model="data.defendent_query_part[index+1].query_defendant"
                                :options="$store.state.defendantname" placeholder="请选择被告"
                                style="line-height: 16px;width: 160px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <VueMultiselect :option-height="38" :show-labels="false"
                                  v-model="data.defendent_query_part[index+1].query_evidence"
                                  :options=getProofPlaintiff placeholder="请选择证据名称"
                                  style="line-height: 16px;width: 90%; min-height: 38px;float:left;"></VueMultiselect>
                  <button @click="delete_component('defendent_query_part',1)" type="button"
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
                    <input type="radio" value="true" v-model="data.defendent_query_part[index+1].query_facticity"
                           class="myradio"><label>是</label>
                    <input type="radio" value="false" v-model="data.defendent_query_part[index+1].query_facticity"
                           class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label" style="text-align: center">合法性</label>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="true" v-model="data.defendent_query_part[index+1].query_legality"
                           class="myradio"><label>是</label>
                    <input type="radio" value="false" v-model="data.defendent_query_part[index+1].query_legality"
                           class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label" style="text-align: center">相关性</label>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="true" v-model="data.defendent_query_part[index+1].query_relevance"
                           class="myradio"><label>是</label>
                    <input type="radio" value="false" v-model="data.defendent_query_part[index+1].query_relevance"
                           class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="layui-form-item" pane>
            <div class="layui-form-label divcenter">
              事实和理由
            </div>
            <div class="layui-input-block">
                <textarea v-model="data.defendent_query_part[index+1].query_fact_reason" placeholder="理由"
                          class="layui-textarea"></textarea>
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
      //第一个动态生成的json plaintiff_show_evidence_part 包含以下3个信息
      plaintiff_show_evidence_part: [
        {
          plaintiff_show_evidence: "", //证据名称(原告举证表 原告提出)
          plaintiff_show_content: "", //证明事项(原告举证表 原告提出)
        },
      ],
      plaintiff_show_fact_reason: "", //事实和理由(原告举证)
      defendent_query_part: [
        {
          query_defendant: "", //被告姓名
          query_evidence: "", //证据名称
          query_fact_reason: "", //真实性、合法性和相关性的事实和理由(被告质证的事实和理由)
          query_facticity: "true", //真实性
          query_legality: "true", //合法性
          query_relevance: "true", //关联性
        },
      ],
    }
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "plaintiffshow_form" in wholeItem) {
      data = wholeItem.plaintiffshow_form
    }
    return {data: data}
  },
  mount() {

  },
  computed: {
    getProofPlaintiff: {
      get() {
        return this.data.plaintiff_show_evidence_part.map(function (e) {
          return e.plaintiff_show_evidence;
        })
      },
    },
  },
  components: {
    VueMultiselect
  },
  methods: {
    add_component(datatype) {
      switch (datatype) {
        case "plaintiff_show_evidence_part":
          //plaintiff_show_evidence_part 模块的数据加入
          this.data.plaintiff_show_evidence_part.push({
            plaintiff_show_evidence: "", //证据名称(原告举证表 原告提出)
            plaintiff_show_content: "", //证明事项(原告举证表 原告提出)
          });
          break;
        case "defendent_query_part":
          //这里是值对应的处理
          this.data.defendent_query_part.push({
            query_fact_reason: "", //事实和理由
            query_defendant: "", //被告姓名
            query_evidence: "", //证据名称 （被告质证）
            query_facticity: "true", //真实性
            query_legality: "true", //合法性
            query_relevance: "true", //关联性
          });
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "plaintiff_show_evidence_part":
          //这里是值对应的处理
          this.data.plaintiff_show_evidence_part.splice(index, 1);
          break;
        case "defendent_query_part":
          //这里是值对应的处理
          this.data.defendent_query_part.splice(index, 1);
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
  },
  watch: {
    data: {
      handler() {
        //如何根据数据存储
        if (this.$store.state.court_number == "") {
          // window.layui.layer.msg('请优先完善基本信息表格');
        } else {
          var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
          if (wholeItem != null) {
            wholeItem.plaintiffshow_form = this.data
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
