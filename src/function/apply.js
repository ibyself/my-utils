export function apply(fn,obj,args){
    if(obj===null||obj===undefined){
        obj=window
    }
    obj.newFn=fn
    let result = obj.newFn(...args)
    delete obj.newFn
    return result
}