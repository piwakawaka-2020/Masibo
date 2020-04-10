
//     audioContext=undefined
//     iosAudioContextUnlocked=false

//     componentDidMount() {
//         this.audioContext = new AudioContext()
//     }

//     handleClick = () => {
//         if(!this.iosAudioContextUnlocked) this.playEmptyBuffer()

//         this.setState({isTonePLaying: true})
//     }

//     playEmptyBuffer = () => {
//         // start an empty buffer with an instance of AudioContext
//         const buffer = this.audioContext.createBuffer(1, 1, 22050)
//         const node = this.audioContext.createBufferSource()
//         node.buffer = buffer
//         node.start(0)
//         this.iosAudioContextUnlocked = true
//     }
 
//   handleToneStop = () => {
//     this.setState({ isTonePlaying: false })
//     }

// <Tone
// audioContext={this.audioContext}
// play={this.state.isTonePlaying}
// frequency={500}
// volume={0.8}
// length={2}
// onStop={this.handleToneStop}
// />
