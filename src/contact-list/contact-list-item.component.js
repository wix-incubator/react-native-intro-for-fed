import React from 'react';
import {Avatar, ListItem, Colors, Typography} from 'react-native-ui-lib';
import {Text, View, StyleSheet} from 'react-native';

export default ({onPress, title, subtitle, initials, isOnline}) => {
  const avatarColors = [Colors.blue30, Colors.cyan30, Colors.green30, Colors.yellow30, Colors.orange30, Colors.red30, Colors.purple30];

  return (
    <ListItem onPress={onPress}>
      <ListItem.Part left>
        <View style={s.avatar}>
          <Avatar
            backgroundColor={avatarColors[Math.floor(Math.random() * avatarColors.length)]}
            labelColor="white"
            label={initials}
            isOnline={isOnline}
          />
        </View>
      </ListItem.Part>
      <ListItem.Part middle containerStyle={s.item}>
        <View style={[s.details]}>
          <Text style={s.title}>{title}</Text>
          <Text style={s.subtitle}>{subtitle}</Text>
        </View>
      </ListItem.Part>
    </ListItem>
  );
}

const s = StyleSheet.create({
  item: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark70
  },
  title: {
    color: Colors.dark10,
    ...Typography.text70
  },
  subtitle: {
    color: Colors.dark50,
    ...Typography.text90
  },
  avatar: {
    marginLeft: 10,
  },
  details : {
    marginLeft: 20
  }
});