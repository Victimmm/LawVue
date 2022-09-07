<template>
  <div class="layui-card">
    <div class="layui-card-body">
      <form class="layui-form layui-form-pane" action="" onsubmit="return false">
        <div class="layui-form-item " pane>
          <div class="layui-form-label">
            审判员
          </div>
          <div class="layui-input-block">
            <input type="text" autocomplete="off" class="layui-input"
                   v-model="data.judge_accuser_claim_item">
          </div>
        </div>

        <div class="layui-form-item " pane>
          <div class="layui-form-label" style="line-height: 70px">
            原告诉讼请求项
          </div>
          <div class="layui-input-block">
            <!--            <div class="layui-input-inline " style="width: 80%; margin-left:0px;">-->
            <textarea v-model="data.accuser_claim_item" placeholder="请输入诉讼请求项" autocomplete="off"
                      class="layui-textarea"></textarea>
          </div>

        </div>


        <div class="layui-form-item" pane>
          <div class="layui-form-label" style="line-height: 70px">
            事实和理由
          </div>
          <div class="layui-input-block">
            <textarea v-model="data.accuser_claim_fact_reason" placeholder="请输入事实和理由"
                      class="layui-textarea"></textarea>
          </div>
        </div>

        <div class="layui-form-item" pane>
          <label class="layui-form-label">是否变更诉讼请求项</label>
          <div class="layui-input-block">
            <div class="myradiomargin">
              <input type="radio" lay-ignore="" name="ischange"
                     v-model="data.is_change_claim_item" class="myradio" value="1"
              > <label>是</label>
              <input type="radio" lay-ignore="" name="ischange"
                     v-model="data.is_change_claim_item" class="myradio" value="2"
                     style="margin-left: 15px;"><label>否</label>
            </div>
          </div>
        </div>

        <div id="claimchange" v-if="data.is_change_claim_item=='1'">

          <div class="layui-form-item " pane>
            <div class="layui-form-label" style="line-height: 70px">
              原告变更诉讼请求项
            </div>
            <div class="layui-input-block">

            <textarea v-model="data.accuser_claim_item_after_change" placeholder="请输入变更诉讼请求项" autocomplete="off"
                      class="layui-textarea"></textarea>
            </div>

          </div>

        </div>

      </form>
    </div>
  </div>

    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 25px" id="judge_inquiry_after_accuser_claim">
      <legend>审判员询问</legend>
<!--      <div class="layui-card" v-show = 'isShow.judge_inquiry1_show == 1'>-->

      <div class="layui-card">
      <div class="layui-card-body">
        <form class="layui-form layui-form-pane">
        <template v-for="(item, index) in data.judge_inquiry_after_accuser_claim" :key="index">
          <div class="layui-form-item" style="margin-bottom: 10px" pane>
            <label class="layui-form-label">审判员</label>
            <div class="layui-input-block" >
              <input type="text" v-model="data.judge_inquiry_after_accuser_claim[index].question" placeholder="请输入问题" autocomplete="off"
                     class="layui-input" style="width: 100%;float: left;">
            </div>
          </div>
          <form class="layui-form">
            <template v-for="(aitem, aindex) in data.judge_inquiry_after_accuser_claim[index].answer" :key="aindex">
              <div class="layui-form-item" pane>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                  <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                    <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.judge_inquiry_after_accuser_claim[index].answer[aindex].name"
                                    :options="getAccuserMergeDefendant" placeholder="请选择当事人"
                                    style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <textarea type="text" v-model="data.judge_inquiry_after_accuser_claim[index].answer[aindex].answer" placeholder="请输入回答" autocomplete="off"
                              class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                      <button type="button" @click="remove_component_accuser_claim('inquiry_reply',index,aindex)" class="layui-btn layui-btn-danger layui-btn-sm"
                              data-type="text"
                              style="float: right;height:100px;width:7.5%">
                        <i class="layui-icon">&#xe640;</i></button>
                      <button type="button" @click="add_component_accuser_claim('inquiry_reply',index,aindex+1)" class="layui-btn layui-btn-sm" data-type="text"
                              style="float: right;height:100px;width:7.5%">
                        <i class="layui-icon">&#xe654;</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </form>
          <div class="layui-form-item" style="width:100%;margin-top: -10px;">
            <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component_accuser_claim('inquiry_info',index+1)"> 添加问题</button>
            <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left: 5px" @click="remove_component_accuser_claim('inquiry_info',index)"> 删除问题
            </button>
          </div>
        </template>
        </form>
      </div>
    </div>
