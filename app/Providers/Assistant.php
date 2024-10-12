<?php

declare(strict_types=1);

namespace PluginName\Providers;

use PluginName\Vendor\Codex\Abstracts\ServiceProvider;
use PluginName\Vendor\Codex\Core\Config;
use PluginName\Vendor\OpenAI;
use PluginName\Vendor\OpenAI\Client;
use PluginName\Vendor\Pimple\Container;

class Assistant extends ServiceProvider
{
	public function register(): void
	{
		$this->container[Client::class] = static function (Container $container): Client|null {
			/** @var Config $config */
			$config = $container['config'];
			$apiKey = get_option($config->get('app.option_prefix') . 'api_key');

			if (! $apiKey) {
				return null;
			}

			return OpenAI::client($apiKey);
		};
	}
}
