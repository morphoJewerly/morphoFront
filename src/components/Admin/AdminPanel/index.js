import Goods from './Goods';
import React from 'react';
import styles from './AdminPanel.module.css';
import {Helmet} from "react-helmet";
import { useSelector } from 'react-redux';
import Header from '../../Header';

function AdminPanel() {
    // const router = useSelector((state) => state.router.value)
  return (
   <>
   <Header/>
      <Goods/>
  </>
      );
}

export default AdminPanel;
