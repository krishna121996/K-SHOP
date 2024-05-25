import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import './List.css'

const List = (url) => {
  const [list, setList] = useState([])
  useEffect(() => {
    fetchList()
  }, [])

 const deleteFood = async(item) => {
   console.log('item', item._id)
   const objectBody = {"id":item._id}
   const response = await axios.post(`${url?.url}/api/food/deleteFood`, objectBody);
   console.log('response>>', response)
   if(response.data.success) {
    toast.success('Food deleted successfully')
    fetchList()
   } else {
    toast.error('Food deletion error!')
   }
 } 
  const fetchList = async () => {
    const response = await axios.get(`${url?.url}/api/food/list`);
    console.log('Response', response?.data?.foodList)
    if(response.data.success) {
      setList(response?.data?.foodList);
    } else {
      toast.error('Error fetching food!')
    }
  }
  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url?.url}/images/`+item.image} alt=""/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className='cursor' onClick={() => deleteFood(item)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List