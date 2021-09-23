import {withRouter} from 'react-router-dom';
import React ,{Component}from 'react';
import classes from './ContactData.module.css';
import axios from '../../../axios-order';
import {connect} from 'react-redux';
import Input from '../../../components/UI/Input/Input';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
class Contactdata extends Component{
    state={
       OrderForm:{
           name:{
               elementType:'input',
               elementConfig:{
                   type:'text',
                   placeholder:'Your name'
               },
               value:''
           },

           email:{
            elementType:'input',
            elementConfig:{
                type:'email',
                placeholder:'Your email'
            },
            value:''
           },

           address:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Your address'
            },
            value:''
           },

           phone:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Your phone'
            },
            value:''
           },

           deliverymethod:{
            elementType:'select',
            elementConfig:{
               options:[
                   {value:'fastest' ,displayValue:'Fastest'},
                   {value:'cheapest' ,displayValue:'Cheapest'}
               ]
            },
            value:''
           }
       }
    }
    orderHandler=(e)=>{
        e.preventDefault();
        let formdata={};
        for(let formelement in this.state.OrderForm){
            formdata[formelement]=this.state.OrderForm[formelement];
        }
        const data={
            ingredients:this.props.ing,
            price:this.props.price,
            orderdata:formdata
        }
        axios.post('/order.json',data)
        .then(res=>{
            console.log(res);
            this.props.history.push('/');
        })
    }
    changedhandler=(event,identifier)=>{
        const updatedorderform={...this.state.OrderForm};
        const updatedElementform={...updatedorderform[identifier]};
        updatedElementform.value=event.target.value;
        updatedorderform[identifier]=updatedElementform;
        this.setState({OrderForm:updatedorderform});

    }
    render(){
        let FormElemetsArray=[];
        for(let key in this.state.OrderForm){
            FormElemetsArray.push({
                id:key,
                config:this.state.OrderForm[key]
            })
            
        }
        return(
            <div className={classes.ContactData}>
                <form >
                   
                   {FormElemetsArray.map((element)=>(
                       <Input 
                       elementtype={element.config.elementType}
                       elementConfig={element.config.elementConfig}
                       value={element.config.value}
                       key={element.id}
                       changed={(event,identifier)=>this.changedhandler(event,element.id)}
                       />
                   ))}
                    <button className="btn btn-danger" onClick={this.orderHandler}>Order</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        ing:state.ingrediants,
        price:state.totalprice
    }
}
export default connect(mapStateToProps)(withRouter(Contactdata));