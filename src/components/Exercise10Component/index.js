import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const Exercise10Component = (props) => (
  <div className="jss-two-col">
    <div className="jss-left">
      <Placeholder name="jss-left" rendering={props.rendering} />
    </div>
    <div className="jss-right">
      <Placeholder name="jss-right" rendering={props.rendering} />
    </div>
  </div>
);

export default Exercise10Component;