<!--      </div>-->
    </fieldset>

  <fieldset class="layui-elem-field layui-field-title" style="margin-top: 25px" id="defendant_reply">
    <legend>被告答辩</legend>
    <div class="layui-field-box" >
      <div class="layui-card">
        <div class="layui-card-body">
          <form class="layui-form layui-form-pane">
            <div class="layui-form-item " pane>
              <div class="layui-form-label">
                审判员
              </div>
              <div class="layui-input-block">
                <input type="text" autocomplete="off" class="layui-input"
                      v-model="data.judge_defendant_reply">
              </div>
            </div>

            <template v-for="(item, index) in data.defendant_reply" :key='index'>
              <div class="layui-form-item" pane>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                  <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;">
                    <VueMultiselect :option-height="38" v-model="data.defendant_reply[index].name"
                                    :show-labels="false" :options="getDefendantName" placeholder="请选择被告"
                                    style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <textarea type="text" v-model="data.defendant_reply[index].content" placeholder="请输入答辩内容"
                          autocomplete="off"
                          class="layui-textarea" style="width: 100%;float: left;min-height:100px"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-form-item" style="width:100%;">
                <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                        @click="add_component('defendant_reply',index+1)">添加被告答辩
                </button>
                <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left:5px"
                        @click="delete_component('defendant_reply',index)"> 删除被告答辩
                </button>
              </div>
            </template>
            </form>
          </div>
        </div>
      </div>
  </fieldset>


      <fieldset class="layui-elem-field layui-field-title" style="margin-bottom: 0px" id="judge_inquiry_before_third_state" v-if = "this.$store.state.third_party_item[0].third_party != ''">
        <legend> 审判员询问
        </legend>
        <div class="layui-field-box" >
          <div class="layui-card" >
            <div class="layui-card-body">
              <form class="layui-form layui-form-pane">
                <template v-for="(item, index) in data.judge_inquiry_before_third_state" :key="index">
                  <div class="layui-form-item" style="margin-bottom: 10px" pane>
                    <label class="layui-form-label">审判员</label>
                    <div class="layui-input-block" >
                      <input type="text" v-model="data.judge_inquiry_before_third_state[index].question" placeholder="请输入问题" autocomplete="off"
                             class="layui-input" style="width: 100%;float: left;">
                    </div>
                  </div>
                  <form class="layui-form">
                    <template v-for="(aitem, aindex) in data.judge_inquiry_before_third_state[index].answer" :key="aindex">

                      <div class="layui-form-item" pane>
                        <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                          <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                            <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.judge_inquiry_before_third_state[index].answer[aindex].name"
                                            :options="getAccuserMergeDefendant" placeholder="请选择当事人"
                                            style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                          </div>
                          <div class="layui-input-block">
                            <div class="myselect-div " >
                            <textarea type="text" v-model="data.judge_inquiry_before_third_state[index].answer[aindex].answer" placeholder="请输入回答" autocomplete="off"
                              class="layui-textarea" style="width: 85%;float: left;min-height:100px"></textarea>
                                <button type="button" @click="remove_component_third_party_state('inquiry_reply',index,aindex)" class="layui-btn layui-btn-danger layui-btn-sm"
                                        data-type="text"
                                        style="float: right;height:100px;width:7.5%">
                                  <i class="layui-icon">&#xe640;</i></button>
                                <button type="button" @click="add_component_third_party_state('inquiry_reply',index,aindex+1)" class="layui-btn layui-btn-sm" data-type="text"
                                        style="float: right;height:100px;width:7.5%">
                                  <i class="layui-icon">&#xe654;</i>
                                </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </form>
                  <div class="layui-form-item" style="width:100%;margin-top: -10px;">
                    <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component_third_party_state('inquiry_info',index+1)"> 添加问题</button>
                    <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left: 5px" @click="remove_component_third_party_state('inquiry_info',index)"> 删除问题
                    </button>
                  </div>
                </template>
              </form>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset class="layui-elem-field layui-field-title"  style="margin-top:28px" id="third_party_state" v-if = "this.$store.state.third_party_item[0].third_party != ''">
        <legend>第三人述称</legend>
        <div class="layui-field-box" >
          <div class="layui-card">
            <div class="layui-card-body">
              <form class="layui-form layui-form-pane">
                <div class="layui-form-item " pane>
                  <div class="layui-form-label">
                    审判员
                  </div>
                  <div class="layui-input-block">
                    <input type="text" autocomplete="off" class="layui-input" value="请第三人进行述称。">
                  </div>
                </div>

                <template v-for="(item, index) in data.third_party_state" :key='index'>
                  <div class="layui-form-item" pane>
                    <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                      <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;;">
                        <VueMultiselect :option-height="38" v-model="data.third_party_state[index].name"
                                        :show-labels="false" :options="getThirdPartyName" placeholder="请选择第三人"
                                        style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                      </div>
                      <div class="layui-input-block">
                        <div class="myselect-div">
                <textarea type="text" v-model="data.third_party_state[index].state" placeholder="请输入第三人述称"
                          autocomplete="off"
                          class="layui-textarea" style="width: 100%;float: left;min-height:100px"></textarea>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="layui-form-item" style="width:100%;">
                    <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                            @click="add_component('third_party_claim',index+1)">添加第三人述称
                    </button>
                    <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left:5px"
                            @click="delete_component('third_party_claim',index)"> 删除第三人述称
                    </button>
                  </div>
                </template>
              </form>
            </div>
          </div>
        </div>
      </fieldset>


  <fieldset class="layui-elem-field layui-field-title" style="margin-bottom: 0px" id="judge_inquiry_after_defendant_reply">
    <legend> 审判员询问
    </legend>
    <div class="layui-field-box" >
