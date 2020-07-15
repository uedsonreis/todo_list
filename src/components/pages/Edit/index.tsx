import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Task } from '../../../domain';
import styles from './styles';

type Props = { addNewTask: Function };

export default function EditTask(props: Props) {

    const navigation = useNavigation();

    navigation.setOptions({
        headerBackTitle: 'Lista',
        title: 'Edição',
        headerRight: () => (
            <Button containerStyle={{ marginRight: 10 }} type='clear' onPress={remove}
                icon={ <Icon name="trash" size={18} color="red" /> }
            />
        )
    });
    
    const route = useRoute();
    const { task } = route.params as { task: Task };
    
    const [text, setText] = useState<string>(task.text);

    function addTask() {
        if (!text) {
            alert('Informe o texto da tarefa!');
            return;
        }
        task.text = text;
        navigation.goBack();
    }

    function remove() {
        alert('Use Redux to change the Todo List!');
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Input
                label={(task.isDone) ? "Tarefa já realizada." : "Tarefa ainda não realizada."}
                placeholder="Informe o texto da nova Tarefa"
                value={text} onChangeText={text => setText(text)}
            />
            <Button containerStyle={styles.buttonSave} title="Salvar" onPress={() => addTask()} />
        </View>
    );

}