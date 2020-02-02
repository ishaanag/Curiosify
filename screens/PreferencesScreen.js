import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated, Image, TouchableOpacity } from "react-native";

class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          this.state.pan.setValue({ x:0, y:0})
        },
        onPanResponderMove: Animated.event([ 
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),
        onPanResponderRelease: (e, gesture) => {
          if (this.isDropArea1(gesture)) {
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 1
              }).start(() =>
                this.setState({
                  showDraggable: false
              })
            );
            this.props.app.setState({media1: this.props.source});
          } else if (this.isDropArea2(gesture)) {
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 1
              }).start(() =>
                this.setState({
                  showDraggable: false
              })
            );
            this.props.app.setState({media2: this.props.source});
          } else if (this.isDropArea3(gesture)) {
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 1
              }).start(() =>
                this.setState({
                  showDraggable: false
              })
            );
            this.props.app.setState({media3: this.props.source});
          } else {
            this.state.pan.setOffset({
                x: 0,
                y: 0
              })
              this.state.pan.setValue({ x:0, y:0})
          }
        }
      });
  }

  isDropArea1(gesture) {
    return gesture.moveY < 300 && gesture.moveX < 120;
  }

  isDropArea2(gesture) {
    return gesture.moveY < 300 &&  gesture.moveX < 240;
  }

  isDropArea3(gesture) {
    return gesture.moveY < 300;
  }

  render() {
    return (
      <View style={{ width: "20%", alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
            <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle]}
            >
                <Image
                style={{width: 95, height: 125}}
                source={this.props.source}
                />
            </Animated.View>
        </View>
      );
    }
  }
}


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            media1: require('.././assets/media/placeholder.png'),
            media2: require('.././assets/media/placeholder.png'),
            media3: require('.././assets/media/placeholder.png'),
            navigate: this.props.navigation
        };
    }
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>What type of media do you learn best from?</Text>
                <Text style={styles.subTitle}>Drag and drop to rank your top 3</Text>
            </View>
            <View style={styles.avatarRow0}>
                <Image
                    style={{width: 90, height: 120}}
                    source={this.state.media1}
                />
                <Image
                    style={{width: 90, height: 120}}
                    source={this.state.media2}
                />
                <Image
                    style={{width: 90, height: 120}}
                    source={this.state.media3}
                />
            </View>
            <View style={styles.avatarRow1}>
                <Draggable source={require('.././assets/media/projects.png')} app={this}/>
                <Draggable source={require('.././assets/media/animations.png')} app={this}/>
                <Draggable source={require('.././assets/media/games.png')} app={this}/>
            </View>
            <View style={styles.avatarRow2}>
                <Draggable source={require('.././assets/media/svideos.png')} app={this}/>
                <Draggable source={require('.././assets/media/lvideos.png')} app={this}/>
                <Draggable source={require('.././assets/media/articles.png')} app={this}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigate('TopicsInterests')}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
    header: {
        /* Rectangle 29 */
        position: 'absolute',
        width: 375,
        height: 140,
        left: 0,
        top: 0,

        backgroundColor: '#FFFFFF',
        shadowOffset:{ width: 0, height: 1, },
        shadowColor: 'rgba(0, 0, 0, 0.06)',
        shadowOpacity: 1
    },
    title: {
        //position: 'absolute',
        width: 268,
        //height: 30,
        left: 45,
        top: 33,

        /* Title */
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 30,
        /* identical to box height */

        color: '#43519D'
    },
    subTitle: {
        /* Let us get to know you a little better. */
        position: 'absolute',
        width: 244,
        height: 30,
        left: 45,
        top: 105,

        /* Paragraph */

        // fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',

        color: '#000000'

    },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: "row"
  },  
  dropZone: {
    width: 95,
    height: 125,

    /* Text layout within button */
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderStyle: 'dashed',
    borderRadius: 3
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    left: 12,
    color: 'grey'
  },
  avatarRow0: {
    left: '3%',
    top: 170,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatarRow1: {
    left: '3%',
    top: 180,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
    avatarRow2: {
    left: '3%',
    top: 300,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    /* Rectangle 1 */
    position: 'absolute',
    width: 105,
    height: 39,
    left: 131,
    top: 586,

    /* Dark Blue */
    backgroundColor: '#6872D1',
    borderRadius: 3,

    /* Text layout within button */
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
},
buttonText: {
    color: 'white',
    fontWeight: 'bold'
}
});