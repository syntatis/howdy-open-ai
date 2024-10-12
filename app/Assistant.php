<?php

declare(strict_types=1);

namespace PluginName;

use PluginName\Vendor\OpenAI\Client;

class Assistant
{
	private Client|null $client;

	public function __construct(Client|null $client)
	{
		$this->client = $client;
	}
}
