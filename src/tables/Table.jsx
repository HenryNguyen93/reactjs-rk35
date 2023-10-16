import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { ExclamationCircleFilled, EditTwoTone } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import './Table.css'
import EditTable from './EditTable';
import AddTable from './AddTable';
import { NavLink, Navigate } from 'react-router-dom';


// import type { ColumnsType } from 'antd/es/table';

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

const { confirm } = Modal;

const TableCP = () => {
    
    const [dataTable,setDataTable] = useState([]);
    const api = 'https://64e5f67f09e64530d17f54dc.mockapi.io/rocket35class';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [itemDetail, setItemDetail] = useState({});

    const apiCall = () =>{
    
        axios.get(api).then(res => {
            console.log(res, 'res====')
            setDataTable(res?.data)
        })
        .catch(err => 'error '+err)
    }

    const columns = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
          },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, itemTable) => (
            <>
         <Tag color={'blue'} >
                 {itemTable.tags}
              </Tag>
            
            </>

        )

        
        // (_, { tags }) => (
        //   <>
        //     {tags.map((tag) => {
        //       let color = tag.length > 5 ? 'geekblue' : 'green';
        //       if (tag === 'loser') {
        //         color = 'volcano';
        //       }
        //       return (
        //         <Tag color={color} key={tag}>
        //           {tag.toUpperCase()}
        //         </Tag>
        //       );
        //     })}
        //   </>
        // ),
      },
      {
        title: 'Action',
        key: 'action',
        fixed: 'right',
        width: 150,
        render: (_, record) => (
          <Space size="middle">
            {/* <a>Invite {record.name}</a> */}
            <Tag color={'red'} onClick={() => 
                // DeleteItemTb(record)
                showDeleteConfirm(record)
                }>Delete</Tag>
            {/* <a onClick={function(){
                console.log(record)
            }}>Delete</a> */}
            <Tag color={'green'} onClick={() => {
              // DeleteItemTb(record)
              showEditFrom(record)
              console.log('edit')
            }                
                }>Edit</Tag>

          </Space>
        //   <p onClick={console.log(record.id)}>Delete</p>
        ),
      },
    ];

    const DeleteItemTb = (itemTable) => {
        console.log(itemTable);
        if(itemTable?.id) {
            axios.delete(api+`/${itemTable?.id}`).then(res =>{
                apiCall();
            }).catch(err => 'xoa error '+err)
        }
    }

    const showDeleteConfirm = (item) => {
        confirm({
          title: `Are you sure delete this ${item?.name}?`,
          icon: <ExclamationCircleFilled />,
          content: 'Some descriptions',
          
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            // console.log('OK');
            DeleteItemTb(item)
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      };

      // dung component o tren

      // const showEditFrom = (item) => {
      //   confirm({
      //     title: 'Edit ' +item?.name,
      //     icon: <EditTwoTone />,
      //     content: <> 
      //     <div className="formRow">
      //     <label htmlFor='itemName'>Name: </label>
      //     <input id='itemName' className="formContent" type="text" defaultValue={item?.name}/>
      //     </div>
      //     <div className="formRow">
      //     <label htmlFor='itemAge'>Age: </label>
      //     <input id='itemAge' className="formContent" type="text" defaultValue={item?.age}/>
      //     </div>
      //     <div className="formRow">
      //     <label htmlFor='itemAddress'>Address: </label>
      //     <input id='itemAddress' className="formContent" type="text" defaultValue={item?.address}/>
      //     </div>         
      //     </>,
      //     okText: 'Yes',
      //     okType: 'danger',
      //     cancelText: 'No',
      //     onOk() {
      //       // console.log('OK');
      //       // DeleteItemTb(item)
      //     },
      //     onCancel() {
      //       console.log('Cancel');
      //     },
      //   });
      // };

      const showEditFrom = (item) => {
        setIsModalOpen(true);
        setItemDetail(item);
        console.log('edit');
        
      };

      const showCreateFrom = () => {
        confirm({
          title: 'Thêm nhân viên',
          icon: <EditTwoTone />,
          content: <> 
          <div className="formRow">
          <label htmlFor='itemName'>Name: </label>
          <input id='itemName' className="formContent" type="text" defaultValue={''}/>
          </div>
          <div className="formRow">
          <label htmlFor='itemAge'>Age: </label>
          <input id='itemAge' className="formContent" type="text" defaultValue={''}/>
          </div>
          <div className="formRow">
          <label htmlFor='itemAddress'>Address: </label>
          <input id='itemAddress' className="formContent" type="text" defaultValue={''}/>
          </div>         
          </>,
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            // console.log('OK');
            // DeleteItemTb(item)
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      };

      const showCreateFrom2 = () =>{
        setIsModalCreateOpen(true);
        console.log('create');
      }

    useEffect(() =>{
        // const api = 'https://64e5f67f09e64530d17f54dc.mockapi.io/rocket35class';
        // axios.get(api).then(res => {
        //     console.log(res, 'res====')
        //     setDataTable(res?.data)
        // })
        // .catch(err => 'error '+err)
    apiCall();

    },[]);

const editTableApi = (item) =>{
  console.log('item',item);

  // destructuring
  const {id, name, address, age, tags, key} = item;

  //call
  axios.put(api+`/${id}`,{
    name, 
    address, 
    age, 
    tags, 
    key

  }).then(res =>{
    setIsModalOpen(false);

  }).then(res => apiCall());
}

    return <>
    <h1 style={{textAlign: 'center'}}>Danh sách nhân viên</h1>
    <NavLink to="/addItemTable" replace={true}>
    <Tag color={'green'}    
      >Thêm nhân viên</Tag>


    </NavLink>
    {/* <Tag color={'green'} onClick={
      // () => {showCreateFrom()}
      () => {
        // showCreateFrom2()
        redirectAddItem()
      }
      
      }>Thêm nhân viên</Tag> */}
    {
        dataTable.length > 0 &&
        <Table columns={columns} dataSource={dataTable} 
        scroll={{x:900,y:500}}
        />
    }

    {/* modal show */}
    <EditTable isModalOpen={isModalOpen} 
         setIsModalOpen={setIsModalOpen}
         itemDetail={itemDetail}
         setItemDetail={setItemDetail}
         callBackUpdate={editTableApi}
    />

    <AddTable isModalOpen={isModalCreateOpen} 
         setIsModalOpen={setIsModalCreateOpen}/>
    
    </>

}





// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];






export default TableCP;



// export const Table = () => {
//     return <>





//     </>
// }