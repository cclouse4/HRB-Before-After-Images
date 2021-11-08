/**
 * WordPress dependencies
 */
import { Dashicon } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './styles/style.scss';
import './styles/editor.scss';

import metadata from './block.json';
import EditBlock from './edit';
import SaveBlock from './save';

const { name } = metadata;

export { name };

export const settings = {

	...metadata,

	title: _x( 'Compare Images', 'text', 'hrb-before-after-images' ),
	description: _x( 'Compare two images side by side using a slider.', 'user', 'hrb-before-after-images' ),
	icon: <Dashicon icon="image-flip-horizontal" />,
	category: 'common',
	keywords: [
		_x( 'Image', 'text', 'hrb-before-after-images' ),
		_x( 'Before', 'text', 'hrb-before-after-images' ),
		_x( 'After', 'text', 'hrb-before-after-images' ),
		_x( 'Slider', 'text', 'hrb-before-after-images' ),
	],

	supports: {
		align: true,
		className: true,
		html: false,
	},

	getEditWrapperProps( attributes ) {

		const { align, width } = attributes;
		if ( 'left' === align || 'center' === align || 'right' === align || 'wide' === align || 'full' === align ) {
			return { 'data-align': align, 'data-resized': !! width };
		}//end if

	},

	edit: EditBlock,
	save: SaveBlock,

};

export const styles = [];

