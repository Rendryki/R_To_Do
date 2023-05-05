import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '../styles/index.module.css';
import TaskList from '@/components/tasklist';
import TaskForm from '@/components/taskform';
import Modal from '@/components/modal';
import {ITask} from '../interfaces/task';
import { useState } from 'react';

export default function Home() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] =useState<ITask | null>(null);

  const deleteTask = (id: number): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    )
  }

  const hideOrShowModal = (display:boolean) => {
    const modal = document.querySelector("#modal");
    if(display) {
      modal!.classList.remove("hide");
    }else{
      modal!.classList.add("hide");
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = {id, title, difficulty}
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    })
    setTaskList(updatedItems)

    hideOrShowModal(false)
  }

  return (
    <>
      <Head>
        <title>ToDo React + TS + NextJS</title>
      </Head>
      <Modal children={<TaskForm btnText="Editar" handleUpdate={updateTask} task={taskToUpdate} taskList={taskList}/>}/>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que deseja fazer?</h2>
          <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Tarefas:</h2>
          <TaskList taskList={taskList} handleEdit={editTask} handleDelete={deleteTask}/>
        </div>
      </main>
      <Footer />
    </>
  )
}
