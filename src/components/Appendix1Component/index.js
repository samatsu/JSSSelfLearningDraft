import React from 'react';
import { withTranslation } from 'react-i18next';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Appendix1Component = (props) => {  
  let {fields, t} = props;
  return (
    <div>
      <p>Appendix1Component</p>
      {t('MyAppFrase')} <Text field={fields.heading} />
    </div>
  );
}
export default withTranslation()(Appendix1Component);
