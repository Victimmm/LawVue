<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item" pane>
          <div class="layui-form-label">
            审判员
          </div>
          <div class="layui-input-block">
            <textarea class="layui-textarea" value="下面进行举证质证，首先原告进行举证" style="height: 38px;min-height: 38px"></textarea>
          </div>
        </div>

        <template v-for="(item ,index) in data.accuser_evidence" :key="index">
          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label">证据 {{ numberToChinese(item.serial) }}</label>
              <div class="layui-input-block">
                <div class="layui-input-inline" style="width:30%;margin-left: 0">
                  <VueMultiselect :option-height="38" :show-labels="false"
                                  v-model="data.accuser_evidence[index].evidence_type"
                                  :options="['复印件','原件']" placeholder="请选择证据类型"
                                  style="line-height: 16px;width: 100%; min-height: 38px;"></VueMultiselect>
                </div>
                <div class="layui-input-inline" style="width:70%;margin-left: 0">
                  <input type="text"  placeholder="请输入证据名称" class="layui-input" v-model="data.accuser_evidence[index].evidence">
                </div>
              </div>
            </div>
          </div>

          <div class="layui-form-item" pane style="margin-top: -10px;">
            <div class="layui-form-label divcenter">
              证明事项
            </div>
            <div class="layui-input-block">
              <input type="text" v-model="data.accuser_evidence[index].content"  placeholder="证据证明事项"
                     class="layui-input">
            </div>
          </div>

          <div class="layui-form-item" style="width:100%;margin-top: -10px;">
            <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component('accuser_evidence',index+1)"> 添加证据</button>
            <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left:5px" @click="delete_component('accuser_evidence',index)"> 删除证据
            </button>
          </div>
        </template>

      </form>
    </div>
  </div>

  <fieldset class="layui-elem-field layui-field-title" id="defendant_query" style="margin-top:28px">
    <legend>法庭调查-被告质证</legend>
    <div class="layui-field-box">
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
    <div class="layui-form-item" pane>
      <div class="layui-form-label ">
        审判员
      </div>
      <div class="layui-input-block">
        <textarea class="layui-textarea" style="height: 38px;min-height: 38px">被告对原告提交的证据进行质证</textarea>
      </div>
    </div>


    <template v-for="(item,index) in data.defendant_query" :key="index">

      <div class="layui-form-item" pane>
        <div class="layui-form-label">
          请选择被告
        </div>
        <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
          <div class="layui-input-block">
            <div class="myselect-div">
              <VueMultiselect :option-height="38" :show-labels="false"
                              v-model="data.defendant_query[index].defendant"
                              :options=getDefendantName placeholder="请选择被告"
                              group-label="defendant"
                              :group-select="true"
                              group-values="defendant_name"
                              :multiple="true"
                              :close-on-select="false"
                              :searchable="false"
                              style="line-height: 16px; min-height: 38px;float:left;"></VueMultiselect>
            </div>
          </div>
        </div>
      </div>

      <div class="layui-form-item" pane style="margin-top: -10px;">
        <div class="layui-form-label">
          请选择证据
        </div>
        <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
          <div class="layui-input-block">
            <div class="myselect-div">
              <VueMultiselect :option-height="38" :show-labels="false"
                              v-model="data.defendant_query[index].evidence"
                              :options=getProofPlaintiff placeholder="请选择证据"
                              group-label="evidence"
                              :group-select="true"
                              group-values="option_label"
                              :multiple="true"
                              :close-on-select="false"
                              :searchable="false"
                              style="line-height: 16px; min-height: 38px;float:left;"></VueMultiselect>
            </div>
          </div>
        </div>
      </div>

      <div class="layui-form-item" pane style="margin-top: -10px;">
        <div class="layui-form-label">
          三性质证
        </div>
        <div class="layui-input-block">
          <div class="layui-input-inline" style="width:33%;margin-left: 0">
            <div class="myradiomargin">
              <label>真实性：</label>
              <input type="radio" lay-ignore  value="1" v-model="data.defendant_query[index].facticity"
                     class="myradio"><label>是</label>
              <input type="radio" lay-ignore value="2" v-model="data.defendant_query[index].facticity"
                     class="myradio" style="margin-left: 15px;"><label>否</label>
            </div>
          </div>
          <div class="layui-input-inline" style="width:33%;margin-left: 0">
            <div class="myradiomargin">
              <label>合法性：</label>
              <input type="radio" lay-ignore value="1" v-model="data.defendant_query[index].legality"
                     class="myradio"><label>是</label>
              <input type="radio" lay-ignore value="2" v-model="data.defendant_query[index].legality"
                     class="myradio" style="margin-left: 15px;"><label>否</label>
            </div>
          </div>
          <div class="layui-input-inline" style="width:34%;margin-left: 0">
            <div class="myradiomargin">
              <label>相关性：</label>
              <input type="radio" lay-ignore value="1" v-model="data.defendant_query[index].relevance"
                     class="myradio"><label>是</label>
              <input type="radio" lay-ignore value="2" v-model="data.defendant_query[index].relevance"
                     class="myradio" style="margin-left: 15px;"><label>否</label>
            </div>
          </div>
        </div>
      </div>

      <div class="layui-form-item" pane style="margin-top: -10px;">
        <div class="layui-form-label" style="line-height: 80px">
          事实和理由
        </div>
        <div class="layui-input-block">
              <textarea v-model="data.defendant_query[index].defendant_query_fact_reason"
                        placeholder="请输入事实和理由"
                        class="layui-textarea"></textarea>
        </div>
      </div>

      <div class="layui-form-item" style="width:100%;margin-top: -10px;">
        <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component('defendant_query')"> 添加被告质证</button>
        <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left:5px" v-if="index!=0" @click="delete_component('defendant_query',index)"> 删除被告质证
        </button>
      </div>
    </template>
      </form>
    </div>
  </div>
    </div>
  </fieldset>
