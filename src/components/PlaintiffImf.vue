<template>
    <div class="layui-card">
        <div class="layui-card-header" style="text-align:center;font-size: 25px; ">原告信息</div>
        <div class="layui-card-body">
            <form class="layui-form" action="" onsubmit="return false">
                <div class="layui-form-item">
                    <label class="layui-form-label layui-form-required">原告类型</label>
                    <div class="layui-input-block">
                        <input type="radio" name="accuser_type" lay-filter="plaintiffType" value="0" title="单位" checked>
                        <input type="radio" name="accuser_type" lay-filter="plaintiffType" value="1" title="个人" >
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label layui-form-required">原告全称</label>
                    <div class="layui-input-block">
                        <input type="text" v-model="data.accuser" required  lay-verify="required" placeholder="请输入原告全称" autocomplete="off" class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label layui-form-required">原告简称</label>
                    <div class="layui-input-block">
                        <input type="text" v-model="data.accuser_short" required  lay-verify="required" placeholder="请输入原告简称" autocomplete="off" class="layui-input">
                    </div>
                </div>

                <div class="layui-form-item">
                    <label class="layui-form-label layui-form-required">原告地址</label>
                    <div class="layui-input-block">
                        <input type="text" v-model="data.accuser_address" required  lay-verify="required" placeholder="请输入原告简称" autocomplete="off" class="layui-input">
                    </div>
                </div>

                <div class="layui-form-item">
                    <label class="layui-form-label layui-form-required">法人代表</label>
                    <div class="layui-input-block">
                        <input type="text" v-model="data.accuser_represent" required  lay-verify="required" placeholder="请输入法人代表" autocomplete="off" class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label layui-form-required">法人职务</label>
                    <div class="layui-input-block">
                        <input type="text" v-model="data.accuser_duty" required  lay-verify="required" placeholder="请输入法人职务" autocomplete="off" class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item" >
                    <label class="layui-form-label" style="text-align: center; margin-top: -8px;">委托诉讼代理人</label>
                    <div class="layui-input-block">
                        <input type="text" v-model="data.agent" required  lay-verify="required" placeholder="请输入委托诉讼代理人" autocomplete="off" class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item" style="margin-top: 11px;">
                    <label class="layui-form-label" style="text-align: center;margin-top: -8px;">委托诉讼代理人单位</label>
                    <div class="layui-input-block">
                        <input type="text" v-model="data.agent_address" required  lay-verify="required" placeholder="请输入委托诉讼代理人单位" autocomplete="off" class="layui-input">
                    </div>
                </div>

                <div class="layui-form-item">
                    <div class="layui-input-block">
                        <button class="layui-btn" lay-submit lay-filter="formDemo" style="display: table;margin: 0 auto;">保存</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script type="text/javascript">

    var data={
        accuser:'',
        accuser_short:'',
        accuser_type:"1",
        accuser_address:'',
        accuser_represent:'',
        accuser_duty:'',
        agent:'',
        agent_address:'',
    }

    export default {
        data(){
            return {data:data}
            
        },
        mounted(){
          window.layui.use('form', function(){
              // var element = window.layui.element
              var form = window.layui.form;
              form.on('radio(plaintiffType)', function(value){
                data.accuser_type=value.value
            })
          })
      }
  }
</script>