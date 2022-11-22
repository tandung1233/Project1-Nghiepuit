import { Component } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";
//Để chuyển dữ liệu từ con sang ta ta vẫn sử dụng props và nhận lại bằng 1 function
class App extends Component {
  //Tạo ra cái state chứa màu mà font chữ muốn tạo phải có constructor
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 12,
    };
    this.onSetColor = this.onSetColor.bind(this); //1 là viết kiểu này 2 là cho onSetColor thành arrowfunction
    this.onChangeSize = this.onChangeSize.bind(this);
  }
  //params này là dữ liệu từ thằng con
  onSetColor(params) {
    this.setState({
      //Đổi lại color bằng cái params(màu) mà mình nhận được từ thằng con
      color: params,
    });
  }

  onChangeSize(value) {
    console.log(value);
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value,
      });
    }
  }
  onSettingDefault = (value) => {
    if (value) {
      this.setState({
        color: "red",
        fontSize: 12,
      });
    }
    console.log(value);
  };
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          {/* Truyền kiểu props cho colorPicker*/}
          <ColorPicker
            color={this.state.color}
            onReceiveColor={this.onSetColor} //Nhận giá trị từ con
          />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting
              fontSize={this.state.fontSize}
              onChangeSize={this.onChangeSize}
            />
            <Reset onSettingDefault={this.onSettingDefault} />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
