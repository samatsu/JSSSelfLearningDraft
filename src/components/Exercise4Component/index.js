import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const Exercise4Component = (props) => (
  <div class={props.params.cssClass}>
    <p>Exercise4Component Component {props.params.buttonText}</p>
    <Text field={props.fields.heading}  />
    <RichText field={props.fields.content} />
  </div>
);

export default Exercise4Component;
