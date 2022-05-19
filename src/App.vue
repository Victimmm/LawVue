<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="layui-bg-gray">
    <div id="BasicInfo">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>基本信息</legend>
        <div class="layui-field-box">
          <BasicInfo></BasicInfo>
        </div>
      </fieldset>

    </div>

    <div id="whole_PlaintiffImf">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>原告信息</legend>
        <div class="layui-field-box">
          <PlaintiffImf :index=0 :key="0"></PlaintiffImf>
          <PlaintiffImf v-for="(tag,index) in $store.state.plaintifftag.slice(1)" :key="tag" :index="index+1"/>
        </div>
      </fieldset>
    </div>
    <div id="whole_DefendantImf">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>被告信息</legend>
        <div class="layui-field-box">
          <DefendantImf :index=0 :key=0></DefendantImf>
          <DefendantImf v-for="(tag,index) in $store.state.defendanttag.slice(1)" :key="tag" :index="index+1"/>
        </div>
      </fieldset>
    </div>

    <div id="BasicState">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>基本信息陈述</legend>
        <div class="layui-field-box">
          <BasicState></BasicState>
        </div>
      </fieldset>
    </div>


    <div id="right_inform">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>权利告知</legend>
        <div class="layui-field-box">
          <right_inform></right_inform>
        </div>
      </fieldset>
    </div>

    <div id="CourtInves1">
      <fieldset class="layui-elem-field layui-field-title">
        <legend>法庭调查</legend>
        <div class="layui-field-box">
          <CourtInves></CourtInves>
        </div>
      </fieldset>
    </div>
    <!-- 反诉且今日答辩 或者不反诉的情况显示-->
    <div
        v-if="($store.state.is_todayreply=='1' && $store.state.is_counterclaim=='1' ) || $store.state.is_counterclaim=='0'">
      <div id="accshow_form">
        <fieldset class="layui-elem-field layui-field-title">
          <legend>法庭调查-原告举证</legend>
          <div class="layui-field-box">
            <accshow_form ref="accshow_form"></accshow_form>
          </div>
        </fieldset>
      </div>

      <div id="defendshow_form">
        <fieldset class="layui-elem-field layui-field-title">
          <legend>法庭调查-被告举证</legend>
          <div class="layui-field-box">
            <defendshow_form></defendshow_form>
          </div>
        </fieldset>
      </div>

      <div id="inquiry_form">
        <fieldset class="layui-elem-field layui-field-title">
          <legend>法庭询问</legend>
          <div class="layui-field-box">
            <inquiry_form></inquiry_form>
          </div>
        </fieldset>
      </div>

      <div id="argue_form">
        <fieldset class="layui-elem-field layui-field-title">
          <legend>法庭辩论</legend>
          <div class="layui-field-box">
            <argue_form></argue_form>
          </div>
        </fieldset>
      </div>

      <div id="final_form">
        <fieldset class="layui-elem-field layui-field-title">
          <legend>陈述意见</legend>
          <div class="layui-field-box">
            <final_form></final_form>
          </div>
        </fieldset>
      </div>

      <div id="mediate_form">
        <fieldset class="layui-elem-field layui-field-title">
          <legend>是否调解</legend>
          <div class="layui-field-box">
            <mediate_form></mediate_form>
          </div>
        </fieldset>
      </div>

      <div id="delivery_form">
        <fieldset class="layui-elem-field layui-field-title">
          <legend>电子文书送达</legend>
          <div class="layui-field-box">
            <delivery_form></delivery_form>
          </div>
        </fieldset>
      </div>
    </div>
  </div>

</template>

<script>
import BasicInfo from './components/BasicInfo.vue'
import PlaintiffImf from './components/PlaintiffImf.vue'
import DefendantImf from './components/DefendantImf.vue'
import CourtInves from './components/CourtInves.vue'
import right_inform from "@/components/right_inform";
import accshow_form from "@/components/accshow_form";
import defendshow_form from "@/components/defendshow_form";
import inquiry_form from "@/components/inquiry_form";
import argue_form from "@/components/argue_form";
import final_form from "@/components/final_form";
import mediate_form from "@/components/mediate_form";
import delivery_form from "@/components/delivery_form";
import BasicState from "@/components/BasicState";

