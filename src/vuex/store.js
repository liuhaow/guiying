import Vue from 'vue'
import Vuex from 'vuex'

import com from './modules/com'
import gcar from './modules/gcar'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        com,
        gcar
    }
})