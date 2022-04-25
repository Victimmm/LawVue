<template>
  <div id="defendshowd_evidence">
    <div class="layui-card">
      <div class="layui-card-body>">
        <form class="layui-form">
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label" style="text-align: center">审判员</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <textarea type="text" class="layui-input ">被告进行举证</textarea>
              </div>
            </div>
          </div>
          <hr>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendshowd_evidence[0].defendshow_evidence" placeholder="证据名称" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendshowd_evidence[0].defendshow_content" placeholder="证明事项" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
            <div class="layui-col-md1">
              <button @click="add_component('defendshowd_evidence')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                      data-type="text">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>

          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label" style="text-align: center">事实和理由</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <textarea v-model="data.defendshowd_evidence[0].defendshow_fact_reason" placeholder="理由" class="layui-textarea"></textarea>
              </div>
            </div>
          </div>
          <hr>
<!--          -->
          <template v-for="(item, index) in data.defendshowd_evidence.slice(1)" :key='index'>
            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-input-block">
                  <label class="layui-form-label" style="text-align: center">审判员</label>
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <textarea type="text" class="layui-input ">被告进行举证</textarea>
                </div>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-input-block">
                  <input type="text" v-model="data.defendshowd_evidence[index+1].defendshow_evidence" placeholder="证据名称" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <input type="text" v-model="data.defendshowd_evidence[index+1].defendshow_content" placeholder="证明事项" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md1">
                <button @click="delete_component('defendshowd_evidence',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                        data-type="text">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-input-block">
                  <label class="layui-form-label" style="text-align: center">事实和理由</label>
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <textarea v-model="data.defendshowd_evidence[index+1].defendshow_fact_reason" placeholder="理由" class="layui-textarea"></textarea>
                </div>
              </div>
            </div>
            <hr>
          </template>

          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <label class="layui-form-label" style="text-align: center">审判员</label>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <textarea type="text" class="layui-input ">原告及其他被告对被告提交的证据进行质证</textarea>
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendshowd_accuser[0].defendshow_accuser"  placeholder="原告姓名" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendshowd_accuser[0].defendshow_evidencenum" name="evidenceNum1"  placeholder="证据编号1" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
            <div class="layui-col-md1">
              <button @click="add_component('defendshowd_accuser')" type="button" class="layui-btn layui-btn-primary layui-btn-sm "
                      data-type="text">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
          <hr>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-form-item">
                <div class="layui-input-inline">
                  <div class="layui-col-lg-offset4">
                    <label class="layui-form-label">真实性</label>
                  </div>
                  <div class="layui-col-lg-offset3">
                    <div class="layui-row">
                      <input type="radio" value="true" v-model="data.defendshowd_accuser[0].defendshow_facticity" class="myradio" style="margin-top:10px"/>
                      <label class="layui-form-label">是</label>
                      <div class="layui-row">
                        <input type="radio" value="false" v-model="data.defendshowd_accuser[0].defendshow_facticity" class="myradio" style="margin-top:10px"/>
                        <label class="layui-form-label">否</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <textarea v-model="data.defendshowd_accuser[0].defendshow_query_facticity" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
              </div>
            </div>
          </div>
          <hr>

          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-form-item">
                <div class="layui-input-inline">
                  <div class="layui-col-lg-offset4">
                    <label class="layui-form-label">合法性</label>
                  </div>
                  <div class="layui-col-lg-offset3">
                    <div class="layui-row">
                      <input type="radio" value="true" v-model="data.defendshowd_accuser[0].defendshow_legality" class="myradio" style="margin-top:10px"/>
                      <label class="layui-form-label">是</label>
                      <div class="layui-row">
                        <input type="radio" value="false" v-model="data.defendshowd_accuser[0].defendshow_legality" class="myradio" style="margin-top:10px"/>
                        <label class="layui-form-label">否</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <textarea v-model="data.defendshowd_accuser[0].defendshow_query_legality" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
              </div>
            </div>
          </div>
          <hr>

          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-form-item">
                <div class="layui-input-inline">
                  <div class="layui-col-lg-offset4">
                    <label class="layui-form-label">关联性</label>
                  </div>
                  <div class="layui-col-lg-offset3">
                    <div class="layui-row">
                      <input type="radio" value="true" v-model="data.defendshowd_accuser[0].defendshow_relevance" class="myradio" style="margin-top:10px"/>
                      <label class="layui-form-label">是</label>
                      <div class="layui-row">
                        <input type="radio" value="false" v-model="data.defendshowd_accuser[0].defendshow_relevance" class="myradio" style="margin-top:10px"/>
                        <label class="layui-form-label">否</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <textarea v-model="data.defendshowd_accuser[0].defendshow_query_relevace" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
              </div>
            </div>
          </div>
          <hr>
