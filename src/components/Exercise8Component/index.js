import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Exercise8Component = (props) => (
  <div>
    <h5>Shared Item Link</h5>
    {props.fields.sharedItemLink && (
      <div>
        <p>
          Field:<Text field={props.fields.sharedItemLink.fields.textField} />
        </p>
      </div>
    )}
    <h5>Local Item Link</h5>
    {props.fields.localItemLink && (
      <div>
        <p>
          Field:<Text field={props.fields.localItemLink.fields.textField} />
        </p>
      </div>
    )}
  </div>
);

export default Exercise8Component;
