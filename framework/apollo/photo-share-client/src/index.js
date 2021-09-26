import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider  } from '@apollo/react-common';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({ url: 'http://localhost:4000/graphql' });

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
