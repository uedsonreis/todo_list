import React, { useState } from 'react';
import { Text } from 'react-native';
import { CheckBox, ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { Task } from '../../../domain/task';
import styles from './styles';

type Props = { task: Task };

export default function TaskItem(props: Props) {

    const { task } = props;

    const navigation = useNavigation();

    const [isDone, setDone] = useState<boolean>(task.isDone);

    function handleMark() {
        task.isDone = !isDone;
        setDone(task.isDone);
    }

    function goToEditTask() {
        navigation.navigate('edit', { task });
    }

    return (
        <ListItem
            onPress={goToEditTask}
            leftElement={<CheckBox checked={isDone} checkedColor="green" onPress={handleMark} />}
            title={<Text style={(isDone) ? styles.itemWithLine : styles.item}>{task.text}</Text>}
            bottomDivider chevron
        />
    );

}