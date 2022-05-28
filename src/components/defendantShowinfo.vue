<template>
    <div class="layui-card">
      <div class="layui-card-body">
        <form class="layui-form layui-form-pane">
          <div class="layui-form-item" pane>
            <label class="layui-form-label" style="text-align: center">审判员</label>
            <div class="layui-input-block">
              <textarea type="text" class="layui-textarea"
                        style="height:38px;min-height:38px">被告进行举证</textarea>
            </div>
          </div>
          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">

              <div class="layui-input-inline" style="margin-left:0px ;">
                <input type="text" v-model="data.defendant_evidence[0].evidence" lay-verify="required" placeholder="证据名称"
                       autocomplete="off"
                       class="layui-input" style="line-height: 16px;width: 250px; min-height: 38px">
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <input type="text" v-model="data.defendant_evidence[0].content" lay-verify="required" placeholder="证明事项"
                         autocomplete="off"
                         class="layui-input" style="width: 90%;float: left;">
                  <button @click="add_component('defendant_evidence')" type="button"
                          class="layui-btn layui-btn-primary layui-btn-sm"
                          data-type="text" style="float: right;">
                    <i class="layui-icon">&#xe654;</i>
                  </button>
                </div>
              </div>
            </div>
            <template v-for="(item, index) in data.defendant_evidence.slice(1)" :key="index">

              <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <input type="text" v-model="data.defendant_evidence[index+1].evidence" placeholder="证据名称"
                         autocomplete="off"
                         class="layui-input" style="line-height: 16px;width: 250px; min-height: 38px">
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <input type="text" v-model="data.defendant_evidence[index+1].content"
                           placeholder="证明事项" autocomplete="off"
                           class="layui-input" style="width: 90%;float: left;">
                    <button @click="delete_component('defendant_evidence',index+1)" type="button"
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
              <textarea v-model="data.defendant_evidence_fact_reason" lay-verify="required" placeholder="理由"
                        class="layui-textarea"></textarea>
            </div>
          </div>

          <div class="site-border-cyan" style="width:80%">
            <hr class="hr-solid-content" data-content="原告对该被告所提交证据进行质证">
          </div>

          <div class="layui-form-item" pane>
            <label class="layui-form-label" style="text-align: center">审判员</label>
            <div class="layui-input-block">
              <textarea type="text" class="layui-textarea"
                        style="height:38px;min-height:38px">原告及其他被告对被告提交的证据进行质证</textarea>
            </div>
          </div>

          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38" :show-labels="false"
                                v-model="data.accuser_query[0].accuser"
                                :options="$store.state.plaintiffname" placeholder="请选择原告"
                                lay-verify="vueselect"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <VueMultiselect :option-height="38" :show-labels="false"
                                  v-model="data.accuser_query[0].evidence"
                                  :options=getProofDefendant placeholder="请选择被告提交的证据名称"
                                  lay-verify="vueselect"
                                  style="line-height: 16px;width: 90%; min-height: 38px;float:left;"></VueMultiselect>
                  <button @click="add_component('accuser_query')" type="button"
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
                    <input type="radio" value="true" lay-ignore v-model="data.accuser_query[0].facticity"
                           class="myradio"><label>是</label>
                    <input type="radio" value="false" lay-ignore v-model="data.accuser_query[0].facticity"
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
                    <input type="radio" value="true" lay-ignore v-model="data.accuser_query[0].legality"
                           class="myradio"><label>是</label>
                    <input type="radio" value="false" lay-ignore v-model="data.accuser_query[0].legality"
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
                    <input type="radio" value="true" lay-ignore v-model="data.accuser_query[0].relevance"
                           class="myradio"><label>是</label>
                    <input type="radio" value="false" lay-ignore v-model="data.accuser_query[0].relevance"
                           class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="layui-form-item" pane>
            <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
            <div class="layui-input-block">
                <textarea v-model="data.accuser_query[0].accuser_query_fact_reason" lay-ignore placeholder="理由" lay-verify="required"
                          class="layui-textarea"></textarea>
            </div>
          </div>

          <template v-for="(item, index) in data.accuser_query.slice(1)" :key="index">
            <div class="layui-form-item" pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <VueMultiselect :option-height="38" :show-labels="false"
                                  v-model="data.accuser_query[index+1].accuser"
                                  :options="$store.state.plaintiffname" placeholder="请选择原告"
                                  style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.accuser_query[index+1].evidence"
                                    :options=getProofDefendant placeholder="请选择被告提交的证据名称"
                                    style="line-height: 16px;width: 90%; min-height: 38px;float:left;"></VueMultiselect>
                    <button @click="delete_component('accuser_query',index+1)" type="button"
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
                      <input type="radio" value="true" lay-ignore v-model="data.accuser_query[index+1].facticity"
                             class="myradio"><label>是</label>
                      <input type="radio" value="false" lay-ignore v-model="data.accuser_query[index+1].facticity"
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
                      <input type="radio" value="true" lay-ignore v-model="data.accuser_query[index+1].legality"
                             class="myradio"><label>是</label>
                      <input type="radio" value="false" lay-ignore v-model="data.accuser_query[index+1].legality"
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
                      <input type="radio" value="true" lay-ignore v-model="data.accuser_query[index+1].relevance"
                             class="myradio"><label>是</label>
                      <input type="radio" value="false" lay-ignore v-model="data.accuser_query[index+1].relevance"
                             class="myradio"><label>否</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
              <div class="layui-input-block">
                  <textarea v-model="data.accuser_query[index+1].accuser_query_fact_reason" placeholder="理由"
                            class="layui-textarea"></textarea>
              </div>
            </div>
          </template>

          <div class="site-border-cyan" style="width:80%">
            <hr class="hr-solid-content" data-content="其他被告对该被告所提交证据进行质证">
          </div>

          <div class="layui-form-item" pane>
            <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
              <div class="layui-input-inline" style="margin-left:0px ;">
                <VueMultiselect :option-height="38" :show-labels="false"
                                v-model="data.other_defendant_query[0].defendant"
                                :options="$store.state.defendantname" placeholder="请选择其他被告"
                                lay-verify="vueselect"
                                style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
              </div>
              <div class="layui-input-block">
                <div class="myselect-div">
                  <VueMultiselect :option-height="38" :show-labels="false"
                                  v-model="data.other_defendant_query[0].evidence"
                                  :options=getProofDefendant placeholder="请选择被告提交的证据名称"
                                  lay-verify="vueselect"
                                  style="line-height: 16px;width: 90%; min-height: 38px;float:left;"></VueMultiselect>
                  <button @click="add_component('other_defendant_query')" type="button"
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
                    <input type="radio" value="true" v-model="data.other_defendant_query[0].facticity" lay-ignore
                           class="myradio"><label>是</label>
                    <input type="radio" value="false" v-model="data.other_defendant_query[0].facticity" lay-ignore
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
                    <input type="radio" value="true" v-model="data.other_defendant_query[0].legality" lay-ignore
                           class="myradio"><label>是</label>
                    <input type="radio" value="false" v-model="data.other_defendant_query[0].legality" lay-ignore
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
                    <input type="radio" value="true" v-model="data.other_defendant_query[0].relevance" lay-ignore
                           class="myradio"><label>是</label>
                    <input type="radio" value="false" v-model="data.other_defendant_query[0].relevance" lay-ignore
                           class="myradio"><label>否</label>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="layui-form-item" pane>
            <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
            <div class="layui-input-block">
                <textarea v-model="data.other_defendant_query[0].counterclaim_accuser_query_fact_reason" lay-verify="required"  placeholder="理由"
                          class="layui-textarea"></textarea>
            </div>
          </div>

          <template v-for="(item, index) in data.other_defendant_query.slice(1)" :key='index'>
            <div class="layui-form-item" pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <VueMultiselect :option-height="38" :show-labels="false"
                                  v-model="data.other_defendant_query[index+1].defendant"
                                  :options="$store.state.defendantname" placeholder="请选择被告"
                                  style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.other_defendant_query[index+1].evidence"
                                    :options=getProofDefendant placeholder="请选择被告提交的证据名称"
                                    style="line-height: 16px;width: 90%; min-height: 38px;float:left;"></VueMultiselect>
                    <button @click="delete_component('other_defendant_query',index+1)" type="button"
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
                      <input type="radio" value="true"
                             v-model="data.other_defendant_query[index+1].facticity" lay-ignore
                             class="myradio"><label>是</label>
                      <input type="radio" value="false"
                             v-model="data.other_defendant_query[index+1].facticity" lay-ignore
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
                      <input type="radio" value="true"
                             v-model="data.other_defendant_query[index+1].legality" lay-ignore
                             class="myradio"><label>是</label>
                      <input type="radio" value="false"
                             v-model="data.other_defendant_query[index+1].legality" lay-ignore
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
                      <input type="radio" value="true"
                             v-model="data.other_defendant_query[index+1].relevance" lay-ignore
                             class="myradio"><label>是</label>
                      <input type="radio" value="false"
                             v-model="data.other_defendant_query[index+1].relevance" lay-ignore
                             class="myradio"><label>否</label>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
              <div class="layui-input-block">
                  <textarea v-model="data.other_defendant_query[index+1].other_defendant_query_fact_reason" placeholder="理由"
                            class="layui-textarea"></textarea>
              </div>
            </div>
          </template>

          <div v-if="$store.state.is_counterclaim=='1'">

            <div class="site-border-cyan" style="width:80%">
              <hr class="hr-solid-content" data-content="反诉被告进行举证">
            </div>

            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center">审判员</label>
              <div class="layui-input-block">
                <textarea type="text" class="layui-textarea" style="height: 38px;min-height: 38px">反诉被告进行举证</textarea>
              </div>
            </div>

            <div class="layui-form-item" pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <input type="text" v-model="data.counterclaim_defendant_evidence[0].evidence" lay-ignore
                         placeholder="证据名称" autocomplete="off"
                         lay-verify="required"
                         class="layui-input" style="line-height: 16px;width: 250px; min-height: 38px">
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <input type="text" v-model="data.counterclaim_defendant_evidence[0].content" lay-ignore
                           placeholder="证明事项" autocomplete="off" lay-verify="required"
                           class="layui-input" style="width: 90%;float: left;">
                    <button @click="add_component('counterclaim_defendant_evidence')" type="button"
                            class="layui-btn layui-btn-primary layui-btn-sm"
                            data-type="text" style="float: right;">
                      <i class="layui-icon">&#xe654;</i>
                    </button>
                  </div>
                </div>
              </div>
              <template v-for="(item, index) in data.counterclaim_defendant_evidence.slice(1)" :key="index">

                <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
                  <div class="layui-input-inline" style="margin-left:0px ;">
                    <input type="text" v-model="data.counterclaim_defendant_evidence[index+1].evidence"
                           placeholder="证据名称" autocomplete="off"
                           class="layui-input" style="line-height: 16px;width: 210px; min-height: 38px">
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <input type="text" v-model="data.counterclaim_defendant_evidence[index+1].content"
                             placeholder="证明事项" autocomplete="off"
                             class="layui-input" style="width: 90%;float: left;">
                      <button @click="delete_component('counterclaim_defendant_evidence',index+1)" type="button"
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
                <textarea v-model="data.counterclaim_defendant_evidence_fact_reason" placeholder="理由" lay-ignore lay-verify="required"
                          class="layui-textarea"></textarea>
              </div>
            </div>
            <div class="site-border-cyan" style="width:80%">
              <hr class="hr-solid-content" data-content="反诉原告对反诉被告提交的证据进行质证">
            </div>

            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center">审判员</label>
              <div class="layui-input-block">
                <textarea type="text" class="layui-textarea" style="height: 38px;min-height: 38px">反诉原告对反诉被告提交的证据进行质证</textarea>
              </div>
            </div>

            <div class="layui-form-item" pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <VueMultiselect :option-height="38" :show-labels="false"
                                  v-model="data.counterclaim_accuser_query[0].counterclaim_accuser"
                                  :options="$store.state.defendantname" placeholder="请选择反诉原告"
                                  lay-verify="vueselect"
                                  style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.counterclaim_accuser_query[0].evidence"
                                    :options=getProofOfCounterDefendant placeholder="请选择反诉被告列举的证据"
                                    lay-verify="vueselect"
                                    style="line-height: 16px;width: 90%; float: left;"></VueMultiselect>
                    <button @click="add_component('counterclaim_accuser_query')" type="button"
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
                      <input type="radio" value="true"
                             v-model="data.counterclaim_accuser_query[0].facticity" lay-ignore

                             class="myradio"><label>是</label>
                      <input type="radio" value="false"
                             v-model="data.counterclaim_accuser_query[0].facticity" lay-ignore
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
                      <input type="radio" value="true" v-model="data.counterclaim_accuser_query[0].legality" lay-ignore
                             class="myradio"><label>是</label>
                      <input type="radio" value="false"
                             v-model="data.counterclaim_accuser_query[0].legality" lay-ignore
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
                      <input type="radio" value="true"
                             v-model="data.counterclaim_accuser_query[0].relevance" lay-ignore
                             class="myradio"><label>是</label>
                      <input type="radio" value="false"
                             v-model="data.counterclaim_accuser_query[0].relevance" lay-ignore
                             class="myradio"><label>否</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
              <div class="layui-input-block">
                  <textarea v-model="data.counterclaim_accuser_query[0].counterclaim_accuser_query_fact_reason" lay-verify="required" placeholder="理由"
                            class="layui-textarea"></textarea>
              </div>
            </div>

            <template v-for="(item, index) in data.counterclaim_accuser_query.slice(1)" :key="index">
              <div class="layui-form-item" pane>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <div class="layui-input-inline" style="margin-left:0px ;">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.counterclaim_accuser_query[index+1].counterclaim_accuser"
                                    :options="$store.state.defendantname" placeholder="请选择反诉原告"
                                    style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <VueMultiselect :option-height="38" :show-labels="false"
                                      v-model="data.counterclaim_accuser_query[index+1].evidence"
                                      :options=getProofOfCounterDefendant placeholder="请选择反诉被告列举的证据"
                                      style="line-height: 16px;width: 90%; float: left;"></VueMultiselect>
                      <button @click="delete_component('counterclaim_accuser_query',index+1)" type="button"
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
                        <input type="radio" value="true"
                               v-model="data.counterclaim_accuser_query[index+1].facticity" lay-ignore  class="myradio"><label>是</label>
                        <input type="radio" value="false"
                               v-model="data.counterclaim_accuser_query[index+1].facticity" lay-ignore  class="myradio"><label>否</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <label class="layui-form-label" style="text-align: center">合法性</label>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <div class="myradiomargin" style="width: 100%;float: left;">
                        <input type="radio" value="true"
                               v-model="data.counterclaim_accuser_query[index+1].legality" lay-ignore
                               class="myradio"><label>是</label>
                        <input type="radio" value="false"
                               v-model="data.counterclaim_accuser_query[index+1].legality" lay-ignore
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
                        <input type="radio" value="true"
                               v-model="data.counterclaim_accuser_query[index+1].relevance" class="myradio" lay-ignore
                               ed><label>是</label>
                        <input type="radio" value="false"
                               v-model="data.counterclaim_accuser_query[index+1].relevance"  lay-ignore class="myradio"><label>否</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-form-item" pane>
                <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
                <div class="layui-input-block">
                    <textarea v-model="data.counterclaim_accuser_query[index+1].counterclaim_accuser_query_fact_reason"
                              placeholder="理由" class="layui-textarea"></textarea>
                </div>
              </div>
            </template>

            <div class="site-border-cyan" style="width:80%">
              <hr class="hr-solid-content" data-content="其他反诉被告对反诉原告提交的证据进行质证">
            </div>

            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center">审判员</label>
              <div class="layui-input-block">
                <textarea type="text" class="layui-textarea" style="height: 38px;min-height: 38px">其他反诉被告对反诉原告提交的证据进行质证</textarea>
              </div>
            </div>

            <div class="layui-form-item" pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <VueMultiselect :option-height="38" :show-labels="false"
                                  v-model="data.other_counterclaim_defendant_query[0].other_counterclaim_defendant"
                                  :options="$store.state.plaintiffname" placeholder="请选择反诉被告"
                                  lay-verify="vueselect"
                                  style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.other_counterclaim_defendant_query[0].evidence"
                                    :options=getProofOfCounterDefendant placeholder="请选择反诉原告列举的证据"
                                    lay-verify="vueselect"
                                    style="line-height: 16px;width: 90%; float: left;"></VueMultiselect>
                    <button @click="add_component('other_counterclaim_defendant_query')" type="button"
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
                      <input type="radio" value="true"
                             v-model="data.other_counterclaim_defendant_query[0].facticity" lay-ignore
                             class="myradio"><label>是</label>
                      <input type="radio" value="false"
                             v-model="data.other_counterclaim_defendant_query[0].facticity" lay-ignore
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
                      <input type="radio" value="true" v-model="data.other_counterclaim_defendant_query[0].legality" lay-ignore
                             class="myradio"><label>是</label>
                      <input type="radio" value="false"
                             v-model="data.other_counterclaim_defendant_query[0].legality" lay-ignore
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
                      <input type="radio" value="true"
                             v-model="data.other_counterclaim_defendant_query[0].relevance" lay-ignore
                             class="myradio"><label>是</label>
                      <input type="radio" value="false"
                             v-model="data.other_counterclaim_defendant_query[0].relevance" lay-ignore
                             class="myradio"><label>否</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
              <div class="layui-input-block">
                  <textarea v-model="data.other_counterclaim_defendant_query[0].other_counterclaim_defendant_query_fact_reason" lay-verify="required" placeholder="事实和理由"
                            class="layui-textarea"></textarea>
              </div>
            </div>
            <template v-for="(item, index) in data.other_counterclaim_defendant_query.slice(1)" :key="index">
              <div class="layui-form-item" pane>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <div class="layui-input-inline" style="margin-left:0px ;">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.other_counterclaim_defendant_query[index+1].other_counterclaim_defendant"
                                    :options="$store.state.plaintiffname" placeholder="请选择反诉被告"
                                    style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <VueMultiselect :option-height="38" :show-labels="false"
                                      v-model="data.other_counterclaim_defendant_query[index+1].evidence"
                                      :options=getProofOfCounterDefendant placeholder="请选择反诉原告列举的证据"
                                      style="line-height: 16px;width: 90%; float: left;"></VueMultiselect>
                      <button @click="delete_component('other_counterclaim_defendant_query',index+1)" type="button"
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
                        <input type="radio" value="true"
                               v-model="data.other_counterclaim_defendant_query[index+1].facticity" lay-ignore
                               class="myradio"><label>是</label>
                        <input type="radio" value="false"
                               v-model="data.other_counterclaim_defendant_query[index+1].facticity" lay-ignore
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
                        <input type="radio" value="true" v-model="data.other_counterclaim_defendant_query[index+1].legality" lay-ignore
                               class="myradio"><label>是</label>
                        <input type="radio" value="false"
                               v-model="data.other_counterclaim_defendant_query[index+1].legality" lay-ignore
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
                        <input type="radio" value="true"
                               v-model="data.other_counterclaim_defendant_query[index+1].relevance" lay-ignore
                               class="myradio"><label>是</label>
                        <input type="radio" value="false"
                               v-model="data.other_counterclaim_defendant_query[index+1].relevance" lay-ignore
                               class="myradio"><label>否</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-form-item" pane>
                <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
                <div class="layui-input-block">
                  <textarea v-model="data.other_counterclaim_defendant_query[index+1].other_counterclaim_defendant_query_fact_reason" placeholder="理由"
                            class="layui-textarea"></textarea>
                </div>
              </div>
            </template>

            <div class="site-border-cyan" style="width:80%">
              <hr class="hr-solid-content" data-content="反诉原告进行举证">
            </div>

            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center">审判员</label>
              <div class="layui-input-block">
                <textarea type="text" class="layui-textarea" style="height: 38px;min-height: 38px">反诉原告进行举证</textarea>
              </div>
            </div>

            <div class="layui-form-item" pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <input type="text" v-model="data.counterclaim_accuser_evidence[0].evidence" lay-verify="required"
                         placeholder="证据名称" autocomplete="off"
                         class="layui-input" style="line-height: 16px;width: 250px; min-height: 38px">
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <input type="text" v-model="data.counterclaim_accuser_evidence[0].content" lay-verify="required"
                           placeholder="证明事项" autocomplete="off"
                           class="layui-input" style="width: 90%;float: left;">
                    <button @click="add_component('counterclaim_accuser_evidence')" type="button"
                            class="layui-btn layui-btn-primary layui-btn-sm"
                            data-type="text" style="float: right;">
                      <i class="layui-icon">&#xe654;</i>
                    </button>
                  </div>
                </div>
              </div>
              <template v-for="(item, index) in data.counterclaim_accuser_evidence.slice(1)" :key="index">

                <div class="layui-inline" style="width: 100%;margin-bottom:0px;margin-top:5px;height: 38px;">
                  <div class="layui-input-inline" style="margin-left:0px ;">
                    <input type="text" v-model="data.counterclaim_accuser_evidence[index+1].evidence"
                           placeholder="证据名称" autocomplete="off"
                           class="layui-input" style="line-height: 16px;width: 210px; min-height: 38px">
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <input type="text" v-model="data.counterclaim_accuser_evidence[index+1].content"
                             placeholder="证明事项" autocomplete="off"
                             class="layui-input" style="width: 90%;float: left;">
                      <button @click="delete_component('counterclaim_accuser_evidence',index+1)" type="button"
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
                <textarea v-model="data.counterclaim_accuser_evidence_fact_reason" placeholder="理由" lay-verify="required"
                          class="layui-textarea"></textarea>
              </div>
            </div>

            <div class="site-border-cyan" style="width:80%">
              <hr class="hr-solid-content" data-content="反诉被告对反诉原告提交的证据进行质证">
            </div>

            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center">审判员</label>
              <div class="layui-input-block">
                <textarea type="text" class="layui-textarea" style="height: 38px;min-height: 38px">反诉被告对反诉原告提交的证据进行质证</textarea>
              </div>
            </div>

            <div class="layui-form-item" pane>
              <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                <div class="layui-input-inline" style="margin-left:0px ;">
                  <VueMultiselect :option-height="38" :show-labels="false"
                                  v-model="data.counterclaim_defendant_query[0].counterclaim_defendant"
                                  :options="$store.state.plaintiffname" placeholder="请选择反诉被告"
                                  lay-verify="vueselect"
                                  style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                </div>
                <div class="layui-input-block">
                  <div class="myselect-div">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.counterclaim_defendant_query[0].evidence"
                                    :options=getProofOfCounterAccuser placeholder="请选择反诉原告列举的证据"
                                    lay-verify="vueselect"
                                    style="line-height: 16px;width: 90%; float: left;"></VueMultiselect>
                    <button @click="add_component('counterclaim_defendant_query')" type="button"
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
                      <input type="radio" value="true"
                             v-model="data.counterclaim_defendant_query[0].facticity" lay-ignore
                             class="myradio"><label>是</label>
                      <input type="radio" value="false"
                             v-model="data.counterclaim_defendant_query[0].facticity" lay-ignore
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
                      <input type="radio" value="true" v-model="data.counterclaim_defendant_query[0].legality" lay-ignore
                             class="myradio"><label>是</label>
                      <input type="radio" value="false"
                             v-model="data.counterclaim_defendant_query[0].legality" lay-ignore
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
                      <input type="radio" value="true"
                             v-model="data.counterclaim_defendant_query[0].relevance" lay-ignore
                             class="myradio"><label>是</label>
                      <input type="radio" value="false"
                             v-model="data.counterclaim_defendant_query[0].relevance" lay-ignore
                             class="myradio"><label>否</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-form-item" pane>
              <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
              <div class="layui-input-block">
                  <textarea v-model="data.counterclaim_defendant_query[0].counterclaim_defendant_query_fact_reason" lay-verify="required" placeholder="理由"
                            class="layui-textarea"></textarea>
              </div>
            </div>

            <template v-for="(item, index) in data.counterclaim_defendant_query.slice(1)" :key="index">
              <div class="layui-form-item" pane>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <div class="layui-input-inline" style="margin-left:0px ;">
                    <VueMultiselect :option-height="38" :show-labels="false"
                                    v-model="data.counterclaim_defendant_query[index+1].counterclaim_defendant"
                                    :options="$store.state.plaintiffname" placeholder="请选择反诉被告"
                                    style="line-height: 16px;width: 210px; min-height: 38px"></VueMultiselect>
                  </div>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <VueMultiselect :option-height="38" :show-labels="false"
                                      v-model="data.counterclaim_defendant_query[index+1].evidence"
                                      :options=getProofOfCounterAccuser placeholder="请选择反诉原告列举的证据"
                                      style="line-height: 16px;width: 90%; float: left;"></VueMultiselect>
                      <button @click="delete_component('counterclaim_defendant_query',index+1)" type="button"
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
                        <input type="radio" value="true"
                               v-model="data.counterclaim_defendant_query[index+1].facticity" lay-ignore class="myradio"><label>是</label>
                        <input type="radio" value="false"
                               v-model="data.counterclaim_defendant_query[index+1].facticity" lay-ignore class="myradio"><label>否</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="layui-inline" style="width: 100%;margin-bottom:0px;height: 38px;">
                  <label class="layui-form-label" style="text-align: center">合法性</label>
                  <div class="layui-input-block">
                    <div class="myselect-div">
                      <div class="myradiomargin" style="width: 100%;float: left;">
                        <input type="radio" value="true"
                               v-model="data.counterclaim_defendant_query[index+1].legality" lay-ignore
                               class="myradio"><label>是</label>
                        <input type="radio" value="false"
                               v-model="data.counterclaim_defendant_query[index+1].legality" lay-ignore
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
                        <input type="radio" value="true"
                               v-model="data.counterclaim_defendant_query[index+1].relevance" class="myradio" lay-ignore
                               ><label>是</label>
                        <input type="radio" value="false"
                               v-model="data.counterclaim_defendant_query[index+1].relevance" lay-ignore class="myradio"><label>否</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-form-item" pane>
                <label class="layui-form-label" style="text-align: center;line-height: 70px">事实和理由</label>
                <div class="layui-input-block">
                    <textarea v-model="data.counterclaim_defendant_query[index+1].counterclaim_defendant_query_fact_reason"
                              placeholder="理由" class="layui-textarea"></textarea>
                </div>
              </div>
            </template>
          </div>
        </form>
      </div>
    </div>
