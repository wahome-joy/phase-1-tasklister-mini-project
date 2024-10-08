document.addEventListener("DOMContentLoaded",function () {
const newTaskDescription = document.getElementById('new-task-description');
const priority = document.getElementaryById('priority');
const user = document.getElementaryById('user');
const duration = document.getElementById('duration');
const dueDate = document.getElementById('dueDate');
const createTaskForm = document.getElementById('createTaskForm');
const tasklist = document.getElementById('task-list');
const sortButton = document.getElementById('sortButton');
const editButton = document.getElementById('editButton');

let tasks = ;
let sortorder ='asc';

const renderTasks =()=>{
  tasklist.innerHTML =;
  task.forEach(task,index)=>{
    const listItem = document.createElement('li');
    listIten.textContent =$ {task.newTaskDescription} (${task.priority}) - ${task.user} -${task.duration} - ${task.dueDate};
    if(task.priority=='high'){listItem,style.color='red';
    }else if(task.priority=='medium'){listItem.style.color='yellow';
    }else if (task.priority=='loe=w') {listItem.style.color='green';
    }
    const deleteButton =document.createElement('button');
    deleteButton.textContext ='delete';
    deleteButton.onclick =()=>{deletedTask(index);
    };
    listItem.appendChild(deleteButton);
    const editButton = document.createElement('button');
    editButton.textContext ='edit';
    editButton.onClick=()=> {const taskDescrition=task.Description;
      const newTaskDescription = prompt('Enter new task description:');
      task.description = newTaskDescription;
      renderTasks();
    }
  listItem.appendChild(editButton);
  tasklist.appendChild(listItem);
  });
};
createTaskForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const task = {
    description: newTaskDescription.value,
    priority: Priority.value,
    user: user.value,
    duration: duration.value,
    dueDate: dueDate.value,
  };
  tasks.push(task);
  renderTasks();
  newTaskDescription.value ="";
  priority.value ="";
  user.value ="";
  duration.value ="";
  dueDate.value ="";
});
window.deletedTask =(index)=>{
  tasks.splice(index,1);
  renderTasks();
};
window.editTask =(index)=>{

  const task = tasks[index];
  newTaskDescription.value = task.Description;
  priority.value = task.priority;
  user.value = task.user;
  dueDate.value = task.dueDate;
  duration.value = task.duration;
  tasks.splice(index,1);
  renderTasks();
};
sortButton.addEventListener('click',() =>{
  tasks.sort((a,b) =>{
    const priorityOrder =('high':1,'medium': 2, 'low': 3);
    return sortorder=== 'asc'
    ? priorityOrder[a.priority]-priorityOrder[b.priority]:priorityOrder[b.priority]-priorityOrder[a.priority];
  });
  sortorder =sortorder=== 'asc'? 'desc' : 'asc' ;
  renderTasks();
});
});













      
    


