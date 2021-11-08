/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';

/**
 * Internal dependencies
 */
import './blocks/compare-images/styles/style.scss';

function init() {

	fixSliders();

	document.addEventListener( 'mouseup', () => dragEnd() );
	document.addEventListener( 'touchend', () => dragEnd() );
	addDragListeners( 'horizontal' );
	addDragListeners( 'vertical' );

}//end init()
domReady( () => init() );

function fixSliders() {

	const blocks = [ ...document.querySelectorAll( `.wp-block-hrb-before-after-images__comparison-wrapper` ) ];
	blocks.forEach( ( block ) => {

		const position = block.getAttribute( 'data-position' );
		const direction = block.getAttribute( 'data-direction' );

		dragStart( direction, block );
		if ( 'horizontal' === direction ) {
			dragHorizontally( position );
		} else {
			dragVertically( position );
		}//end if
		dragEnd();

	} );

}//end fixSliders()

function addDragListeners( direction ) {

	const blocks = [ ...document.querySelectorAll( `.wp-block-hrb-before-after-images__comparison-wrapper--${ direction }ly` ) ];
	blocks.forEach( ( block ) => {
		const handler = block.querySelector( '.wp-block-hrb-before-after-images__handler' );
		if ( ! handler ) {
			return;
		}//end if
		handler.addEventListener( 'mousedown', () => dragStart( direction, block ) );
		handler.addEventListener( 'touchstart', () => dragStart( direction, block ) );
		block.addEventListener( 'mousemove', ( ev ) => maybeDrag( ev, block ) );
		block.addEventListener( 'touchmove', ( ev ) => maybeDrag( ev, block ) );
	} );

}//end addDragListeners()

let dragging = { isDragging: false };
function dragStart( direction, block ) {

	const handler = block.querySelector( '.wp-block-hrb-before-after-images__handler' );
	const divider = block.querySelector( '.wp-block-hrb-before-after-images__divider' );
	const afterImage = block.querySelector( '.wp-block-hrb-before-after-images__after-image' );

	dragging = {
		afterImage,
		block,
		direction,
		divider,
		handler,
		isDragging: true,
	};

}//end dragStart()

function dragEnd() {
	dragging = { isDragging: false };
}//end dragEnd()

function maybeDrag( ev, block ) {

	if ( ! dragging.isDragging ) {
		return;
	}//end if

	if ( block !== dragging.block ) {
		return;
	}//end if

	const rect = block.getBoundingClientRect();
	const clientX = undefined !== ev.clientX ? ev.clientX : ev.targetTouches[ 0 ].clientX;
	const clientY = undefined !== ev.clientY ? ev.clientY : ev.targetTouches[ 0 ].clientY;
	const x = ( clientX - rect.left ) / rect.width;
	const y = ( clientY - rect.top ) / rect.height;

	if ( 'horizontal' === dragging.direction ) {
		const position = Math.max( 0, Math.min( 1, x ) ) * 100;
		dragHorizontally( position.toFixed( 2 ) );
	} else {
		const position = Math.max( 0, Math.min( 1, y ) ) * 100;
		dragVertically( position.toFixed( 2 ) );
	}//end if

}//end maybeDrag()

function dragHorizontally( position ) {
	dragging.afterImage.style.width = `${ 100 - position }%`;
	dragging.divider.style.left = `calc(${ position }% - 1.15em)`;
	dragging.handler.style.left = `calc(${ position }% - 1.15em)`;
}//end dragHorizontally()

function dragVertically( position ) {
	dragging.afterImage.style.height = `${ 100 - position }%`;
	dragging.divider.style.top = `calc(${ position }% - 1.15em)`;
	dragging.handler.style.top = `calc(${ position }% - 1.15em)`;
}//end dragVertically()

