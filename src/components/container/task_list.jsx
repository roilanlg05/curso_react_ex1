import React from 'react';
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/forms/task';


const TaskListComponent = () => {

    const defaultTask = new Task('example', ' default', false, Levels.normal)

    /*const changeState =(id)=>{
        console.log(' Todo :cambiar estado de una tarea ')
    }*/

    return (
        <div>
            <div>
                Your Tasks:
            </div>
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
