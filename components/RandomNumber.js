import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class RandomNumber extends React.Component {
  handlePress = () => {
    console.log(this.props.number);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[
            styles.randomNumber, 
            this.props.isSelected && styles.selected
          ]}>
          {this.props.number}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  randomNumber: {
    backgroundColor: '#999',
    paddingTop: 25,
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
    alignItems: 'center',
  },
  selected: {
    opacity: 0.3,
  }
})

export default RandomNumber;