<?php

declare(strict_types=1);

namespace PluginName;

use PluginName\Vendor\Codex\Contracts\Hookable;
use PluginName\Vendor\Codex\Foundation\Hooks\Hook;
use PluginName\Vendor\OpenAI\Client;

class Assistant implements Hookable
{
	private Client|null $client;

	public function __construct(Client|null $client)
	{
		$this->client = $client;
	}

	public function hook(Hook $hook): void
	{
		$hook->addAction('init', [$this, 'addMenu']);
	}

	public function init(): void
	{
		// Do some cool stuff with the OpenAI client.
	}
}
