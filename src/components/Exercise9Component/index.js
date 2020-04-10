import React from 'react';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const style={
  maxHeight: '4000px',
  overflow: 'scroll'
}
const Exercise9Component = (props) => (
  <div>
    <p>Exercise9Component Component</p>
    <pre style={style}>
      {JSON.stringify(props.sitecoreContext, null, 2)}
    </pre>
  </div>
);

export default withSitecoreContext()(Exercise9Component);
