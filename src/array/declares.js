/**
 * 自定义数组声明式方法
 */
export function map(array,callback){
    let arr=[]
    for(let i=0;i<array.length;i++){
        let result=callback(array[i],i)
        arr.push(result)
    }
    return arr
}

export function reduce(array,callback,pre){
    let result=pre
    for(let i=0;i<array.length;i++){
        result=callback(result,array[i],i)
    }
    return result
}

export function filter(array,callback){
    let arr=[]
    for(let i=0;i<array.length;i++){
        let result=callback(array[i],i)
        if(result) arr.push(array[i])
    }
    return arr
}

export function find(array,callback){
    for(let i=0;i<array.length;i++){
        let result=callback(array[i],i)
        if(result) return array[i]
    }
    return undefined
}

export function findIndex(array,callback){
    for(let i=0;i<array.length;i++){
        let result=callback(array[i],i)
        if(result) return i
    }
    return -1
}

export function every(array,callback){
    for(let i=0;i<array.length;i++){
        let result=callback(array[i],i)
        if(!result) return false
    }
    return true
}

export function some(array,callback){
    for(let i=0;i<array.length;i++){
        let result=callback(array[i],i)
        if(result) return true
    }
    return false
}