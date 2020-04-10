// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import packageJson from '../../../package.json';

export default function(manifest) {
  manifest.addComponent({
    name: 'Exercise8Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      {name: 'sharedItemLink', type: CommonFieldTypes.ItemLink,
       source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/Styleguide/ItemLinkField`},
      { name: 'localItemLink', type: CommonFieldTypes.ItemLink}
    ],
  });
}
