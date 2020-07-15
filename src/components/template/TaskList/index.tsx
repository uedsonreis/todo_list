import React from 'react';
import { FlatList, Dimensions, View, Text } from 'react-native';

import { Task } from '../../../domain';
import TaskItem from '../TaskItem';
import styles from './styles';

type Props = { list: Task[] };

export default function TaskList(props: Props) {

    const { list } = props;

    return (
        <FlatList
            data={list}
            style={styles.list}
            scrollEnabled={true}
            keyExtractor={item => String(item.id)}
            renderItem={data => <TaskItem task={data.item} />}
        />
    );

}