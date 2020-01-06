import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if(location.state === undefined) {
        history.push("/"); // 영화 카드로 이동하지 않고 강제로 url 입력해서 이동하는 경우 Home 으로 리다이렉트
    }
  }
  render() {
      const { location } = this.props;
      if(location.state) {
          return <span>{location.state.title}</span>;
      } else {
        return null;
      }
  }
}

export default Detail;
