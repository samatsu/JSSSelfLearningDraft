import React from 'react';
import { Text, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const Exercise6Component = (props) => (
  <div>
    <p>Exercise6Component Component</p>
    <Text field={props.sitecoreContext.route.fields.pageTitle} />
  </div>
);

export default withSitecoreContext()(Exercise6Component);
