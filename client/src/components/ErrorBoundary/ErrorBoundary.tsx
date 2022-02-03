// import React from 'react';

// class ErrorBoundary extends React.Component {
//     constructor(props: any) {
//       super(props);
//       this.state = { error: null, errorInfo: null };
//     }
    
//     componentDidCatch(error:any, errorInfo: any) {
//       // Catch errors in any components below and re-render with error message
//       this.setState({
//         error: error,
//         errorInfo: errorInfo
//       })
//       // You can also log error messages to an error reporting service here
//     }
    
//     render() {
//       if (this.state.errorInfo) {
//         // Error path
//         return (
//           <div>
//             <h2>Something went wrong.</h2>
//             <details style={{ whiteSpace: 'pre-wrap' }}>
//               {this.state.error && this.state.error.toString()}
//               <br />
//               {this.state.errorInfo.componentStack}
//             </details>
//           </div>
//         );
//       }
//       // Normally, just render children
//       return this.props.children;
//     }  
//   }
  
// export default ErrorBoundary;

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
