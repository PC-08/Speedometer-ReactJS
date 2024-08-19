// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccerlate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  onClickBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="">SPEEDOMETER</h1>
        <img
          className="speedometer-img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer.img"
        />
        <h1 className="speed-indiacator">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            onClick={this.onClickAccerlate}
            className="btn-a"
            type="button"
          >
            Accelerate
          </button>
          <button onClick={this.onClickBreak} className="btn-b" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
