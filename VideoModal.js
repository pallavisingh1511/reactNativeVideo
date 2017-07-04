import React, { Component } from 'react';
import {
	Image,
	Modal,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	View,
	TouchableOpacity,
	PixelRatio,
	Dimensions,
	Platform,
} from 'react-native';
import YouTube from 'react-native-youtube';

export default class VideoModal extends Component {

constructor(props) {
  super(props);

  	  this.state = {
	  	 isReady: false,
	    status: null,
	    quality: null,
	    error: null,
	    isPlaying: true,
	    isLooping: true,
	    duration: 0,
	    currentTime: 0,
	    fullscreen: false,
	  };
}
	render() {
			return(
				<View style={styles.CTAContainer}>
					<Modal
						animationType={"slide"}
						transparent={true}
						visible={this.props.visible}
						onRequestClose={() => {this.props.playVideo(false)}}
					>
						<View style={{ backgroundColor:'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center',padding: 20,}}>
							<TouchableOpacity onPress={() => {this.props.playVideo(false)}} >
								<Text>Close</Text>
							</TouchableOpacity>
							<YouTube
								ref={(component) => {
									this._youTubeRef = component;
								}}

								// You must have an apiKey for the player to load in Android
								apiKey=""

								// Un-comment one of videoId / videoIds / playlist.
								// You can also edit these props while Hot-Loading in development mode to see how
								// it affects the loaded native module
								videoId={'XXlZfc1TrD0'}
								// videoIds={['HcXNPI-IPPM', 'XXlZfc1TrD0', 'czcjU1w-c6k', 'zV2aYno9xGc']}
								// playlistId="PLF797E961509B4EB5"

								play={this.state.isPlaying}
								loop={this.state.isLooping}
								fullscreen={this.state.fullscreen}
								controls={1}
								style={styles.player}
								onError={e => this.setState({ error: e.error })}
								onReady={e => this.setState({ isReady: true })}
								onChangeState={e => this.setState({ status: e.state })}
								onChangeQuality={e => this.setState({ quality: e.quality })}
								onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })}
								onProgress={Platform.OS === 'ios'
								? e => this.setState({ duration: e.duration, currentTime: e.currentTime })
								: undefined}
							/>
						</View>
					</Modal>
				</View>
			)
		}
}

const styles = StyleSheet.create({
	CTAContainer: {
		flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
	},
	player: {
    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').width / (16 / 9)),
    alignSelf: 'stretch',
    margin: 20,
  },

})