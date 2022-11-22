import { Component } from "react";
import "../App.css";

class ColorPicker extends Component {
  //Đầu tiên tạo state(trạng thái) chứa các màu sắc mà muốn tạo state thì phải tạo trong constructor
  constructor(props) {
    super(props);
    //state chứa mảng màu
    this.state = {
      colors: ["red", "green", "blue", "#ccc"],
    };
  }

  showColor = (color) => {
    // console.log(color);
    //Trả về object chứa thông tin mày
    return {
      backgroundColor: color,
    };
  };
  setActiveColor(color) {
    //Trả dữ liệu cho thằng cha 
    this.props.onReceiveColor(color);
  }
  render() {
    let elementColors = this.state.colors.map((color, index) => {
      return (
        <span
          key={index} //Cái key này bắt buộc phải có không có thì sẽ bị warning
          style={this.showColor(color)} //Màu
          className={this.props.color === color ? "active" : ""} //Kiểm tra props từ class cha nếu giống với 1 trong 4 màu thì thêm thuộc tính active(sáng màu) còn không thì không thêm
          onClick={() => this.setActiveColor(color)}//Thêm sự kiện onClịck phải viết bằng arrow function không thì lỗi vặt chút
        ></span>
      );
    });
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body">
            {/* Thẻ span để hiển thị mã màu */}
            {elementColors}
            <span></span>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
