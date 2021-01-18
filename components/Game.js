import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RandomNumber from './RandomNumber';

class Game extends React.Component {
  state = {
    slectedNumbers: [0, 4],
  };
  
  randomNumbers = Array
    .from({length: this.props.complexity})
    .map(() => 1 + Math.floor(10 * Math.random()));

  target = this.randomNumbers
    .slice(0, this.props.complexity - 2)
    .reduce((acc, curr) => acc + curr, 0);

  isSelected = (numIndex) => {
    return this.state.slectedNumbers.indexOf(numIndex) >= 0;
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.target}>
          {this.target}
        </Text>
        <View style={styles.randomContainer}>
          {this.randomNumbers.map((randomNumber, index) => 
            <RandomNumber 
              key={index} 
              number={randomNumber}
              isSelected={this.isSelected(index)} 
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
  },
  target: {
    fontSize: 50,
    backgroundColor: '#bbb',
    margin: 50,
    textAlign: "center",
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
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
  }
})

export default Game;