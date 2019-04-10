import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

class Home extends React.Component {
  static async getInitialProps() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
    } catch (err) {
      console.error(err);
    }

    return { initialData: [1, 2, 3, 4] };
  }

  updateTitle = () => {
    this.setState({ title: "I am Updated Index Page" });
  };

  render() {
    const { title } = this.state;
    const initialData = this.props.initialData;
    return (
      <BaseLayout>
        <h1>{title}</h1>
        <button onClick={this.updateTitle}>Test</button>
      </BaseLayout>
    );
  }
}

export default Home;
