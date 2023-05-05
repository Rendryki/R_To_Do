import { ITask } from "@/interfaces/task";
import styles from '../styles/tasklist.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
    taskList: ITask[],
    handleDelete(id:number):void,
    handleEdit(task:ITask): void;
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <div key={task.id} className={styles.task}>
                        <div className={styles.details}>
                            <h4>{task.title}</h4>
                            <p>Dificuldade: {task.difficulty}</p>
                        </div>
                        <div className={styles.actions}>
                            <i className="bi bi-pencil" onClick={() => {handleEdit(task)}}></i>
                            <i className="bi bi-trash" onClick={() => {handleDelete(task.id)}}></i>
                        </div>
                    </div>
                )))
            :(
            <p>Não há nenhuma tarefa cadastrada.</p>
            )}
        </>
    )
}

export default TaskList;