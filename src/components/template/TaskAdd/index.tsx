import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

import styles from './styles';
import { Task } from '../../../domain';

type Props = { addNewTask: Function };

export default function TaskAdd(props: Props) {

    const createNewTask = () => ({ text: '', isDone: false });

    const [task, setTask] = useState<Task>(createNewTask());

    function addTask() {
        if (!task.text) {
            alert('Informe o texto da tarefa!');
            return;
        }
        props.addNewTask(task);
        setTask(createNewTask());
    }

    return (
        <View style={styles.inputView}>
            <TextInput
                placeholder="Informe o texto da nova Tarefa" style={styles.input}
                value={task.text} onChangeText={text => setTask({ ...task, text })}
            />
            <View style={styles.button}>
                <Button title="Add" onPress={() => addTask()} />
            </View>
        </View>
    );

}