export default {
  name: 'App',
  components: {
    BasicInfo,
    PlaintiffImf,
    DefendantImf,
    CourtInves,
    right_inform,
    accshow_form,
    defendshow_form,
    inquiry_form,
    argue_form,
    final_form,
    mediate_form,
    delivery_form,
    BasicState
  },
  data() {
    return {
      active: 0 // 当前激活的导航索引
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    // 添加目录控件
    this.$nextTick(function () {

      window.layui.use('layer', function () {
        var layer = window.layui.layer;
        layer.open({
          title: '目录',
          skin: 'myskin',
          type: 1,
          content: "      <ul class=\"site-dir layui-layer-wrap\" id=\"content_list\" style=\"display: block;\">\n" +
              "        <li ><a href=\"#BasicInfo\"><cite>基本信息</cite></a></li>\n" +
              "        <li ><a href=\"#whole_PlaintiffImf\"><cite>原告信息</cite></a></li>\n" +
              "        <li><a href=\"#whole_DefendantImf\"><cite>被告信息</cite></a></li>\n" +
              "        <li><a href=\"#BasicState\"><cite>基本信息陈述</cite></a></li>\n" +
              "        <li><a href=\"#right_inform\"><cite>权利告知</cite></a></li>\n" +
              "        <li><a href=\"#CourtInves1\"><cite>法庭调查</cite></a></li>\n" +
              "        <li><a href=\"#accshow_form\"><cite>原告举证</cite></a></li>\n" +
              "        <li><a href=\"#defendshow_form\"><cite>被告举证</cite></a></li>\n" +
              "        <li><a href=\"#inquiry_form\"><cite>法庭询问</cite></a></li>\n" +
              "        <li><a href=\"#argue_form\"><cite>法庭辩论</cite></a></li>\n" +
              "        <li><a href=\"#final_form\"><cite>陈述意见</cite></a></li>\n" +
              "        <li><a href=\"#mediate_form\"><cite>是否调解</cite></a></li>\n" +
              "        <li><a href=\"#delivery_form\"><cite>电子文书送达</cite></a></li>\n" +
              "      </ul>",
          shade: 0,
          closeBtn: 0,
          offset: 'r'
        });
      });
    })

  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    // 滚动监听器
    onScroll() {
      // 获取所有锚点元素
      const navContents = document.querySelectorAll('fieldset')
      // 所有锚点元素的 offsetTop
      const offsetTopArr = []
      navContents.forEach(item => {

        offsetTopArr.push(item.offsetTop)
      })
      // 获取当前文档流的 scrollTop
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是 n 了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n
        }
      }
      // 把下标赋值给 vue 的 data
      this.active = navIndex
      if(document.getElementById("content_list") != null){
        // 获取钙元素下的a标签，并更改class 属性
        for (let i = 0; i < offsetTopArr.length  ; i++) {
          if(i != navIndex)
            document.getElementById("content_list").children[i].children[0].removeAttribute("class")
        }
        document.getElementById("content_list").children[navIndex].children[0].className = "layui-this"
      }
    }
  }
}


</script>

<style>
body .myskin {
  box-shadow: none;
  border: 1px solid #d2d2d2;
}

.site-dir {
  line-height: 26px;
  margin-left: 20px;
  overflow: visible;
  list-style-type: disc;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow:-Scroll;
  overflow-x:hidden
}

</style>

<style type="text/css">

.myradio {
  outline: none;
  width: 1.2rem;
  height: 1.2rem;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  -webkit-border-radius: 0.6rem;
  border-radius: 0.6rem;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block !important;
  vertical-align: top;
  cursor: default;
  -webkit-appearance: none; /**隐藏原生控件**/
}

/**选择后的样式**/
.myradio:checked {
  background-color: #5fb778;
  border: solid 1px #5fb778;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  text-align: center;
  background-clip: padding-box;
}

/**选择后 里面小对勾样式**/
.myradio:checked:before {
  content: '';
  width: 0.5rem;
  height: 0.3rem;
  border: 1px solid #ffffff;
  border-top: none;
  border-right: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -0.25rem;
  margin-top: -0.25rem;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.divcenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.myinput-block {
  margin-top: 8px;
}

.myradiomargin {
  width: 100%;
  border-style: solid;
  background-color: #fff;
  border-width: 1px;
  border-radius: 0 2px 2px 0;
  border-color: #e6e6e6;
}

.myradiomargin > * {
  margin-top: 10px;
  line-height: 38px;
  margin-left: 5px;
}

.multiselect__tags {
  min-height: 38px;
  border-radius: 0 2px 2px 0;
}

.myselect-div {
  width: 100%;
  float: left;
}

a.layui-this {
  color: #01AAED;
}

.content {
  background-color: white;
  width: 500px;
}

.content div {
  width: 100%;
  height: 600px;
  font-size: 36px;
  padding: 20px;
  background-color: #7ec384;
}

.content div:nth-child(2n) {
  background-color: #847ec3;
}

/* 导航栏的样式 */
.navs {
  position: fixed;
  top: 80px;
  left: 700px;
  background-color: #efefef;
}

.navs li {
  padding: 0 20px;
  line-height: 1.6;
  font-size: 24px;
}

/* 当导航被点亮后改变颜色 */
.navs .active {
  color: #847ec3;
  background-color: #e2e2e2;
}
</style>
