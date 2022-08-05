<template >
  <div class="layui-card" >
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item" pane>
          <label class="layui-form-label" style="text-align: center">审判员</label>
          <div class="layui-input-block">
              <textarea type="text" class="layui-textarea" v-model="data.judge_defendant_evidence"
                        style="height:38px;min-height:38px"></textarea>
          </div>
        </div>
          <template v-for="(item ,index) in data.defendant_and_third_evidence" :key="index">

            <div class="layui-form-item" pane>
              <div class="layui-form-label">
                请选择被告
              </div>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.defendant_and_third_evidence[index].name"
                                    :options=getDefendantThirdPartyName placeholder="请选择被告"
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
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <label class="layui-form-label">证据 {{ numberToChinese(item.serial) }}</label>
                <div class="layui-input-block">
                  <div class="layui-input-inline" style="width:30%;margin-left: 0">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.defendant_and_third_evidence[index].evidence_type"
                                    :options="['复印件','原件']" placeholder="请选择证据类型"
                                    style="line-height: 16px;width: 100%; min-height: 38px;"></VueMultiselect>
                  </div>
                  <div class="layui-input-inline" style="width:70%;margin-left: 0">
                    <input type="text" placeholder="请输入证据名称" class="layui-input"
                           v-model="data.defendant_and_third_evidence[index].evidence">
                  </div>
                </div>
              </div>
            </div>

            <div class="layui-form-item" pane style="margin-top: -10px;">
              <div class="layui-form-label divcenter">
                证明事项
              </div>
              <div class="layui-input-block">
                <textarea type="text" v-model="data.defendant_and_third_evidence[index].content"
                       placeholder="请输入证据证明事项"
                       class="layui-textarea"></textarea>
              </div>
            </div>

            <div class="layui-form-item" style="width:100%;margin-top: -10px;">
              <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                      @click="add_component('defendant_and_third_evidence',index+1)"> 添加证据
              </button>
              <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left:5px"
                      @click="delete_component('defendant_and_third_evidence',index)" v-if="index != 0"> 删除证据
              </button>
            </div>
          </template>

        <div class="layui-form-item" pane>
          <label class="layui-form-label">是否有证人出庭</label>
          <div class="layui-input-block">
            <div class="myradiomargin">
              <input type="radio" lay-ignore="" name="iswitness"
                     v-model="data.defendant_is_witness" class="myradio" value="1"
              ><label>是</label>
              <input type="radio" lay-ignore="" name="iswitness"
                     v-model="data.defendant_is_witness" class="myradio" value="2"
                     style="margin-left: 15px;"><label>否</label>
            </div>
          </div>
        </div>

        <div id="witness" v-if="data.defendant_is_witness=='1'">
          <template  v-for="(item ,index) in data.defendant_and_third_evidence_witness" :key="index">
            <div class="layui-form-item" pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <label class="layui-form-label">证据 {{ numberToChinese(item.serial) }}</label>
                <div class="layui-input-block">
                  <input type="text" placeholder="请输入证据名称" class="layui-input"
                         v-model="data.defendant_and_third_evidence_witness[index].evidence">
                </div>
              </div>
            </div>

            <div class="layui-form-item" pane style="margin-top: -10px;">
              <div class="layui-form-label divcenter">
                证明事项
              </div>
              <div class="layui-input-block">
              <textarea type="text" v-model="data.defendant_and_third_evidence_witness[index].content" placeholder="证据证明事项"
                        class="layui-textarea"></textarea>
              </div>
            </div>

            <div class="layui-form-item" pane style="margin-top: -10px;">
              <div class="layui-inline" style="width: 50%">
                <label class="layui-form-label" style="width: 210px">证人名称</label>
                <div class="layui-input-inline" style="margin-left: 210px">
                  <input type="text" placeholder="请输入证据名称" class="layui-input"
                         v-model="data.defendant_and_third_evidence_witness[index].witness_name">
                </div>
              </div>
              <div class="layui-inline" style="width: 50% ">
                <label class="layui-form-label" style="width: 210px">证人类型</label>
                <div class="layui-input-inline" style="margin-left: 210px">
                  <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.defendant_and_third_evidence_witness[index].witness_type"
                                  :options="data.witness_type" placeholder="请选择证人类型"
                                  style="line-height:16px;min-height: 38px"></VueMultiselect>
                </div>
              </div>
            </div>


            <template v-for="(item, QAindex) in data.defendant_and_third_evidence_witness[index].witness_testimony" :key="QAindex">
              <div class="layui-form-item" pane style="margin-top: -10px;">

                <div class="layui-inline" style="width: 100%;">
                  <div class="layui-input-inline" style="margin-left:0px;" >
                    <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.defendant_and_third_evidence_witness[index].witness_testimony[QAindex].quizzer"
                                    :options="getQuizzerName" placeholder="请选择提问者"
                                    style="width: 210px; line-height:16px;min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <VueMultiselect :option-height="38" :show-labels="false"
                                      v-model="data.defendant_and_third_evidence_witness[index].witness_testimony[QAindex].question"
                                      :options=data.question_list placeholder="请选择或输入问题列表"
                                      :searchable="true"
                                      :taggable="true"
                                      @tag="add_question"
                                      style="width:85%;line-height: 16px; min-height: 38px;float:left;"></VueMultiselect>
                      <button @click="add_component('witnessQA',index,QAindex+1)" type="button" class="layui-btn layui-btn-sm"
                              data-type="text" >
                        <i class="layui-icon">&#xe654;</i>
                      </button>

                      <button @click="delete_component('witnessQA',index,QAindex)" type="button"
                              class="layui-btn layui-btn-sm layui-btn-danger"
                              data-type="text" style="float: right;">
                        <i class="layui-icon">&#xe640;</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-form-item" pane style="margin-top: -10px;">
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                  <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                    <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.defendant_and_third_evidence_witness[index].witness_testimony[QAindex].responder"
                                    :options="getResponderName" placeholder="请选择回答者"
                                    style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                  <textarea type="text" v-model="data.defendant_and_third_evidence_witness[index].witness_testimony[QAindex].answer" placeholder="回答" autocomplete="off"
                            class="layui-textarea"></textarea>


                    </div>
                  </div>
                </div>
              </div>
            </template>

            <div class="layui-form-item" style="width:100%;margin-top: -10px;">
              <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                      @click="add_component('defendant_and_third_evidence_witness',index+1)"> 添加人证
              </button>
              <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs"
                      style="margin-left:5px" @click="delete_component('defendant_and_third_evidence_witness',index)"> 删除人证
              </button>
            </div>
          </template>
        </div>

      </form>
    </div>
  </div>

    <fieldset class="layui-elem-field layui-field-title" id="accuser_query" style="margin-top:28px">
      <legend>被告及其他当事人质证</legend>
      <div class="layui-field-box">
        <div class="layui-card">
          <div class="layui-card-body">
            <form class="layui-form layui-form-pane">

              <div class="layui-form-item" pane>
                <label class="layui-form-label" style="text-align: center">审判员</label>
                <div class="layui-input-block">
                        <textarea type="text" class="layui-textarea" v-model="data.judge_accuser_and_other_defendant_query"
                                  style="height:38px;min-height:38px"></textarea>
                </div>
              </div>

            <template v-for="(item,index) in data.accuser_and_other_defendant_query" :key="index">
              <div class="layui-form-item" pane>
                <div class="layui-form-label">
                  请选择质证人
                </div>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <VueMultiselect :option-height="38" :show-labels="false"
                                      v-model="data.accuser_and_other_defendant_query[index].name"
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
                    <div class="myselect-div">
                      <VueMultiselect :option-height="38" :show-labels="false"
                                      v-model="data.accuser_and_other_defendant_query[index].evidence"
                                      :options=getProofDefendant placeholder="请选择证据"
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
                        <input type="radio" lay-ignore value="1" v-model="data.accuser_and_other_defendant_query[index].facticity"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2" v-model="data.accuser_and_other_defendant_query[index].facticity"
                               class="myradio" style="margin-left: 15px;"><label>否</label>
                      </div>
                    </div>
                    <div class="layui-input-inline" style="width:33%;margin-left: 0">
                      <div class="myradiomargin">
                        <label>合法性：</label>
                        <input type="radio" lay-ignore value="1" v-model="data.accuser_and_other_defendant_query[index].legality"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2" v-model="data.accuser_and_other_defendant_query[index].legality"
                               class="myradio" style="margin-left: 15px;"><label>否</label>
                      </div>
                    </div>
                    <div class="layui-input-inline" style="width:34%;margin-left: 0">
                      <div class="myradiomargin">
                        <label>相关性：</label>
                        <input type="radio" lay-ignore value="1" v-model="data.accuser_and_other_defendant_query[index].relevance"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2" v-model="data.accuser_and_other_defendant_query[index].relevance"
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
              <textarea v-model="data.accuser_and_other_defendant_query[index].fact_reason"
                        placeholder="请输入事实和理由"
                        class="layui-textarea"></textarea>
                </div>
              </div>

                <div class="layui-form-item" style="width:100%;margin-top: -10px;">
                  <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                          @click="add_component('accuser_and_other_defendant_query',index+1)"> 添加质证
                  </button>
                  <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" v-if="index!=0" style="margin-left:5px"
                          @click="delete_component('accuser_and_other_defendant_query',index)"> 删除质证
                  </button>
                </div>
              </template>

          </form>
        </div>
      </div>
    </div>
  </fieldset>

  <div v-if="$store.state.is_counterclaim=='1'" >
    <fieldset class="layui-elem-field layui-field-title" id="counterclaim_accuser_evidence">
      <legend>反诉原告举证</legend>
      <div class="layui-field-box">
        <div class="layui-card">
          <div class="layui-card-body">
            <form class="layui-form layui-form-pane">