<!--      <div class="layui-card" v-show = 'isShow.judge_inquiry2_show == 1'>-->
      <div class="layui-card" style="margin-left: -15px">
        <div class="layui-card-body">
          <form class="layui-form layui-form-pane">
            <div class="layui-card">
              <div class="layui-card-body">
                <form class="layui-form layui-form-pane">
                  <template v-for="(item, index) in data.judge_inquiry_after_defendant_reply" :key="index">
                    <div class="layui-form-item" style="margin-bottom: 10px" pane>
                      <label class="layui-form-label">审判员</label>
                      <div class="layui-input-block" >
                        <input type="text" v-model="data.judge_inquiry_after_defendant_reply[index].question" placeholder="请输入问题" autocomplete="off"
                               class="layui-input" style="width: 100%;float: left;">
                      </div>
                    </div>
                    <form class="layui-form" pane>
                      <template v-for="(aitem, aindex) in data.judge_inquiry_after_defendant_reply[index].answer" :key="aindex">
                        <div class="layui-form-item" pane>
                          <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                            <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.judge_inquiry_after_defendant_reply[index].answer[aindex].name"
                                              :options="getAccuserMergeDefendant" placeholder="请选择当事人"
                                              style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                            </div>
                            <div class="layui-input-block">
                              <div class="myselect-div " >
                              <textarea type="text" v-model="data.judge_inquiry_after_defendant_reply[index].answer[aindex].answer" placeholder="请输入回答" autocomplete="off"
                              class="layui-textarea" style="width: 85%;float: left;min-height:100px"></textarea>
                                <button type="button" @click="remove_component_defendant_reply('inquiry_reply',index,aindex)" class="layui-btn layui-btn-danger layui-btn-sm"
                                        data-type="text"
                                        style="float: right;height:100px;width:7.5%">
                                  <i class="layui-icon">&#xe640;</i></button>
                                <button type="button" @click="add_component_defendant_reply ('inquiry_reply',index,aindex+1)" class="layui-btn layui-btn-sm" data-type="text"
                                        style="float: right;height:100px;width:7.5%">
                                  <i class="layui-icon">&#xe654;</i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </form>
                    <div class="layui-form-item" style="width:100%;margin-top: -10px;">
                      <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component_defendant_reply('inquiry_info',index+1)"> 添加问题</button>
                      <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left: 5px" @click="remove_component_defendant_reply('inquiry_info',index)"> 删除问题
                      </button>
                    </div>
                  </template>
                </form>
              </div>
            </div>

