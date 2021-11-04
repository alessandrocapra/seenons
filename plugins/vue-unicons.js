import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import {
  uniArrowLeft,
  uniPhone,
  uniUser,
  uniMapMarker,
  uniCommentAlt,
  uniLocationArrow,
  uniArrowToBottom,
  uniTopArrowFromTop,
  uniPen,
  uniCheck,
  uniMinus,
} from 'vue-unicons/dist/icons'

Unicon.add([
  uniArrowLeft,
  uniPhone,
  uniUser,
  uniMapMarker,
  uniCommentAlt,
  uniLocationArrow,
  uniArrowToBottom,
  uniTopArrowFromTop,
  uniPen,
  uniCheck,
  uniMinus,
])
Vue.use(Unicon, { height: 40, width: 40 })
