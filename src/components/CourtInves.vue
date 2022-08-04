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
                     v-model="data.accuser_claim_item_change" class="myradio" value="1"
              > <label>是</label>
              <input type="radio" lay-ignore="" name="ischange"
                     v-model="data.accuser_claim_item_change" class="myradio" value="2"
                     style="margin-left: 15px;"><label>否</label>
            </div>
          </div>
        </div>

        <div id="claimchange" v-if="data.accuser_claim_item_change=='1'">

          <div class="layui-form-item " pane>
            <div class="layui-form-label" style="line-height: 70px">
              原告变更诉讼请求项
            </div>
            <div class="layui-input-block">

            <textarea v-model="data.changed_claim_item" placeholder="请输入变更诉讼请求项" autocomplete="off"
                      class="layui-textarea"></textarea>
            </div>

          </div>

          <div class="layui-form-item" pane>
            <div class="layui-form-label" style="line-height: 70px">
              事实和理由
            </div>
            <div class="layui-input-block">
            <textarea v-model="data.changed_claim_fact_reason" placeholder="请输入事实和理由"
                      class="layui-textarea"></textarea>
            </div>
          </div>

        </div>

      </form>
    </div>
  </div>

    <fieldset class="layui-elem-field layui-field-title">
      <legend>审判员询问</legend>
      <div class="layui-input-inline">
        <!--          可折叠按钮 默认显示-->
        <div v-show = 'isShow.judge_inquiry1_show == 0'>
          <button type="button" class="layui-btn" @click="isShowJudgeInquiry1" style="background: 0;">
            <i class="layui-icon" style="color: darkgrey">&#xe61a;</i>
          </button>
        </div>
        <div v-show = 'isShow.judge_inquiry1_show == 1'>
          <button type="button" class="layui-btn" @click="isShowJudgeInquiry1" style="background: 0;">
            <i class="layui-icon" style="color: darkgrey">&#xe619;</i>
          </button>
        </div>
      </div>
      <div class="layui-card" v-show = 'isShow.judge_inquiry1_show == 1'>
      <div class="layui-card-body">
        <form class="layui-form layui-form-pane" action="" onsubmit="return false">
          <div class="layui-form-item" style="margin-bottom: -20px" pane>
            <label class="layui-form-label">审判员</label>
            <div class="layui-input-block" >
              <input type="text" v-model="data.judge_inquiry_after_accuser_claim[0].question" placeholder="问题" autocomplete="off"
                     class="layui-input" style="width: 100%;float: left;">
            </div>
          </div>

          <div class="layui-form-item" pane>
          <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
            <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
              <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.judge_inquiry_after_accuser_claim[0].answer[0].name"
                              :options="getAccuserMergeDefendant" placeholder="请选择原被告"
                              style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
            </div>
            <div class="layui-input-block">
              <div class="myselect-div " >
              <textarea type="text" v-model="data.judge_inquiry_after_accuser_claim[0].answer[0].answer" placeholder="回答" autocomplete="off"
                        class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                <button type="button"  class="layui-btn layui-btn-disabled layui-btn-sm"
                        data-type="text"
                        style="float: right;height:100px;width:7.5%">
                  <i class="layui-icon">&#xe640;</i></button>
                <button type="button" @click="add_component_accuser_claim('inquiry_reply',0,1)" class="layui-btn layui-btn-sm" data-type="text"
                        style="float: right;height:100px;width:7.5%">
                  <i class="layui-icon">&#xe654;</i>
                </button>
              </div>
            </div>
          </div>
          <template v-for="(bitem, bindex) in data.judge_inquiry_after_accuser_claim[0].answer.slice(1)" :key="bindex">
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 100px;">
              <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.judge_inquiry_after_accuser_claim[0].answer[bindex+1].name"
                                :options="getAccuserMergeDefendant" placeholder="请选择原被告"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div " >
                  <textarea type="text" v-model="data.judge_inquiry_after_accuser_claim[0].answer[bindex+1].answer" placeholder="回答" autocomplete="off"
                            class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                  <button type="button" @click="remove_component_accuser_claim('inquiry_reply',0,bindex+1)" class="layui-btn layui-btn-danger layui-btn-sm"
                          data-type="text"
                          style="float: right;height:100px;width:7.5%">
                    <i class="layui-icon">&#xe640;</i></button>
                  <button type="button" @click="add_component_accuser_claim('inquiry_reply',0,bindex+2)" class="layui-btn layui-btn-sm" data-type="text"
                          style="float: right;height:100px;width:7.5%">
                    <i class="layui-icon">&#xe654;</i>
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="layui-form-item" style="width:100%;margin-top: -10px;">
          <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component_accuser_claim('inquiry_info',1)"> 添加问题</button>
          <!--          <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" @click="delete_component('inquiry_info',index+1)"> 删除问题-->
          <!--          </button>-->
        </div>

        <template v-for="(item, index) in data.judge_inquiry_after_accuser_claim.slice(1)" :key="index">
          <div class="layui-form-item" style="margin-bottom: -20px" pane>
            <label class="layui-form-label">审判员</label>
            <div class="layui-input-block" >
              <input type="text" v-model="data.judge_inquiry_after_accuser_claim[index+1].question" placeholder="问题" autocomplete="off"
                     class="layui-input" style="width: 100%;float: left;">
            </div>
          </div>
          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
              <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.judge_inquiry_after_accuser_claim[index+1].answer[0].name"
                                :options="getAccuserMergeDefendant" placeholder="请选择原被告"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div " >
                  <textarea type="text" v-model="data.judge_inquiry_after_accuser_claim[index+1].answer[0].answer" placeholder="回答" autocomplete="off"
                            class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                  <!--                  <button type="button" @click="delete_component('inquiry_answer',index+1)" class="layui-btn layui-btn-danger layui-btn-sm"-->
                  <!--                          data-type="text"-->
                  <!--                          style="float: right;height:100px;width:7.5%">-->
                  <!--                    <i class="layui-icon">&#xe640;</i></button>-->
                  <button type="button"  class="layui-btn layui-btn-disabled layui-btn-sm"
                          data-type="text"
                          style="float: right;height:100px;width:7.5%">
                    <i class="layui-icon">&#xe640;</i></button>
                  <button type="button" @click="add_component_accuser_claim('inquiry_answer',index+1,1)" class="layui-btn layui-btn-sm" data-type="text"
                          style="float: right;height:100px;width:7.5%">
                    <i class="layui-icon">&#xe654;</i>
                  </button>
                </div>
              </div>
            </div>
            <template v-for="(aitem, aindex) in data.judge_inquiry_after_accuser_claim[index+1].answer.slice(1)" :key="aindex">
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 100px;">
                <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                  <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.judge_inquiry_after_accuser_claim[index+1].answer[aindex+1].name"
                                  :options="getAccuserMergeDefendant" placeholder="请选择原被告"
                                  style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div " >
                  <textarea type="text" v-model="data.judge_inquiry_after_accuser_claim[index+1].answer[aindex+1].answer" placeholder="回答" autocomplete="off"
                            class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                    <button type="button" @click="remove_component_accuser_claim('inquiry_answer',index+1,aindex+1)" class="layui-btn layui-btn-danger layui-btn-sm"
                            data-type="text"
                            style="float: right;height:100px;width:7.5%">
                      <i class="layui-icon">&#xe640;</i></button>
                    <button type="button" @click="add_component_accuser_claim('inquiry_answer',index+1,aindex+2)" class="layui-btn layui-btn-sm" data-type="text"
                            style="float: right;height:100px;width:7.5%">
                      <i class="layui-icon">&#xe654;</i>
                    </button>
                    <!--                    <button @click="delete_component('inquiry_answer',index+1,aindex+1)" type="button" class="layui-btn layui-btn-radius layui-btn-xs"-->
                    <!--                            data-type="text"-->
                    <!--                            style="float: right;height:30px;margin-top: 5px;margin-top: 30px;padding: 0 5px;margin-left: 5px">删除-->
                    <!--                    </button>-->
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div class="layui-form-item" style="width:100%;margin-top: -10px;">
            <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component_accuser_claim('inquiry_info',index+2)"> 添加问题</button>
            <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left: 5px" @click="remove_component_accuser_claim('inquiry_info',index+1)"> 删除问题
            </button>
          </div>
        </template>
        </form>
      </div>
      </div>
    </fieldset>


  <fieldset class="layui-elem-field layui-field-title" id="defendant_reply" style="margin-top:28px">
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
                  <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;;">
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
                        @click="add_component('defendant_reply',index+1)">添加其他被告答辩
                </button>
                <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left:5px" v-if="index!=0"
                        @click="delete_component('defendant_reply',index)"> 删除其他被告答辩
                </button>
              </div>
            </template>
            </form>
          </div>
        </div>
      </div>

    <div v-show = 'this.$store.state.third_party_item[0].third_party != null'>
      <fieldset class="layui-elem-field layui-field-title"  style="margin-top:28px">
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
                    <input type="text" autocomplete="off" class="layui-input" value="请输入第三人述称">
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
                    <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left:5px" v-if="index!=0"
                            @click="delete_component('third_party_claim',index)"> 删除第三人述称
                    </button>
                  </div>
                </template>
              </form>
            </div>
          </div>
        </div>
      </fieldset>
    </div>


