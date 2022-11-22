import { Component } from "react";
import "../App.css";

class SizeSetting extends Component {
  // Đây là cách của mình tự tạo state rồi tăng giảm dựa vào state này
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     size: 12,
  //   };
  // }
  // up() {
  //   this.setState({
  //     size: this.state.size + 2 >= 36 ? 36 : this.state.size + 2,
  //   });
  // }
  // reduce() {
  //   this.setState({
  //     size: this.state.size - 2 <= 8 ? 8 : this.state.size - 2,
  //   });
  // }
  changSize(value) {
    this.props.onChangeSize(value);
  }
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
        </div>
        <div className="panel-body">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.changSize(-2)}
          >
            Giảm
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.changSize(2)}
          >
            Tăng
          </button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
