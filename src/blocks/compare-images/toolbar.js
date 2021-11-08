/**
 * WordPress dependencies
 */
import {
	Toolbar,
	IconButton,
	Tooltip,
} from '@wordpress/components';
import {
	BlockControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/editor';
import { _x } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

const MediaUploadButton = ( {
	className,
	icon,
	label,
	onSelect,
	value,
} ) => (

	<MediaUploadCheck>
		<MediaUpload
			onSelect={ ( media ) => onSelect( media ) }
			allowedTypes={ [ 'image' ] }
			multiple={ false }
			value={ value }
			render={ ( { open } ) => (
				<IconButton
					className={ className }
					onClick={ open }
					icon={ icon }
					label={ label }
				/>
			) }
		/>
	</MediaUploadCheck>

);

const ToolbarControls = ( {
	attributes: {
		isVertical,
		beforeId,
		afterId,
	},
	setAttributes,
} ) => (
	<BlockControls>

		<Toolbar>
			<Tooltip text={ _x( 'Vertical Comparison', 'text', 'hrb-before-after-images-blocks' ) }>

				<IconButton
					className={ classnames(
						'components-icon-button',
						'components-toolbar__control',
						{ 'is-active': isVertical },
					) }
					onClick={ () => setAttributes( { isVertical: ! isVertical } ) }
					icon="image-flip-vertical"
					label={ _x( 'Vertical Comparison', 'text', 'hrb-before-after-images' ) }
				/>

				{ !! beforeId && !! afterId && (
					<>

						<MediaUploadButton
							className="edit-before-image"
							value={ beforeId }
							onSelect={ ( image ) => setAttributes( { beforeId: image.id, beforeUrl: image.url, beforeAlt: image.alt } ) }
							icon="edit"
							label={ _x( 'Change before image…', 'command', 'hrb-before-after-images' ) }
						/>

						<MediaUploadButton
							value={ afterId }
							onSelect={ ( image ) => setAttributes( { afterId: image.id, afterUrl: image.url, afterAlt: image.alt } ) }
							icon="edit"
							label={ _x( 'Change after image…', 'command', 'hrb-before-after-images' ) }
						/>

					</>
				) }

			</Tooltip>
		</Toolbar>

	</BlockControls>
);

export default ToolbarControls;
