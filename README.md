# ✨ Howdy, OpenAI

> A WordPress plugin starter kit with **[OpenAI PHP Client](https://github.com/openai-php)**. 

Based of 👋 **[Howdy](https://github.com/syntatis/howdy)**, which provides a boilerplate structure with pre-configured tools to help you start developing plugins using modern PHP practices like [PSR-4 Autoloading](https://www.php-fig.org/psr/psr-4/) with [Composer](https://getcomposer.org), [PHP Code Sniffer (PHPCS)](https://github.com/PHPCSStandards/PHP_CodeSniffer), and Dependency Injection (DI) Containers—without the hassle of setting everything up from scratch.

## Requirements

- PHP 8.1 or higher
- Node.js 20 or higher
- [Composer](https://getcomposer.org)

## Usage

To start a new plugin project, simply run:

```bash
composer create-project syntatis/howdy-open-ai
```

This command will set up the boilerplate files in a directory named `howdy-open-ai`. It will ask you a few questions to customize your project, like the plugin slug, name, and the PHP namespaces.

Once you've input all these details, it will scope the plugin dependency libraries to prevent naming conflicts with other plugins which may also be using the same libraries. You can find the scoped dependencies in the `dist/autoload` directory.

> [!TIP]  
> Want to create the project in a different folder? Just add the directory name at the end of the command, like this:
> ```bash
> composer create-project syntatis/howdy-open-ai awesome-plugin
> ```
> This will create the project in the `awesome-plugin` directory.  
> For more details, check out the [Composer CLI documentation](https://getcomposer.org/doc/03-cli.md#create-project).

After the project setup is complete, run the following command within your plugin directory to start compiling the assets, like the stylesheets and the JavaScript files. It will also watch for the changes within the files and recompile them automatically.

```bash
npm install
npm run start
```

## Commands

Commands are available to help you with the development process. You can run these commands from the root of your plugin directory.

<table>
    <thead>
        <th>Command</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td><code>composer&nbsp;scoper</code></td>
            <td>Scopes the plugin Composer dependencies to prevent namespace conflicts with other plugins.</td>
        </tr>
		<tr>
			<td><code>composer&nbsp;build</code></td>
            <td>Run the plugin build process for production i.e. updating the translation POT file, and prefixing namespace.</td>
		</tr>
		<tr>
            <td><code>composer&nbsp;plugin:zip</code></td>
            <td>Creates a zip file of the plugin for distribution. Based on the Composer <code>archive</code>. <a href="https://getcomposer.org/doc/03-cli.md#archive" target="blank" rel="noopener">Refer to the documentation</a> for the available options to run the command.</td>
        </tr>
		<tr>
			<td><code>npm&nbsp;run&nbsp;start</code></td>
			<td>Compiles the assets, like the stylesheets and the JavaScript files, and watches for the changes within the files to recompile them automatically.</td>
		</tr>
		<tr>
			<td><code>npm&nbsp;run&nbsp;build</code></td>
			<td>Builds the assets for production. It compiles the assets, like the stylesheets and the JavaScript files, and minifies them for production use.</td>
		</tr>
	</tbody>
</table>

## References

- [WordPress Plugin Handbook](https://developer.wordpress.org/plugins/) for plugin guidelines.
- [WordPress Plugin Boilerplate](https://github.com/DevinVinson/WordPress-Plugin-Boilerplate) for inspiration.
