import Goods from './Goods';
import React from 'react';
import styles from './AdminPanel.module.css';
import {Helmet} from "react-helmet";
import { useSelector } from 'react-redux';

function AdminPanel() {
    // const router = useSelector((state) => state.router.value)
  return (
   <>
      <Goods/>
  </>
      );
}

export default AdminPanel;
