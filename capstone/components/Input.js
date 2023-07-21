import { StyleSheet, Text, View, TextInput } from 'react-native'


function Input({label, textInputConfig}) {
  const inputStyles = [styles.input];

  if(textInputConfig && textInputConfig.multiline){
    inputStyles.push(styles.inputMultiLine)
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
      style={inputStyles} {...textInputConfig}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    flex: 1,

  },

  label: {
    fontSize: 16,
    marginBottom: 4,
  },

  input: {
    backgroundColor: '#e0dfdf',
    padding: 6,
    borderRadius: 6,
    fontSize:18,
    
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: 'top'
  }

}) 