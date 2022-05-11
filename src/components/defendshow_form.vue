<template>
  <div id="defendshowd_evidence">
    <div class="layui-card">
      <div class="layui-card-body>">
        <form class="layui-form layui-form-pane">
          <div class="layui-form-item" pane>
            <label class="layui-form-label" style="text-align: center">审判员</label>
            <div class="layui-input-block">
              <textarea type="text" class="layui-input" style="text-align: center">被告进行举证</textarea>
            </div>
          </div>
          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <input type="text" v-model="data.defendshowd_evidence[0].defendshow_evidence" placeholder="证据名称" autocomplete="off"
                       class="layui-input" style="line-height: 16px;width: 250px; min-height: 38px">
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.defendshowd_evidence[0].defendshow_content" placeholder="证明事项" autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="add_component('defendshowd_evidence')" type="button"
                          class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe654;</i>
                  </button>
                </div>
              </div>
            </div>
            <template v-for="(item, index) in data.defendshowd_evidence.slice(1)" :key="index">

              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <input type="text" v-model="data.defendshowd_evidence[index+1].defendshow_evidence" placeholder="证据名称" autocomplete="off"
                         class="layui-input" style="line-height: 16px;width: 250px; min-height: 38px">
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <input type="text" v-model="data.defendshowd_evidence[index+1].defendshow_content" placeholder="证明事项" autocomplete="off"
                           class="layui-input" style="width: 90%;float: left;">
                    <button @click="delete_component('defendshowd_evidence',1)" type="button"
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
              <textarea v-model="data.defendshowd_evidence[0].defendshow_fact_reason" placeholder="理由" class="layui-textarea"></textarea>
            </div>
          </div>

          <div class="layui-card">
            <div class="layui-card-body>">
              <div class="layui-form-item" pane>
                <label class="layui-form-label" style="text-align: center">审判员</label>
                <div class="layui-input-block">
                  <textarea type="text" class="layui-input" style="text-align: center">原告及其他被告对被告提交的证据进行质证</textarea>
                </div>
              </div>

              <div class="layui-form-item" pane>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <div class="layui-input-inline" style="margin-left:0px ;">
                    <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.defendshowd_accuser[0].defendshow_accuser"
                                    :options="$store.state.plaintiffname" placeholder="请选择原告"
                                    style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <input type="text"  v-model="data.defendshowd_accuser[0].defendshow_evidencenum" placeholder="证据编号" autocomplete="off"
                             class="layui-input" style="width: 90%;float: left;">
                      <button @click="add_component('defendshowd_accuser')" type="button"
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
                        <input type="radio" value="true" v-model="data.defendshowd_accuser[0].defendshow_facticity" class="myradio" checked><label>是</label>
                        <input type="radio" value="false" v-model="data.defendshowd_accuser[0].defendshow_facticity" class="myradio"><label>否</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <label class="layui-form-label" style="text-align: center">合法性</label>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <div class="myradiomargin" style="width: 100%;float: left;">
                        <input type="radio" value="true" v-model="data.defendshowd_accuser[0].defendshow_legality" class="myradio" checked><label>是</label>
                        <input type="radio" value="false" v-model="data.defendshowd_accuser[0].defendshow_legality" class="myradio"><label>否</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <label class="layui-form-label" style="text-align: center">相关性</label>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <div class="myradiomargin" style="width: 100%;float: left;">
                        <input type="radio" value="true" v-model="data.defendshowd_accuser[0].defendshow_relevance" class="myradio" checked><label>是</label>
                        <input type="radio" value="false" v-model="data.defendshowd_accuser[0].defendshow_relevance" class="myradio"><label>否</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="layui-form-item" pane>
                  <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
                  <div class="layui-input-block">
                    <textarea v-model="data.defendshowd_accuser[0].defendshow_query_reason" placeholder="理由" class="layui-textarea"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <template v-for="(item, index) in data.defendshowd_accuser.slice(1)" :key="index">
            <div class="layui-card">
              <div class="layui-card-body>">
                <div class="layui-form-item" pane>
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                    <div class="layui-input-inline" style="margin-left:0px ;">
                      <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.defendshowd_accuser[index+1].defendshow_accuser"
                                      :options="$store.state.plaintiffname" placeholder="请选择原告"
                                      style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
                    </div>
                    <div class="layui-input-block">
                      <div class="myselect-div">
                        <input type="text"  v-model="data.defendshowd_accuser[index+1].defendshow_evidencenum" placeholder="证据编号" autocomplete="off"
                               class="layui-input" style="width: 90%;float: left;">
                        <button @click="delete_component('defendshowd_accuser',1)" type="button"
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
                          <input type="radio" value="true" v-model="data.defendshowd_accuser[index+1].defendshow_facticity" class="myradio" checked><label>是</label>
                          <input type="radio" value="false" v-model="data.defendshowd_accuser[index+1].defendshow_facticity" class="myradio"><label>否</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                    <label class="layui-form-label" style="text-align: center">合法性</label>
                    <div class="layui-input-block">
                      <div class="myselect-div">
                        <div class="myradiomargin" style="width: 100%;float: left;">
                          <input type="radio" value="true" v-model="data.defendshowd_accuser[index+1].defendshow_legality" class="myradio" checked><label>是</label>
                          <input type="radio" value="false" v-model="data.defendshowd_accuser[index+1].defendshow_legality" class="myradio"><label>否</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                    <label class="layui-form-label" style="text-align: center">相关性</label>
                    <div class="layui-input-block">
                      <div class="myselect-div">
                        <div class="myradiomargin" style="width: 100%;float: left;">
                          <input type="radio" value="true" v-model="data.defendshowd_accuser[index+1].defendshow_relevance" class="myradio" checked><label>是</label>
                          <input type="radio" value="false" v-model="data.defendshowd_accuser[index+1].defendshow_relevance" class="myradio"><label>否</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="layui-form-item" pane>
                    <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
                    <div class="layui-input-block">
                      <textarea v-model="data.defendshowd_accuser[index+1].defendshow_query_reason" placeholder="理由" class="layui-textarea"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.defendshowd_defendant[0].defendshow_defendant"
                                :options="$store.state.defendantname" placeholder="请选择被告"
                                style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text"  v-model="data.defendshowd_defendant[0].defendshow_numevidence" placeholder="证据编号" autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="add_component('defendshowd_defendant')" type="button"
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
                    <input type="radio" value="true" v-model="data.defendshowd_defendant[0].defendshow_numfacticity" class="myradio" checked><label>是</label>
                    <input type="radio" value="false" v-model="data.defendshowd_defendant[0].defendshow_numfacticity" class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label" style="text-align: center">合法性</label>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="true" v-model="data.defendshowd_defendant[0].defendshow_numlegality" class="myradio" checked><label>是</label>
                    <input type="radio" value="false" v-model="data.defendshowd_defendant[0].defendshow_numlegality" class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label" style="text-align: center">相关性</label>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="true" v-model="data.defendshowd_defendant[0].defendshow_numrelevance" class="myradio" checked><label>是</label>
                    <input type="radio" value="false" v-model="data.defendshowd_defendant[0].defendshow_numrelevance" class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
              <div class="layui-input-block">
                <textarea v-model="data.defendshowd_defendant[0].defendshow_query_reason" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </div>

        <template v-for="(item, index) in data.defendshowd_defendant.slice(1)" :key='index'>
          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.defendshowd_defendant[index+1].defendshow_defendant"
                                :options="$store.state.defendantname" placeholder="请选择被告"
                                style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text"  v-model="data.defendshowd_defendant[index+1].defendshow_numevidence" placeholder="证据编号" autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="delete_component('defendshowd_defendant',1)" type="button"
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
                    <input type="radio" value="true" v-model="data.defendshowd_defendant[index+1].defendshow_numfacticity" class="myradio" checked><label>是</label>
                    <input type="radio" value="false" v-model="data.defendshowd_defendant[index+1].defendshow_numfacticity" class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label" style="text-align: center">合法性</label>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="true" v-model="data.defendshowd_defendant[index+1].defendshow_numlegality" class="myradio" checked><label>是</label>
                    <input type="radio" value="false" v-model="data.defendshowd_defendant[index+1].defendshow_numlegality" class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label" style="text-align: center">相关性</label>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="true" v-model="data.defendshowd_defendant[index+1].defendshow_numrelevance" class="myradio" checked><label>是</label>
                    <input type="radio" value="false" v-model="data.defendshowd_defendant[index+1].defendshow_numrelevance" class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
              <div class="layui-input-block">
                <textarea v-model="data.defendshowd_defendant[index+1].defendshow_query_reason" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </div>
        </template>
        <div class="layui-form-item" pane>
          <label class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
            <div class="layui-form-label" style="text-align: center">是否反诉</div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" v-model="data.defendshow_is_counterclaim" class="myradio" value="1" checked>
                    <label>反诉</label>
                    <input type="radio" v-model="data.defendshow_is_counterclaim" class="myradio" value="0">
                    <label>不反诉</label>
                  </div>
                </div>
              </div>
            </label>
        </div>
          <div v-show="data.defendshow_is_counterclaim=='1'">
            <hr>
            <label class="layui-form-label" style="text-align: center">审判员</label>
            <div class="layui-input-block">
              <textarea type="text" class="layui-input" style="text-align: center">反诉原告进行举证</textarea>
            </div>

          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <input type="text" v-model="data.defendshowd_evidence_counter[0].defendshow_evidence" placeholder="证据名称" autocomplete="off"
                       class="layui-input" style="line-height: 16px;width: 250px; min-height: 38px">
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.defendshowd_evidence_counter[0].defendshow_content" placeholder="证明事项" autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="add_component('defendshowd_evidence_counter')" type="button"
                          class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe654;</i>
                  </button>
                </div>
              </div>
            </div>
            <template v-for="(item, index) in data.defendshowd_evidence_counter.slice(1)" :key="index">

              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <input type="text" v-model="data.defendshowd_evidence_counter[index+1].defendshow_evidence" placeholder="证据名称" autocomplete="off"
                         class="layui-input" style="line-height: 16px;width: 250px; min-height: 38px">
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <input type="text" v-model="data.defendshowd_evidence_counter[index+1].defendshow_content" placeholder="证明事项" autocomplete="off"
                           class="layui-input" style="width: 90%;float: left;">
                    <button @click="delete_component('defendshowd_evidence_counter',1)" type="button"
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
              <textarea v-model="data.defendshowd_evidence_counter[0].defendshow_fact_reason" placeholder="理由" class="layui-textarea"></textarea>
            </div>
          </div>

          <div class="layui-card">
            <div class="layui-card-body>">
              <div class="layui-form-item" pane>
                <label class="layui-form-label" style="text-align: center">审判员</label>
                <div class="layui-input-block">
                  <textarea type="text" class="layui-input" style="text-align: center">原告及其他被告对被告提交的证据进行质证</textarea>
                </div>
              </div>

              <div class="layui-form-item" pane>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <div class="layui-input-inline" style="margin-left:0px ;">
                    <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.defendshowd_accuser_counter[0].defendshow_accuser"
                                    :options="$store.state.defendantname" placeholder="请选择反诉原告"
                                    style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <input type="text"  v-model="data.defendshowd_accuser_counter[0].defendshow_evidencenum" placeholder="证据编号" autocomplete="off"
                             class="layui-input" style="width: 90%;float: left;">
                      <button @click="add_component('defendshowd_accuser_counter')" type="button"
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
                        <input type="radio" value="true" v-model="data.defendshowd_accuser_counter[0].defendshow_facticity" class="myradio" checked><label>是</label>
                        <input type="radio" value="false" v-model="data.defendshowd_accuser_counter[0].defendshow_facticity" class="myradio"><label>否</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <label class="layui-form-label" style="text-align: center">合法性</label>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <div class="myradiomargin" style="width: 100%;float: left;">
                        <input type="radio" value="true" v-model="data.defendshowd_accuser_counter[0].defendshow_legality" class="myradio" checked><label>是</label>
                        <input type="radio" value="false" v-model="data.defendshowd_accuser_counter[0].defendshow_legality" class="myradio"><label>否</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <label class="layui-form-label" style="text-align: center">相关性</label>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <div class="myradiomargin" style="width: 100%;float: left;">
                        <input type="radio" value="true" v-model="data.defendshowd_accuser_counter[0].defendshow_relevance" class="myradio" checked><label>是</label>
                        <input type="radio" value="false" v-model="data.defendshowd_accuser_counter[0].defendshow_relevance" class="myradio"><label>否</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="layui-form-item" pane>
                  <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
                  <div class="layui-input-block">
                    <textarea v-model="data.defendshowd_accuser_counter[0].defendshow_query_reason" placeholder="理由" class="layui-textarea"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <template v-for="(item, index) in data.defendshowd_accuser_counter.slice(1)" :key="index">
            <div class="layui-card">
              <div class="layui-card-body>">
                <div class="layui-form-item" pane>
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                    <div class="layui-input-inline" style="margin-left:0px ;">
                      <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.defendshowd_accuser_counter[index+1].defendshow_accuser"
                                      :options="$store.state.defendantname" placeholder="请选择反诉原告"
                                      style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
                    </div>
                    <div class="layui-input-block">
                      <div class="myselect-div">
                        <input type="text"  v-model="data.defendshowd_accuser_counter[index+1].defendshow_evidencenum" placeholder="证据编号" autocomplete="off"
                               class="layui-input" style="width: 90%;float: left;">
                        <button @click="delete_component('defendshowd_accuser_counter',1)" type="button"
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
                          <input type="radio" value="true" v-model="data.defendshowd_accuser_counter[index+1].defendshow_facticity" class="myradio" checked><label>是</label>
                          <input type="radio" value="false" v-model="data.defendshowd_accuser_counter[index+1].defendshow_facticity" class="myradio"><label>否</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                    <label class="layui-form-label" style="text-align: center">合法性</label>
                    <div class="layui-input-block">
                      <div class="myselect-div">
                        <div class="myradiomargin" style="width: 100%;float: left;">
                          <input type="radio" value="true" v-model="data.defendshowd_accuser_counter[index+1].defendshow_legality" class="myradio" checked><label>是</label>
                          <input type="radio" value="false" v-model="data.defendshowd_accuser_counter[index+1].defendshow_legality" class="myradio"><label>否</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                    <label class="layui-form-label" style="text-align: center">相关性</label>
                    <div class="layui-input-block">
                      <div class="myselect-div">
                        <div class="myradiomargin" style="width: 100%;float: left;">
                          <input type="radio" value="true" v-model="data.defendshowd_accuser_counter[index+1].defendshow_relevance" class="myradio" checked><label>是</label>
                          <input type="radio" value="false" v-model="data.defendshowd_accuser_counter[index+1].defendshow_relevance" class="myradio"><label>否</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="layui-form-item" pane>
                    <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
                    <div class="layui-input-block">
                      <textarea v-model="data.defendshowd_accuser_counter[index+1].defendshow_query_reason" placeholder="理由" class="layui-textarea"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.defendshowd_defendant_counter[0].defendshow_defendant"
                                :options="$store.state.plaintiffname" placeholder="请选择反诉被告"
                                style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text"  v-model="data.defendshowd_defendant_counter[0].defendshow_numevidence" placeholder="证据编号" autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="add_component('defendshowd_defendant_counter')" type="button"
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
                    <input type="radio" value="true" v-model="data.defendshowd_defendant_counter[0].defendshow_numfacticity" class="myradio" checked><label>是</label>
                    <input type="radio" value="false" v-model="data.defendshowd_defendant_counter[0].defendshow_numfacticity" class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label" style="text-align: center">合法性</label>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="true" v-model="data.defendshowd_defendant_counter[0].defendshow_numlegality" class="myradio" checked><label>是</label>
                    <input type="radio" value="false" v-model="data.defendshowd_defendant_counter[0].defendshow_numlegality" class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <label class="layui-form-label" style="text-align: center">相关性</label>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <div class="myradiomargin" style="width: 100%;float: left;">
                    <input type="radio" value="true" v-model="data.defendshowd_defendant_counter[0].defendshow_numrelevance" class="myradio" checked><label>是</label>
                    <input type="radio" value="false" v-model="data.defendshowd_defendant_counter[0].defendshow_numrelevance" class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
              <div class="layui-input-block">
                <textarea v-model="data.defendshowd_defendant_counter[0].defendshow_query_reason" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </div>

          <template v-for="(item, index) in data.defendshowd_defendant_counter.slice(1)" :key='index'>
            <div class="layui-form-item" pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <VueMultiselect :option-height="38"  :show-labels="false" v-model="data.defendshowd_defendant_counter[index+1].defendshow_defendant"
                                  :options="$store.state.plaintiffname" placeholder="请选择反诉被告"
                                  style="line-height: 16px;width: 250px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <input type="text"  v-model="data.defendshowd_defendant_counter[index+1].defendshow_numevidence" placeholder="证据编号" autocomplete="off"
                           class="layui-input" style="width: 90%;float: left;">
                    <button @click="delete_component('defendshowd_defendant_counter',1)" type="button"
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
                      <input type="radio" value="true" v-model="data.defendshowd_defendant_counter[index+1].defendshow_numfacticity" class="myradio" checked><label>是</label>
                      <input type="radio" value="false" v-model="data.defendshowd_defendant_counter[index+1].defendshow_numfacticity" class="myradio"><label>否</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <label class="layui-form-label" style="text-align: center">合法性</label>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <div class="myradiomargin" style="width: 100%;float: left;">
                      <input type="radio" value="true" v-model="data.defendshowd_defendant_counter[index+1].defendshow_numlegality" class="myradio" checked><label>是</label>
                      <input type="radio" value="false" v-model="data.defendshowd_defendant_counter[index+1].defendshow_numlegality" class="myradio"><label>否</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <label class="layui-form-label" style="text-align: center">相关性</label>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <div class="myradiomargin" style="width: 100%;float: left;">
                      <input type="radio" value="true" v-model="data.defendshowd_defendant_counter[index+1].defendshow_numrelevance" class="myradio" checked><label>是</label>
                      <input type="radio" value="false" v-model="data.defendshowd_defendant_counter[index+1].defendshow_numrelevance" class="myradio"><label>否</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-form-item" pane>
                <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
                <div class="layui-input-block">
                  <textarea v-model="data.defendshowd_defendant_counter[index+1].defendshow_query_reason" placeholder="理由" class="layui-textarea"></textarea>
                </div>
              </div>
            </div>
          </template>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import VueMultiselect from "vue-multiselect";

