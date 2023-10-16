import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { PlusCircleTwoTone, EditTwoTone } from '@ant-design/icons';  

const AddTable = ({
    isModalOpen,
    setIsModalOpen,
    itemDetail,
    setItemDetail,
}) => {

  const [name, setName] = useState ('');
  const [age, setAge] = useState ('');
  const [address, setAddress] = useState ('');
  const [tags, setTags] = useState ('');

const handleOk = () => {
    // setIsModalOpen(false);
    const result = {

      name,
      age,
      address,
      tags
  }
  console.log('result ',result);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setName('');
    setAge('');
    setAddress('');
    setTags('');

  };

  return (
    <>
      <Modal title={<>
        <PlusCircleTwoTone className='formIcon'/><span>Add nhân viên</span>
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
  );

}

export default AddTable;