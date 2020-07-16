import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <View style={styles.container}>
            <Input
                label="Adicionar uma Nova tarefa"
                placeholder="Informe o texto da nova Tarefa"
                value={task.text} containerStyle={styles.input}
                onChangeText={text => setTask({ ...task, text })}
            />
            <Button
                buttonStyle={styles.button}
                style={styles.button}
                containerStyle={styles.buttonContainer}
                onPress={() => addTask()}
                icon={<Icon name="plus" size={18} color="white" />}
            />
        </View>
    );

}