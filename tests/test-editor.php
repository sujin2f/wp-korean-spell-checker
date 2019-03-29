<?php
use Sujin\Wordpress\Plugin\Korean_Spell_Checker;
use Sujin\Wordpress\Plugin\Korean_Spell_Checker\Editor;

class Editor_Test extends WP_UnitTestCase {
	function test_get_instance() {
		$class_name = get_class( Editor::get_instance() );
		$this->assertEquals( $class_name, 'Sujin\Wordpress\Plugin\Korean_Spell_Checker\Editor' );
	}

	function test_mce_external_plugins() {
		$instance = Editor::get_instance();
		$result   = $instance->mce_external_plugins( array() );
		$result   = false !== strpos( $result[Korean_Spell_Checker::PLUGIN_NAME], 'korean-spell-checker/assets/dist/script.js' );

		$this->assertTrue( $result );
	}


	function test_mce_buttons() {
		$instance = Editor::get_instance();
		$result   = $instance->mce_buttons( array() );

		$button_array = array( 'separator', Korean_Spell_Checker::PLUGIN_NAME );

		$this->assertEquals( $result, $button_array );
	}

	function test_get_asset_url() {
		$instance = Editor::get_instance();
		$result   = $instance->get_asset_url();
		$result   = strpos( $result, 'korean-spell-checker/assets' ) !== false;

		$this->assertTrue( $result );
	}


}
