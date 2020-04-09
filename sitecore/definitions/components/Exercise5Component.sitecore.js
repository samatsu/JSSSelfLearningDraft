// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest , ComponentDefinition} from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Exercise5Component component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'Exercise5Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'singlelinetextfield', type: CommonFieldTypes.SingleLineText },
      { name: 'multilinetextfield', type: CommonFieldTypes.MultiLineText },
      { name: 'richtextfield', type: CommonFieldTypes.RichText },
      { name: 'imagefield', type: CommonFieldTypes.Image },
      { name: 'checkboxfield', type: CommonFieldTypes.Checkbox },
      { name: 'generallinkfield', type: CommonFieldTypes.GeneralLink },
      { name: 'datefield', type: CommonFieldTypes.Date },
      { name: 'datetimefield', type: CommonFieldTypes.DateTime },
      { name: 'filefield', type: CommonFieldTypes.File },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