export default {
  data() {
    var data;
// if(localStorage.getItem("defendshow_form")==null)
    {
      data = {
        //第一个动态生成的json defendshowd_evidence 包含以下3个信息
        defendshowd_evidence: [{
          defendshow_evidence: "",     //证据名称(被告举证表 原告提出)
          defendshow_content: "",       //证明事项(被告举证表 原告提出)
          defendshow_fact_reason: ""   //事实和理由(被告举证)
        }],
        //第二个动态生成的json defendshowd_accuser 包含以下10个信息
        defendshowd_accuser: [{
          defendshow_accuser: "",        //原告及其他被告姓名
          defendshow_evidencenum: "",    //证据编号
          defendshow_facticity: "",      //真实性(原告质证)
          defendshow_legality: "", //合法性(原告质证)
          defendshow_relevance: "",//关联性(原告质证)
          defendshow_query_reason: "", //事实和理由(原告质证)

        }],
        defendshowd_defendant: [{
          defendshow_defendant: "",        //原告及其他被告姓名(其他被告质证)
          defendshow_numevidence: "",    //证据编号
          defendshow_numfacticity: "",      //真实性(其他被告质证)
          defendshow_numlegality: "", //合法性(其他被告质证))
          defendshow_numrelevance: "",//关联性(其他被告质证))
          defendshow_query_reason:''
        }],
        defendshow_is_counterclaim: '1',          //是否反诉

        //反诉后的答辩情况
        defendshowd_evidence_counter: [{
      defendshow_evidence: "",     //证据名称(被告举证表 原告提出)
      defendshow_content: "",       //证明事项(被告举证表 原告提出)
      defendshow_fact_reason: ""   //事实和理由(被告举证)
    }],
        //第二个动态生成的json defendshowd_accuser 包含以下10个信息
        defendshowd_accuser_counter: [{
          defendshow_accuser: "",        //原告及其他被告姓名
          defendshow_evidencenum: "",    //证据编号
          defendshow_facticity: "",      //真实性(原告质证)
          defendshow_legality: "", //合法性(原告质证)
          defendshow_relevance: "",//关联性(原告质证)
          defendshow_query_reason: "", //事实和理由(原告质证)

        }],
        defendshowd_defendant_counter: [{
          defendshow_defendant: "",        //原告及其他被告姓名(其他被告质证)
          defendshow_numevidence: "",    //证据编号
          defendshow_numfacticity: "",      //真实性(其他被告质证)
          defendshow_numlegality: "", //合法性(其他被告质证))
          defendshow_numrelevance: "",//关联性(其他被告质证))
          defendshow_query_reason:''
        }],
      };
    }
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null && "defendshow_form" in wholeItem){
      data=wholeItem.defendshow_form
    }
    return {
      data:data
    }
  },


  components:{
    VueMultiselect
  },
  // mounted(){
  // },
  methods: {
    add_component(datatype) {
      switch(datatype){
        case "defendshowd_evidence":
          //accshowd_evidence 模块的数据加入
          this.data.defendshowd_evidence.push({
            defendshow_evidence:"",     //证据名称(被告举证表 原告提出)
            defendshow_content:"",       //证明事项(被告举证表 原告提出)
            defendshow_fact_reason:""   //事实和理由(被告举证)
          });
          break
        case "defendshowd_accuser":
          //这里是值对应的处理
          this.data.defendshowd_accuser.push({
            defendshow_accuser:"",        //原告及其他被告姓名
            defendshow_evidencenum:"",    //证据编号
            defendshow_facticity:"",      //真实性(原告质证)
            defendshow_legality:"", //合法性(原告质证)
            defendshow_relevance:"",//关联性(原告质证)
            defendshow_query_facticity:"", //真实性理由(原告质证)
            defendshow_query_legality:"", //合法性理由(原告质证)
            defendshow_query_relevace:"", //完整性理由(原告质证)
          })
          break
        case "defendshowd_defendant":
          this.data.defendshowd_defendant.push({
            defendshow_defendant:"",        //原告及其他被告姓名(其他被告质证)
            defendshow_numevidence:"",    //证据编号
            defendshow_numfacticity:"",      //真实性(其他被告质证)
            defendshow_numlegality:"", //合法性(其他被告质证))
            defendshow_numrelevance:"",//关联性(其他被告质证))
            defendshow_reason_facticity:"", //真实性理由(其他被告质证)
            defendshow_reason_legality:"", //合法性理由(其他被告质证)
            defendshow_reason_relevace:"", //关联性理由(其他被告质证)
          })
      break
        case "defendshowd_evidence_counter":
          //accshowd_evidence 模块的数据加入
          this.data.defendshowd_evidence_counter.push({
            defendshow_evidence:"",     //证据名称(被告举证表 原告提出)
            defendshow_content:"",       //证明事项(被告举证表 原告提出)
            defendshow_fact_reason:""   //事实和理由(被告举证)
          });
          break
        case "defendshowd_accuser_counter":
          //这里是值对应的处理
          this.data.defendshowd_accuser_counter.push({
            defendshow_accuser:"",        //原告及其他被告姓名
            defendshow_evidencenum:"",    //证据编号
            defendshow_facticity:"",      //真实性(原告质证)
            defendshow_legality:"", //合法性(原告质证)
            defendshow_relevance:"",//关联性(原告质证)
            defendshow_query_facticity:"", //真实性理由(原告质证)
            defendshow_query_legality:"", //合法性理由(原告质证)
            defendshow_query_relevace:"", //完整性理由(原告质证)
          })
          break
        case "defendshowd_defendant_counter":
          this.data.defendshowd_defendant_counter.push({
            defendshow_defendant:"",        //原告及其他被告姓名(其他被告质证)
            defendshow_numevidence:"",    //证据编号
            defendshow_numfacticity:"",      //真实性(其他被告质证)
            defendshow_numlegality:"", //合法性(其他被告质证))
            defendshow_numrelevance:"",//关联性(其他被告质证))
            defendshow_reason_facticity:"", //真实性理由(其他被告质证)
            defendshow_reason_legality:"", //合法性理由(其他被告质证)
            defendshow_reason_relevace:"", //关联性理由(其他被告质证)
          })
          break
        default:
          //这里是没有找到对应的值处理
          break
      }

    },
    delete_component(datatype,index){
      switch(datatype){
        case "defendshowd_evidence":
          //这里是值对应的处理
          this.data.defendshowd_evidence.splice(index,1)
          break
        case "defendshowd_accuser":
          //这里是值对应的处理
          this.data.defendshowd_accuser.splice(index,1)
          break
        case"defendshowd_defendant":
          this.data.defendshowd_defendant.splice(index,1)
          break
        case "defendshowd_evidence_counter":
          //这里是值对应的处理
          this.data.defendshowd_evidence_counter.splice(index,1)
          break
        case "defendshowd_accuser_counter":
          //这里是值对应的处理
          this.data.defendshowd_accuser_counter.splice(index,1)
          break
        case"defendshowd_defendant_counter":
          this.data.defendshowd_defendant_counter.splice(index,1)
          break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    // save_localstorage(){
    //   localStorage.setItem('defendshow_form',JSON.stringify(this.data))
    // }
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
            wholeItem.defendshow_form = this.data
            localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
            this.data.defendshow_is_counterclaim=this.$store.state.is_counterclaim
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