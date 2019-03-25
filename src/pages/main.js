import React, { Component } from 'react';
import {
  Text, StyleSheet, View, ScrollView,
} from 'react-native';
import Post from '~/components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
  },
  postContainer: {
    backgroundColor: '#e08270',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Main extends Component {
  state = {
    data: [
      {
        id: 1,
        title: 'Aprendendo react native',
        author: 'Luiz Victor Linhares Rocha',
        content:
          'Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Suco de cevadiss deixa as pessoas mais interessantis. Sapien in monti palavris qui num significa nadis i pareci latim. Casamentiss faiz malandris se pirulitá.',
      },
      {
        id: 2,
        title: 'Aprendendo react native',
        author: 'Luiz Victor Linhares Rocha',
        content:
          'Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Suco de cevadiss deixa as pessoas mais interessantis. Sapien in monti palavris qui num significa nadis i pareci latim. Casamentiss faiz malandris se pirulitá.',
      },
      {
        id: 3,
        title: 'Aprendendo react native',
        author: 'Luiz Victor Linhares Rocha',
        content:
          'Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Suco de cevadiss deixa as pessoas mais interessantis. Sapien in monti palavris qui num significa nadis i pareci latim. Casamentiss faiz malandris se pirulitá.',
      },
      {
        id: 4,
        title: 'Aprendendo react native',
        author: 'Luiz Victor Linhares Rocha',
        content:
          'Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Suco de cevadiss deixa as pessoas mais interessantis. Sapien in monti palavris qui num significa nadis i pareci latim. Casamentiss faiz malandris se pirulitá.',
      },
    ],
  };

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Go Native app</Text>
        <ScrollView contentContainerStyle={styles.postContainer}>
          {data.map(item => (
            <Post key={item.id} title={item.title} content={item.content} author={item.author} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
