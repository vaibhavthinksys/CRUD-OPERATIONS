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
          };
          case "DELETE_DATA":
            const newlist = state.list.filter((elem) => elem.id !== action.id)
            return {
              ...state,
              list: newlist
            }
        
       
            
      
      default: return state    }
      
  }
export default Empreducer ;