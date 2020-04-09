import React from 'react';
import { Text, RichText, Image, Link , DateField, File, getFieldValue } from '@sitecore-jss/sitecore-jss-react';

const Exercise5Component = (props) => (
  <div>
    <p>Exercise5Component Component</p>
    <Text field={props.fields.singlelinetextfield} />
    <Text field={props.fields.multilinetextfield} />
    <RichText field={props.fields.richtextfield} />
    <Image field={props.fields.imagefield} imageParams={{mw:100, mh:200 }}/>
    {getFieldValue(props.fields, 'checkboxfield', false) && (
        <li>
          <code>checkbox</code> is true
        </li>
      )}
    {!getFieldValue(props.fields, 'checkboxfield', false) && (
      <li>
        <code>checkbox</code> is false
      </li>
    )}
    <Link field={props.fields.generallinkfield} />
    <Link field={props.fields.generallinkfield} >Sample Link</Link>
    <DateField field={props.fields.datefield}  />
    <DateField field={props.fields.datetimefield} render={(date) => date.toUTCString()}  />
    <File field={props.fields.filefield} />
  </div>
);

export default Exercise5Component;