<!--            <div class="layui-form-item" pane style="margin-left: 15px">-->
<!--              <label class="layui-form-label">是否反诉</label>-->
<!--              <div class="layui-input-block">-->
<!--                <div class="myradiomargin">-->
<!--                  <input type="radio" name="is_counterclaim" lay-ignore="" v-model="data.is_counterclaim"-->
<!--                         class="myradio" value="1"-->
<!--                         title="反诉" @change="setCourterClaim()"><label>反诉</label>-->
<!--                  <input type="radio" name="is_counterclaim" lay-ignore="" v-model="data.is_counterclaim"-->
<!--                         class="myradio" value="2"-->
<!--                         title="不反诉" style="margin-left: 15px;" @change="setCourterClaim()"><label>不反诉</label>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </form>
        </div>
      </div>
    </div>
  </fieldset>

<!--  <fieldset class="layui-elem-field layui-field-title" id="counterclaim_accuser_claim_item"-->
<!--            v-if="data.is_counterclaim==1">-->
<!--    <legend>反诉原告的诉讼请求项</legend>-->
<!--    <div class="layui-field-box">-->
<!--      <div class="layui-card">-->
<!--        <div class="layui-card-body">-->
<!--          <form class="layui-form layui-form-pane">-->
<!--            <div class="layui-form-item" pane>-->
<!--              <div class="layui-form-label" style="line-height: 80px">-->
<!--                反诉原告诉讼请求项-->
<!--              </div>-->
<!--              <div class="layui-input-block" contenteditable="true">-->
<!--              <textarea v-model="data.counterclaim_accuser_claim_item" placeholder="请输入诉讼请求项"-->
<!--                        class="layui-textarea" style="height:40px"></textarea>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="layui-form-item" pane>-->
<!--              <div class="layui-form-label" style="line-height: 80px">-->
<!--                事实和理由-->
<!--              </div>-->
<!--              <div class="layui-input-block">-->
<!--                <textarea v-model="data.counterclaim_accuser_fact_reason" placeholder="请输入事实和理由"-->
<!--                          class="layui-textarea"></textarea>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="layui-form-item" pane>-->
<!--              <label class="layui-form-label">反诉被告今天是否答辩</label>-->
<!--              <div class="layui-input-block">-->
<!--                <div class="myradiomargin">-->
<!--                  <input type="radio" lay-ignore="" name="counterclaim_defendant_today_is_reply"-->
<!--                         v-model="data.counterclaim_defendant_today_is_reply" class="myradio" value="1"-->
<!--                         title="答辩" @change="setIsTodayReply"><label>答辩</label>-->
<!--                  <input type="radio" lay-ignore="" name="counterclaim_defendant_today_is_reply"-->
<!--                         v-model="data.counterclaim_defendant_today_is_reply" class="myradio" value="2"-->
<!--                         title="不答辩" @change="setIsTodayReply" style="margin-left: 15px;"><label>不答辩</label>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </form>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </fieldset>-->

