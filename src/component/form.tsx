"use client"
import { postTodos } from '@/service/todo';
import React from 'react'
// import { useForm } from 'react-hook-form'
// interface FormData {
//     title: string
//     description: string
// }
export const Form: React.FC = () => {
    return (
      <form className="mb-4" action={postTodos}>
        <div>
          <input placeholder='title' className="border border-blue-400" name="title" type="text" />
        </div>
        <div>
          <input
            placeholder="description"
            className="border border-blue-400"
            name="description"
            type="text"
          />
        </div>
        <button className="px-5 py-2 bg-blue-400" type="submit">
          send
        </button>
      </form>
    );
  };