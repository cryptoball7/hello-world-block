<?php
/**
 * Plugin Name: Hello World Block
 * Description: A simple Gutenberg block that displays "Hello World".
 * Version: 1.0.0
 * Author: Cryptoball cryptoball7@gmail.com
 * License: GPLv3
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * Text Domain: hello-world-block
 */

defined( 'ABSPATH' ) || exit;

function hello_world_block_register() {
    register_block_type( __DIR__ );
}
add_action( 'init', 'hello_world_block_register' );
