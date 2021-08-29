<template>
  <div>
    <textarea placeholder="发送内容" v-model="ipt" rows="9" class="textarea" ></textarea>
    <div>
      <button @click="send" class="send">发送</button>
      <button class="clear" @click="ipt = ''">清除</button>
    </div>
    <div v-if="showQrcode" class="qrcode" id="qrcode">
      <div>手机扫码</div>
    </div>
    <h2>复制区</h2>
    <div class="item" @click="copyTxt(item)" v-for="item in list" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>
<script lang="ts">
import copy from 'copy-text-to-clipboard';
import { notify } from "@kyvg/vue3-notification";
import QRCode from 'qrcode'

export default {
  data() {
    return {
      showQrcode: false,
      ipt: '',
      list: [
        'http://192.168.2.205:3001/relname', 
        'http://192.168.2.205:3001/talent/applytotalent', 
        'http://192.168.2.205:3001/talent/apply',
        '110101199009079439'
      ]
    }
  },
  mounted () {
    // 移动端不显示二维码
    if(!(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))) {
      this.showQrcode = true
      const host = location.origin
      this.$nextTick(() => {
        QRCode.toCanvas(host, { errorCorrectionLevel: 'H', width: 200, height: 200 }, function (err, canvas) {
          if (err) throw err
          var container = document.getElementById('qrcode')
            container.appendChild(canvas)
          })
      })
    }
  },
  methods: {
    copyTxt (content: string) {
      copy(content)
      notify("复制成功");
    },
    send () {
      const value = this.ipt
      console.log(value);
      if (!value.trim()) {
        return 
      }
      fetch('/api/data',{
   　   method:"POST",
   　   mode: 'cors', // 跨域请求
    　　headers: {
    　　  'Content-Type': 'application/json'
    　　},
    　　body: JSON.stringify({
    　　  content : value
    　　})
  　　}).then(() => {
        notify("发送成功");
      }).catch(() => {
        notify({ title: "发送失败", type: 'error' });
      })
    }
  }
}
</script>

<style scoped>
.item {
  margin: 20px;
}
.textarea {
  width: 90%;
  box-sizing: border-box;
}
.qrcode {
  position: absolute;
  right: 20px;
}
.clear {
  width: 100px;
  height: 50px;
}
.send {
  width: 100px;
  height: 50px;
  margin-right: 10px;
}
</style>
