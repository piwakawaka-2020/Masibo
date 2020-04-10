import React from 'react'

class Shape1 extends React.Component {

  state = {
    style: {
        height: '100px',
        width: '100px',
        backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    },
    shape: 'circle'
  }

  interval = null

  componentDidMount() {
      this.interval = setInterval(() => {
          this.setState({
              style: {
                height: '100px',
                width: '100px',
                backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
              }
            })
          }, 5000) 
  }

  componentWillUnmount() {
      clearInterval(this.interval)
  }

  clickHandler = evt => {
    let audio = new Audio("/aline.wav")
        audio.play()
    if (this.state.shape === 'circle'){
        this.setState({shape: 'square'})
    } else if (this.state.shape === 'square') {
        this.setState({shape: 'star'})
    } else if (this.state.shape === 'star') {
        this.setState({shape: 'circle'})
    }
  }

   
  render(){
    return(
      <svg onClick={this.clickHandler} onClick = {() => this.clickHandler()}>
          {
              this.state.shape === 'circle' ?
              <circle cx={50} cy={50} r={50} fill={this.state.style.backgroundColor} />
              : this.state.shape === 'square' ? 
              <rect x={0} y={0} rx={20} ry={20} fill={this.state.style.backgroundColor} width={this.state.style.width} height={this.state.style.height}/>
              : this.state.shape === 'star' ?
              <polygon points="48.0,4.8 19.2,95.04 91.2,37.44 4.8,37.44 76.8,95.04" fill={this.state.style.backgroundColor} />
              :<div>Whoops! my shape broke</div>
          }
      </svg>
    )
   } 

}

export default Shape1