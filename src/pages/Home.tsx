import React, { useEffect, useState } from 'react';
import {
    FlatList, Platform, StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string) {
        setMySkills(mySkills.filter(skill => skill.id !== id))
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        
        if(currentHour < 12) {
            setGretting('Good morning')
        } else if(currentHour >= 12 && currentHour < 18) {
            setGretting('Good afternoon')
        } else {
            setGretting('Good night')
        }
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Halt</Text>
            <Text style={styles.gretting}>{gretting}</Text>
            <TextInput
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />
            <Button onPress={handleAddNewSkill} title='Add'/>

            <Text style={[styles.title, { marginVertical: 50 }]}>MySkills</Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard 
                        skill={item.name}
                        onPress={() => handleRemoveSkill(item.id)}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },

    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },

    input: {
        backgroundColor: '#1F1E25',
        color: '#FFFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },

    gretting: {
        color: '#FFF',
        opacity: .7,
        fontSize: 14
    }
})