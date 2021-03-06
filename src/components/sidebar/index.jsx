import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./index.scss";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo" />
        <div className="midS">
          <Link className="home" to="/" />
          <Link className="about" to="/about/" />
          <Link className="skills" to="/skills/" />
          <Link className="mywork" to="/my-work/" />
        </div>
        <div className="bottomS">
          <a
            href="https://www.facebook.com/chahana.tyagi95"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="fb"
          />
          <a
            href="https://twitter.com/ChahanaTyagi"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="twitter"
          />
          <a
            href="mailto:chahanatyagi16@gmail.com"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="google"
          />
          <a
            href="https://www.linkedin.com/in/chahana-tyagi/"
            className="linkedln"
            target="_blank"
            rel="noreferrer noopener nofollow"
          />
          <a
            href="https://codepen.io/ChahanaTyagi/"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="codepen"
          />
          <a
            href="https://github.com/tyagichahana"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="github"
          />
          <a
            href="https://medium.com/@ChahanaTyagi"
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="medium"
          />
        </div>
      </div>
    );
  }
}
export default withRouter(Sidebar);
