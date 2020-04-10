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

  clickHandler = evt => {
    let audio = new Audio("/servicebell.wav")
    //    console.log(audio)
        audio.play()
    if (this.state.shape === 'circle'){
        this.setState({shape: 'square'})
    } else if (this.state.shape === 'square') {
        this.setState({shape: 'circle'})
    }
}

   
  render(){
    return(
        <>
      <svg onClick={this.clickHandler} onClick = {() => this.clickHandler()}>
          {
              this.state.shape === 'circle' ?
              <circle cx={50} cy={50} r={30} fill={this.state.style.backgroundColor} />
              : this.state.shape === 'square' ? 
              <rect x={50} y={20} rx={20} ry={20} fill={this.state.style.backgroundColor} width={this.state.style.width} height={this.state.style.height}/>
              : <div>Whoops! my shape broke</div>
          }
      </svg>
      </>
    )
   } 

}

export default Shape1