</template>

<script>

import VueMultiselect from "vue-multiselect";

export default {

  data() {
    var data;
    data = {
      //第一个动态生成的json accuser_evidence 包含以下3个信息
      accuser_evidence: [{
        serial: 1,//证据序号，自增
        evidence: "", //证据名称(原告举证表 原告提出)
        content: "", //证明事项(原告举证表 原告提出)
        evidence_type: ""//证据类型，原件或者复印件
      }],
      // accuser_evidence_fact_reason: "", //事实和理由(原告举证)
      defendant_query: [
        {
          defendant: [], //被告姓名
          evidence: [], //证据名称
          defendant_query_fact_reason: "", //真实性、合法性和相关性的事实和理由(被告质证的事实和理由)
          facticity: "1", //真实性
          legality: "1", //合法性
          relevance: "1", //关联性
        }
      ],
    }
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "accuserShowInfo" in wholeItem) {
      data = wholeItem.accuserShowInfo
    }
    return {data: data}
  },
  mount() {

  },
  computed: {

    getDefendantName: {
      get() {
        let defendant = this.$store.state.defendant_item.map(e => e.defendant_short == '' ? e.defendant : e.defendant_short).filter(i => i && i.trim())
        return [{defendant: "全选被告", defendant_name: defendant}]
      }
    },
    getAccuserName: {
      get() {
        return this.$store.state.plaintiff_item.map(e => e.accuser_short == '' ? e.accuser : e.accuser_short).filter(i => i && i.trim())
      }
    },
    getProofPlaintiff: {
      get() {
        let option_label = this.data.accuser_evidence.filter(i => i.evidence).map(e =>{
          return "证据"+this.numberToChinese(e.serial) + ":" + e.evidence;
        })
        // let optionn_label={evidence_serial:evidence_serial,name_serial:name_serial}

        return [{evidence: "全选证据", option_label: option_label}]
      },
    }
  },
  components: {
    VueMultiselect
  },
  methods: {
    add_component(datatype,index) {
      switch (datatype) {
        case "accuser_evidence":
          //accuser_evidence 模块的数据加入
          // this.data.accuser_evidence.push({
          //   serial: this.data.accuser_evidence.length+1,//证据序号，自增
          //   evidence: "", //证据名称(原告举证表 原告提出)
          //   content: "", //证明事项(原告举证表 原告提出)
          //   evidence_type: ""//证据类型，原件或者复印件
          // });
          this.data.accuser_evidence.splice(index,0,{
              serial: 0,//证据序号，自增
              evidence: "", //证据名称(原告举证表 原告提出)
              content: "", //证明事项(原告举证表 原告提出)
              evidence_type: ""//证据类型，原件或者复印件
          })
          for (let i=0 ;i < this.data.accuser_evidence.length;i++){
            this.data.accuser_evidence[i].serial= i+1
          }
          break;
        case "defendant_query":
          //这里是值对应的处理
          this.data.defendant_query.push({
            defendant: [], //被告姓名
            evidence: [], //证据名称 （被告质证）
            facticity: "1", //真实性
            legality: "1", //合法性
            relevance: "1", //关联性
            defendant_query_fact_reason: "", //事实和理由
          });
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "accuser_evidence":
          //这里是值对应的处理
          this.data.accuser_evidence.splice(index, 1);
          for (let i=0 ;i < this.data.accuser_evidence.length;i++){
            this.data.accuser_evidence[i].serial= i+1
          }
          break;
        case "defendant_query":
          //这里是值对应的处理
          this.data.defendant_query.splice(index, 1);
          break;

        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    numberToChinese(num) {
      var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
      var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
      var a = ("" + num).replace(/(^0*)/g, "").split("."),
          k = 0,
          re = "";
      for (var i = a[0].length - 1; i >= 0; i--) {
        switch (k) {
          case 0:
            re = BB[7] + re;
            break;
          case 4:
            if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
                .test(a[0]))
              re = BB[4] + re;
            break;
          case 8:
            re = BB[5] + re;
            BB[7] = BB[5];
            k = 0;
            break;
        }
        if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
          re = AA[0] + re;
        if (a[0].charAt(i) != 0)
          re = AA[a[0].charAt(i)] + BB[k % 4] + re;
        k++;
      }
      if (a.length > 1) // 加上小数部分(如果有小数部分)
      {
        re += BB[6];
        for ( i = 0; i < a[1].length; i++)
          re += AA[a[1].charAt(i)];
      }
      if (re == '一十')
        re = "十";
      if (re.match(/^一/) && re.length == 3)
        re = re.replace("一", "");
      return re;
    }

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
            wholeItem.accuserShowInfo = this.data
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
