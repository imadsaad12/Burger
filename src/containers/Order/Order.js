import React ,{Component}from 'react'
import Order from '../../components/Orders/Order';
import axios from '../../axios-order';
class orders extends Component{
    state={
        orders:[]
    }
    componentDidMount(){

        axios.get('/order.json')
        .then(res=>{
            const fetchedorders=[];
            console.log(res.data);
            for(let key in res.data){
                fetchedorders.push({
                    ...res.data[key],
                    id:key
                });
            }
            this.setState({orders:fetchedorders});
        })
    }
    render(){
        return(
            <div>
              {this.state.orders.map(order=>(
                  <Order 
                  key={order.id}
                  price={+order.price}
                  ingredients={order.ingredients}
                  />
              ))}
            </div>
        )
    }
}
export default orders;