/**
 * 返回数据节流函数
 */
export function throttle(fn,time){
    let pre=0
    return function(event){
        let current=Date.now()
        if(current-pre>time){
            fn.call(this,event)
            pre=current
        }
    }
}