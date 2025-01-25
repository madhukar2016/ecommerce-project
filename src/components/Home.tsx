import React, { useState } from 'react'
interface Taskprops{
  title: string;
  description: string;
  deleteTask: any;
  index:any;
}
const Task:React.FC<Taskprops> =({title,description,deleteTask,index}) =>{
   return(
    <>
     <div className='task'>
        <div>
             <p>{title}</p>
             <span>{description}</span>
        </div>
        <button onClick={()=>deleteTask(index)}>-</button>
     </div>
    </>
   )
}

function Home() {
  const [tasks,setTasks] =useState<any>([]);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const submitHandler = (e:any)=>{
     e.preventDefault();
     setTasks([
      ...tasks,{
        title,
        description
      },
     ]);
  }
  const deleteTask = (index: any)=>{
      const filteredList =  tasks.filter((val: any,i: any)=>{
          return i !== index
       })
    
       setTasks(filteredList)
  }
  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <h1>Daily Goals</h1>
        <input type='text' placeholder='title'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea placeholder='description'
         value={description}
         onChange={(e)=>setDescription(e.target.value)}
        ></textarea>
        <button>Add</button>
      </form>
      {
        tasks?.map((item: { title: string; description: string; },index: React.Key | null | undefined)=>(
          <Task key={index} title={item?.title} description={item?.description} index={index} deleteTask={deleteTask}/>
        ))
      }
      
    </div>
  
  )
}

export default Home