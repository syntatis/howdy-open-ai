<?php

// If this file is called directly, abort.
if (! defined('ABSPATH')) {
	exit;
}

return [
	\PluginName\Providers\Intelligence::class,
	\PluginName\Vendor\Codex\Settings\Provider::class,
];