<!--          -->
          <template v-for="(item, index) in data.defendshowd_accuser.slice(1)" :key='index'>
            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-input-block">
                  <label class="layui-form-label" style="text-align: center">审判员</label>
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <textarea type="text" class="layui-input ">原告及其他被告对被告提交的证据进行质证</textarea>
                </div>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-input-block">
                  <input type="text" v-model="data.defendshowd_accuser[index+1].defendshow_accuser"  placeholder="原告姓名" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <input type="text" v-model="data.defendshowd_accuser[index+1].defendshow_evidencenum" name="evidenceNum1"  placeholder="证据编号" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md1">
                <button @click="delete_component('defendshowd_accuser',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm "
                        data-type="text">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
            <hr>
            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-form-item">
                  <div class="layui-input-inline">
                    <div class="layui-col-lg-offset4">
                      <label class="layui-form-label">真实性</label>
                    </div>
                    <div class="layui-col-lg-offset3">
                      <div class="layui-row">
                        <input type="radio" value="true" v-model="data.defendshowd_accuser[index+1].defendshow_facticity" class="myradio" style="margin-top:10px"/>
                        <label class="layui-form-label">是</label>
                        <div class="layui-row">
                          <input type="radio" value="false" v-model="data.defendshowd_accuser[index+1].defendshow_facticity" class="myradio" style="margin-top:10px"/>
                          <label class="layui-form-label">否</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <textarea v-model="data.defendshowd_accuser[index+1].defendshow_query_facticity" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
                </div>
              </div>
            </div>
            <hr>

            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-form-item">
                  <div class="layui-input-inline">
                    <div class="layui-col-lg-offset4">
                      <label class="layui-form-label">合法性</label>
                    </div>
                    <div class="layui-col-lg-offset3">
                      <div class="layui-row">
                        <input type="radio" value="true" v-model="data.defendshowd_accuser[index+1].defendshow_legality" class="myradio" style="margin-top:10px"/>
                        <label class="layui-form-label">是</label>
                        <div class="layui-row">
                          <input type="radio" value="false" v-model="data.defendshowd_accuser[index+1].defendshow_legality" class="myradio" style="margin-top:10px"/>
                          <label class="layui-form-label">否</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <textarea v-model="data.defendshowd_accuser[index+1].defendshow_query_legality" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
                </div>
              </div>
            </div>
            <hr>

            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-form-item">
                  <div class="layui-input-inline">
                    <div class="layui-col-lg-offset4">
                      <label class="layui-form-label">关联性</label>
                    </div>
                    <div class="layui-col-lg-offset3">
                      <div class="layui-row">
                        <input type="radio" value="true" v-model="data.defendshowd_accuser[index+1].defendshow_relevance" class="myradio" style="margin-top:10px"/>
                        <label class="layui-form-label">是</label>
                        <div class="layui-row">
                          <input type="radio" value="false" v-model="data.defendshowd_accuser[index+1].defendshow_relevance" class="myradio" style="margin-top:10px"/>
                          <label class="layui-form-label">否</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <textarea v-model="data.defendshowd_accuser[index+1].defendshow_query_relevace" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
                </div>
              </div>
            </div>
            <hr>
          </template>
