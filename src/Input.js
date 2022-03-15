import React, { useRef, useState} from 'react'
import './Input.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
function Input() {
    const [list, setlist] = useState([]);
    const [singleList, setsingleList] = useState('');
    var inputref = useRef()

  const onchange = ()=>{
      setsingleList(inputref.current.value)  
    }

  const onclick=()=>{
     if (inputref.current.value=='') {
       alert('Empity entery is not accepted!')
     }else{
     setlist([...list,singleList])
     setsingleList('')
     }
  }
   
 const editList = (i)=>{
 const editedList =[...list]; 
 editedList[i]=singleList;  
 setlist(editedList)
}

const deleteList =(i)=>{
  const ForDeletion =[...list];
  const tobeDeleted = ForDeletion.filter((listes,k)=> k!==i )
  setlist(tobeDeleted)
}

  return (
    <div  className='list'>
      <h1>My To Do List</h1>
      <span></span>
     <input value={singleList} className='input' type="text" placeholder="your to do here" onChange={onchange} ref={inputref} />
     <button className='btn' type='button' onClick={onclick}>Add to list</button>
     {list.map((everylist,i)=>
               <div className='akafi' key={i}>
                 <div>
                 <h3>{i+1} Thing to do for today is : {everylist}</h3>
                 </div>
                 <br />
               <div className='akafi'>
               <button  className='btn2' onClick={()=>editList(i)}>
                   <EditIcon/>
                   <p>Edit</p>
                  </button>
                  <button  className='btn3' onClick={()=>deleteList(i)}>
                   <DeleteIcon />
                   <p>Delete</p>
                  </button>
                
               </div>
            
                 
               </div>
     )} 
    </div>
  )
}

export default Input