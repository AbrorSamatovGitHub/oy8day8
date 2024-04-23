import { TodoData } from "@/type/todoType";
import { revalidateTag } from "next/cache";
const getData = async (): Promise<TodoData[]> => {
  try {
    const res = await fetch("http://localhost:3600/todos", {
      next: {
        tags: ["todos"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const deleteTodo = async (id:number): Promise<{}> => {
  try {
    const res = await fetch(`http://localhost:3600/todos/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    revalidateTag("todos");
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const postTodos = async (e:FormData) => {
  try {
    const title = e.get('title');
    const description = e.get('description');
    const res = await fetch('http://localhost:3600/todos',{
      headers:{
        'Content-Type': 'application/json',
      },
      method:"POST",
      body:JSON.stringify({title,description}),
    });
    const response = await res.json();
    revalidateTag('todos')///revalidateTag
    return response;

  } catch (error) {
    
    throw new Error('Failed to post data');
  }
}
export { getData, deleteTodo,postTodos };
