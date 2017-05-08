<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <img class="head-logo" src="../assets/logo.png" alt="">
        <div class="head-nav">
          <ul class="nav-list">
            <li>{{username}}</li>
            <li v-if="username!==''" class="nav-pile">|</li>

            <li v-if="username!== ''" @click="quit">退出</li>
            <li v-if="username=== ''" @click="logClick">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="username=== ''" @click="regClick">注册</li>
            <li v-if="username=== ''" class="nav-pile">|</li>
            <li  @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>@2016 fishenal MIT</p>
    </div>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')" @clik="aboutClick">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')" @clik="aboutClick">
      <p>注册</p>
    </my-dialog>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')" @clik="aboutClick">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素，专车市场背景后的产业格局。</p>
    </my-dialog>
  </div>
</template>
<script>
  import Dialog from './base/dialog.vue'
  import LogForm from './logForm.vue'
  export default{
    components: {
      MyDialog: Dialog,
      LogForm
    },
    data(){
      return {
        isShowAboutDialog: false,
        isShowLogDialog: false,
        isShowRegDialog: false,
        username: ''
      }
    },
    methods: {
      closeDialog(attr){
        this[attr] = false
      },
      aboutClick(){
        this.isShowAboutDialog = true
      },
      logClick(){
        this.isShowLogDialog = true
      },
      regClick(){
        this.isShowRegDialog = true
      },
      onSuccessLog(data){
        console.log(data.data.login.username)
        this.closeDialog('isShowLogDialog')
        this.username = data.data.login.username
      }


    }
  }
</script>
<style>
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, pre, del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quote: none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #f0f2f5;
    font-family: "Arial";
    font-size: 14px;
    color: #444;
  }

  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }

  .app-head-inner {
    width: 1200px;
    margin: 0 auto;
  }

  .head-logo {
    float: left;
  }

  .app-head-inner img {
    width: 50px;
    margin-top: 20px;
  }

  .head-nav {
    float: right;
  }

  .head-nav ul {
    overflow: hidden;
  }

  .head-nav li {
    cursor: pointer;
    float: left;
  }

  .nav-pile {
    padding: 0 10px;

  }

  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;

  }

  .container {
    width: 12000px;
    margin: 0 auto;
  }

  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }

  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }

  .button:hover {
    background: #4fc08d;
  }

  .g-from {

  }

  .g-from-line {
    padding: 15px 0;
  }

  .g-from-lable {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }

  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }

  .g-from-btn {
    padding-left: 100px;

  }

  .g-from-error {
    color: red;
    padding-left: 15px;
  }


</style>
