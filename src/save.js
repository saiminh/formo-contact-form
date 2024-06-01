import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({attributes}) {
    return (
        <div { ...useBlockProps.save({ className: 'formo-contact-form', 'data-form-name': attributes.name }) }>
          <InnerBlocks.Content />
        </div>
    );
}