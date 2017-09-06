import contacts from '../services/contacts';
import React, {PureComponent} from 'react';
import {FlatList} from 'react-native';
import {Avatar, List30} from 'wix-react-native-ui-lib';
import {AvatarHelper} from 'react-native-ui-lib';

export default class ContactList extends PureComponent {

  constructor() {
    super();
    this.state = {contacts: []};
  }

  componentWillMount() {
    contacts.get()
      .then(contacts => {
        this.setState({contacts});
      });
  }

  _renderItem({item, index}) {
    const user = item;
    const initials = AvatarHelper.getInitials(user.name);
    const props = {
      title: user.name,
      subtitle: user.city,
      avatar: <Avatar
        label={initials}
        isOnline={index % 3 === 0}
      />,
    };

    return <List30.Item {...props}/>;
  }

  render() {
    return (
      <FlatList
        data={this.state.contacts}
        keyExtractor={(user) => user.id}
        renderItem={this._renderItem}
      />
    );
  }
}