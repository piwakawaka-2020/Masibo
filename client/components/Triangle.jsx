import React from 'react'

class Triangle extends React.Component {

    state={
        position: {
            cx: 50,
            cy: 50,
            rx: 50,
            ry: 50
        },
        gradient1: {
            offset1: "0%",
            offset2: "100%",
            color1: {
                r: 255,
                g: 255,
                b: 0
            },
            color2: {
                r: 255,
                g: 0,
                b: 0
            }
        }
    }

    clickHandler = evt => {
        
        let audio = new Audio("/airplane.wav")
    //    console.log(audio)
        audio.play()

}



    render() {
        const pos = this.state.position
        const gr = this.state.gradient1
        const c1 = gr.color1
        const c2 = gr.color2
        return(
            <>
                <h2>shape2 is showing</h2>
         <svg onClick = {() => this.clickHandler()}>   
                    <defs>
                        <linearGradient id="grad1">
                            <stop offset={gr.offset1} stopColor={`rgb(${c1.r},${c1.g},${c1.b})`} />
                            <stop offset="100%" stopColor="rgb(255,0,0)"/>
                        </linearGradient>
                    </defs>
                    {/* create an ellipse with it's center x,y coordinates at cx, cy in normal page flow, 
                    radius is 50 on the x axis and 50 on the y axis with red fill */}
                    <ellipse cx={pos.cx} cy={pos.cy} rx={pos.rx} ry={pos.ry} fill="url(#grad1)" /> 
                    <polygon points="220,10 300,210 170, 250, 133" 
                 stroke= "purple" strokeWidth="1" fill="purple"/>
                </svg>
        </>
      )
     } 
  
  }
  
  export default Triangle