<!--                <div class="site-border-cyan" style="width:80%">-->
<!--                  <hr class="hr-solid-content" data-content="反诉原告进行举证">-->
<!--                </div>-->

                <div class="layui-form-item" pane>
                  <label class="layui-form-label" style="text-align: center">审判员</label>
                  <div class="layui-input-block">
                    <textarea type="text" class="layui-textarea" style="height: 38px;min-height: 38px">反诉原告进行举证</textarea>
                  </div>
                </div>

                <template v-for="(item ,index) in data.counterclaim_accuser_evidence" :key="index">
                  <div class="layui-form-item" pane>
                    <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                      <label class="layui-form-label">证据 {{ numberToChinese(item.serial) }}</label>
                      <div class="layui-input-block">
                        <div class="layui-input-inline" style="width:30%;margin-left: 0">
                          <VueMultiselect :option-height="38" :show-labels="false"
                                          v-model="data.counterclaim_accuser_evidence[index].evidence_type"
                                          :options="['复印件','原件']" placeholder="请选择证据类型"
                                          style="line-height: 16px;width: 100%; min-height: 38px;"></VueMultiselect>
                        </div>
                        <div class="layui-input-inline" style="width:70%;margin-left: 0">
                          <input type="text" placeholder="证据名称" class="layui-input"
                                 v-model="data.counterclaim_accuser_evidence[index].evidence">
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="layui-form-item" pane style="margin-top: -10px;">
                    <div class="layui-form-label">
                      证明事项
                    </div>
                    <div class="layui-input-block">
                      <textarea type="text" v-model="data.counterclaim_accuser_evidence[index].content"
                             placeholder="证据证明事项"
                             class="layui-textarea"></textarea>
                    </div>
                  </div>

                  <div class="layui-form-item" style="width:100%;margin-top: -10px;">
                    <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                            @click="add_component('counterclaim_accuser_evidence',index+1)"> 添加证据
                    </button>
                    <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left:5px"
                            @click="delete_component('counterclaim_accuser_evidence',index)"> 删除证据
                    </button>
                  </div>
                </template>

            </form>
          </div>
        </div>
      </div>
    </fieldset>
  </div>

  <div v-if="$store.state.is_counterclaim=='1'" >
    <fieldset class="layui-elem-field layui-field-title" id="counterclaim_defendant_query">
      <legend>反诉被告质证</legend>
      <div class="layui-field-box">
        <div class="layui-card">
          <div class="layui-card-body">
            <form class="layui-form layui-form-pane">

              <div class="layui-form-item" pane>
                <label class="layui-form-label" style="text-align: center">审判员</label>
                <div class="layui-input-block">
              <textarea type="text" class="layui-textarea"
                        style="height: 38px;min-height: 38px">反诉被告对反诉原告提交的证据进行质证</textarea>
                </div>
              </div>
              <template v-for="(item,index) in data.counterclaim_defendant_query" :key="index">
                <div class="layui-form-item" pane>
                  <div class="layui-form-label">
                    请选择反诉被告
                  </div>
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                    <div class="layui-input-block">
                      <div class="myselect-div">
                        <VueMultiselect :option-height="38" :show-labels="false"
                                        v-model="data.counterclaim_defendant_query[index].counterclaim_defendant"
                                        :options=getCounterDefendantName placeholder="请选择反诉被告"
                                        group-label="accuser"
                                        :group-select="true"
                                        group-values="accuser_name"
                                        :multiple="true"
                                        :close-on-select="false"
                                        style="line-height: 16px; min-height: 38px;float:left;"></VueMultiselect>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="layui-form-item" pane style="margin-top: -10px;">
                  <div class="layui-form-label">
                    请选择反诉原告提交的证据
                  </div>
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                    <div class="layui-input-block">
                      <div class="myselect-div">
                        <VueMultiselect :option-height="38" :show-labels="false"
                                        v-model="data.counterclaim_defendant_query[index].evidence"
                                        :options=getProofOfCounterAccuser placeholder="请选择证据"
                                        group-label="evidence"
                                        :group-select="true"
                                        group-values="option_label"
                                        :multiple="true"
                                        :close-on-select="false"
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
                               v-model="data.counterclaim_defendant_query[index].facticity"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2"
                               v-model="data.counterclaim_defendant_query[index].facticity"
                               class="myradio" style="margin-left: 15px;"><label>否</label>
                      </div>
                    </div>
                    <div class="layui-input-inline" style="width:33%;margin-left: 0">
                      <div class="myradiomargin">
                        <label>合法性：</label>
                        <input type="radio" lay-ignore value="1" v-model="data.counterclaim_defendant_query[index].legality"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2" v-model="data.counterclaim_defendant_query[index].legality"
                               class="myradio" style="margin-left: 15px;"><label>否</label>
                      </div>
                    </div>
                    <div class="layui-input-inline" style="width:34%;margin-left: 0">
                      <div class="myradiomargin">
                        <label>相关性：</label>
                        <input type="radio" lay-ignore value="1"
                               v-model="data.counterclaim_defendant_query[index].relevance"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2"
                               v-model="data.counterclaim_defendant_query[index].relevance"
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
              <textarea v-model="data.counterclaim_defendant_query[index].counterclaim_defendant_query_fact_reason"
                        placeholder="理由"
                        class="layui-textarea"></textarea>
                  </div>
                </div>

                <div class="layui-form-item" style="width:100%;margin-top: -10px;">
                  <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                          @click="add_component('counterclaim_defendant_query',index+1)"> 添加反诉被告质证
                  </button>
                  <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left:5px" v-if="index!=0"
                          @click="delete_component('counterclaim_defendant_query',index)"> 删除反诉被告质证
                  </button>
                </div>
              </template>

            </form>
          </div>
        </div>
      </div>
    </fieldset>
  </div>

  <div v-if="$store.state.is_counterclaim=='1'" >
    <fieldset class="layui-elem-field layui-field-title" id="counterclaim_defendant_evidence">
      <legend>反诉被告举证</legend>
      <div class="layui-field-box">
        <div class="layui-card">
          <div class="layui-card-body">
            <form class="layui-form layui-form-pane">

              <div class="layui-form-item" pane>
                <label class="layui-form-label" style="text-align: center">审判员</label>
                <div class="layui-input-block">
              <textarea type="text" class="layui-textarea"
                        style="height: 38px;min-height: 38px">反诉被告对反诉原告提交的证据进行质证</textarea>
                </div>
              </div>
              <template v-for="(item,index) in data.counterclaim_defendant_query" :key="index">
                <div class="layui-form-item" pane>
                  <div class="layui-form-label">
                    请选择反诉被告
                  </div>
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                    <div class="layui-input-block">
                      <div class="myselect-div">
                        <VueMultiselect :option-height="38" :show-labels="false"
                                        v-model="data.counterclaim_defendant_query[index].counterclaim_defendant"
                                        :options=getCounterDefendantName placeholder="请选择反诉被告"
                                        group-label="accuser"
                                        :group-select="true"
                                        group-values="accuser_name"
                                        :multiple="true"
                                        :close-on-select="false"
                                        style="line-height: 16px; min-height: 38px;float:left;"></VueMultiselect>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="layui-form-item" pane style="margin-top: -10px;">
                  <div class="layui-form-label">
                    请选择反诉原告提交的证据
                  </div>
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                    <div class="layui-input-block">
                      <div class="myselect-div">
                        <VueMultiselect :option-height="38" :show-labels="false"
                                        v-model="data.counterclaim_defendant_query[index].evidence"
                                        :options=getProofOfCounterAccuser placeholder="请选择证据"
                                        group-label="evidence"
                                        :group-select="true"
                                        group-values="option_label"
                                        :multiple="true"
                                        :close-on-select="false"
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
                               v-model="data.counterclaim_defendant_query[index].facticity"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2"
                               v-model="data.counterclaim_defendant_query[index].facticity"
                               class="myradio" style="margin-left: 15px;"><label>否</label>
                      </div>
                    </div>
                    <div class="layui-input-inline" style="width:33%;margin-left: 0">
                      <div class="myradiomargin">
                        <label>合法性：</label>
                        <input type="radio" lay-ignore value="1" v-model="data.counterclaim_defendant_query[index].legality"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2" v-model="data.counterclaim_defendant_query[index].legality"
                               class="myradio" style="margin-left: 15px;"><label>否</label>
                      </div>
                    </div>
                    <div class="layui-input-inline" style="width:34%;margin-left: 0">
                      <div class="myradiomargin">
                        <label>相关性：</label>
                        <input type="radio" lay-ignore value="1"
                               v-model="data.counterclaim_defendant_query[index].relevance"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2"
                               v-model="data.counterclaim_defendant_query[index].relevance"
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
              <textarea v-model="data.counterclaim_defendant_query[index].counterclaim_defendant_query_fact_reason"
                        placeholder="理由"
                        class="layui-textarea"></textarea>
                  </div>
                </div>

                <div class="layui-form-item" style="width:100%;margin-top: -10px;">
                  <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                          @click="add_component('counterclaim_defendant_query',index+1)"> 添加反诉被告质证
                  </button>
                  <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" v-if="index!=0" style="margin-left:5px"
                          @click="delete_component('counterclaim_defendant_query',index)"> 删除反诉被告质证
                  </button>
                </div>
              </template>

            </form>
          </div>
        </div>
      </div>
    </fieldset>
  </div>

  <div v-if="$store.state.is_counterclaim=='1'" >
    <fieldset class="layui-elem-field layui-field-title" id="counterclaim_accuser_query">
      <legend>反诉原告质证</legend>
      <div class="layui-field-box">
        <div class="layui-card">
          <div class="layui-card-body">
            <form class="layui-form layui-form-pane">
              <div class="layui-form-item" pane>
                <label class="layui-form-label" style="text-align: center">审判员</label>
                <div class="layui-input-block">
              <textarea type="text" class="layui-textarea"
                        style="height: 38px;min-height: 38px">反诉原告对反诉被告提交的证据进行质证</textarea>
                </div>
              </div>

              <template v-for="(item,index) in data.counterclaim_accuser_query" :key="index">
                <div class="layui-form-item" pane>
                  <div class="layui-form-label">
                    请选择反诉原告
                  </div>
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                    <div class="layui-input-block">
                      <div class="myselect-div">
                        <VueMultiselect :option-height="38" :show-labels="false"
                                        v-model="data.counterclaim_accuser_query[index].counterclaim_accuser"
                                        :options=getCounterAccuserName placeholder="请选择反诉原告"
                                        group-label="defendant"
                                        :group-select="true"
                                        group-values="defendant_name"
                                        :multiple="true"
                                        :close-on-select="false"
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
                                        v-model="data.counterclaim_accuser_query[index].evidence"
                                        :options=getProofOfCounterDefendant placeholder="请选择反诉原告提交的证据"
                                        group-label="evidence"
                                        :group-select="true"
                                        group-values="option_label"
                                        :multiple="true"
                                        :close-on-select="false"
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
                        <input type="radio" lay-ignore value="1" v-model="data.counterclaim_accuser_query[index].facticity"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2" v-model="data.counterclaim_accuser_query[index].facticity"
                               class="myradio" style="margin-left: 15px;"><label>否</label>
                      </div>
                    </div>
                    <div class="layui-input-inline" style="width:33%;margin-left: 0">
                      <div class="myradiomargin">
                        <label>合法性：</label>
                        <input type="radio" lay-ignore value="1" v-model="data.counterclaim_accuser_query[index].legality"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2" v-model="data.counterclaim_accuser_query[index].legality"
                               class="myradio" style="margin-left: 15px;"><label>否</label>
                      </div>
                    </div>
                    <div class="layui-input-inline" style="width:34%;margin-left: 0">
                      <div class="myradiomargin">
                        <label>相关性：</label>
                        <input type="radio" lay-ignore value="1" v-model="data.counterclaim_accuser_query[index].relevance"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2" v-model="data.counterclaim_accuser_query[index].relevance"
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
              <textarea v-model="data.counterclaim_accuser_query[index].counterclaim_accuser_query_fact_reason"
                        placeholder="理由"
                        class="layui-textarea"></textarea>
                  </div>
                </div>

                <div class="layui-form-item" style="width:100%;margin-top: -10px;">
                  <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                          @click="add_component('counterclaim_accuser_query',index+1)"> 添加反诉原告质证
                  </button>
                  <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" v-if="index!=0" style="margin-left:5px"
                          @click="delete_component('counterclaim_accuser_query',index)"> 删除反诉原告质证
                  </button>
                </div>
              </template>

            </form>
          </div>
        </div>
      </div>
    </fieldset>
  </div>

  <div v-if="$store.state.is_counterclaim=='1'" >
    <fieldset class="layui-elem-field layui-field-title" id="other_counterclaim_defendant_query">
      <legend>其他反诉被告质证</legend>
      <div class="layui-field-box">
        <div class="layui-card">
          <div class="layui-card-body">
            <form class="layui-form layui-form-pane">
              <template v-for="(item,index) in data.other_counterclaim_defendant_query" :key="index">
                <div class="layui-form-item" pane>
                  <div class="layui-form-label">
                    请选择其他反诉被告
                  </div>
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                    <div class="layui-input-block">
                      <div class="myselect-div">
                        <VueMultiselect :option-height="38" :show-labels="false"
                                        v-model="data.other_counterclaim_defendant_query[index].other_counterclaim_defendant"
                                        :options=getCounterDefendantName placeholder="请选择其他反诉被告"
                                        group-label="accuser"
                                        :group-select="true"
                                        group-values="accuser_name"
                                        :multiple="true"
                                        :close-on-select="false"
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
                                        v-model="data.other_counterclaim_defendant_query[index].evidence"
                                        :options=getProofOfCounterDefendant placeholder="请选择反诉原告提交的证据"
                                        group-label="evidence"
                                        :group-select="true"
                                        group-values="option_label"
                                        :multiple="true"
                                        :close-on-select="false"
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
                               v-model="data.other_counterclaim_defendant_query[index].facticity"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2"
                               v-model="data.other_counterclaim_defendant_query[index].facticity"
                               class="myradio" style="margin-left: 15px;"><label>否</label>
                      </div>
                    </div>
                    <div class="layui-input-inline" style="width:33%;margin-left: 0">
                      <div class="myradiomargin">
                        <label>合法性：</label>
                        <input type="radio" lay-ignore value="1"
                               v-model="data.other_counterclaim_defendant_query[index].legality"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2"
                               v-model="data.other_counterclaim_defendant_query[index].legality"
                               class="myradio" style="margin-left: 15px;"><label>否</label>
                      </div>
                    </div>
                    <div class="layui-input-inline" style="width:34%;margin-left: 0">
                      <div class="myradiomargin">
                        <label>相关性：</label>
                        <input type="radio" lay-ignore value="1"
                               v-model="data.other_counterclaim_defendant_query[index].relevance"
                               class="myradio"><label>是</label>
                        <input type="radio" lay-ignore value="2"
                               v-model="data.other_counterclaim_defendant_query[index].relevance"
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
              <textarea
                  v-model="data.other_counterclaim_defendant_query[index].other_counterclaim_defendant_query_fact_reason"
                  placeholder="理由"
                  class="layui-textarea"></textarea>
                  </div>
                </div>

                <div class="layui-form-item" style="width:100%;margin-top: -10px;">
                  <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                          @click="add_component('other_counterclaim_defendant_query',index+1)"> 添加其他反诉被告质证
                  </button>
                  <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" v-if="index!=0" style="margin-left:5px"
                          @click="delete_component('other_counterclaim_defendant_query',index)"> 删除其他反诉被告质证
                  </button>
                </div>
              </template>

            </form>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>

