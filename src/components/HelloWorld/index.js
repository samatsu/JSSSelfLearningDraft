import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HelloWorld = (props) => (
  <div>
    <p>HelloWorld Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default HelloWorld;
