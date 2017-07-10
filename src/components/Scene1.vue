<template>
  <div class="scene1">
    <nickname-header></nickname-header>
    <input-text></input-text>
    <input-button></input-button>
  </div>
</template>

<script>
//  インポートします。
import Vue from 'vue'
import InputButton from './forms/InputButton'
import NickNameHeader from './forms/Header'
import InputText from './forms/InputText'
import axios from 'axios'
import PropertyStore from '../models/PropertyStore.js'

//  デフォルト値定義
export default {
  created: function () {
    axios.get('http://127.0.0.1:4321/profile_wait')
      .then(response => {
        console.log(response.data) // mockData
        console.log(response.status) // 200
      })
  },
  validate: function (event) {
    try {
      this.$data.sharedState.dispatch('setUser')
      this.$router.push('/scene2')
    } catch (e) {
      alert(e.message)
    }
  }
}

//  コンポーネントを登録
Vue.component('nickname-header', NickNameHeader)

//  コンポーネントを登録
Vue.component('input-text', InputText)

//  コンポーネントを登録
Vue.component('input-button', InputButton)

//  ユーザー情報取得
PropertyStore.dispatch('getUser')
//  コンポーネントを登録
Vue.component('nickname-header', NickNameHeader)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scene1{
  font-size: 1.8rem;
  text-align: center;
  a div p{
    display: block;
    margin: 0 auto;
    height:30pt;
  }
}

</style>

