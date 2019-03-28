<?php
/**
 * Plugin Name: 한글 맞춤법 검사기 - Korean Spell Checker!
 * Plugin URI: http://www.sujinc.com/
 * Description: 워드프레스 리치 에디터에 한글 맞춤법 검사기로 바로 가는 버튼을 삽입합니다. 이제 쪽팔리게 맞춤법 틀리지 마세요. (저도 못하지만)
 * Version: 4.0
 * Author: Sujin 수진 Choi
 * Author URI: http://www.sujinc.com/
 * License: GPLv2 or later
 * Text Domain: korean-spell-checker
 */

if ( !defined( 'ABSPATH' ) ) {
	header( 'Status: 403 Forbidden' );
	header( 'HTTP/1.1 403 Forbidden' );
	exit();
}

# Definitions
if ( !defined( 'KSC_PLUGIN_NAME' ) ) {
	$basename = trim( dirname( plugin_basename( __FILE__ ) ), '/' );
	if ( !is_dir( WP_PLUGIN_DIR . '/' . $basename ) ) {
		$basename = explode( '/', $basename );
		$basename = array_pop( $basename );
	}

	define( 'KSC_PLUGIN_NAME', $basename );
}

include_once( 'classes/class-base.php');
Sujin\Wordpress\Plugin\Korean_Spell_Checker::get_instance();
