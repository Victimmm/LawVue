<template>
  <!--权利告知-->
<div class="layui-card">
  <div class="layui-card-body>">
  <form class="layui-form">
    <div class="layui-form-item">

          <div class="layui-col-md2" style="margin-top: 70px">
            <input type="text" class="layui-input" placeholder="审判员" >
          </div>

      <div class="layui-col-md7">
        <div class="layui-input-block">
          <textarea v-model="data.judge_talk[0]" type="text" class="layui-input " style="height: 200px;" >
          </textarea>
        </div>
      </div>
    </div>
    <div class="layui-form-item">
      <div class="layui-col-md2">
        <input type="text" name="title" placeholder="原告简称" v-model="data.accuser_avoid[0].name"
                     class="layui-input" >
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <input type="radio" value="1" v-model="data.accuser_avoid[0].is_listen" class="myradio"><label> 听清楚了  </label>
          <input type="radio" value="2" v-model="data.accuser_avoid[0].is_listen" class="myradio"><label> 没听清楚  </label>
        </div>
      </div>
      <div class="layui-col-md1">
        <button @click="add_component('accuser_avoid')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                data-type="text">
          <i class="layui-icon">&#xe654;</i>
        </button>
      </div>
    </div>

    <template v-for="(item, index) in data.accuser_avoid.slice(1)" :key='index'>
      <div class="layui-form-item">
        <div class="layui-col-md2">
          <input type="text" name="title" placeholder="原告简称" v-model="data.accuser_avoid[index+1].name"
                 class="layui-input" >
        </div>
        <div class="layui-col-md7">
          <div class="layui-input-block">
            <input type="radio" value="1" v-model="data.accuser_avoid[index+1].is_listen" class="myradio"><label> 听清楚了  </label>
            <input type="radio" value="2" v-model="data.accuser_avoid[index+1].is_listen" class="myradio"><label> 没听清楚  </label>
          </div>
        </div>
        <div class="layui-col-md1">
          <button @click="delete_component('accuser_avoid',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                  data-type="text">
            <i class="layui-icon">&#xe640;</i>
          </button>
        </div>
      </div>
    </template>

    <div class="layui-form-item">
      <div class="layui-col-md2">
          <input type="text" name="title" placeholder="被告简称" v-model="data.defendant_avoid[0].name"
                 class="layui-input" >
      </div>
      <div class="layui-col-md7">
        <div class="layui-input-block">
          <input type="radio" value="1" v-model="data.defendant_avoid[0].is_listen" class="myradio"><label> 听清楚了  </label>
          <input type="radio" value="2" v-model="data.defendant_avoid[0].is_listen" class="myradio"><label> 没听清楚  </label>
        </div>
      </div>
      <div class="layui-col-md1">
        <button @click="add_component('defendant_avoid')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                data-type="text">
          <i class="layui-icon">&#xe654;</i>
        </button>
      </div>
    </div>
    <template v-for="(item, index) in data.defendant_avoid.slice(1)" :key='index'>
      <div class="layui-form-item">
        <div class="layui-col-md2">
          <input type="text" name="title" placeholder="被告简称" v-model="data.defendant_avoid[index+1].name"
                 class="layui-input" >
        </div>
        <div class="layui-col-md7">
          <div class="layui-input-block">
            <input type="radio" value="1" v-model="data.defendant_avoid[index+1].is_listen" class="myradio"><label> 听清楚了  </label>
            <input type="radio" value="2" v-model="data.defendant_avoid[index+1].is_listen" class="myradio"><label> 没听清楚  </label>
          </div>
        </div>
        <div class="layui-col-md1">
          <button @click="delete_component('defendant_avoid',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"
                  data-type="text">
            <i class="layui-icon">&#xe640;</i>
          </button>
        </div>
      </div>
    </template>

    <div class="layui-form-item">
      <div class="layui-col-md2">
        <input type="text" class="layui-input" placeholder="审判员">
      </div>

      <div class="layui-col-md7">
        <div class="layui-input-block">
          <textarea type="text" v-model="data.judge_talk[1]" class="layui-input"></textarea>
        </div>
      </div>
    </div>
    <div class="layui-form-item">
      <div class="layui-col-md2">
        <input type="text" name="title" placeholder="原告简称" v-model="data.accuser_avoid[0].name" class="layui-input" >
      </div>
      <div class="layui-col-md7">
          <div class="layui-input-block" >
              <input type="radio" value="1" v-model="data.accuser_avoid[0].is_avoid" class="myradio"><label>  不申请回避 </label>
              <input type="radio" value="2" v-model="data.accuser_avoid[0].is_avoid" class="myradio"><label>  申请回避  </label>
            </div>
      </div>
<!--      <div class="layui-col-md1">-->
<!--        <button @click="add_component('accuser_avoid')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"-->
<!--                data-type="text">-->
<!--          <i class="layui-icon">&#xe654;</i>-->
<!--        </button>-->
<!--      </div>-->
    </div>
    <template v-for="(item, index) in data.accuser_avoid.slice(1)" :key='index'>
      <div class="layui-form-item">
        <div class="layui-col-md2">
          <input type="text" name="title" placeholder="原告简称" v-model="data.accuser_avoid[index+1].name"
                     class="layui-input" >
        </div>
        <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="radio" value="1" v-model="data.accuser_avoid[index+1].is_avoid" class="myradio"><label>  不申请回避 </label>
              <input type="radio" value="2" v-model="data.accuser_avoid[index+1].is_avoid" class="myradio"><label>  申请回避  </label>
            </div>
        </div>
