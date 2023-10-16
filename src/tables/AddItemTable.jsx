import { PlusCircleTwoTone, EditTwoTone } from '@ant-design/icons';  
import { Button } from 'antd';
import { useRef,createContext   } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './Table.css'
// import ModalError from './ModalError';
import { Modal, Space } from 'antd';

const AddItemTable = () =>{

    // Khai bao tham chieu
    const nameRef = useRef('');
    const ageRef = useRef('');
    const addRef = useRef('');
    const tagsRef = useRef('');
    const navigate = useNavigate();
    const [rd,setRd] = useState(null);
    const [errorMess,setErrorMess] = useState('');
    // const [errorAge,setErrorAge] = useState('');
    // const [errorAdd,setErrorAdd] = useState('');
    // const [errorTags,setErrorTags] = useState('');

    const [modal, contextHolder] = Modal.useModal();
    const ReachableContext = createContext(null);
    const UnreachableContext = createContext(null);
    const config = {
        title: 'Use Hook!',
        content: (
          <>
            err
          </>
        ),
      };

    const addItem = () =>{
        const api = 'https://64e5f67f09e64530d17f54dc.mockapi.io/rocket35class';

        const result = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            address: addRef.current.value,
            tags: tagsRef.current.value
        }

        

        console.log(result,'=====')
        const {name, age, tags, address} = result;
        if(name.trim() == '' || age.trim() == '' || address.trim() == '' || tags.trim()== ''){
            //btvn hien thi thong bao loi
            //ktra chinh xac loi nao
            if(name.trim() == '' && age.trim() == '' && address.trim() == '' && tags.trim()== ''){
                console.log('DIEN THONG TIN')
                setErrorMess('*Hãy điền thông tin');
            } else {
                let err = '';
                if(name.trim() == '') err += "name, ";
                if(age.trim() == '') err += "age, ";
                if(address.trim() == '') err += "address, ";
                if(tags.trim() == '') err += "tags, ";
                err = err.slice(0,err.length-2);

        //         <ReachableContext.Provider value="Light">
                    
        //     {modal.warning(config)}
        //         <Button
        //   onClick={() => {
        //     modal.warning(config);
        //   }}
        // >
        //   Warning</Button>
        //         {contextHolder}</ReachableContext.Provider>

                setErrorMess('*Hãy điền '+err);

       
            }

            // console.log('DIEN THONG TIN')
            return;


        }
        //call api
        axios.post(api, result).then(res => {
            if(res.status === 200){
                //do st
                // redirect to listTable
                
            }
            navigate('/Table');
        }).catch(err => {
            //btvn show modal or alert err
            console.log('err post', err)
        })

    }

    return <>
        {

        }
       
        <PlusCircleTwoTone className='formIcon'/><span> <h2 style={{'display':'inline-block'}}>Add nhân viên</h2></span>

        
        <div className="formRow">
                <input ref={nameRef} name='name' placeholder='name'/>
                </div>
            <div className="formRow">
                <input ref={ageRef} name='age' placeholder='age'/></div>
            <div className="formRow">
                <input ref={addRef} name='address' placeholder='address' /></div>
            <div className="formRow">
                <input ref={tagsRef} name='tags' placeholder='tags' /></div>
                <Button onClick={() => addItem()}>Add item</Button>
                <div className="errorForm">{errorMess}</div>
                {/* <ReachableContext.Provider value="Light">
            <Button
          onClick={() => {
            modal.warning(config);
          }}
        >
          Warning
        </Button>
        {contextHolder}
        </ReachableContext.Provider> */}

    </>
}

export default AddItemTable;


