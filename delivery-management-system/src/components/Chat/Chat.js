import React, { Component } from "react";

class chat extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "376c97a2906dd118a3d111b1f7f8707f1",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      if (!window.kommunicate) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(s);
        window.kommunicate = m;
        m._globals = kommunicateSettings;
      }
    })(document, window.kommunicate || {});
  }
  render() {
    return <div></div>;
  }
}

export default chat;
