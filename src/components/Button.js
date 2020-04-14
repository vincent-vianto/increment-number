import React, {Component} from "react";
import "../App.css"


class Increment extends Component {
    
    state = {
        clicks: 0
    }

    IncrementItem = () => {
        this.setState({clicks : this.state.clicks +1})
    }
    DecreaseItem = () => {
        this.setState({clicks : this.state.clicks -1})
        if(this.state.clicks <= 0){
            window.alert("Tidak ada nilai min")
            this.setState({clicks : this.state.clicks =0})
        }
    }

    ResetItem = () => {
        this.setState({clicks : this.state.clicks = 0})
    }

    render(){
        return(
            <div>
                <button style={buttonStyle} onClick={this.DecreaseItem}>-</button>
                <input style ={inputStyle} value={this.state.clicks} readonly="readonly"/>
                <button style={buttonStyle} onClick={this.IncrementItem}>+</button>
                <br/>
                <button style={buttonStyle} onClick={this.ResetItem}>Reset</button>
            </div>
        )
    }
}

export default Increment

const buttonStyle= {
    width : "70px",
    height: "40px",
    borderColor:"Pink",
    backgroundColor:"Pink"
}

const inputStyle= {
    width : "300px",
    height: "35px",
    borderColor:"Pink"
    
}