<!--  <fieldset class="layui-elem-field layui-field-title" id="counterclaim_defendant_reply"-->
<!--            v-if="data.counterclaim_defendant_today_is_reply==1 && data.is_counterclaim==1">-->
<!--    <legend>反诉被告答辩</legend>-->
<!--    <div class="layui-field-box">-->
<!--      <div class="layui-card">-->
<!--        <div class="layui-card-body">-->
<!--          <form class="layui-form layui-form-pane">-->
<!--            <template v-for="(item, index) in data.counterclaim_defendant_reply" :key='index'>-->
<!--              <div class="layui-form-item " pane>-->
<!--                <div class="layui-inline" style="width: 100%;margin-bottom:0px;">-->
<!--                  <div class="layui-input-inline" style="margin-left:0px ;margin-top: 31px;">-->
<!--                    <VueMultiselect :option-height="38" v-model="data.counterclaim_defendant_reply[index].name"-->
<!--                                    :show-labels="false"-->
<!--                                    :options="getAccuserName" placeholder="请选择反诉被告"-->
<!--                                    style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>-->
<!--                  </div>-->
<!--                  <div class="layui-input-block">-->
<!--                    <div class="myselect-div">-->
<!--                      <textarea type="text" v-model="data.counterclaim_defendant_reply[index].content"-->
<!--                                placeholder="请输入答辩内容"-->
<!--                                autocomplete="off"-->
<!--                                class="layui-input" style="width: 100%;float: left;min-height:100px"></textarea>-->

<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="layui-form-item" style="width:100%;">-->
<!--                <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"-->
<!--                        @click="add_component('counterclaim_defendant_reply',index)">添加反诉被告答辩内容-->
<!--                </button>-->
<!--                <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs"-->
<!--                        @click="delete_component('counterclaim_defendant_reply',index)"> 删除答辩内容-->
<!--                </button>-->
<!--              </div>-->
<!--            </template>-->
<!--          </form>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </fieldset>-->


</template>

<script>
import 'vue-multiselect/dist/vue-multiselect.css'
import VueMultiselect from 'vue-multiselect'

var data;
data = {
  accuser_claim_item: "",// 原告诉讼请求
  accuser_claim_fact_reason: "",// 原告诉讼请求的事实及理由
  is_counterclaim: "2",
  defendant_reply: [{name: "", content: ""}],
  third_party_state:[{name: "", state: ""}], //添加第三述称
  counterclaim_accuser_claim_item: "",
  counterclaim_accuser_fact_reason: "",
  counterclaim_defendant_reply: [{name: "", content: ""}],
  counterclaim_defendant_today_is_reply: "1",
  judge_inquiry_after_accuser_claim:[{  //原告诉称后的审判员问答对
    question:"",
    answer:[{
      name:"",
      answer:"",
    }]
  }],
  judge_inquiry_after_defendant_reply:[{  //被告答辩后的审判员问答对
    question:"",
    answer:[{
      name:"",
      answer:"",
    }]
  }],
  judge_inquiry_before_third_state:[{  //第三人述称前的审判员问答对
    question:"",
    answer:[{
      name:"",
      answer:"",
    }]
  }],
  judge_accuser_claim_item: "下面进行法庭调查，原告陈述诉讼请求和事实理由。",
  judge_defendant_reply: "对于原告的诉讼请求及事实理由，被告进行答辩。",
  is_change_claim_item: "2",
  accuser_claim_item_after_change: "",
  accuser_claim_fact_reason_after_change: ""
};