</template>

<script>

import VueMultiselect from "vue-multiselect";

export default {
  data() {
     var data = {
        //第一个动态生成的json defendant_evidence 包含以下3个信息
        defendant_evidence: [{
          evidence: "",     //证据名称(被告举证表 原告提出)
          content: "",       //证明事项(被告举证表 原告提出)

        }],
       defendant_evidence_fact_reason: "",   //事实和理由(被告举证)
        //第二个动态生成的json accuser_query 包含以下6个信息
        accuser_query: [{
          accuser: "",        //原告及其他被告姓名
          evidence: "",    //证据
          facticity: "true",      //真实性(原告质证)
          legality: "true", //合法性(原告质证)
          relevance: "true",//关联性(原告质证)
          accuser_query_fact_reason: "", //事实和理由(原告质证)
        }],
//其他被告质证环节
        other_defendant_query: [{
          defendant: "",        //其他被告姓名(其他被告质证)
          evidence: "",    //证据
          facticity: "true",      //真实性(其他被告质证)
          legality: "true", //合法性(其他被告质证))
          relevance: "true",//关联性(其他被告质证))
          other_defendant_query_fact_reason: '' //其他被告的关联合法性事实理由 动态添加
        }],

        //反诉后的答辩情况
       //反诉后第一个部分 反诉被告（原告）进行举证
        counterclaim_defendant_evidence: [{
          evidence: "",     //证据名称(反诉被告提出新的证据)
          content: "",       //证明事项(反诉被告提出)

        }],
       counterclaim_defendant_evidence_fact_reason: "" ,  //事实和理由(反诉被告提出，事实和理由 不是动态添加的)
        //反诉后第二个动态生成的部分 反诉原告质证
        counterclaim_accuser_query: [{
          counterclaim_accuser: "",        //反诉原告姓名
          evidence: "",    //反诉原告质证证据名称
          facticity: "true",      //真实性(反诉原告质证)
          legality: "true", //合法性(反诉原告质证)
          relevance: "true",//关联性(反诉原告质证)
          counterclaim_accuser_query_fact_reason: "", //事实和理由(反诉原告质证 需要动态添加)
        }],
       other_counterclaim_defendant_query: [
         {
           other_counterclaim_defendant: "",
           evidence: "",
           facticity: "true",
           legality: "true",
           relevance: "true",
           other_counterclaim_defendant_query_fact_reason: ""
         }
       ],
       // counterclaim_accuser_fact_reason:"", //反诉原告 诉讼请求项的事实与理由
       //反诉后第三个生成部分 反诉原告 (原告) 进行举证
       counterclaim_accuser_evidence:[
         {
           evidence: "",
           content: ""
         }
       ],
       //反诉原告提出的证据的 事实和理由
       counterclaim_accuser_evidence_fact_reason:"",
       //反诉后第四个生成部分 反诉被告 (原告) 进行质证
       counterclaim_defendant_query: [
         {
           counterclaim_defendant: "",
           evidence: "",
           facticity: "true",
           legality: "true",
           relevance: "true",
           counterclaim_defendant_query_fact_reason: ""
         }
       ],
      };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if (wholeItem != null && "defendantShowInfo" in wholeItem) {
      data = wholeItem.defendantShowInfo
    }
    return {
      data: data
    }
  },
  computed: {
    getProofDefendant: {
      get() {
        return this.data.defendant_evidence.map(function (e) {
          return e.evidence;
        })
      },
    },
    getProofOfCounterDefendant: {
      get() {
        return this.data.counterclaim_defendant_evidence.map(function (e) {
          return e.evidence;
        })
      },
    },
    getProofOfCounterAccuser: {
      get() {
        return this.data.counterclaim_accuser_evidence.map(function (e) {
          return e.evidence;
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
        case "defendant_evidence":
          //accshowd_evidence 模块的数据加入
          this.data.defendant_evidence.push({
            evidence: "",     //证据名称(被告举证表 原告提出)
            content: "",       //证明事项(被告举证表 原告提出)
          });
          break
        case "accuser_query":
          //这里是值对应的处理
          this.data.accuser_query.push({
            accuser: "",        //原告质证表 原告姓名
            evidence: "",    //被告所提出的证据名称
            facticity: "true",      //真实性(原告质证)
            legality: "true", //合法性(原告质证)
            relevance: "true",//关联性(原告质证)
            accuser_query_fact_reason:"", //真实合法关联性理由(原告质证 动态添加)
          })
          break
        case "other_defendant_query":
          this.data.other_defendant_query.push({
            defendant: "",        //其他被告姓名(其他被告质证)
            evidence: "",    //证据编号
            facticity: "true",      //真实性(其他被告质证)
            legality: "true", //合法性(其他被告质证))
            relevance: "true",//关联性(其他被告质证))
            other_defendant_query_fact_reason: ''
          })
          break
        case "counterclaim_defendant_evidence":  //反诉被告举证
          this.data.counterclaim_defendant_evidence.push({
            evidence: "",     //证据名称(反诉被告举证 反诉被告提出)
            content: "",       //证明事项(反诉被告举证表 反诉被告提出)
          });
          break
        case "counterclaim_accuser_query": //反诉原告质证
          //这里是值对应的处理
          this.data.counterclaim_accuser_query.push({
            counterclaim_accuser: "",        //反诉原告姓名
            evidence: "",    //反诉被告所提交的证据
            facticity: "true",      //真实性(反诉原告原告质证)
            legality: "true", //合法性(反诉原告质证)
            relevance: "true",//关联性(反诉原告质证)
            counterclaim_accuser_query_fact_reason: "", //事实和理由(反诉原告质证 需要动态添加)
          })
          break
        case "other_counterclaim_defendant_query": //反诉原告质证
          //这里是值对应的处理
          this.data.other_counterclaim_defendant_query.push({
            other_counterclaim_defendant: "",        //其他反诉被告姓名
            evidence: "",    //反诉原告所提交的证据
            facticity: "true",      //真实性
            legality: "true", //合法性
            relevance: "true",//关联性
            other_counterclaim_defendant_query_fact_reason: "", //事实和理由(其他反诉被告质证的事实和理由 需要动态添加)
          })
          break
        case "counterclaim_accuser_evidence":  //反诉原告举证
          this.data.counterclaim_accuser_evidence.push({
            evidence: "",
            content: ""
          });
          break
        case "counterclaim_defendant_query": //反诉原告质证
          //这里是值对应的处理
          this.data.counterclaim_defendant_query.push({
            counterclaim_defendant: "",
            evidence: "",
            facticity: "true",
            legality: "true",
            relevance: "true",
            counterclaim_defendant_query_fact_reason: ""
          })
          break

        default:
          //这里是没有找到对应的值处理
          break
      }

    },
    delete_component(datatype, index) {
      switch (datatype) {
        case "defendant_evidence":
          //这里是值对应的处理
          this.data.defendant_evidence.splice(index, 1)
          break
        case "accuser_query":
          //这里是值对应的处理
          this.data.accuser_query.splice(index, 1)
          break
        case"other_defendant_query":
          this.data.other_defendant_query.splice(index, 1)
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
        default:
          //这里是没有找到对应的值处理
          break
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
            wholeItem.defendantShowInfo = this.data
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