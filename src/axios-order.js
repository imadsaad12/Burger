import axios from 'axios';
 const instance =axios.create({
     baseURL:'https://react-my-burger-ba67f-default-rtdb.firebaseio.com/'
 });
 export default instance;