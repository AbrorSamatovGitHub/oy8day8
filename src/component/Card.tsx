"use client"
import { deleteTodo } from '@/service/todo'
import { TodoData } from '@/type/todoType'
import { Button } from 'antd'
import React from 'react'

const Card: React.FC<TodoData> = ({title,description,id}) => {
  const deleteItem = () => {
   deleteTodo(id).then((res)=>console.log(res))    
  }
  return (
    <div className='border border-1'>
     <h2 className="text-2xl text-red-600">{title}</h2>
     <p className='text-green-600'>{description}</p>
     <Button onClick={deleteItem}>delete</Button>
    </div>
  )
}

export default Card
