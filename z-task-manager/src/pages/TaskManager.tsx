import React from 'react'
import DragAandDrop from '../components/DragAndDrop'

function TaskManager() {
    const tasks = [
        { id: 1, name: "Task 1", status: "pending" },
        { id: 2, name: "Task 2", status: "done" },
        { id: 3, name: "Task 3", status: "pending" },
        { id: 4, name: "Task 4", status: "done" }
      ];
  return (
    <div>
    <div>TaskManager</div>
    <DragAandDrop tasks={tasks}/>
    </div>
  )
}

export default TaskManager
