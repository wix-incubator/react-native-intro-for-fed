import contacts from '../services/contacts';
import React, {PureComponent} from 'react';
import {FlatList, View, Text} from 'react-native';
import {Cards, Typography, Colors} from 'wix-react-native-ui-lib';

export default class ContactPosts extends PureComponent {

  constructor() {
    super();
    this.state = {posts: []};
  }

  componentWillMount() {
    const {userId} = this.props;
    contacts.getPosts({userId})
      .then(posts => {
        this.setState({posts});
      });
  }

  _renderItem({item}) {
    const post = item;
    const row = {
      title: post.title,
      subtitle: post.text,
    };

    return (
      <Cards.Card>
        <Cards.GenericCardBody>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
              <Text style={{color: Colors.dark20, ...Typography.text70}}>
                {row.title}
              </Text>
              <Text style={{color: Colors.dark40, ...Typography.text90, marginTop: 5}}>
                {row.subtitle}
              </Text>
            </View>
          </View>
        </Cards.GenericCardBody>
      </Cards.Card>
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.posts}
        keyExtractor={post => post.id}
        renderItem={this._renderItem}
      />
    );
  }
}