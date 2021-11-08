/**
 * WordPress dependencies
 */
import {
	registerBlockStyle,
	registerBlockType,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as CompareImages from './blocks/compare-images';

const { name, settings } = CompareImages;
registerBlockType( name, settings );

const styles = CompareImages.styles || [];
styles.forEach( ( style ) => registerBlockStyle( name, style ) );