import VueMultiselect from "vue-multiselect";

export default {
  data() {
    var data = {
      //第一个动态生成的json defendant_and_third_evidence 包含以下3个信息
      defendant_and_third_evidence: [{
        name:[],
        serial: 1,//证据序号，自增
        evidence: "", //证据名称(原告举证表 原告提出)
        content: "", //证明事项(原告举证表 原告提出)
        evidence_type: ""//证据类型，原件或者复印件
      }],
      defendant_is_witness:"1",
      question_list:["问题1","问题2"],
      witness_type:["证人","鉴定人","勘验人"],
      defendant_and_third_evidence_witness: [
        {
          serial:"",
          evidence_type:"",
          evidence: "",
          witness_name:"",
          witness_type:"",
          witness_testimony:[{
            quizzer:"",
            question:"",
            responder:"",
            answer:""
          }]
        }
      ],
      defendant_evidence_fact_reason: "",   //事实和理由(被告举证)
      //第二个动态生成的json accuser_query 包含以下6个信息
      accuser_and_other_defendant_query: [{
        name: [],        //原告及其他被告姓名
        evidence: [],    //证据
        facticity: "1",      //真实性(原告质证)
        legality: "1", //合法性(原告质证)
        relevance: "1",//关联性(原告质证)
        fact_reason: "", //事实和理由(原告质证)
      }],


      //反诉后的答辩情况
      //反诉后第一个部分 反诉原告（被告）进行举证
      counterclaim_accuser_evidence: [
        {
          serial: 1,//证据序号，自增
          evidence: "", //证据名称(原告举证表 原告提出)
          content: "", //证明事项(原告举证表 原告提出)
          evidence_type: ""//证据类型，原件或者复印件
        }
      ],
      //反诉原告提出的证据的 事实和理由
      counterclaim_accuser_evidence_fact_reason: "",
      //反诉后第二个生成部分 反诉被告 (原告) 进行质证
      counterclaim_defendant_query: [
        {
          counterclaim_defendant: [],
          evidence: [],
          facticity: "1",
          legality: "1",
          relevance: "1",
          counterclaim_defendant_query_fact_reason: ""
        }
      ],

      //反诉后第三个生成部分 反诉被告 进行举证
      counterclaim_defendant_evidence: [{
        serial: 1,//证据序号，自增
        evidence: "", //证据名称(原告举证表 原告提出)
        content: "", //证明事项(原告举证表 原告提出)
        evidence_type: ""//证据类型，原件或者复印件
      }],

      counterclaim_defendant_evidence_fact_reason: "",  //事实和理由(反诉被告提出，事实和理由 不是动态添加的)
      //反诉后第四个动态生成的部分 反诉原告质证
      counterclaim_accuser_query: [{
        counterclaim_accuser: [],        //反诉原告姓名
        evidence: [],    //反诉原告质证证据名称
        facticity: "1",      //真实性(反诉原告质证)
        legality: "1", //合法性(反诉原告质证)
        relevance: "1",//关联性(反诉原告质证)
        counterclaim_accuser_query_fact_reason: "", //事实和理由(反诉原告质证 需要动态添加)
      }],
      // 其他反诉被告质证
      other_counterclaim_defendant_query: [
        {
          other_counterclaim_defendant: [],
          evidence: [],
          facticity: "1",
          legality: "1",
          relevance: "1",
          other_counterclaim_defendant_query_fact_reason: ""
        }
      ],
      // counterclaim_accuser_fact_reason:"", //反诉原告 诉讼请求项的事实与理由
      judge_accuser_and_other_defendant_query:"原告及其他被告对被告提交的证据进行质证。",
      judge_defendant_evidence:"被告进行举证",
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "defendantShowInfo" in wholeItem) {
      data = wholeItem.defendantShowInfo
    }
    return {
      data: data
    }
  },
  computed:  {
    getQuizzerName: {
      get() {
        let defendant = this.$store.state.defendant_item.map(e => (e.defendant_short == '' ? e.defendant : e.defendant_short)+"（被告）").filter(i => i && i!= "（被告）")
        let accuser = this.$store.state.plaintiff_item.map(e => (e.accuser_short == '' ? e.accuser : e.accuser_short)+"（原告）").filter(i => i && i!= "（原告）")
        let thirdparty = this.$store.state.third_party_item.map(e => (e.third_party_short == '' ? e.third_party : e.third_party_short)+"（第三人）").filter(i => i && i!= "（第三人）")
        let judge = this.$store.state.judge_name.filter(i => i && i.trim()).map(e => e+"（审判员）")
        let chief_judge_name= this.$store.state.chief_judge_name.filter(i => i && i.trim()).map(e => e+"（审判长）")
        return judge.concat(chief_judge_name).concat(accuser).concat(defendant).concat(thirdparty)
      }
    },
    getResponderName: {
      get() {
        let defendant = this.$store.state.defendant_item.map(e => (e.defendant_short == '' ? e.defendant : e.defendant_short)+"（被告）").filter(i => i && i!= "（被告）")
        let accuser = this.$store.state.plaintiff_item.map(e => (e.accuser_short == '' ? e.accuser : e.accuser_short)+"（原告）").filter(i => i && i!= "（原告）")
        let thirdparty = this.$store.state.third_party_item.map(e => (e.third_party_short == '' ? e.third_party : e.third_party_short)+"（第三人）").filter(i => i && i!= "（第三人）")
        return ["证人"].concat(accuser).concat(defendant).concat(thirdparty)
      }
    },
    getDefendantThirdPartyName: {
      get() {
        let defendant = this.$store.state.defendant_item.map(e => e.defendant_short == '' ? e.defendant : e.defendant_short).filter(i => i && i.trim())
        let third_party = this.$store.state.third_party_item.filter(i=> i.third_party && i.third_party.trim()).map(function (e) {
          return (e.third_party_short==''?e.third_party:e.third_party_short) + '（第三人）' ;})
        let defendant_thirdParty=defendant.concat(third_party)
        return [{defendant: "全选被告第三人", defendant_name: defendant_thirdParty},]
      }
    },
    getAccuserName: {
      get() {
        let accuser = this.$store.state.plaintiff_item.map(e => e.accuser_short == '' ? e.accuser : e.accuser_short).filter(i => i && i.trim())
        return [{accuser: "全选原告", accuser_name: accuser}]
      }
    },
    getCounterDefendantName: {
      get() {
        let accuser = this.$store.state.plaintiff_item.map(e => e.accuser_short == '' ? e.accuser : e.accuser_short).filter(i => i && i.trim())
        return [{accuser: "全选反诉被告", accuser_name: accuser}]
      }
    },
    getCounterAccuserName: {
      get() {
        let defendant = this.$store.state.defendant_item.map(e => e.defendant_short == '' ? e.defendant : e.defendant_short).filter(i => i && i.trim())
        return [{defendant: "全选反诉原告", defendant_name: defendant}]
      }
    },
    getProofDefendant: {
      get() {
        let option_label = this.data.defendant_and_third_evidence.filter(i => i.evidence).map(e => {
          return "证据" + this.numberToChinese(e.serial) + " ： " + e.evidence;
        })

        return [{evidence: "全选证据", option_label: option_label}]
      }
    },
    getProofOfCounterDefendant: {
      get() {
        let option_label = this.data.counterclaim_defendant_evidence.filter(i => i.evidence).map(e => {
          return "证据" + this.numberToChinese(e.serial) + " ： " + e.evidence;
        })

        return [{evidence: "全选反诉被告提交的证据", option_label: option_label}]
      },
    },
    getProofOfCounterAccuser: {
      get() {
        let option_label = this.data.counterclaim_accuser_evidence.filter(i => i.evidence).map(e => {
          return "证据" + this.numberToChinese(e.serial) + " ： " + e.evidence;
        })

        return [{evidence: "全选反诉原告提交的证据", option_label: option_label}]
      },
    },
    //组合 原告、被告以及第三人
    getCrossExaminationName: {
      get() {
        let defendant = this.$store.state.defendant_item.map(e => (e.defendant_short == '' ? e.defendant : e.defendant_short)+"（被告）").filter(i => i && i!= "（被告）")
        let accuser = this.$store.state.plaintiff_item.map(e => (e.accuser_short == '' ? e.accuser : e.accuser_short)+"（原告）").filter(i => i && i!= "（原告）")
        let thirdparty = this.$store.state.third_party_item.map(e => (e.third_party_short == '' ? e.third_party : e.third_party_short)+"（第三人）").filter(i => i && i!= "（第三人）")
        return accuser.concat(defendant).concat(thirdparty)
      }
    }
  },
  components: {
    VueMultiselect
  },
  methods: {
    add_component(datatype, index,QAindex) {
      switch (datatype) {
        case "defendant_and_third_evidence":
          //accshowd_evidence 模块的数据加入
          this.data.defendant_and_third_evidence.splice(index, 0,
              {
                name:[],
                serial: 1,//证据序号，自增
                evidence: "", //证据名称(原告举证表 原告提出)
                content: "", //证明事项(原告举证表 原告提出)
                evidence_type: ""//证据类型，原件或者复印件
              }
          )
          for (let i = 0; i < this.data.defendant_and_third_evidence.length; i++) {
            this.data.defendant_and_third_evidence[i].serial = i + 1
          }
          break
        case "accuser_and_other_defendant_query":
          //这里是值对应的处理
          this.data.accuser_and_other_defendant_query.splice(index, 0,
              {
                name: [],        //原告质证表 原告姓名
                evidence: [],    //被告所提出的证据名称
                facticity: "1",      //真实性(原告质证)
                legality: "1", //合法性(原告质证)
                relevance: "1",//关联性(原告质证)
                fact_reason: "", //真实合法关联性理由(原告质证 动态添加)
              })
          break
        case "counterclaim_defendant_evidence":  //反诉被告举证
          this.data.counterclaim_defendant_evidence.splice(index, 0, {
            serial: 1,//证据序号，自增
            evidence: "", //证据名称(原告举证表 原告提出)
            content: "", //证明事项(原告举证表 原告提出)
            evidence_type: ""//证据类型，原件或者复印件
          });
          for (let i = 0; i < this.data.counterclaim_defendant_evidence.length; i++) {
            this.data.counterclaim_defendant_evidence[i].serial = i + 1
          }
          break
        case "counterclaim_accuser_query": //反诉原告质证
          //这里是值对应的处理
          this.data.counterclaim_accuser_query.splice(index, 0, {
            counterclaim_accuser: [],        //反诉原告姓名
            evidence: [],    //反诉被告所提交的证据
            facticity: "1",      //真实性(反诉原告原告质证)
            legality: "1", //合法性(反诉原告质证)
            relevance: "1",//关联性(反诉原告质证)
            counterclaim_accuser_query_fact_reason: "", //事实和理由(反诉原告质证 需要动态添加)
          })
          break
        case "other_counterclaim_defendant_query": //反诉原告质证
          //这里是值对应的处理
          this.data.other_counterclaim_defendant_query.splice(index, 0, {
            other_counterclaim_defendant: [],        //其他反诉被告姓名
            evidence: [],    //反诉原告所提交的证据
            facticity: "1",      //真实性
            legality: "1", //合法性
            relevance: "1",//关联性
            other_counterclaim_defendant_query_fact_reason: "", //事实和理由(其他反诉被告质证的事实和理由 需要动态添加)
          })
          break
        case "counterclaim_accuser_evidence":  //反诉原告举证
          this.data.counterclaim_accuser_evidence.splice(index, 0, {
            serial: 1,//证据序号，自增
            evidence: "", //证据名称(原告举证表 原告提出)
            content: "", //证明事项(原告举证表 原告提出)
            evidence_type: ""//证据类型，原件或者复印件
          });
          for (let i = 0; i < this.data.counterclaim_accuser_evidence.length; i++) {
            this.data.counterclaim_accuser_evidence[i].serial = i + 1
          }
          break
        case "counterclaim_defendant_query": //反诉原告质证
          //这里是值对应的处理
          this.data.counterclaim_defendant_query.splice(index, 0, {
            counterclaim_defendant: [],
            evidence: [],
            facticity: "1",
            legality: "1",
            relevance: "1",
            counterclaim_defendant_query_fact_reason: ""
          })
          break
        case "defendant_and_third_evidence_witness":
          this.data.defendant_and_third_evidence_witness.splice(index,0,{
            serial: 1,//证据序号，自增
            evidence:"",
            witness_name:"",
            witness_type:"",
            content:"",
            witness_testimony:[{
              quizzer:"",
              question:"",
              responder:"",
              answer:""
            }]
          });
          for(let i = 0;i < this.data.defendant_and_third_evidence_witness.length;i++){
            this.data.defendant_and_third_evidence_witness[i].serial = this.data.defendant_and_third_evidence.length + i + 1;
          }
          break;
        case "witnessQA":
          this.data.defendant_and_third_evidence_witness[index].witness_testimony.splice(QAindex,0,{
                quizzer:"",
                question:"",
                responder:"",
                answer:""
              }
          )
          break;
        default:
          //这里是没有找到对应的值处理
          break
      }

    },
    delete_component(datatype, index,QAindex) {
      switch (datatype) {
        case "defendant_and_third_evidence":
          //这里是值对应的处理
          this.data.defendant_and_third_evidence.splice(index, 1)
          for (let i = 0; i < this.data.defendant_and_third_evidence.length; i++) {
            this.data.defendant_and_third_evidence[i].serial = i + 1
          }
          break
        case "accuser_and_other_defendant_query":
          //这里是值对应的处理
          this.data.accuser_and_other_defendant_query.splice(index, 1)
          break
        case "counterclaim_defendant_evidence":
          //这里是值对应的处理
          this.data.counterclaim_defendant_evidence.splice(index, 1)
          break
        case "counterclaim_accuser_query":
          //这里是值对应的处理
          this.data.counterclaim_accuser_query.splice(index, 1)
          break
        case "other_counterclaim_defendant_query":
          //这里是值对应的处理
          this.data.other_counterclaim_defendant_query.splice(index, 1)
          break
        case "counterclaim_accuser_evidence":
          //这里是值对应的处理
          this.data.counterclaim_accuser_evidence.splice(index, 1)
          break
        case "counterclaim_defendant_query":
          //这里是值对应的处理
          this.data.counterclaim_defendant_query.splice(index, 1)
          break

        case "defendant_and_third_evidence_witness":
          if(this.data.defendant_and_third_evidence_witness.length<2){
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.defendant_and_third_evidence_witness.splice(index, 1);
          for(let i = 0;i < this.data.defendant_and_third_evidence_witness.length;i++){
            this.data.defendant_and_third_evidence_witness[i].serial = this.data.defendant_and_third_evidence.length + i + 1;
          }
          break;
        case "witnessQA":
          if(this.data.defendant_and_third_evidence_witness[index].witness_testimony.length<2){
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.defendant_and_third_evidence_witness[index].witness_testimony.splice(QAindex,1,)
          break;
        default:
          //这里是没有找到对应的值处理
          break
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
            wholeItem.defendantShowInfo = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    },
    defendant_is_witness:{
      handler() {
        if(this.data.defendant_is_witness == '1'){
          for(let i = 0;i < this.data.defendant_and_third_evidence_witness.length;i++){
            this.data.defendant_and_third_evidence_witness[i].serial = this.data.defendant_and_third_evidence.length + i + 1;
          }
        }
      },
      immediate:true
    }
  }
}

</script>
