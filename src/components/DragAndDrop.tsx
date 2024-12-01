import { useRef, useEffect, useState } from "react";
import Sortable from "sortablejs";

interface Task {
  id: number;
  name: string;
  status: string;
}

const DragAandDrop = ({ tasks }: { tasks: Task[] }) => {
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  const list1Ref = useRef<HTMLDivElement | null>(null);
  const list2Ref = useRef<HTMLDivElement | null>(null);
  const list3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (list1Ref.current && list2Ref.current && list3Ref.current) {
      const list1Sortable = Sortable.create(list1Ref.current, {
        group: { name: "shared", pull: true, put: true },
        animation: 150,
        onStart: () => {},
        onEnd: (evt: any) => {
          const taskId = Number(evt.item.id);
          const newStatus = evt.from === list1Ref.current ? "pending" : "done";
          updateTaskStatus(taskId, newStatus);
        },
      });

      const list2Sortable = Sortable.create(list2Ref.current, {
        group: { name: "shared", pull: true, put: true },
        animation: 150,
        onStart: () => {},
        onEnd: (evt: any) => {
          const taskId = Number(evt.item.id);
          const newStatus = evt.from === list2Ref.current ? "done" : "pending";
          updateTaskStatus(taskId, newStatus);
        },
      });
      const list3Sortable = Sortable.create(list3Ref.current, {
        group: { name: "shared", pull: true, put: true },
        animation: 150,
        onStart: () => {},
        onEnd: (evt: any) => {
          const taskId = Number(evt.item.id);
          const newStatus = evt.from === list3Ref.current ? "done" : "pending";
          updateTaskStatus(taskId, newStatus);
        },
      });

      return () => {
        list1Sortable.destroy();
        list2Sortable.destroy();
        list3Sortable.destroy();
      };
    }
  }, []);

  const updateTaskStatus = (taskId: number, newStatus: "pending" | "done") => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div style={{ display: "flex", gap: "20px",justifyContent:"center" }}>
      <div
        ref={list1Ref}
        style={{
          width: "300px",
          minHeight: "200px",
          border: "2px solid #000",
          padding: "10px",
        }}
      >
        {taskList && taskList.length>0 && taskList
          .filter((task) => task.status === "pending")
          .map((task) => (
            <div
              key={task.id}
              id={task.id.toString()}
              style={{
                padding: "10px",
                background: "#f0f0f0",
                marginBottom: "5px",
              }}
            >
              {task.name}
            </div>
          ))}
      </div>

      <div
        ref={list2Ref}
        style={{
          width: "300px",
          minHeight: "200px",
          border: "2px solid #000",
          padding: "10px",
        }}
      >
        {taskList && taskList.length>0 && taskList
          .filter((task) => task.status === "in-progress")
          .map((task) => (
            <div
              key={task.id}
              id={task.id.toString()} 
              style={{
                padding: "10px",
                background: "#f0f0f0",
                marginBottom: "5px",
              }}
            >
              {task.name}
            </div>
          ))}
      </div>
      <div
        ref={list3Ref}
        style={{
          width: "300px",
          minHeight: "200px",
          border: "2px solid #000",
          padding: "10px",
        }}
      >
        {taskList && taskList.length>0 && taskList
          .filter((task) => task.status === "done")
          .map((task) => (
            <div
              key={task.id}
              id={task.id.toString()} 
              style={{
                padding: "10px",
                background: "#f0f0f0",
                marginBottom: "5px",
              }}
            >
              {task.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DragAandDrop;
