import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(err, errorInfo) {}

  render() {
    if (this.state.hasError) {
      return <h1>Error in server</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
