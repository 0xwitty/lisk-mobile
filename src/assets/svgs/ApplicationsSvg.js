import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function ApplicationsSvg({ color }) {
	return (
		<Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
			<Path
				d="M11.4684 7.06337L14.3267 1.34665L14.3273 1.3454C14.7701 0.462191 16.0313 0.462607 16.4733 1.34665L19.3317 7.06337L19.3327 7.06534C19.7297 7.8628 19.1497 8.80002 18.2584 8.80002H12.5417C11.6496 8.80002 11.0694 7.86125 11.4684 7.06337ZM8.80002 15.4C8.80002 17.7196 6.91962 19.6 4.60002 19.6C2.28043 19.6 0.400024 17.7196 0.400024 15.4C0.400024 13.0804 2.28043 11.2 4.60002 11.2C6.91962 11.2 8.80002 13.0804 8.80002 15.4ZM0.400024 1.60002C0.400024 0.937283 0.937283 0.400024 1.60002 0.400024H7.60002C8.26277 0.400024 8.80002 0.937283 8.80002 1.60002V7.60002C8.80002 8.26277 8.26277 8.80002 7.60002 8.80002H1.60002C0.937283 8.80002 0.400024 8.26277 0.400024 7.60002V1.60002ZM11.2 12.4C11.2 11.7373 11.7373 11.2 12.4 11.2H18.4C19.0628 11.2 19.6 11.7373 19.6 12.4V18.4C19.6 19.0628 19.0628 19.6 18.4 19.6H12.4C11.7373 19.6 11.2 19.0628 11.2 18.4V12.4Z"
				fillRule="evenodd"
				clipRule="evenodd"
				fill={color || '#000000'}
			/>
		</Svg>
	);
}