export default {
  data() {
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "CourtInves" in wholeItem) {
      data = wholeItem.CourtInves
    }
    return {
      data: data,
      // isShow:{
      //   judge_inquiry1_show : 1, //judge_inquiry_after_accuser_claim
      //   judge_inquiry2_show : 1, //judge_inquiry_after_defendant_reply
      // }
    }
  },
  components: {
    VueMultiselect
  },
  computed: {
    getDefendantName: {
      get() {
        return this.$store.state.defendant_item.map(e => e.defendant_short == '' ? e.defendant : e.defendant_short).filter(i => i && i.trim())
      }
    },
    getAccuserName: {
      get() {
        return this.$store.state.plaintiff_item.map(e => e.accuser_short == '' ? e.accuser : e.accuser_short).filter(i => i && i.trim())
      }
    },
    getThirdPartyName: {
      get() {
        return this.$store.state.third_party_item.map(e => e.third_party_short == '' ? e.third_party : e.third_party_short).filter(i => i && i.trim())
      }
    },
    getAccuserMergeDefendant: {
      get() {
        let string1 = this.$store.state.plaintiff_item.filter(i => i.accuser && i.accuser.trim()).map(function (e) {
          return (e.accuser_short == '' ? e.accuser : e.accuser_short) + '（原告）';
        })
        let string2 = this.$store.state.defendant_item.filter(i=> i.defendant && i.defendant.trim()).map(function (e) {
          return (e.defendant_short==''?e.defendant:e.defendant_short) + '（被告）' ;
        })
        let string3 = this.$store.state.third_party_item.filter(i=> i.third_party && i.third_party.trim()).map(function (e) {
          return (e.third_party_short==''?e.third_party:e.third_party_short) + '（第三人）' ;
        })
        return string2.concat(string1).concat(string3)
      },
    },
  },
  methods: {
    // isShowJudgeInquiry1(){ //被告答辩 (前) 的审判员询问
    //   if(this.isShow.judge_inquiry1_show == 1){
    //     this.isShow.judge_inquiry1_show = 0
    //   }
    //   else{
    //     this.isShow.judge_inquiry1_show = 1
    //   }
    // },
    // isShowJudgeInquiry2(){ //被告答辩 (后) 的审判员询问
    //   if(this.isShow.judge_inquiry2_show == 1){
    //     this.isShow.judge_inquiry2_show = 0
    //   }
    //   else{
    //     this.isShow.judge_inquiry2_show = 1
    //   }
    // },
    add_component(datatype,index) {
      switch (datatype) {
          // case "accuser_claims":
          //   //这里是值对应的处理
          //   this.data.accuser_claims.push({accuser_name: "", claim_item: "", fact_reason: ""})
          //   break
        case "defendant_reply":
          //这里是值对应的处理
          this.data.defendant_reply.splice(index,0,{name: "", content: ""})
          break
          // case "counterclaim_plaintiff":
          //   //这里是值对应的处理
          //   this.data.counterclaim_plaintiff.push({name: "", claim_item: "", fact_reason: ""})
          //   break
        case "third_party_claim":  //第三人述称
          //这里是值对应的处理
          this.data.third_party_state.splice(index,0,{name: "", state: ""})
          break
        case "counterclaim_defendant_reply":
          //这里是值对应的处理
          this.data.counterclaim_defendant_reply.splice(index,0,{name: "", content: ""})
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },

    add_component_accuser_claim(datatype,index_info_index,inquiry_answer_index) {
      switch (datatype) {
        case "inquiry_reply":

          this.data.judge_inquiry_after_accuser_claim[index_info_index].answer.splice(inquiry_answer_index,0,{
            name:"",
            answer:"",
          });
          break;
        case "inquiry_info":
          //

          this.data.judge_inquiry_after_accuser_claim.splice(index_info_index,0,{
            question: "",
            answer: [{
              name:"",
              answer:"",
            }],
          });
          break;
        // case "inquiry_answer":
        //   //
        //   this.data.judge_inquiry_after_accuser_claim[index_info_index].answer.splice(inquiry_answer_index,0,{
        //     name:"",
        //     answer:"",
        //   });
        //   break;
        default:
          //这里是没有找到对应的值处理
          break;
      }
    },

    add_component_defendant_reply(datatype,index_info_index,inquiry_answer_index) {
      switch (datatype) {
        case "inquiry_reply":

          this.data.judge_inquiry_after_defendant_reply[index_info_index].answer.splice(inquiry_answer_index,0,{
            name:"",
            answer:"",
          });
          break;
        case "inquiry_info":
          //

          this.data.judge_inquiry_after_defendant_reply.splice(index_info_index,0,{
            question: "",
            answer: [{
              name:"",
              answer:"",
            }],
          });
          break;
        default:
          //这里是没有找到对应的值处理
          break
        }
    },

    add_component_third_party_state(datatype,index_info_index,inquiry_answer_index) {
      switch (datatype) {
        case "inquiry_reply":

          this.data.judge_inquiry_before_third_state[index_info_index].answer.splice(inquiry_answer_index,0,{
            name:"",
            answer:"",
          });
          break;
        case "inquiry_info":
          //

          this.data.judge_inquiry_before_third_state.splice(index_info_index,0,{
            question: "",
            answer: [{
              name:"",
              answer:"",
            }],
          });
          break;
        default:
          //这里是没有找到对应的值处理
          break
      }
    },

    delete_component(datatype,index) {
      switch (datatype) {
          // case "accuser_claims":
          //   //这里是值对应的处理
          //   this.data.accuser_claims.splice(index, 1)
          //   break
        case "defendant_reply":
          //这里是值对应的处理
          if (this.data.defendant_reply.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.defendant_reply.splice(index, 1)
          break
        //第三人述称
        case "third_party_claim":
          //这里是值对应的处理
          if (this.data.third_party_state.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.third_party_state.splice(index, 1)
          break
          // case "counterclaim_plaintiff":
          //   //这里是值对应的处理
          //   this.data.counterclaim_plaintiff.splice(index, 1)
          //   break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    remove_component_accuser_claim(datatype, inquiry_info_index, inquiry_answer_index) {
      switch (datatype) {
        case "inquiry_reply":
          //这里是值对应的处理
          if (this.data.judge_inquiry_after_accuser_claim[inquiry_info_index].answer.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.judge_inquiry_after_accuser_claim[inquiry_info_index].answer.splice(inquiry_answer_index, 1);
          break;
        case "inquiry_info":
          //这里是值对应的处理
          if (this.data.judge_inquiry_after_accuser_claim.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.judge_inquiry_after_accuser_claim.splice(inquiry_info_index, 1);
          break;
        // case "inquiry_answer":
        //   //这里是值对应的处理
        //   this.data.judge_inquiry_after_accuser_claim[inquiry_info_index].answer.splice(inquiry_answer_index, 1);
        //   break;
      }
    },
    remove_component_defendant_reply(datatype, inquiry_info_index, inquiry_answer_index) {
      switch (datatype) {
          case "inquiry_reply":
            //这里是值对应的处理
            if (this.data.judge_inquiry_after_defendant_reply[inquiry_info_index].answer.length < 2) {
              window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
              return;
            }
            this.data.judge_inquiry_after_defendant_reply[inquiry_info_index].answer.splice(inquiry_answer_index, 1);
            break;
          case "inquiry_info":
            //这里是值对应的处理
            if (this.data.judge_inquiry_after_defendant_reply.length < 2) {
              window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
              return;
            }
            this.data.judge_inquiry_after_defendant_reply.splice(inquiry_info_index, 1);
            break;
          // case "inquiry_answer":
          //   //这里是值对应的处理
          //   this.data.judge_inquiry_after_defendant_reply[inquiry_info_index].answer.splice(inquiry_answer_index, 1);
          //   break;
      }
    },

    remove_component_third_party_state(datatype, inquiry_info_index, inquiry_answer_index) {
      switch (datatype) {
        case "inquiry_reply":
          //这里是值对应的处理
          if (this.data.judge_inquiry_before_third_state[inquiry_info_index].answer.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.judge_inquiry_before_third_state[inquiry_info_index].answer.splice(inquiry_answer_index, 1);
          break;
        case "inquiry_info":
          //这里是值对应的处理
          if (this.data.judge_inquiry_before_third_state.length < 2) {
            window.layer.msg("不允许删除唯一项", {icon: 5, time: 1500});
            return;
          }
          this.data.judge_inquiry_before_third_state.splice(inquiry_info_index, 1);
          break;
          // case "inquiry_answer":
          //   //这里是值对应的处理
          //   this.data.judge_inquiry_after_accuser_claim[inquiry_info_index].answer.splice(inquiry_answer_index, 1);
          //   break;
      }
    },

    setIsTodayReply() {
      this.$store.commit("setIsTodayReply", this.data.counterclaim_defendant_today_is_reply)
      // console.log(data.is_counterclaim)
    },
    setCourterClaim() {
      this.$store.commit("setIsCourtClaim", this.data.is_counterclaim)
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
            wholeItem.CourtInves = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
          }
        }
      },
      deep: true
    }
  }
}
</script>