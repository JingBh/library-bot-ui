import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const defaultBaseURL = 'http://192.168.100.76:8081/'
axios.defaults.baseURL = (process.env.VUE_APP_API_URL || defaultBaseURL) + 'datasnap/rest/TInterFace/'

Vue.use(VueAxios, axios)
