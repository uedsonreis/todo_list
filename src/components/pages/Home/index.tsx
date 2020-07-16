import React, { useState } from 'react';
import { View } from 'react-native';

import { Task } from '../../../domain';

import TaskAdd from '../../template/TaskAdd';
import TaskList from '../../template/TaskList';

import styles from './styles';

const initialTasks: Task[] = [
    { id: 1, text: 'Corrigir o bug do milenio', isDone: false },
    { id: 2, text: 'Começar a preparar a aula sobre React', isDone: false },
    { id: 3, text: 'Planejar o projeto de Vídeo Conferência', isDone: false },
    { id: 4, text: 'Corrigir o POG no projeto', isDone: false },
    { id: 5, text: 'Finalizar a aula sobre Redux', isDone: false },
    { id: 6, text: 'Último', isDone: false },
];

export default function Home() {

    const [list, setList] = useState<Task[]>(initialTasks);

    function addTask(task: Task) {

        const todo = list.find(todo => todo === task);

        if (todo) {
            alert('Esta tarefa já foi cadastrada!');
        } else {
            task.id = list.length+1;
            setList([ ...list, task ]);
        }
    }

    return (
        <View style={styles.container}>
            <TaskAdd addNewTask={addTask} />
            <TaskList list={list} />
        </View>
    );
}