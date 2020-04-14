import React, {Component} from "react";
import "../App.css"
import styled from "styled-components"


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
                <Button onClick={() => this.DecreaseItem()}>-</Button>
                <Input  value={this.state.clicks} readonly="readonly"/>
                <Button onClick={() => this.IncrementItem()}>+</Button>
                <br/>
                <Button  onClick={() => this.ResetItem()}>Reset</Button>
            </div>
        )
    }
}

export default Increment

const Button = styled.button`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: palevioletred ;
`;

const Input = styled.input`
  padding: 15px;
  color: "palevioletred";
  border: 2px solid palevioletred;
  border-radius: 3px;
`;