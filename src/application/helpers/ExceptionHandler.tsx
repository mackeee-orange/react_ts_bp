import React, { Component } from "react";
import * as Sentry from "@sentry/browser";
import { withRouter, RouteComponentProps } from "react-router";
import { UnAuthorizedError } from "../../commons/utilities/exceptions";
import routes from "../../commons/constants/routes";

if (process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn: "https://1be4766829b449c7bf0f740199861828@o148408.ingest.sentry.io/5387682"
  });
}

type Props = {} & RouteComponentProps;
type State = {
  error?: Error;
  errorInfo?: React.ErrorInfo;
};

class ExceptionHandler extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: undefined,
      errorInfo: undefined
    };
  }

  handleError: (error: Error) => void = (error: Error) => {
    if (error instanceof UnAuthorizedError) {
      this.props.history.push(routes.signIn());
    }
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error });
    this.handleError(error);
    // CurrentUserをsentryに送るかどうかは要検討
    if (process.env.NODE_ENV !== "development") {
      Sentry.configureScope(scope => {
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo);
        });
      });
      Sentry.captureException(error);
    }
  }

  render(): React.ReactNode {
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(ExceptionHandler);
