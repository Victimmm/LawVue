<template>
    <div class="layui-card">
        <div class="layui-card-header" style="text-align:center;font-size: 25px; ">原告信息</div>
        <div class="layui-card-body">
            <form class="layui-form" action="" onsubmit="return false">
                <div class="layui-form-item">
                    <label class="layui-form-label layui-form-required">原告类型</label>
                    <div class="layui-input-block">
                        <input type="radio" name="accuser_type" v-model="data.accuser_type" value="0" title="单位" lay-filter="plaintiffType" checked>
                        <input type="radio" name="accuser_type" v-model="data.accuser_type" value="1" title="个人" lay-filter="plaintiffType">
                    </div>
                </div>
                
                <div  v-if="data.accuser_type=='1'">
                    <div class="layui-form-item">
                        <label class="layui-form-label layui-form-required">原告姓名</label>
                        <div class="layui-input-block">
                            <input type="text" v-model="data.accuser" required  lay-verify="required" placeholder="请输入原告全称" autocomplete="off" class="layui-input">
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label layui-form-required">原告住址</label>
                        <div class="layui-input-block">
                            <input type="text" v-model="data.accuser_address" required  lay-verify="required" placeholder="请输入原告简称" autocomplete="off" class="layui-input">
                        </div>
                    </div>
                </div>
                <div v-if="data.accuser_type=='0'">
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
              </div>


            <div class="layui-form-item" >
                <label class="layui-form-label" style="text-align: center; margin-top: -8px;">委托诉讼代理人</label>
                <div class="layui-input-block">
                    <input type="text" v-model="data.accuser_agent" required  lay-verify="required" placeholder="请输入委托诉讼代理人" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item" style="margin-top: 11px;">
                <label class="layui-form-label" style="text-align: center;margin-top: -8px;">委托诉讼代理人单位</label>
                <div class="layui-input-block">
                    <input type="text" v-model="data.accuser_agent_address" required  lay-verify="required" placeholder="请输入委托诉讼代理人单位" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" v-on:click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
             </div>
            </div>

        </form>
    </div>
</div>
</template>

<script type="text/javascript">
var data;

if(localStorage.getItem("PlaintiffImf")==null)
{  
  data={
        accuser:'',
        accuser_short:'',
        accuser_type:"0",
        accuser_address:'',
        accuser_represent:'',
        accuser_duty:'',
        accuser_agent:'',
        accuser_agent_address:'',
    };
}
else 
  data=JSON.parse(localStorage.getItem("PlaintiffImf"));


    export default {
        data(){
            return {data:data}
        },
        mounted(){
            let that=this;
          window.layui.use('form', function(){
            //   // var element = window.layui.element
              var form = window.layui.form;
              form.on('radio(plaintiffType)', function(value){
                that.data.accuser_type=value.value;
            })

        })
      },
      methods :{
          save_localstorage(){
            localStorage.setItem('PlaintiffImf',JSON.stringify(this.data))
        }
    }   
  }
</script>