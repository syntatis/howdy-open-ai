/**
 * This file serves as an example, on how to create a setting page in the
 * WordPress admin area using a React component and Kubrick components
 * for the UI.
 *
 * Feel free to modify or remove it, if it doesn't fit your needs.
 */

import { Button, Notice, Spinner, TextField } from '@syntatis/kubrick';
import { __ } from '@wordpress/i18n';
import { useSettings } from './useSettings';
import '@syntatis/kubrick/dist/index.css';

export const Page = () => {
	const {
		status,
		updating,
		errorMessages,
		updateStatus,
		updateValues,
		getOption,
		values,
	} = useSettings();

	if ( ! values ) {
		return;
	}

	return (
		<>
			{ ! updating && status && (
				<Notice
					isDismissable
					level={ status }
					onDismiss={ () => updateStatus( null ) }
				>
					<strong>
						{ status === 'success'
							? __( 'Settings saved.', 'plugin-name' )
							: __( 'Settings save failed.', 'plugin-name' ) }
					</strong>
				</Notice>
			) }
			<form
				method="POST"
				onSubmit={ ( event ) => {
					event.preventDefault();
					updateStatus( null );
					updateValues( new FormData( event.target ) );
				} }
			>
				<fieldset disabled={ updating }>
					<table className="form-table" role="presentation">
						<tbody>
							<tr>
								<th scope="row">
									<label
										htmlFor="plugin-name-settings-api-key"
										id="plugin-name-settings-api-key-label"
									>
										{ __( 'API Key', 'plugin-name' ) }
									</label>
								</th>
								<td>
									<TextField
										isInvalid={
											errorMessages?.plugin_name_api_key ??
											false
										}
										errorMessage={
											errorMessages?.plugin_name_api_key
										}
										aria-labelledby="plugin-name-settings-api-key-label"
										id="plugin-name-settings-api-key"
										className="regular-text"
										defaultValue={ getOption(
											'plugin_name_api_key'
										) }
										name="plugin_name_api_key"
										description={ __(
											'Enter your OpenAI API key.',
											'plugin-name'
										) }
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</fieldset>
				<div className="submit">
					<Button
						isDisabled={ updating }
						prefix={ updating && <Spinner /> }
						type="submit"
					>
						{ updating
							? __( 'Saving Changes', 'plugin-name' )
							: __( 'Save Changes', 'plugin-name' ) }
					</Button>
				</div>
			</form>
		</>
	);
};
