import Vuex from 'vuex';
import Vue from 'vue';

import state from './state'
import mutations from './mutations'
import getters from './getters'

var module = {
  state: state,
  mutations: mutations,
  getters,
  namespaced: true
}



export default module;


