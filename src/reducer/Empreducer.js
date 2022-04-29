const initialState = {
    list: [],
    loading:false
  };

const Empreducer=(state=initialState,action)=>{
  
  
      switch(action.type){
        case "READ_REQUEST":
          //console.log(action.payload)
            return {
                ...state,
               
                loading:true
                

            };
        case "READ_DATA":
          return {
            ...state,
            
            list:action.payload,
                loading:false
          }
        
       
            
      
      default: return state    }
      
  }
export default Empreducer ;