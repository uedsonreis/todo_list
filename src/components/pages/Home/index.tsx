import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { Task } from '../../../domain';

import TaskAdd from '../../template/TaskAdd';
import TaskList from '../../template/TaskList';

import styles from './styles';

const initialTasks: Task[] = [
    { id: 1, text: 'Desenvolvimento de Apps Mobile', isDone: false },
    { id: 2, text: 'Ferramentas, tecnologias e recomendações', isDone: false },
    { id: 3, text: 'Principais características do React Native', isDone: false },
    { id: 4, text: 'Criar e rodar um projeto com Expo', isDone: false },
    { id: 5, text: 'State e Props', isDone: false },
    { id: 6, text: 'Componentização', isDone: false },
    { id: 7, text: 'Utilizando o React Native Elements', isDone: false },
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