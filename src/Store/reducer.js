import * as actionTypes from './actions';
const initialState={
    ingrediants:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalprice:4
}
const INGREDIENTS_PRICES={
    salad:0.5,
    meat:1.3,
    bacon:0.7,
    cheese:0.5
}
const reducer=(state=initialState,action)=>{
        switch (action.type) {
            case actionTypes.ADD_INGREDIENT:
                return{
                    ...state,
                    ingrediants:{
                        ...state.ingrediants,
                        [action.ingredientName]:state.ingrediants[action.ingredientName] + 1
                    },
                    totalprice:state.totalprice + INGREDIENTS_PRICES[action.ingredientName]
                }
            case actionTypes.REMOVE_INGREDIENT:
                return{
                    ...state,
                    ingrediants:{
                        ...state.ingrediants,
                        [action.ingredientName]:state.ingrediants[action.ingredientName] - 1
                    },
                    totalprice:state.totalprice - INGREDIENTS_PRICES[action.ingredientName]
                }
            default:
                return state;
            
        }
}
export default reducer;