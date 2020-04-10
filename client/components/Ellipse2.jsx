import React from 'react'



class Ellipse2 extends React.Component {

    state={
        //elipse coordinates and size
            cx: 50,
            cy: 50,
            rx: 50,
            ry: 50,
        //gradient
            offset1: "0%",
            offset2: "100%",
            //colour1 rgb values
            c1r: 255,
            c1g: 255,
            c1b: 0,
            //colour2 rgb values
            c2r: 255,
            c2g: 0,
            c2b: 0,
    }

    handleMouseEnter(e) {
        console.log('onMouseEnter', e.clientX, e.clientY)

    }

    handleMouseMove(e) {
        console.log('onMouseMove', e.nativeEvent.clientX, e.nativeEvent.clientY)
    }

    handleMouseLeave(e) {
        console.log('onMouseLeave', e.clientX, e.clientY)
    }

    render() {
        const state = this.state


        return(
            <>
                <div className="divArea" height="33vh" width="100vh"
                onMouseEnter={this.handleMouseEnter}
                onMouseMove={this.handleMouseMove}
                onMouseLeave={this.handleMouseLeave}>
                    <svg height="100%" width="100%">   
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset={state.offset1} stopColor={`rgb(${state.c1r},${state.c1g},${state.c1b})`} />
                                <stop offset={state.offset2} stopColor={`rgb(${state.c2r},${state.c2g},${state.c2b})`}/>
                            </linearGradient>
                        </defs>
                        {/* create an ellipse with it's center x,y coordinates at cx, cy in normal page flow, 
                        radius is 50 on the x axis and 50 on the y axis with red fill */}
                        <ellipse cx={state.cx} cy={state.cy} rx={state.rx} ry={state.ry} fill="url(#grad1)" /> 
                        {/* <polygon points="100,10 40,198 190,78 10,78 160,198" stroke="purple" strokeWidth="2" fill="url(#grad1)" /> */}
                    </svg>
                </div>
            </>
        )
    }
}
export default Ellipse2