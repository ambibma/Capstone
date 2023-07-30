import { Pressable, StyleSheet, Text, View } from 'react-native'


export default function Button({children, onPress, mode, style}) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}
      >
      <View style={[styles.button, mode === 'flat' && styles.flat]}>
      <Text style={[styles.buttonText, mode ==='flat' && styles.flatText]}>
        {children}
      </Text>
      </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#51d57f'
    
  },
  flat: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    color:'#060606',
    textAlign: 'center',

  },
  flatText: {
    color: '#c06969fa'
  },
  pressed: {
    opacity: .75,
    backgroundColor: '#lightBlue',
    borderRadius: 4,
  }

})