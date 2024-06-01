import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
  const { email } = attributes;

  return (
      <div { ...useBlockProps({ className: 'formo-contact-form'})}>
        <div className='formo-contact-form-name'>
          <TextControl
              label="Name of Subject:"
              value={ attributes.name }
              onChange={ ( newValue ) => setAttributes( { name: newValue } ) }
          />
          <legend className='formo-contact-form-content-label'>Add content for subject below:</legend>
        </div>
          <InnerBlocks />
      </div>
  );
}
