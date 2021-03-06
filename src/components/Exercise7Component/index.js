import React from 'react';
import { Text, Image , withSitecoreContext, RichText } from '@sitecore-jss/sitecore-jss-react';

const Exercise7Component = (props) => (
  <div>
    <p>Route Level Field</p>
    <Text field={props.sitecoreContext.route.fields.newsTitle} />
    <RichText field={props.sitecoreContext.route.fields.newsDescription} />
    <Image field={props.sitecoreContext.route.fields.newsImage} />
  </div>
);

export default withSitecoreContext()(Exercise7Component);
