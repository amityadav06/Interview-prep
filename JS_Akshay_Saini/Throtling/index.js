const expensive = () => {
    console.log('called resize');
}
// window.addEventListener('resize', expensive); // before


const throttle = (fn, limit) => {
    let isCalled = true
    return function(){
        let context = this;
        let args = arguments;
        if(isCalled){
            fn.apply(context, args)
            isCalled = false;
            setTimeout(() => {
                isCalled = true
            }, limit);
        }
    }
}
const betterExpensive = throttle(expensive, 300)
window.addEventListener('resize', betterExpensive)