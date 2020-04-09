import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const Exercise4Component = (props) => (
  <div>
    <p>Exercise4Component Component</p>
    <Text field={props.fields.heading}  />
    <RichText field={props.fields.content} />
  </div>
);

export default Exercise4Component;
