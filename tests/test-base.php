<?php
use Sujin\Wordpress\Plugin\Korean_Spell_Checker;

class Korean_Spell_Checker_Test extends WP_UnitTestCase {
	function test_debug_mode() {
		$this->assertFalse( Korean_Spell_Checker::DEBUG_MODE );
	}

	function test_get_instance() {
		$class_name = get_class( Korean_Spell_Checker::get_instance() );
		$this->assertEquals( $class_name, 'Sujin\Wordpress\Plugin\Korean_Spell_Checker' );
	}
}
