import Goods from './Goods';
import React from 'react';
import styles from './AdminPanel.module.css';
import {Link, useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";
import { useSelector } from 'react-redux';
import Header from '../../Header';
import Posts from '../../Posts';

function AdminPanel() {
    const location = useLocation();
    const { pathname } = location;
    // const router = useSelector((state) => state.router.value)
  return (
   <>
   <Header/>
   { pathname == "/admin" ?
      <Goods/>
      :
      <Posts/>
    }
  </>
      );
}

export default AdminPanel;
