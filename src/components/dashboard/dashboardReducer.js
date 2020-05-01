const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

export default (state= INITIAL_STATE, action) => {
    switch(action.type){
        case 'BILLING_SUMMARY_FETCHED':
            console.log(`Dados retornados: ${action.payload.data}`)
            return {...state, summary: action.payload.data? action.payload.data : state }

        default:{
            return state
        }
           
    }//SWITCH
}