import React from 'react'
import styles from "./Home.module.css";
import FirstDisplay from '../Components/EntitySelection/firstDisplay';
import { entityName } from '../Utils';
import {useSelector, useDispatch} from "react-redux";
import Student from '../Components/Student/Student';
import SelfEmployed from "../Components/SelfEmployed/SelfEmployed"
import Buissness from "../Components/Buissness/Buissness"

const Home = () => {

    const {entity} = useSelector((state) => state.entity)
    
    const project = () => {
        switch(entity) {
        case entityName[1]:   return <Student />;
        case entityName[2]:   return <SelfEmployed />;
        case entityName[3]:   return <Buissness />;

        default:    return <FirstDisplay />
        }
    }

  return (
    <div>
      <h1 style={{textAlign :"center"}}>Data Collection..</h1>
       {project()}
    </div>
  )
}

export default Home