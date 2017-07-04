import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight} from 'react-native';
import VideoModal from './VideoModal';

export default class reactVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalVisible: false,
    };

    this._playVideo = this._playVideo.bind(this)

  }
  _playVideo(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return(
      <View style={{marginTop:50}}>
        <TouchableHighlight onPress={() => {
                  this._playVideo(!this.state.modalVisible)
                  }}>
          <Text>Play</Text>
        </TouchableHighlight>
        <VideoModal playVideo={this._playVideo} visible={this.state.modalVisible} />
      </View>
    )
  }
}
AppRegistry.registerComponent('reactVideo', () => reactVideo);
