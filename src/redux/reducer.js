const initial={
    API:'Nothing',
    item:'nothing'
}
const rootreducer=(storeData=initial,action)=>{
    if(action.type==='api'){
        return {
            api:action.payload
        }
    }
    else if (action.type==='item'){
        return {
            item:action.payload
        }
    }
   return storeData
}
export default rootreducer