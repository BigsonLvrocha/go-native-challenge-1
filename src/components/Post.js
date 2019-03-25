import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    margin: 20,
    borderStyle: 'solid',
    borderColor: '#555555',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  author: {
    fontSize: 14,
    fontWeight: '100',
  },
  content: {
    fontSize: 16,
    borderTopColor: '#ddd',
    paddingTop: 10,
    borderTopWidth: 1,
  },
});

const Post = ({ title, author, content }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
