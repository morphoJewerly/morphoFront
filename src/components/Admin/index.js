import { selectIsAuth } from '../../Redux/auth';
import styles from './Admin.module.css';
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';
import { useSelector } from "react-redux";

function Admin() {
  const isAuth = useSelector(selectIsAuth);
 console.log("isAuth"+ ":" + isAuth)
  return (
   <>
   {isAuth ? <AdminPanel/> : <LoginForm/> }
    </> 
      );
}

export default Admin;
