// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest, FieldDefinition } from '@sitecore-jss/sitecore-jss-manifest';
import fs from 'fs';

const query = fs.readFileSync(
  'sitecore/definitions/components/Appendix3Component.sitecore.graphql',
  'utf8'
);

export default function(manifest) {
  manifest.addComponent({
    name: 'Appendix3Component',
    icon: SitecoreIcon.DocumentTag,
    graphQLQuery: query,
    fields: [
      { name: 'SingleItem1', type: CommonFieldTypes.ItemLink },
      { name: 'MultiItem1', type: CommonFieldTypes.ContentList}
    ],
    allowedPlaceholders:["jss-main"]
  });
}
