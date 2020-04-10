// eslint-disable-next-line no-unused-vars
import {  SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addComponent({
    name: 'Exercise10Component',
    icon: SitecoreIcon.DocumentTag,
    placeholders: ['jss-left', 'jss-right']
  });
}
