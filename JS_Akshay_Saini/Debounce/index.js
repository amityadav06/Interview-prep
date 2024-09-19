
let count = 1
const getData = () => {
  console.log('hello', count++);
}

const debounce = (fn, d) => {
  let timer;
  return function(){
    let context = this;
    let args = arguments;
    
    clearTimeout(timer)
    timer = setTimeout(() => {
      getData.apply(context, arguments)
    }, d);
  }
}

const betterFun = debounce(getData, 300)