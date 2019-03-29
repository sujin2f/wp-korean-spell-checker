<?php
namespace Sujin\Wordpress\Plugin\Korean_Spell_Checker;

/**
 * Editor related methods
 *
 * @project 한글 맞춤법 검사기 - Korean Spell Checker!
 * @author  Sujin 수진 Choi http://www.sujinc.com/
*/

if ( ! defined( 'ABSPATH' ) ) {
	header( 'Status: 403 Forbidden' );
	header( 'HTTP/1.1 403 Forbidden' );
	exit();
}

use Sujin\Wordpress\Plugin\Korean_Spell_Checker;

class Editor {
	private static $instance;

	private $plugin_path = '';

	function __construct() {
		add_action( 'init', array( $this, 'add_button' ) );

		$this->plugin_path = dirname( __DIR__ );
	}

	public function add_button() {
		if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
			return false;
		}

		if ( get_user_option( 'rich_editing' ) === 'true' ) {
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
			add_filter( 'mce_external_plugins', array( $this, 'mce_external_plugins' ) );
			add_filter( 'mce_buttons', array( $this, 'mce_buttons' ) );
		}
	}

	public function mce_external_plugins( $plugin_array ) {
		$plugin_array[Korean_Spell_Checker::PLUGIN_NAME] = $this->get_asset_url() . '/dist/script.js';
		return $plugin_array;
	}

	public function mce_buttons( $buttons ) {
		array_push( $buttons, 'separator', Korean_Spell_Checker::PLUGIN_NAME );
		return $buttons;
	}

	public function enqueue_scripts() {
		wp_enqueue_style( Korean_Spell_Checker::PLUGIN_NAME, $this->get_asset_url() . '/dist/style.css' );
	}

	public function get_asset_url() {
		return plugin_dir_url( $this->plugin_path . '/index.php' ) . 'assets';
	}

	/**
	 * Return Instance
	 *
	 * @since 3.0
	 * @access public
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			// create new instance if not
			self::$instance = new self();
		}
		return self::$instance;
	}
}