<fieldset class="layui-elem-field layui-field-title">
    <legend>审判员询问</legend>
    <div class="layui-field-box" >
      <div class="layui-input-inline">
        <!--          可折叠按钮 默认显示-->
        <div v-show = 'isShow.judge_inquiry2_show == 0'>
          <button type="button" class="layui-btn" @click="isShowJudgeInquiry2" style="background: 0;">
            <i class="layui-icon" style="color: darkgrey">&#xe61a;</i>
          </button>
        </div>
        <div v-show = 'isShow.judge_inquiry2_show == 1'>
          <button type="button" class="layui-btn" @click="isShowJudgeInquiry2" style="background: 0;">
            <i class="layui-icon" style="color: darkgrey">&#xe619;</i>
          </button>
        </div>
      </div>
      <div class="layui-card" v-show = 'isShow.judge_inquiry2_show == 1'>
        <div class="layui-card-body">
          <form class="layui-form layui-form-pane">
            <div class="layui-form-item" style="margin-bottom: -15px" pane>
              <label class="layui-form-label">审判员</label>
              <div class="layui-input-block" >
                <input type="text" v-model="data.judge_inquiry_after_defendant_reply[0].question" placeholder="问题" autocomplete="off"
                       class="layui-input" style="width: 100%;float: left;">
              </div>
            </div>

          <div class="layui-field-box">
            <div class="layui-form-item" pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                  <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.judge_inquiry_after_defendant_reply[0].answer[0].name"
                                  :options="getAccuserMergeDefendant" placeholder="请选择原被告"
                                  style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div " >
                    <textarea type="text" v-model="data.judge_inquiry_after_defendant_reply[0].answer[0].answer" placeholder="回答" autocomplete="off"
                        class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                    <button type="button"  class="layui-btn layui-btn-disabled layui-btn-sm"
                            data-type="text"
                            style="float: right;height:100px;width:7.5%">
                      <i class="layui-icon">&#xe640;</i></button>
                    <button type="button" @click="add_component_defendant_reply('inquiry_reply',0,1)" class="layui-btn layui-btn-sm" data-type="text"
                            style="float: right;height:100px;width:7.5%">
                      <i class="layui-icon">&#xe654;</i>
                    </button>
                  </div>
                </div>
              </div>
              <template v-for="(bitem, bindex) in data.judge_inquiry_after_defendant_reply[0].answer.slice(1)" :key="bindex">
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 100px;">
                  <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                    <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.judge_inquiry_after_defendant_reply[0].answer[bindex+1].name"
                                    :options="getAccuserMergeDefendant" placeholder="请选择原被告"
                                    style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div " >
                  <textarea type="text" v-model="data.judge_inquiry_after_defendant_reply[0].answer[bindex+1].answer" placeholder="回答" autocomplete="off"
                            class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                      <button type="button" @click="remove_component_defendant_reply('inquiry_reply',0,bindex+1)" class="layui-btn layui-btn-danger layui-btn-sm"
                              data-type="text"
                              style="float: right;height:100px;width:7.5%">
                        <i class="layui-icon">&#xe640;</i></button>
                      <button type="button" @click="add_component_defendant_reply('inquiry_reply',0,bindex+2)" class="layui-btn layui-btn-sm" data-type="text"
                              style="float: right;height:100px;width:7.5%">
                        <i class="layui-icon">&#xe654;</i>
                      </button>
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <div class="layui-form-item" style="width:100%;margin-top: -10px;">
              <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component_defendant_reply('inquiry_info',1)"> 添加问题</button>
              <!--          <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" @click="delete_component('inquiry_info',index+1)"> 删除问题-->
              <!--          </button>-->
            </div>

            <template v-for="(item, index) in data.judge_inquiry_after_defendant_reply.slice(1)" :key="index">
              <div class="layui-form-item" style="margin-bottom: -15px" pane>
                <label class="layui-form-label">审判员</label>
                <div class="layui-input-block" >
                  <input type="text" v-model="data.judge_inquiry_after_defendant_reply[index+1].question" placeholder="问题" autocomplete="off"
                         class="layui-input" style="width: 100%;float: left;">
                </div>
              </div>
              <div class="layui-form-item" pane>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                  <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                    <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.judge_inquiry_after_defendant_reply[index+1].answer[0].name"
                                    :options="getAccuserMergeDefendant" placeholder="请选择原被告"
                                    style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div " >
                  <textarea type="text" v-model="data.judge_inquiry_after_defendant_reply[index+1].answer[0].answer" placeholder="回答" autocomplete="off"
                            class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                      <!--                  <button type="button" @click="delete_component('inquiry_answer',index+1)" class="layui-btn layui-btn-danger layui-btn-sm"-->
                      <!--                          data-type="text"-->
                      <!--                          style="float: right;height:100px;width:7.5%">-->
                      <!--                    <i class="layui-icon">&#xe640;</i></button>-->
                      <button type="button"  class="layui-btn layui-btn-disabled layui-btn-sm"
                              data-type="text"
                              style="float: right;height:100px;width:7.5%">
                        <i class="layui-icon">&#xe640;</i></button>
                      <button type="button" @click="add_component_defendant_reply('inquiry_answer',index+1,1)" class="layui-btn layui-btn-sm" data-type="text"
                              style="float: right;height:100px;width:7.5%">
                        <i class="layui-icon">&#xe654;</i>
                      </button>
                    </div>
                  </div>
                </div>
                <template v-for="(aitem, aindex) in data.judge_inquiry_after_defendant_reply[index+1].answer.slice(1)" :key="aindex">
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 100px;">
                    <div class="layui-input-inline" style="margin-left:0px;margin-top:31px;" >
                      <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.judge_inquiry_after_defendant_reply[index+1].answer[aindex+1].name"
                                      :options="getAccuserMergeDefendant" placeholder="请选择原被告"
                                      style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                    </div>
                    <div class="layui-input-block">
                      <div class="myselect-div " >
                  <textarea type="text" v-model="data.judge_inquiry_after_defendant_reply[index+1].answer[aindex+1].answer" placeholder="回答" autocomplete="off"
                            class="layui-textarea"  style="width: 85%;float: left;min-height:100px"></textarea>
                        <button type="button" @click="remove_component_defendant_reply('inquiry_answer',index+1,aindex+1)" class="layui-btn layui-btn-danger layui-btn-sm"
                                data-type="text"
                                style="float: right;height:100px;width:7.5%">
                          <i class="layui-icon">&#xe640;</i></button>
                        <button type="button" @click="add_component_defendant_reply('inquiry_answer',index+1,aindex+2)" class="layui-btn layui-btn-sm" data-type="text"
                                style="float: right;height:100px;width:7.5%">
                          <i class="layui-icon">&#xe654;</i>
                        </button>
                        <!--                    <button @click="delete_component('inquiry_answer',index+1,aindex+1)" type="button" class="layui-btn layui-btn-radius layui-btn-xs"-->
                        <!--                            data-type="text"-->
                        <!--                            style="float: right;height:30px;margin-top: 5px;margin-top: 30px;padding: 0 5px;margin-left: 5px">删除-->
                        <!--                    </button>-->
                      </div>
                    </div>
                  </div>
                </template>
              </div>
              <div class="layui-form-item" style="width:100%;margin-top: -10px;">
                <button type="button" class="layui-btn layui-btn-radius layui-btn-xs" @click="add_component_defendant_reply('inquiry_info',index+2)"> 添加问题</button>
                <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs" style="margin-left: 5px" @click="remove_component_defendant_reply('inquiry_info',index+1)"> 删除问题
                </button>
              </div>
            </template>

            <div class="layui-form-item" pane>
              <label class="layui-form-label">是否反诉</label>
              <div class="layui-input-block">
                <div class="myradiomargin">
                  <input type="radio" name="is_counterclaim" lay-ignore="" v-model="data.is_counterclaim"
                         class="myradio" value="1"
                         title="反诉" @change="setCourterClaim()"><label>反诉</label>
                  <input type="radio" name="is_counterclaim" lay-ignore="" v-model="data.is_counterclaim"
                         class="myradio" value="2"
                         title="不反诉" style="margin-left: 15px;" @change="setCourterClaim()"><label>不反诉</label>
                </div>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  </fieldset>
  </fieldset>

  <fieldset class="layui-elem-field layui-field-title" id="counterclaim_accuser_claim_item"
            v-if="data.is_counterclaim==1">
    <legend>反诉原告的诉讼请求项</legend>
    <div class="layui-field-box">
      <div class="layui-card">
        <div class="layui-card-body">
          <form class="layui-form layui-form-pane">
            <div class="layui-form-item" pane>
              <div class="layui-form-label" style="line-height: 80px">
                反诉原告诉讼请求项
              </div>
              <div class="layui-input-block" contenteditable="true">
              <textarea v-model="data.counterclaim_accuser_claim_item" placeholder="请输入诉讼请求项"
                        class="layui-textarea" style="height:40px"></textarea>
              </div>
            </div>

            <div class="layui-form-item" pane>
              <div class="layui-form-label" style="line-height: 80px">
                事实和理由
              </div>
              <div class="layui-input-block">
                <textarea v-model="data.counterclaim_accuser_fact_reason" placeholder="请输入事实和理由"
                          class="layui-textarea"></textarea>
              </div>
            </div>

            <div class="layui-form-item" pane>
              <label class="layui-form-label">反诉被告今天是否答辩</label>
              <div class="layui-input-block">
                <div class="myradiomargin">
                  <input type="radio" lay-ignore="" name="counterclaim_defendant_today_is_reply"
                         v-model="data.counterclaim_defendant_today_is_reply" class="myradio" value="1"
                         title="答辩" @change="setIsTodayReply"><label>答辩</label>
                  <input type="radio" lay-ignore="" name="counterclaim_defendant_today_is_reply"
                         v-model="data.counterclaim_defendant_today_is_reply" class="myradio" value="2"
                         title="不答辩" @change="setIsTodayReply" style="margin-left: 15px;"><label>不答辩</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </fieldset>

  <fieldset class="layui-elem-field layui-field-title" id="counterclaim_defendant_reply"
            v-if="data.counterclaim_defendant_today_is_reply==1 && data.is_counterclaim==1">
    <legend>反诉被告答辩</legend>
    <div class="layui-field-box">
      <div class="layui-card">
        <div class="layui-card-body">
          <form class="layui-form layui-form-pane">
            <template v-for="(item, index) in data.counterclaim_defendant_reply" :key='index'>
              <div class="layui-form-item " pane>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;">
                  <div class="layui-input-inline" style="margin-left:0px ;margin-top: 31px;">
                    <VueMultiselect :option-height="38" v-model="data.counterclaim_defendant_reply[index].name"
                                    :show-labels="false"
                                    :options="getAccuserName" placeholder="请选择反诉被告"
                                    style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <textarea type="text" v-model="data.counterclaim_defendant_reply[index].content"
                                placeholder="请输入答辩内容"
                                autocomplete="off"
                                class="layui-input" style="width: 100%;float: left;min-height:100px"></textarea>

                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-form-item" style="width:100%;">
                <button type="button" class="layui-btn layui-btn-radius layui-btn-xs"
                        @click="add_component('counterclaim_defendant_reply',index)">添加反诉被告答辩内容
                </button>
                <button type="button" class="layui-btn layui-btn-radius layui-btn-danger layui-btn-xs"
                        v-if="index != 0"
                        @click="delete_component('counterclaim_defendant_reply',index)"> 删除答辩内容
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
  judge_accuser_claim_item: "下面进行法庭调查，原告陈述诉讼请求和事实理由。",
  judge_defendant_reply: "对于原告的诉讼请求及事实理由，被告进行答辩。",
  accuser_claim_item_change: "2",
  changed_claim_item: "",
  changed_claim_fact_reason: ""
};

