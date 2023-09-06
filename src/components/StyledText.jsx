import React from 'react'
import {Text, StyleSheet} from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
      },
      colorTextSecondary: {
        color: theme.colors.textSecondary,
      },
      colorPrimary: {
        color: theme.colors.primary,
      },
      fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
      },
      fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
      },
});

export default function StyledText({blue,bold,children,big,small}) {
    const textStyles = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style,
    ]
    return (
        <Text style={textStyles}>
            { children }
        </Text>
    )
    
}