<!--        <div class="layui-col-md1">-->
<!--          <button @click="delete_component('accuser_avoid',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"-->
<!--                  data-type="text">-->
<!--            <i class="layui-icon">&#xe640;</i>-->
<!--          </button>-->
<!--        </div>-->
      </div>
    </template>

    <div class="layui-form-item">
      <div class="layui-col-md2">
            <input type="text" name="title" placeholder="被告简称" v-model="data.defendant_avoid[0].name"
                   class="layui-input" >
      </div>
      <div class="layui-col-md7">
        <div class="layui-form">
          <div class="layui-input-block">
            <input type="radio" value="1" v-model="data.defendant_avoid[0].is_avoid" class="myradio"><label>  不申请回避  </label>
            <input type="radio" value="2" v-model="data.defendant_avoid[0].is_avoid" class="myradio"><label>  申请回避  </label>
          </div>
        </div>
      </div>
<!--      <div class="layui-col-md1">-->
<!--        <button @click="add_component('defendant_avoid')" type="button" class="layui-btn layui-btn-primary layui-btn-sm"-->
<!--                data-type="text">-->
<!--          <i class="layui-icon">&#xe654;</i>-->
<!--        </button>-->
<!--      </div>-->
    </div>

    <template v-for="(item, index) in data.defendant_avoid.slice(1)" :key='index'>
      <div class="layui-form-item">
        <div class="layui-col-md2">
              <input type="text" name="title" placeholder="被告简称" v-model="data.defendant_avoid[index+1].name"
                     class="layui-input" >
        </div>
        <div class="layui-col-md7">
            <div class="layui-input-block">
              <input type="radio" value="1" v-model="data.defendant_avoid[index+1].is_avoid" class="myradio"><label>  不申请回避  </label>
              <input type="radio" value="2" v-model="data.defendant_avoid[index+1].is_avoid" class="myradio"><label>  申请回避  </label>
            </div>
        </div>
<!--        <div class="layui-col-md1">-->
<!--          <button @click="delete_component('defendant_avoid',1)" type="button" class="layui-btn layui-btn-primary layui-btn-sm"-->
<!--                  data-type="text">-->
<!--            <i class="layui-icon">&#xe640;</i>-->
<!--          </button>-->
<!--        </div>-->
      </div>
    </template>

    <div class="layui-form-item">
      <div class="layui-input-block">
        <button class="layui-btn" v-on:click.prevent="save_localstorage"  style="display: table;margin: 0 auto;">保存</button>
      </div>
    </div>
  </form>
  </div>
</div>
</template>

<script type="text/javascript" >

export default {
  data(){
    var data;
    data={
      judge_talk: ["审判员：依据《中华人民共和国民事诉讼法》的规定，当事人在法庭上享有下列权利：\n" +
      "1.原告有权承认、变更、放弃自己的诉讼请求，被告有权反驳原告的诉讼请求或提起反诉；\n" +
      "2.当事人有权申请回避；\n" +
      "3.当事人有权举证；\n" +
      "4.当事人有权辩论、有权请求法庭调解\n" +
      "当事人在享有上述权利的同时，负有以下义务：\n" +
      "1.当事人有依法行使诉讼权利的义务；\n" +
      "2.当事人有听从法庭指挥、遵守法庭纪律的义务；\n" +
      "3.当事人有如实陈述事实、如实举证的义务。\n" +
      "上述诉讼权利和义务双方是否听清？",
        "审判员：当事人对审判员和书记是否申请回避？",
      ],
      accuser_avoid:[{name:"",is_listen:"1",is_avoid:"1"}],
      defendant_avoid:[{name:"",is_listen:"1",is_avoid:"1"}],
      // accuser_avoid:[{name:"",is_avoid:"1"}],
      // defendant_avoid: [{name:"",is_avoid:"1"}],
    };
    var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
    if(wholeItem!=null && "right_inform" in wholeItem){
      data=wholeItem.right_inform
    }
    return {data:data}
  },
  mounted(){

  },
  methods:{
    add_component(datatype) {
      switch(datatype){
        case "defendant_avoid":
          //这里是值对应的处理
          this.data.defendant_avoid.push({
            name:"",is_avoid:"",is_listen:"",
          })
          break
        case "accuser_avoid":
          //这里是值对应的处理
          this.data.accuser_avoid.push({
            name:"",is_avoid:"",is_listen:"",
          })
          break
        // case "accuser_listen":
          //这里是值对应的处理
        //   this.data.accuser_listen.push([
        //     {name:"",is_listen:"1"}
        //   ])
        //   break
        // case "defendant_listen":
        //   //这里是值对应的处理
        //   this.data.defendant_listen.push([
        //     {name:"",is_listen:"1"}
        //   ])
        //   break

        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    delete_component(datatype,index){
      switch(datatype){
        case "defendant_avoid":
          //这里是值对应的处理
          this.data.defendant_avoid.splice(index,1)
          break
        case "accuser_avoid":
          //这里是值对应的处理
          this.data.accuser_avoid.splice(index,1)
          break
        // case "accuser_listen":
        //   //这里是值对应的处理
        //   this.data.accuser_listen.splice(index,1)
        //   break
        // case "defendant_listen":
        //   //这里是值对应的处理
        //   this.data.defendant_listen.splice(index,1)
        //   break
        default:
          //这里是没有找到对应的值处理
          break
      }
    },
    save_localstorage() {
      if (this.$store.state.court_number == "") {
        window.layui.layer.msg('请优先完善基本信息表格');
      } else {
        var wholeItem = JSON.parse(localStorage.getItem(this.$store.state.court_number))
        wholeItem.right_inform = this.data
        localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
      }
    }
    // save_localstorage(){
    //   localStorage.setItem('right_inform',JSON.stringify(this.data))
    // },
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
          wholeItem.right_inform=this.data
          localStorage.setItem(this.$store.state.court_number, JSON.stringify(wholeItem))
        }
      },
      deep: true
    }
  },
}
</script>

<style scoped>

</style>