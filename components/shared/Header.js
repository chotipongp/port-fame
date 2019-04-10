import React from "react";
import Link from "next/link";
import "../../styles/main.scss";

class Header extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <React.Fragment>
        <a>{title}</a>
        <p className="eiei"> 555</p>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>

        <style jsx>
          {`
            a {
              font-size: 30px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Header;
