import React from "react";
import ReactDOM from 'react-dom/client'
import "../components/Dashboard.css"
import {
    HomeOutlined,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    MenuOutlined,
    BellOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import {Chart}  from './Chartjs';
import { useSelector, useDispatch } from 'react-redux';
import  { increment, decrement, incrementByAmount } from '../features/counter/counterReducer';



export default function DashBoard() {
    const count = useSelector((state) => state.counter123.value)
    const dispatch = useDispatch()

    // console.error(error);

    return (
        // <div id="error-page">
        //     <h1>Opps!</h1>
        //     <p>Sorry. an unexpected error has occurred.</p>
        //     <p>
        //         <i>{error.statusText  || error.message}</i>
        //     </p>

        // </div>
        <>
        
        <header>

        <div class="left">
            <div class="item logo"></div>
            <div class="item menu">
            {/* <MenuOutlined /> */}
            <p>Welcome back</p>
            <h3>Alex999</h3>
            </div>
        </div>
        <div class="right">
        <BellOutlined style={{fontSize: '24px', color: '#08c', margin: '5px'}}/>
        <UserOutlined style={{fontSize: '24px', color: '#08c'}}/>
            <span id="login-username" class='itemicon'></span>
        </div>

    </header>
    <div className="row">
        <div className="chart col70"><Chart /></div>
        <div className="col30 tb100">
            <div className="topbox">consectetur adipiscing</div>

            <h1>100%</h1>
            <p>Lorem ipsum </p>
            </div>
        
    </div>

    <div className="row row2">
        <Row2 class2="col20-1" />

        {/* <div className="col20 col20-1">
            <h2>Duis nec ante</h2>
            <p>quis nulla</p>
            <p>pharetra</p>
            <p>dictum a</p>
            <div className="tagpercent">101%</div>
        </div> */}
        <div className="col20 col20-2">
            <h2>Duis nec ante</h2>
            <p>quis nulla</p>
            <p>pharetra</p>
            <p>dictum a</p>
            <div className="tagpercent">101%</div>
        </div>
        <div className="col20 col20-3">
            <h2>Duis nec ante</h2>
            <p>quis nulla</p>
            <p>pharetra</p>
            <p>dictum a</p>
            <div className="tagpercent">101%</div>
        </div>
        <div className="col20 col20-4">
            <h2>Duis nec ante</h2>
            <p>quis nulla</p>
            <p>pharetra</p>
            <p>dictum a</p>
            <div className="tagpercent">101%</div>
        </div>
        <div className="col20 col20-5">
            <h2>Duis nec ante</h2>
            <p>quis nulla</p>
            <p>pharetra</p>
            <p>dictum a</p>
            <div className="tagpercent">101%</div>
        </div>

    </div>

    <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
    
    
    </>

    );
}

export const Row2 = function({class2}){
    return(
        <div className={`col20 ${ class2 }`}>
        {/* // {`col20 ${ class2 }`}> */}

            <h2>Duis nec ante</h2>
            <p>quis nulla</p>
            <p>pharetra</p>
            <p>dictum a</p>
            <div className="tagpercent">101%</div>
        </div>
    )
}

export const hhhhh2234 = function(props123){
    return(
      <div>
        hello newCom2 {props123.child} : {props123.child2};

      </div>
    )
  }

export const NewComponent2 = function(props123){
    return(
      <div>
        hello newCom2 {props123.child} : {props123.child2};

      </div>
    )
  }