export default {
  data() {
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "CourtInves" in wholeItem) {
      data = wholeItem.CourtInves
    }
    return {
      data: data,
      isShow:{
        judge_inquiry1_show : 1, //judge_inquiry_after_accuser_claim
        judge_inquiry2_show : 1, //judge_inquiry_after_defendant_reply
      }
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
    isShowJudgeInquiry1(){ //被告答辩 (前) 的审判员询问
      if(this.isShow.judge_inquiry1_show == 1){
        this.isShow.judge_inquiry1_show = 0
      }
      else{
        this.isShow.judge_inquiry1_show = 1
      }
    },
    isShowJudgeInquiry2(){ //被告答辩 (后) 的审判员询问
      if(this.isShow.judge_inquiry2_show == 1){
        this.isShow.judge_inquiry2_show = 0
      }
      else{
        this.isShow.judge_inquiry2_show = 1
      }
    },
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
          //
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
        case "inquiry_answer":
          //
          this.data.judge_inquiry_after_accuser_claim[index_info_index].answer.splice(inquiry_answer_index,0,{
            name:"",
            answer:"",
          });
          break;
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
        case "inquiry_answer":
          //
          this.data.judge_inquiry_after_defendant_reply[index_info_index].answer.splice(inquiry_answer_index,0,{
            name:"",
            answer:"",
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
          this.data.defendant_reply.splice(index, 1)
          break
        //第三人述称
        case "third_party_claim":
          //这里是值对应的处理
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
          this.data.judge_inquiry_after_accuser_claim[inquiry_info_index].answer.splice(inquiry_answer_index, 1);
          break;
        case "inquiry_info":
          //这里是值对应的处理
          this.data.judge_inquiry_after_accuser_claim.splice(inquiry_info_index, 1);
          break;
        case "inquiry_answer":
          //这里是值对应的处理
          this.data.judge_inquiry_after_accuser_claim[inquiry_info_index].answer.splice(inquiry_answer_index, 1);
          break;
      }
    },
    remove_component_defendant_reply(datatype, inquiry_info_index, inquiry_answer_index) {
      switch (datatype) {
          case "inquiry_reply":
            //这里是值对应的处理
            this.data.judge_inquiry_after_defendant_reply[inquiry_info_index].answer.splice(inquiry_answer_index, 1);
            break;
          case "inquiry_info":
            //这里是值对应的处理
            this.data.judge_inquiry_after_defendant_reply.splice(inquiry_info_index, 1);
            break;
          case "inquiry_answer":
            //这里是值对应的处理
            this.data.judge_inquiry_after_defendant_reply[inquiry_info_index].answer.splice(inquiry_answer_index, 1);
            break;
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