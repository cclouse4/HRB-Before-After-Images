/**
 * WordPress dependencies.
 */
import { RichText } from '@wordpress/block-editor';

/**
 * External dependencies.
 */
import classnames from 'classnames';
const SaveBlock = ( {
	attributes: {
		afterAlt,
		afterId,
		afterUrl,
		align,
		beforeAlt,
		beforeId,
		beforeUrl,
		caption,
		isVertical,
		dividerLocation,
	},
	className,
} ) => (
	<figure
		className={ classnames(
			className,
			{ [ `align${ align }` ]: align },
		) }
	>

		{ !! beforeId && ! afterId && (
			<img
				className={ `wp-image-${ beforeId }` }
				src={ beforeUrl }
				alt={ beforeAlt }
			/>
		) }

		{ ! beforeId && !! afterId && (
			<img
				className={ `wp-image-${ afterId }` }
				src={ afterUrl }
				alt={ afterAlt }
			/>
		) }

		{ !! beforeId && !! afterId && (

			<div
				className={ classnames(
					'wp-block-hrb-before-after-images__comparison-wrapper',
					`wp-block-hrb-before-after-images__comparison-wrapper--${ isVertical ? 'vertically' : 'horizontally' }`,
					{ 'wp-block-hrb-before-after-images__comparison-wrapper--is-image-missing': ! beforeId || ! afterId },
				) }
				data-position={ dividerLocation }
				data-direction={ isVertical ? 'vertical' : 'horizontal' }
			>

				<div
					className={ classnames(
						'wp-block-hrb-before-after-images__before-image',
						`wp-block-hrb-before-after-images__before-image--${ isVertical ? 'vertical' : 'horizontal' }`,
					) }
				>
					<img
						className={ `wp-image-${ beforeId }` }
						src={ beforeUrl }
						alt={ beforeAlt }
					/>
				</div>

				<div
					className={ classnames(
						'wp-block-hrb-before-after-images__after-image',
						`wp-block-hrb-before-after-images__after-image--${ isVertical ? 'vertical' : 'horizontal' }`,
					) }
					style={ {
						height: isVertical ? `${ 100 - dividerLocation }%` : undefined,
						width: ! isVertical ? `${ 100 - dividerLocation }%` : undefined,
					} }
				>
					<img
						className={ `wp-image-${ afterId }` }
						src={ afterUrl }
						alt={ afterAlt }
					/>
				</div>

				<div
					className={ classnames(
						'wp-block-hrb-before-after-images__divider',
						`wp-block-hrb-before-after-images__divider--${ isVertical ? 'horizontal' : 'vertical' }`,
					) }
				></div>

				<div
					className={ classnames(
						'wp-block-hrb-before-after-images__handler',
						`wp-block-hrb-before-after-images__handler--${ isVertical ? 'horizontal' : 'vertical' }`,
					) }
				></div>

			</div>

		) }

		{ !! beforeId && !! afterId && ! RichText.isEmpty( caption ) && (
			<RichText.Content
				tagName="figcaption"
				className="wp-block-hrb-before-after-images__caption"
				value={ caption }
			/>
		) }

	</figure>
);

export default SaveBlock;

