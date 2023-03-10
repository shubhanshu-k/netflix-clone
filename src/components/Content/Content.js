import './Content.css';
import axios from 'axios'; 
import React from 'react';
import {useEffect ,useState} from 'react';
 import Row from '../row/Row';
 import RowData from '../../constants/URLS'
function Content() {
  return (
    <div className="content-wrapper">
{RowData.map((el)=>{
    return <Row title ={el.title} url ={el.url}/>
})}
    </div>
  )
  
}

export default Content;
