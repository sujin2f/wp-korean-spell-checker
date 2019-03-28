<?php
namespace Sujin\Wordpress\Plugin;

/**
 * Initialize
 *
 * @project    한글 맞춤법 검사기 - Korean Spell Checker!
 * @version    3.0
 * @author     Sujin 수진 Choi http://www.sujinc.com/
*/

if ( !defined( 'ABSPATH' ) ) {
	header( 'Status: 403 Forbidden' );
	header( 'HTTP/1.1 403 Forbidden' );
	exit();
}

class Korean_Spell_Checker {
	private static $instance;

	private const PLUGIN_

	function __construct() {
		if ( ! is_admin() ) {
			return false;
		}

/*
		add_action( 'init', array( 'KSC_MCE', 'add_button' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
*/
	}

	public function enqueue_scripts() {
		plugin_dir_url()
		wp_enqueue_style( 'KSC', KSC_ASSETS_URL . 'css/style.css' );
	}

	/**
	 * Return Instance
	 *
	 * @since 3.0
	 * @access public
	 */
	public static function get_instance() {
		if ( self::$instance==null ) {
			// create new instance if not
			self::$instance = new self();
		}
		return self::$instance;
	}
}
