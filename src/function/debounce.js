/**
 * 返回函数防抖函数
 */
export function debounce(fn,time){
    return function(event){
        if(fn.timerId){
            clearTimeout(fn.timerId)
        }
        fn.timerId= setTimeout(()=>{
            fn.call(this,event)
            clearTimeout(fn.timerId)
        },time)
    }
}