<!---->
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendshowd_defendant[0].defendshow_defendant"  placeholder="被告姓名" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <input type="text" v-model="data.defendshowd_defendant[0].defendshow_numevidence" placeholder="证据编号" autocomplete="off"
                       class="layui-input">
              </div>
            </div>
            <div class="layui-col-md1">
              <button @click="add_component('defendshowd_defendant')" type="button" class="layui-btn layui-btn-primary layui-btn-sm "
                      data-type="text">
                <i class="layui-icon">&#xe654;</i>
              </button>
            </div>
          </div>
          <hr>
          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-form-item">
                <div class="layui-input-inline">
                  <div class="layui-col-lg-offset4">
                    <label class="layui-form-label">真实性</label>
                  </div>
                  <div class="layui-col-lg-offset3">
                    <div class="layui-row">
                      <input type="radio" value="true" v-model="data.defendshowd_defendant[0].defendshow_numfacticity" class="myradio" style="margin-top:10px"/>
                      <label class="layui-form-label">是</label>
                      <div class="layui-row">
                        <input type="radio" value="false" v-model="data.defendshowd_defendant[0].defendshow_numfacticity" class="myradio" style="margin-top:10px"/>
                        <label class="layui-form-label">否</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <textarea v-model="data.defendshowd_defendant[0].defendshow_reason_facticity" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
              </div>
            </div>
          </div>
          <hr>

          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-form-item">
                <div class="layui-input-inline">
                  <div class="layui-col-lg-offset4">
                    <label class="layui-form-label">合法性</label>
                  </div>
                  <div class="layui-col-lg-offset3">
                    <div class="layui-row">
                      <input type="radio" value="true" v-model="data.defendshowd_defendant[0].defendshow_numlegality" class="myradio" style="margin-top:10px"/>
                      <label class="layui-form-label">是</label>
                      <div class="layui-row">
                        <input type="radio" value="false" v-model="data.defendshowd_defendant[0].defendshow_numlegality" class="myradio" style="margin-top:10px"/>
                        <label class="layui-form-label">否</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <textarea v-model="data.defendshowd_defendant[0].defendshow_reason_legality" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
              </div>
            </div>
          </div>
          <hr>

          <div class="layui-form-item">
            <div class="layui-col-md2">
              <div class="layui-form-item">
                <div class="layui-input-inline">
                  <div class="layui-col-lg-offset4">
                    <label class="layui-form-label">关联性</label>
                  </div>
                  <div class="layui-col-lg-offset3">
                    <div class="layui-row">
                      <input type="radio" value="true" v-model="data.defendshowd_defendant[0].defendshow_numrelevance" class="myradio" style="margin-top:10px"/>
                      <label class="layui-form-label">是</label>
                      <div class="layui-row">
                        <input type="radio" value="false" v-model="data.defendshowd_defendant[0].defendshow_numrelevance" class="myradio" style="margin-top:10px"/>
                        <label class="layui-form-label">否</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-col-md7">
              <div class="layui-input-block">
                <textarea v-model="data.defendshowd_defendant[0].defendshow_reason_relevace" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
              </div>
            </div>
          </div>
          <hr>

          <template v-for="(item, index) in data.defendshowd_defendant.slice(1)" :key='index'>
            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-input-block">
                  <input type="text" v-model="data.defendshowd_defendant[index+1].defendshow_defendant"  placeholder="被告姓名" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <input type="text" v-model="data.defendshowd_defendant[index+1].defendshow_numevidence" placeholder="证据编号" autocomplete="off"
                         class="layui-input">
                </div>
              </div>
              <div class="layui-col-md1">
                <button @click="delete_component('defendshowd_defendant',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm "
                        data-type="text">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </div>
            <hr>
            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-form-item">
                  <div class="layui-input-inline">
                    <div class="layui-col-lg-offset4">
                      <label class="layui-form-label">真实性</label>
                    </div>
                    <div class="layui-col-lg-offset3">
                      <div class="layui-row">
                        <input type="radio" value="true" v-model="data.defendshowd_defendant[index+1].defendshow_numfacticity" class="myradio" style="margin-top:10px"/>
                        <label class="layui-form-label">是</label>
                        <div class="layui-row">
                          <input type="radio" value="false" v-model="data.defendshowd_defendant[index+1].defendshow_numfacticity" class="myradio" style="margin-top:10px"/>
                          <label class="layui-form-label">否</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <textarea v-model="data.defendshowd_defendant[index+1].defendshow_reason_facticity" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
                </div>
              </div>
            </div>
            <hr>

            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-form-item">
                  <div class="layui-input-inline">
                    <div class="layui-col-lg-offset4">
                      <label class="layui-form-label">合法性</label>
                    </div>
                    <div class="layui-col-lg-offset3">
                      <div class="layui-row">
                        <input type="radio" value="true" v-model="data.defendshowd_defendant[index+1].defendshow_numlegality" class="myradio" style="margin-top:10px"/>
                        <label class="layui-form-label">是</label>
                        <div class="layui-row">
                          <input type="radio" value="false" v-model="data.defendshowd_defendant[index+1].defendshow_numlegality" class="myradio" style="margin-top:10px"/>
                          <label class="layui-form-label">否</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <textarea v-model="data.defendshowd_defendant[index+1].defendshow_reason_legality" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
                </div>
              </div>
            </div>
            <hr>

            <div class="layui-form-item">
              <div class="layui-col-md2">
                <div class="layui-form-item">
                  <div class="layui-input-inline">
                    <div class="layui-col-lg-offset4">
                      <label class="layui-form-label">关联性</label>
                    </div>
                    <div class="layui-col-lg-offset3">
                      <div class="layui-row">
                        <input type="radio" value="true" v-model="data.defendshowd_defendant[index+1].defendshow_numrelevance" class="myradio" style="margin-top:10px"/>
                        <label class="layui-form-label">是</label>
                        <div class="layui-row">
                          <input type="radio" value="false" v-model="data.defendshowd_defendant[index+1].defendshow_numrelevance" class="myradio" style="margin-top:10px"/>
                          <label class="layui-form-label">否</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-col-md7">
                <div class="layui-input-block">
                  <textarea v-model="data.defendshowd_defendant[index+1].defendshow_reason_relevace" placeholder="理由" class="layui-textarea" style="margin-top:10px"></textarea>
                </div>
              </div>
            </div>
            <hr>
          </template>
        <div class="layui-form-item">
          <div class="layui-col-md2">
            <div class="layui-input-block">
              <div class="layui-form-label">是否反诉</div>
            </div>
          </div>
          <div class="layui-col-md7">
            <div class="layui-row">
              <input type="radio" v-model="data.defendshow_is_counterclaim" class="myradio" value="true" >
              <label>反诉</label>
              <input type="radio" v-model="data.defendshow_is_counterclaim" class="myradio" value="false">
              <label>不反诉</label>
            </div>
          </div>
        </div>
          <div class="layui-card-header">
            <div class="layui-input-block">
              <button class="layui-btn" v-on:click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
            </div>
            <hr>
          </div>
          <hr>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

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
          defendshow_query_facticity: "", //真实性理由(原告质证)
          defendshow_query_legality: "", //合法性理由(原告质证)
          defendshow_query_relevace: "", //完整性理由(原告质证)
        }],
        defendshowd_defendant: [{
          defendshow_defendant: "",        //原告及其他被告姓名(其他被告质证)
          defendshow_numevidence: "",    //证据编号
          defendshow_numfacticity: "",      //真实性(其他被告质证)
          defendshow_numlegality: "", //合法性(其他被告质证))
          defendshow_numrelevance: "",//关联性(其他被告质证))
          defendshow_reason_facticity: "", //真实性理由(其他被告质证)
          defendshow_reason_legality: "", //合法性理由(其他被告质证)
          defendshow_reason_relevace: "", //关联性理由(其他被告质证)
        }],
        defendshow_is_counterclaim: '',          //是否反诉
      };
    }
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if("defendshow_form" in wholeItem){
      data=wholeItem.defendshow_form
    }
    return {
      data:data
    }
  },


  components: {

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
          wholeItem.defendshow_form=this.data
          localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
        }
      },
      deep: true
    }
  }
}

</script>

<style scoped>

</style>