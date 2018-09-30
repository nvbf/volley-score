import React from 'react';
import { getDataFromTree } from 'react-apollo';
import Head from 'next/head';
import initApollo from './initApollo';

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

export default ComposedComponent =>
  class WithData extends React.Component {
    static displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`;

    static async getInitialProps(ctx) {
      const { Component, router } = ctx;

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo();
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <ComposedComponent
              {...composedInitialProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />,
            {
              router: {
                asPath: ctx.asPath,
                pathname: ctx.pathname,
                query: ctx.query,
              },
            },
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        }
        Head.rewind();
      }

      return {
        apolloState: apollo.cache.extract(),
        ...composedInitialProps,
      };
    }

    constructor(props) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    render() {
      return <ComposedComponent {...this.props} apolloClient={this.apolloClient} />;
    }
  };
