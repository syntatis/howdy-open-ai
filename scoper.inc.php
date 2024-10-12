<?php

declare(strict_types=1);

use Syntatis\Codex\Companion\Clients\PHPScoperInc;

require __DIR__ . '/vendor/autoload.php';

/**
 * Generate the PHP-Scoper configuration.
 */
return (new PHPScoperInc(
	__DIR__,
	/**
	 * The `openai-php` package exposes a global class.
	 *
	 * @see https://github.com/openai-php/client/blob/main/src/OpenAI.php
	 */
	['expose-global-classes' => false],
))->get();
