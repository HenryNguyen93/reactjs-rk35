import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useEffect } from 'react';
import { ExclamationCircleFilled, EditTwoTone } from '@ant-design/icons';  

  

const EditTable = ({
    isModalOpen,
    setIsModalOpen,
    itemDetail,
    setItemDetail,
    callBackUpdate
}) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const showModal = () => {
    //     setIsModalOpen(true);
    //   };

    const [name, setName] = useState ('');
    const [age, setAge] = useState ('');
    const [address, setAddress] = useState ('');
    const [tags, setTags] = useState ('');
    
      const handleOk = () => {
        // setIsModalOpen(false);
        const result = {
            ...itemDetail,
            name,
            age,
            address,
            tags
        }
        console.log('result ',result);

        callBackUpdate(result);


      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
        setItemDetail({});
        console.log('cancel',itemDetail);
      };



    // const [info, setInfo] = useState({
    //         name: '',
    //         age: '',
    //         address: '',
    //         tags: ''

    // })

      useEffect(()=>{
        if(itemDetail){
            setName(itemDetail.name);
            setAge(itemDetail.age);
            setAddress(itemDetail.address)
            setTags(itemDetail.tags)
            // setInfo({
            //     name: itemDetail.name,
            //     age: itemDetail.age,
            //     address: itemDetail.address,
            //     tags: itemDetail.tags

            // })

        }


      },itemDetail?.id)

    //   setNameChange = (e) =>{

    //   }

    return <>
          <Modal title={<>
            <EditTwoTone className='formIcon'/> <span> Edit nhân viên</span>
            </>
          } open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className="formRow">
                <input value={name} name='name' placeholder='name' onChange={(e) => setName(e.target.value)}/>
                </div>
            <div className="formRow">
                <input value={age} name='age' placeholder='age' onChange={(e) => setAge(e.target.value)}/></div>
            <div className="formRow">
                <input value={address} name='address' placeholder='address' onChange={(e) => setAddress(e.target.value)}/></div>
            <div className="formRow">
                <input value={tags} name='tags' placeholder='tags' onChange={(e) => setTags(e.target.value)}/></div>

    
      </Modal>
    </>
}

export default EditTable;