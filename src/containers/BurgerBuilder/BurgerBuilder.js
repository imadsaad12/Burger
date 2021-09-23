import React,{Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Model/Model';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'; 
import OrderSummary from '../../components/Burger/Ordersummary/Ordersummary';
import axios from '../../axios-order';
import * as actionTypes from '../../Store/actions';
import {connect} from 'react-redux';

class BurgerBuilder extends Component{
    state={
        purchasing:false
    }
   
   
    purchasinghandler=()=>{
        this.setState({purchasing:true});
    }
    close=()=>{
        this.setState({purchasing:false});        
    }
    PurchaseContinueHandler=()=>{
        
        // let queryparams=[];
        // for(let i in this.state.ingrediants){
        //     // queryparams.push(encodeURIComponent(i)+ "=" +encodeURIComponent(this.state.ingrediants[i]));
        //     queryparams.push(i+ '=' +this.state.ingrediants[i]);

        // }
        // queryparams.push('price='+this.state.totalprice);
        // const querystring=queryparams.join('&');
        // this.props.history.push({
        //     pathname:'/checkout',
        //     search:'?'+querystring
        // });

        this.props.history.push('/checkout');
    }
    componentDidMount(){
        // axios.get('https://react-my-burger-ba67f-default-rtdb.firebaseio.com/ingredients.json')
        // .then(res=>{
        //     this.setState({ingredients:res.ingredients});
        // })
    }
    render(){
        
        return(
            <Aux>
               { (this.state.purchasing)?
                <Modal ingredients={this.state.purchasing}>
                    <OrderSummary continue={this.PurchaseContinueHandler} price={this.props.price} ingredients={this.props.ing} 
                    close={this.close}
                    />
                </Modal>:null
                 }
                <Burger ingrediant={this.props.ing}/>
                <BuildControls addedingredients={this.props.onIngredientAdded}
                 removeingredient={this.props.onIngredientRemoved}
                 price={this.props.price}
                 ordered={this.purchasinghandler}
                
                 />
            </Aux>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
    ing:state.ingrediants,
    price:state.totalprice
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
    onIngredientAdded:(ingname)=>dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingname}),
    onIngredientRemoved:(ingname)=>dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingname})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);