<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item" pane>
          <div class="layui-form-label">
            审判员
          </div>
          <div class="layui-input-block">
            <textarea class="layui-textarea" v-model="data.judge_accuser_evidence"
                      style="height: 38px;min-height: 38px"></textarea>
          </div>
        </div>

        <template v-for="(item ,index) in data.accuser_evidence" :key="index">
          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label">证据 {{ numberToChinese(item.serial) }}</label>
              <div class="layui-input-block">
                <div class="layui-input-inline" style="width:30%;margin-left: 0;">
                  <VueMultiselect :option-height="38" :show-labels="false"
                                  v-model="data.accuser_evidence[index].evidence_type"
                                  :options="['复印件','原件']" placeholder="请选择证据类型"
                                  style="line-height: 16px;width: 100%; min-height: 38px;"></VueMultiselect>
                </div>
                <div class="layui-input-inline" style="width:70%;margin-left: 0; ">
                  <input type="text" placeholder="请输入证据名称" class="layui-input"
                         v-model="data.accuser_evidence[index].evidence">
                </div>
              </div>
            </div>
          </div>

          <div class="layui-form-item" pane style="margin-top: -10px;">
            <div class="layui-form-label divcenter">
              证明事项
            </div>
            <div class="layui-input-block">
              <textarea type="text" v-model="data.accuser_evidence[index].content" placeholder="请输入证明事项"
                        class="layui-textarea"></textarea>
            </div>
          </div>

          <div class="layui-form-item" style="width:100%;margin-top: -10px;">
            <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                    @click="add_component('accuser_evidence',index+1)"> 添加物证
            </button>
            <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs"
                    style="margin-left:5px" @click="delete_component('accuser_evidence',index)"> 删除物证
            </button>
          </div>
        </template>

        <div class="layui-form-item" pane>
          <label class="layui-form-label">是否有证人出庭</label>
          <div class="layui-input-block">
            <div class="myradiomargin">
              <input type="radio" lay-ignore="" name="iswitness"
                     v-model="data.accuser_is_witness" class="myradio" value="1"
              ><label>是</label>
              <input type="radio" lay-ignore="" name="iswitness"
                     v-model="data.accuser_is_witness" class="myradio" value="2"
                     style="margin-left: 15px;"><label>否</label>
            </div>
          </div>
        </div>

        <div id="witness" v-if="data.accuser_is_witness=='1'">
          <template v-for="(item ,index) in data.accuser_evidence_witness" :key="index">
            <div class="layui-form-item" pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <label class="layui-form-label">证据 {{ numberToChinese(item.serial) }}</label>
                <div class="layui-input-block">
                  <input type="text" placeholder="请输入证据名称" class="layui-input"
                         v-model="data.accuser_evidence_witness[index].evidence">
                </div>
              </div>
            </div>

            <div class="layui-form-item" pane style="margin-top: -10px;">
              <div class="layui-form-label divcenter">
                证明事项
              </div>
              <div class="layui-input-block">
              <textarea type="text" v-model="data.accuser_evidence_witness[index].content" placeholder="请输入证明事项"
                        class="layui-textarea"></textarea>
              </div>
            </div>

            <div class="layui-form-item" pane style="margin-top: -10px;">
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <label class="layui-form-label">证人名称</label>
                <div class="layui-input-block">
                  <div class="layui-input-inline" style="width:70%;margin-left: 0">
                    <input type="text" placeholder="请输入证人姓名" class="layui-input"
                           v-model="data.accuser_evidence_witness[index].witness_name">
                  </div>
                  <div class="layui-input-inline" style="width:30%;margin-left: 0">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.accuser_evidence_witness[index].witness_type"
                                    :options="data.witness_type" placeholder="请选择证人类型"
                                    style="line-height:16px;min-height: 38px"></VueMultiselect>
                  </div>
                </div>
              </div>
            </div>

            <template v-for="(item, QAindex) in data.accuser_evidence_witness[index].witness_testimony" :key="QAindex">
              <div class="layui-form-item" pane style="margin-top: -10px;">

                <div class="layui-inline" style="width: 100%;">
                  <div class="layui-input-inline" style="margin-left:0px;margin-top:8px;">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.accuser_evidence_witness[index].witness_testimony[QAindex].quizzer"
                                    :options="getQuizzerName" placeholder="请选择提问者"
                                    style="width: 210px; line-height:16px;min-height: 38px"></VueMultiselect>

                  </div>
                  <div class="layui-input-block">
                      <textarea type="text" v-model="data.accuser_evidence_witness[index].witness_testimony[QAindex].question"
                                                  placeholder="请选择或输入问题" autocomplete="off"
                                                  style="width: 85%;float: left;min-height: 50px"
                                                  class="layui-textarea"></textarea>
                    <button type="button"
                            @click="select_question(index,QAindex)"
                            class="layui-btn layui-btn-normal"
                            style="height:54px;width:15%"
                            data-type="text">
                      选择问题
                    </button>
                  </div>
                </div>
              </div>
              <div class="layui-form-item" pane style="margin-top: -10px;">
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                  <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.accuser_evidence_witness[index].witness_testimony[QAindex].responder"
                                    :options="getResponderName" placeholder="请选择回答者"
                                    style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div" style="max-width: 1500px">
                  <textarea type="text" v-model="data.accuser_evidence_witness[index].witness_testimony[QAindex].answer"
                            placeholder="请输入回答" autocomplete="off"
                            style="width: 85%;float: left;min-height:100px"
                            class="layui-textarea"></textarea>

                      <button @click="add_component('witnessQA',index,QAindex+1)" type="button"
                              class="layui-btn layui-btn-sm"
                              style="height:100px;width:7.5%"
                              data-type="text">
                        <i class="layui-icon">&#xe654;</i>
                      </button>
                      <button @click="delete_component('witnessQA',index,QAindex)" type="button"
                              class="layui-btn layui-btn-sm layui-btn-danger"
                              style="float: right;height:100px;width:7.5%"
                              data-type="text">
                        <i class="layui-icon">&#xe640;</i>
                      </button>

                    </div>
                  </div>

                </div>
              </div>
            </template>

            <div class="layui-form-item" style="width:100%;margin-top: -10px;">
              <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                      @click="add_component('accuser_evidence_witness',index+1)"> 添加人证
              </button>
              <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs"
                      style="margin-left:5px" @click="delete_component('accuser_evidence_witness',index)"> 删除人证
              </button>
            </div>
          </template>
        </div>

      </form>
    </div>
  </div>

  <fieldset class="layui-elem-field layui-field-title" id="defendant_and_other_accuser_query" style="margin-top:35px">
    <legend>被告及其他当事人质证</legend>
    <div class="layui-field-box">
      <div class="layui-card">
        <div class="layui-card-body">
          <form class="layui-form layui-form-pane">
            <div class="layui-form-item" pane>
              <div class="layui-form-label ">
                审判员
              </div>
              <div class="layui-input-block">
                <textarea class="layui-textarea" v-model="data.judge_defendant_and_other_accuser_query"
                          style="height: 38px;min-height: 38px"></textarea>
              </div>
            </div>

            <template v-for="(item,index) in data.defendant_and_other_accuser_query" :key="index">
              <div class="layui-form-item" pane>
                <div class="layui-form-label">
                  请选择质证人
                </div>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <VueMultiselect :option-height="38" :show-labels="false"
                                      v-model="data.defendant_and_other_accuser_query[index].name"
                                      :options=getCrossExaminationName placeholder="请选择质证人"
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
                    <div class="myselect-div" style="max-width: 1440px">
                      <VueMultiselect :option-height="38" :show-labels="false"
                                      v-model="data.defendant_and_other_accuser_query[index].evidence"
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
                      <input type="radio" lay-ignore value="1"
                             v-model="data.defendant_and_other_accuser_query[index].facticity"
                             class="myradio"><label>是</label>
                      <input type="radio" lay-ignore value="2"
                             v-model="data.defendant_and_other_accuser_query[index].facticity"
                             class="myradio" style="margin-left: 15px;"><label>否</label>
                    </div>
                  </div>
                  <div class="layui-input-inline" style="width:33%;margin-left: 0">
                    <div class="myradiomargin">
                      <label>合法性：</label>
                      <input type="radio" lay-ignore value="1"
                             v-model="data.defendant_and_other_accuser_query[index].legality"
                             class="myradio"><label>是</label>
                      <input type="radio" lay-ignore value="2"
                             v-model="data.defendant_and_other_accuser_query[index].legality"
                             class="myradio" style="margin-left: 15px;"><label>否</label>
                    </div>
                  </div>
                  <div class="layui-input-inline" style="width:34%;margin-left: 0">
                    <div class="myradiomargin">
                      <label>相关性：</label>
                      <input type="radio" lay-ignore value="1"
                             v-model="data.defendant_and_other_accuser_query[index].relevance"
                             class="myradio"><label>是</label>
                      <input type="radio" lay-ignore value="2"
                             v-model="data.defendant_and_other_accuser_query[index].relevance"
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
              <textarea v-model="data.defendant_and_other_accuser_query[index].fact_reason"
                        placeholder="请输入事实和理由"
                        class="layui-textarea"></textarea>
                </div>
              </div>

              <div class="layui-form-item" style="width:100%;margin-top: -10px;">
                <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                        @click="add_component('defendant_and_other_accuser_query',index+1)"> 添加质证
                </button>
                <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs"
                        style="margin-left:5px"
                        @click="delete_component('defendant_and_other_accuser_query',index)"> 删除质证
                </button>
              </div>
            </template>


          </form>
        </div>
      </div>
    </div>
  </fieldset>


  <fieldset class="layui-elem-field layui-field-title" id="2" style="margin-top:28px">
    <legend></legend>
    <div class="layui-field-box">
      <div class="layui-card">
        <div class="layui-card-body">
          <form class="layui-form layui-form-pane">
          <div class="layui-form-item" style="margin-top:10px" pane>
            <label class="layui-form-label">被告是否举证</label>
            <div class="layui-input-block">
              <div class="myradiomargin">
                <input type="radio" name="is_defendant_evidence" lay-ignore v-model="setIsDefendantEvidence"
                       class="myradio"
                       value="1"><label>是 </label>
                <input type="radio" name="is_defendant_evidence" lay-ignore v-model="setIsDefendantEvidence"
                       class="myradio" value="2"
                       style="margin-left: 15px;"><label>否</label>
              </div>
            </div>
          </div>
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
      defendant_and_other_accuser_query: [
        {
          name: [], //质证者姓名
          evidence: [], //证据名称
          fact_reason: "", //真实性、合法性和相关性的事实和理由(被告质证的事实和理由)
          facticity: "1", //真实性
          legality: "1", //合法性
          relevance: "1", //关联性
        }
      ],


      // "serial":"证据编号",
      // "evidence_type":"证据类型（证人证言）",
      // "evidence": "证据名称",
      // "content": "证明事项",
      // "witness_name":"证人姓名",
      // "witness_type":" 证人类型（证人/鉴定人/勘验人）",
      // "witness_testimony":[{
      //   "quizzer":"提问者（审判员/原告/被告/第三人），需要标明身份，例如：张三（原告）",
      //   "question":"问题",
      //   "responder":"回答者（证人/鉴定人/勘验人/原告/被告/第三人，需要标明身份，例如：李四（证人））",
      //   "answer":"答案"
      // }]
      accuser_evidence_witness: [
        {
          serial: 1,//证据序号，自增
          evidence: "",
          witness_name: "",
          witness_type: "",
          content: "",
          witness_testimony: [{
            quizzer: "",
            question: "",
            responder: "",
            answer: ""
          }]
        }
      ],
      witness_type: ["证人", "鉴定人", "勘验人"],
      is_defendant_evidence:"2",
      accuser_is_witness:"1",
      judge_defendant_and_other_accuser_query:"被告及其他当事人对原告提交的证据进行质证。",
      judge_accuser_evidence:"下面进行举证质证，首先原告进行举证。",
  }
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "accuserShowInfo" in wholeItem) {
      data = wholeItem.accuserShowInfo
    }
    return {data: data}
  },
  mounted() {
    window.layui.use("table",  () =>{
      window.layui.table.on('tool(questionTable)',  (obj) =>{
        let witnessIndex=obj.data.witness_index
        let QAIndex=obj.data.QAindex
        this.data.accuser_evidence_witness[witnessIndex].witness_testimony[QAIndex].question=obj.data.question
        window.layer.close(window.layer.index)
        })
    })

  },
  computed: {

    //组合 原告、被告以及第三人
    getCrossExaminationName: {
      get() {
        let defendant = this.$store.state.defendant_item.map(e => (e.defendant_short == '' ? e.defendant : e.defendant_short) + "（被告）").filter(i => i && i != "（被告）")
        let accuser = this.$store.state.plaintiff_item.map(e => (e.accuser_short == '' ? e.accuser : e.accuser_short) + "（原告）").filter(i => i && i != "（原告）")
        let thirdparty = this.$store.state.third_party_item.map(e => (e.third_party_short == '' ? e.third_party : e.third_party_short) + "（第三人）").filter(i => i && i != "（第三人）")
        return accuser.concat(defendant).concat(thirdparty)
      }
    },
    getAccuserName: {
      get() {
        return this.$store.state.plaintiff_item.map(e => e.accuser_short == '' ? e.accuser : e.accuser_short).filter(i => i && i.trim())
      }
    },
    //获取证据名称
    getProofPlaintiff: {
      get() {
        let option_label = this.data.accuser_evidence.filter(i => i.evidence).map(e => {
          return "证据" + this.numberToChinese(e.serial) + "：" + e.evidence;
        })
        let witness_label = this.data.accuser_evidence_witness.filter( i => i.evidence).map(e =>{
          return "证据" + this.numberToChinese(e.serial) + "：" + e.evidence;
        })
        // let optionn_label={evidence_serial:evidence_serial,name_serial:name_serial}

        return [{evidence: "全选证据", option_label: option_label.concat(witness_label)}]
      },
    },
    getQuizzerName: {
      get() {
        let defendant = this.$store.state.defendant_item.map(e => (e.defendant_short == '' ? e.defendant : e.defendant_short) + "（被告）").filter(i => i && i != "（被告）")
        let accuser = this.$store.state.plaintiff_item.map(e => (e.accuser_short == '' ? e.accuser : e.accuser_short) + "（原告）").filter(i => i && i != "（原告）")
        let thirdparty = this.$store.state.third_party_item.map(e => (e.third_party_short == '' ? e.third_party : e.third_party_short) + "（第三人）").filter(i => i && i != "（第三人）")
        let judge = this.$store.state.judge_name.filter(i => i && i.trim()).map(e => e + "（审判员）")
        return judge.concat(accuser).concat(defendant).concat(thirdparty)
      }
    },
    getResponderName: {
      get() {
        let defendant = this.$store.state.defendant_item.map(e => (e.defendant_short == '' ? e.defendant : e.defendant_short) + "（被告）").filter(i => i && i != "（被告）")
        let accuser = this.$store.state.plaintiff_item.map(e => (e.accuser_short == '' ? e.accuser : e.accuser_short) + "（原告）").filter(i => i && i != "（原告）")
        let thirdparty = this.$store.state.third_party_item.map(e => (e.third_party_short == '' ? e.third_party : e.third_party_short) + "（第三人）").filter(i => i && i != "（第三人）")
        return ["证人","鉴定人","勘验人"].concat(accuser).concat(defendant).concat(thirdparty)
      }
    },
    setIsDefendantEvidence: {
      get() {
        return this.$store.state.is_defendant_evidence
      },
      set(value) {
        this.data.is_defendant_evidence = value
        this.$store.commit('setIsDefendantEvidence', value)
      }
    }
  },
  components: {
    VueMultiselect
  },
  methods: {
    // questionSearch(){
    //   this.axios.get('/record/witness/question',{ params :{keyword:1}}).then((result) => {
    //     console.log(result)
    //   })
    // },
    select_question(witness_index,QAindex){
      window.layui.use('table', ()  => {
        var table = window.layui.table;
        //{serial:0,question:"测试用",witness_index:witness_index,QAindex:QAindex}
        let questionList=[]
        this.axios.get('/record/witness/question').then((result) =>{
          for(let i = 0 ;i < result.data.data.length;i++){
            let temp={}
            temp['serial']=result.data.data[i].serial
            temp['question']=result.data.data[i].question
            temp['witness_index']=witness_index
            temp['QAindex']=QAindex
            questionList.push(temp)
          }

          window.layer.open({
            type: 1,
            area: ['70%', '60%'],
            content:
                '<form class="layui-form" >'+
                '<div class="layui-form-item" style="margin: 10px 5px">\n' +
                '     <div class="layui-inline">\n' +
                '         <input id="keyword" class="layui-input" type="text" placeholder="请输入关键字" autocomplete="off"/>\n' +
                '     </div>\n' +
                '     <div class="layui-inline">\n' +
                '          <button type="button" class="layui-btn icon-btn" onclick="questionSearch()"><i class="layui-icon">&#xe615;</i>查询</button>\n' +
                '     </div>\n' +
                '</div>'+
                '     <div><table id="questionTable" lay-filter="questionTable"></table> </div>'+
                '</form>', //先定义一个数据表格的div框
            success:  () =>{
              table.render({
                elem: '#questionTable',
                data: questionList,
                limit:50,
                cols: [[
                  {field: 'serial', align:'center', sort: true, title: '序号',width: 80},
                  {field: 'question', align:'left', sort: false, title: '问题列表'},
                  {field: 'witness_index', align:'center',sort: false, title: '证人下标',hide:true},
                  {field: 'QAindex', align:'center',sort: false, title: '问题下标',hide:true},
                  {align: 'center', toolbar: '#questionBar', title: '操作',width: 150}
                ]]
              });
            }
          });
        })
      })
    },
    add_component(datatype, index, QAindex) {
      switch (datatype) {
        case "accuser_evidence":
          //accuser_evidence 模块的数据加入
          // this.data.accuser_evidence.push({
          //   serial: this.data.accuser_evidence.length+1,//证据序号，自增
          //   evidence: "", //证据名称(原告举证表 原告提出)
          //   content: "", //证明事项(原告举证表 原告提出)
          //   evidence_type: ""//证据类型，原件或者复印件
          // });
          this.data.accuser_evidence.splice(index, 0, {
            serial: 0,//证据序号，自增
            evidence: "", //证据名称(原告举证表 原告提出)
            content: "", //证明事项(原告举证表 原告提出)
            evidence_type: ""//证据类型，原件或者复印件
          })
          for (let i = 0; i < this.data.accuser_evidence.length; i++) {
            this.data.accuser_evidence[i].serial = i + 1
          }
          for (let i = 0; i < this.data.accuser_evidence_witness.length; i++) {
            this.data.accuser_evidence_witness[i].serial = this.data.accuser_evidence.length + i + 1;
          }

          break;
        case "defendant_and_other_accuser_query":
          //这里是值对应的处理
          this.data.defendant_and_other_accuser_query.splice(index, 0, {
            name: [], //被告姓名
            evidence: [], //证据名称 （被告质证）
            facticity: "1", //真实性
            legality: "1", //合法性
            relevance: "1", //关联性
            fact_reason: "", //事实和理由
          });
          break;
        case "accuser_evidence_witness":
          this.data.accuser_evidence_witness.splice(index, 0, {
            serial: 1,//证据序号，自增
            evidence: "",
            witness_name: "",
            witness_type: "",
            content: "",
            witness_testimony: [{
              quizzer: "",
              question: "",
              responder: "",
              answer: ""
            }]
          });
          for (let i = 0; i < this.data.accuser_evidence_witness.length; i++) {
            this.data.accuser_evidence_witness[i].serial = this.data.accuser_evidence.length + i + 1;
          }
          break;
        case "witnessQA":
          this.data.accuser_evidence_witness[index].witness_testimony.splice(QAindex, 0, {
                quizzer: "",
                question: "",
                responder: "",
                answer: ""
              }
          )
          break;
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },
    delete_component(datatype, index, QAindex) {
      switch (datatype) {
        case "accuser_evidence":
          if (this.data.accuser_evidence.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          //这里是值对应的处理
          this.data.accuser_evidence.splice(index, 1);
          for (let i = 0; i < this.data.accuser_evidence.length; i++) {
            this.data.accuser_evidence[i].serial = i + 1
          }
          for (let i = 0; i < this.data.accuser_evidence_witness.length; i++) {
            this.data.accuser_evidence_witness[i].serial = this.data.accuser_evidence.length + i + 1;
          }
          break;
        case "defendant_and_other_accuser_query":
          if (this.data.defendant_and_other_accuser_query.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          //这里是值对应的处理
          this.data.defendant_and_other_accuser_query.splice(index, 1);
          break;
        case "accuser_evidence_witness":
          if (this.data.accuser_evidence_witness.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.accuser_evidence_witness.splice(index, 1);
          for (let i = 0; i < this.data.accuser_evidence_witness.length; i++) {
            this.data.accuser_evidence_witness[i].serial = this.data.accuser_evidence.length + i + 1;
          }
          break;
        case "witnessQA":
          if (this.data.accuser_evidence_witness[index].witness_testimony.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.accuser_evidence_witness[index].witness_testimony.splice(QAindex, 1,)
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
        for (i = 0; i < a[1].length; i++)
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
    },
    accuser_is_witness: {
      handler() {
        if (this.data.accuser_is_witness == '1') {
          for (let i = 0; i < this.data.accuser_evidence_witness.length; i++) {
            this.data.accuser_evidence_witness[i].serial = this.data.accuser_evidence.length + i + 1;
          }
        }
      },
      immediate: true
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
