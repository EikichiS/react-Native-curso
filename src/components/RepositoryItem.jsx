import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'



const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={ styles.container }>
        <StyledText big bold>ID {props.id}</StyledText>
        <StyledText blue>fullName {props.fullName}</StyledText>
        <StyledText small>descripcion {props.descripcion}</StyledText>
        <StyledText small>lenguage {props.lenguage}</StyledText>
        <StyledText small>forksCount {props.forksCount}</StyledText>
        <StyledText small>stargazersCount {props.stargazersCount}</StyledText>
        <StyledText small>ratingAverage {props.ratingAverage}</StyledText>
        <StyledText small>reviewCount {props.reviewCount}</StyledText>
    </View>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },

})

export default RepositoryItem