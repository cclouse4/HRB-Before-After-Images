/**
 * WordPress dependencies.
 */
import {
	ExternalLink,
	TextareaControl,
	PanelBody,
	RangeControl,
} from '@wordpress/components';
import {
	InspectorControls,
} from '@wordpress/editor';
import { _x } from '@wordpress/i18n';

const Inspector = ( {

	attributes: {
		afterAlt,
		beforeAlt,
		dividerLocation,
	},

	setAttributes,

} ) => (
	<InspectorControls>

		<PanelBody
			initialOpen={ true }
			title={ _x( 'Settings', 'text', 'hrb-before-after-images' ) }
		>

			<RangeControl
				label={ _x( 'Divider Location', 'text', 'hrb-before-after-images' ) }
				initialPosition={ dividerLocation }
				value={ dividerLocation }
				onChange={ ( value ) => setAttributes( { dividerLocation: value } ) }
				min={ 1 }
				max={ 99 }
			/>

			<TextareaControl
				label={ _x( 'Before Image - Alt Text (Alternative Text)', 'text', 'hrb-before-after-images' ) }
				value={ beforeAlt }
				onChange={ ( value ) => setAttributes( { beforeAlt: value } ) }
			/>

			<TextareaControl
				label={ _x( 'After Image - Alt Text (Alternative Text)', 'text', 'hrb-before-after-images' ) }
				value={ afterAlt }
				onChange={ ( value ) => setAttributes( { afterAlt: value } ) }
				help={
					<>
						<ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree">
							{ _x( 'Describe the purpose of the images', 'user', 'hrb-before-after-images' ) }
						</ExternalLink>
						{ _x( 'Leave empty if they’re purely decorative.', 'user', 'hrb-before-after-images' ) }
					</>
				}
			/>

		</PanelBody>

	</InspectorControls>
);

export default Inspector;
