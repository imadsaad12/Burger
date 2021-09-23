import React ,{Component} from 'react';
import Checkoutsummary from '../../components/Orders/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
import {connect} from 'react-redux'
class checkout extends Component{
    // state={
    //     ingrediants:{
           
    //     },
    //     totalprice:0
    // }
    // componentDidMount(){
    //     const query=new URLSearchParams(this.props.location.search);
    //     const ingrediants={};
    //     let price=0;
    //     const qureys=query.entries();
    //     for(let param of qureys){
    //         if(param[0]==='price'){
    //             price=param[1];
    //         }
    //         else{
    //             ingrediants[param[0]]=+param[1];
    //         }
            
    //     }   
    //     this.setState({ingrediants:ingrediants,totalprice:price});
    // }
    cancelhandler=()=>{
        this.props.history.goBack();
    }
    continuehandler=()=>{
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        return(
            
            
            <div>
                <Checkoutsummary 
                ingredients={this.props.ings}
                onCheckoutcancel={this.cancelhandler}
                onCheckoutcontinue={this.continuehandler}
                />
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} /> 
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        ings:state.ingrediants
    }
}
export default connect(mapStateToProps)(checkout);