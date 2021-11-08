/**
 * WordPress dependencies.
 */
import {
	MediaPlaceholder,
	RichText,
} from '@wordpress/block-editor';
import { _x } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import classnames from 'classnames';

/**
 * Internal dependencies.
 */
import Inspector from './inspector';
import Toolbar from './toolbar';

const EditBlock = ( props ) => {

	const {
		attributes: {
			beforeId,
			beforeUrl,
			afterId,
			afterUrl,
			isVertical,
			caption,
			dividerLocation,
		},
		isSelected,
		setAttributes,
	} = props;

	return (
		<>

			<Inspector { ...props } />
			<Toolbar { ...props } />

			<div className="wp-block-hrb-before-after-images">

				<div
					className={ classnames(
						'wp-block-hrb-before-after-images__comparison-wrapper',
						`wp-block-hrb-before-after-images__comparison-wrapper--${ isVertical ? 'vertically' : 'horizontally' }`,
						{ 'wp-block-hrb-before-after-images__comparison-wrapper--is-image-missing': ! beforeId || ! afterId },
					) }
				>

					<div
						className={ classnames(
							'wp-block-hrb-before-after-images__before-image',
							`wp-block-hrb-before-after-images__before-image--${ isVertical ? 'vertical' : 'horizontal' }`,
						) }
					>
						{ ! beforeId ? (
							<MediaPlaceholder
								allowedTypes={ [ 'image' ] }
								multiple={ false }
								onSelect={ ( image ) => setAttributes( { beforeId: image.id, beforeUrl: image.url, beforeAlt: image.alt } ) }
								value={ { id: beforeId } }
								labels={ {
									title: _x( 'Before Image', 'text', 'hrb-before-after-images' ),
									instructions: _x( 'Select an image…', 'text', 'hrb-before-after-images' ),
								} }
							/>
						) : (
							<img
								alt={ _x( 'Before Image', 'text', 'hrb-before-after-images' ) }
								src={ beforeUrl }
							/>
						) }
					</div>

					<div
						className={ classnames(
							'wp-block-hrb-before-after-images__after-image',
							`wp-block-hrb-before-after-images__after-image--${ isVertical ? 'vertical' : 'horizontal' }`,
						) }
						style={ {
							height: isVertical && beforeId && afterId ? `${ 100 - dividerLocation }%` : undefined,
							width: ! isVertical && beforeId && afterId ? `${ 100 - dividerLocation }%` : undefined,
						} }
					>
						{ ! afterId ? (
							<MediaPlaceholder
								allowedTypes={ [ 'image' ] }
								multiple={ false }
								onSelect={ ( image ) => setAttributes( { afterId: image.id, afterUrl: image.url, afterAlt: image.alt } ) }
								value={ { id: afterId } }
								labels={ {
									title: _x( 'After Image', 'text', 'hrb-before-after-images' ),
									instructions: _x( 'Select an image…', 'text', 'hrb-before-after-images' ),
								} }
							/>
						) : (
							<img
								alt={ _x( 'After Image', 'text', 'hrb-before-after-images' ) }
								src={ afterUrl }
														/>
						) }
					</div>

					{ !! beforeId && !! afterId && (

						<>

							<div
								className={ classnames(
									'wp-block-hrb-before-after-images__divider',
									`wp-block-hrb-before-after-images__divider--${ isVertical ? 'horizontal' : 'vertical' }`,
								) }
								style={ {
									top: isVertical ? `calc(${ dividerLocation }% - 0.5em)` : 0,
									left: ! isVertical ? `calc(${ dividerLocation }% - 0.5em)` : 0,
								} }
							></div>

							<div
								className={ classnames(
									'wp-block-hrb-before-after-images__handler',
									`wp-block-hrb-before-after-images__handler--${ isVertical ? 'horizontal' : 'vertical' }`,
								) }
								style={ {
									top: isVertical ? `calc(${ dividerLocation }% - 0.5em)` : undefined,
									left: ! isVertical ? `calc(${ dividerLocation }% - 0.5em)` : undefined,
								} }
							></div>

						</>

					) }

				</div>

			</div>

			{ !! beforeId && !! afterId && ( ! RichText.isEmpty( caption ) || isSelected ) && (
				<RichText
					className="wp-block-hrb-before-after-images__caption"
					tagName="figcaption"
					placeholder={ _x( 'Write caption…', 'user', 'hrb-before-after-images' ) }
					value={ caption }
					onChange={ ( value ) => setAttributes( { caption: value } ) }
					inlineToolbar
				/>
			) }

		</>
	);
};

export default EditBlock;

