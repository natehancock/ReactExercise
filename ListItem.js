import React, {Component} from 'react';
import {requireNativeComponent} from 'react-native';

class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onpressItem(this.props.id);
    }

    render() {
        const textColor = this.props.selected ? 'red' : 'black';
        return (
          <TouchableOpacity onPress={this._onPress}>
            <View>
              <Text style={{color: textColor}}>{this.props.title}</Text>
            </View>
          </TouchableOpacity>
        );
      }
}