import Vue from 'vue'

/*
*   日期格式过滤器 2018-06-26 07:26:07 转为 xxxx-xx-xx
*/
export function timeSplit(input) {
  if(!input) {
      return input;
  }
  return input.split(' ')[0]
  }

  export function aaa(input) {
    return `${input}`
}

const filters = { timeSplit }

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
export default filters
