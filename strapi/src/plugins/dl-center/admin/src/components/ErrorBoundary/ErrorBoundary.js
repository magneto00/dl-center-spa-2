/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Flex } from '@strapi/design-system/Flex';
import { Status } from '@strapi/design-system/Status';
import { Typography } from '@strapi/design-system/Typography';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex
          style={{ width: '100%', height: '100vh' }}
          alignContent="center"
          justifyContent="center"
        >
          <Status variant="danger">
            <Typography>Unexpected ERROR, please reload browser!</Typography>
          </Status>
        </Flex>
      );
    }

    return this.props.children;
  }
}
