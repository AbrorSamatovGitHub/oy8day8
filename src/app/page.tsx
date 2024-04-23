import Card from "@/component/Card";
import { getData } from "@/service/todo";
import { Form } from "../component/form";
export default async function Home() {
  const data = await getData()
  return (
    <main >
      <Form/>
      {data.map((todo)=>(
       <Card key={todo.id} {...todo}/>
      ))}
    </main>
  );
}
