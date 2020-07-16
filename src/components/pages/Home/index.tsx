import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { Task } from '../../../domain/task';

import TaskAdd from '../../template/TaskAdd';
import TaskList from '../../template/TaskList';

import styles from './styles';

type Props = { list: Task[] };

function Home(props: Props) {

    const { list } = props;

    // const [list, setList] = useState<Task[]>(initialTasks);

    function addTask(task: Task) {

        const todo = list.find(todo => todo === task);

        if (todo) {
            alert('Esta tarefa já foi cadastrada!');
        } else {
            // task.id = list.length+1;
            // setList([ ...list, task ]);
            alert('TODO Add method!');
        }
    }

    return (
        <View style={styles.container}>
            <TaskAdd />
            <TaskList list={list} />
        </View>
    );
}

function mapToState(state: any) {
    return { list: state.todoList };
}

export default connect(mapToState)(Home);