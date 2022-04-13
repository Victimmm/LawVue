<template>
	<div class="layui-card">
		<div class="layui-card-body">
			<form class="layui-form" action="" onsubmit="return false">
				<div class="layui-form-item">
					<label class="layui-form-label layui-form-required">被告类型</label>
					<div class="layui-input-block">
						<input type="radio" name="plaintiffType" v-model="data.defendant_type" class="myradio" value="0" title="单位" ><label >单位</label>
						<input type="radio" name="plaintiffType" v-model="data.defendant_type" class="myradio" value="1" title="个人" ><label >个人</label>
					</div>
				</div>
				<div v-if="data.defendant_type=='1'">
					<div class="layui-form-item">
						<label class="layui-form-label layui-form-required">被告姓名</label>
						<div class="layui-input-block">
							<input type="text" v-model="data.defendant" required lay-verify="required" placeholder="请输入被告姓名"
							autocomplete="off" class="layui-input">
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label layui-form-required">被告住址</label>
						<div class="layui-input-block">
							<input type="text" v-model="data.defendant_address" required lay-verify="required" placeholder="请输入被告住址"
							autocomplete="off" class="layui-input">
						</div>
					</div>
				</div>

				<div v-if="data.defendant_type=='0'">
					<div class="layui-form-item">
						<label class="layui-form-label layui-form-required">被告全称</label>
						<div class="layui-input-block">
							<input type="text" v-model="data.defendant"  required lay-verify="required" placeholder="请输入被告全称"
							autocomplete="off" class="layui-input">
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label layui-form-required">被告简称</label>
						<div class="layui-input-block">
							<input type="text" v-model="data.defendant_short" required lay-verify="required" placeholder="请输入被告简称"
							autocomplete="off" class="layui-input">
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label layui-form-required">被告地址</label>
						<div class="layui-input-block">
							<input type="text" v-model="data.defendant_address" required lay-verify="required" placeholder="请输入被告地址"
							autocomplete="off" class="layui-input">
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label layui-form-required">法人代表</label>
						<div class="layui-input-block">
							<input type="text" v-model="data.defendant_representative" required lay-verify="required" placeholder="请输入法人代表"
							autocomplete="off" class="layui-input">
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label layui-form-required">法人职务</label>
						<div class="layui-input-block">
							<input type="text" v-model="data.defendant_duty" required lay-verify="required" placeholder="请输入法人职务"
							autocomplete="off" class="layui-input">
						</div>
					</div>
				</div>
				<div class="layui-form-item">
					<label class="layui-form-label">委托诉讼代理人</label>
					<div class="layui-input-block">
						<input type="text" v-model="data.defendant_agent" required lay-verify="required" placeholder="请输入委托诉讼代理人"
						autocomplete="off" class="layui-input">
					</div>
				</div>
				<div class="layui-form-item" >
					<label class="layui-form-label">委托诉讼代理人单位</label>
					<div class="layui-input-block">
						<input type="text" v-model="data.defendant_agent_address" required lay-verify="required" placeholder="请输入委托诉讼代理人单位"
						autocomplete="off" class="layui-input">
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

if(localStorage.getItem("DefendantImf")==null)
{  
  data={
		defendant:'',
		defendant_short:'',
		defendant_type:"0",
		defendant_address:'',
		defendant_representative:'',
		defendant_duty:'',
		defendant_agent:'',
		defendant_agent_address:'',
	};
}
else 
  data=JSON.parse(localStorage.getItem("DefendantImf"));

	export default {
		data(){
			return {data:data}
		},
		mounted(){
			// let that=this;
			// window.layui.use('form', function(){
			// 	var form = window.layui.form;
			// 	form.on('radio(defendantType)', function(value){
			// 		that.data.defendant_type=value.value;
			// 	})
			// })
		},
		methods :{
			save_localstorage(){
				localStorage.setItem('DefendantImf',JSON.stringify(this.data))
			}
		}   
	}
</script>