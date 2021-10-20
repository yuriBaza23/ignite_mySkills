import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: ButtonProps) {
    return(
        <TouchableOpacity
            activeOpacity={.8}
            style={styles.button}
            {...rest}
        >
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },

    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 17
    }
})