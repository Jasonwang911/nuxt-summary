import Vue from 'vue'
// import Element from 'element-ui/lib/element-ui.common'
/*
*   按需引入组件
*   MessageBox，Message,Notification这三个组件只能挂载Vue原型上调用，
*   不能使用Vue.use()；否则项目运行会默认执行一次，即使没有使用它们
*/
import {
  Carousel,
  CarouselItem,
  Loading
} from 'element-ui';

export default ()=>{
    Vue.use(Carousel);
    Vue.use(CarouselItem);
    Vue.use(Loading);
}
