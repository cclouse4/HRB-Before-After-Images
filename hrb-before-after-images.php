<?php
/**
 * Plugin Name:       HRB Before and After Images
 * Description:       Compare before and after images with this slider.
 * Version:           1.0.0
 * Author:            Cassie Clouse
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'HRB_BEFORE_AFTER_IMAGES', true );

function hrbbeforeafterimages() {
	return Hrb_Before_After_Images::instance();
}

class Hrb_Before_After_Images {

	private static $instance = null;

	public $plugin_path;
	public $plugin_url;
	public $plugin_name;
	public $plugin_version;

	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
			self::$instance->init();
		}

		return self::$instance;

	}

	private function load_dependencies() {

	}

	private function init() {

		$this->plugin_path = untrailingslashit( plugin_dir_path( __FILE__ ) );
		$this->plugin_url  = untrailingslashit( plugin_dir_url( __FILE__ ) );

		load_plugin_textdomain( 'hrb-before-after-images' );
		add_action( 'plugins_loaded', [ $this, 'plugin_data_init' ] );

		if ( is_admin() ) {
			add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_admin_scripts' ] );
		} else {
			add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_public_scripts' ] );
		}

	}

	public function enqueue_admin_scripts() {

		$script_meta = require $this->plugin_path . '/build/admin.asset.php';
		wp_enqueue_script(
			'hrb-before-after-images',
			$this->plugin_url . '/build/admin.js',
			$script_meta['dependencies'],
			$script_meta['version'],
			true
		);

		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( 'hrb-before-after-images', 'hrb-before-after-images' );
		}

		wp_enqueue_style(
			'hrb-before-after-images',
			$this->plugin_url . '/build/admin.css',
			[ 'wp-components' ],
			$script_meta['version']
		);

	}

	public function enqueue_public_scripts() {

		$script_meta = require $this->plugin_path . '/build/public.asset.php';
		wp_enqueue_script(
			'hrb-before-after-images',
			$this->plugin_url . '/build/public.js',
			$script_meta['dependencies'],
			$script_meta['version'],
			true
		);

		wp_enqueue_style(
			'hrb-before-after-images',
			$this->plugin_url . '/build/public.css',
			[ 'wp-components' ],
			$script_meta['version']
		);

	}

	public function plugin_data_init() {

		$data = get_file_data( __FILE__, [ 'Plugin Name', 'Version' ], 'plugin' );

		$this->plugin_name           = $data[0];
		$this->plugin_version        = $data[1];
		$this->plugin_slug           = plugin_basename( __FILE__, '.php' );
		$this->plugin_name_sanitized = basename( __FILE__, '.php' );

	}

}
hrbbeforeafterimages();

