import React,{Component} from 'react';
import Input from '../components/UI/Input/Input';
import classes from './Auth.module.css';
import * as actions from '../Store/auth';
import {connect} from 'react-redux'
class auth extends Component{
    state={
        OrderForm:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your email'
                },
                value:''
               },

            password:{
                elementType:'input',
                elementConfig:{
                    type:'passsword',
                    placeholder:'Password'
                },
                value:''
            },
 
           
        }
     }
     changedhandler=(event,identifier)=>{
        const updatedorderform={...this.state.OrderForm};
        const updatedElementform={...updatedorderform[identifier]};
        console.log(updatedElementform);
        updatedElementform.value=event.target.value;
        updatedorderform[identifier]=updatedElementform;
        this.setState({OrderForm:updatedorderform});

    }
    signinhandler=(e)=>{
        e.preventDefault();
       this.props.onAuth(this.state.OrderForm.email.value,this.state.OrderForm.password.value);
       console.log(this.state.OrderForm.email.value,this.state.OrderForm.password.value)
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
            <div>          
                <form className={classes.Auth} onSubmit={this.signinhandler}>    
                   {FormElemetsArray.map((element)=>(
                       <Input 
                       elementtype={element.config.elementType}
                       elementConfig={element.config.elementConfig}
                       value={element.config.value}
                       key={element.id}
                       changed={(event,identifier)=>this.changedhandler(event,element.id)}
                       />
                   ))}
                    <input type="submit" name="submit" value="Sign in"/>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onAuth:(email,password)=>dispatch(actions.auth(email,password))
    }
}

export default connect(null,mapDispatchToProps)(auth);