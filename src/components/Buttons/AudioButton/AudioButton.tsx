import { MouseEvent } from "react";

import { useAudio } from "../../../hooks/useAudio";
import { useSettingsContext } from "../../../context/SettingsContext";
import { useStylesContext } from "../../../context/StylesContext";

import "./AudioButton.css";

/**
 * Handles toggling of the audio feature.
 */
const AudioButton = () => {
	// handles settings
	const { settings } = useSettingsContext();

	// handles styles
	const { styles } = useStylesContext();

	// handles audio
	const { audioToggledOn, toggleAudio } = useAudio();

	// styles for audio icon
	const audioIconStyle: React.CSSProperties = {
		backgroundImage: `url(${settings.audio?.icon})`,
		...styles.audioIconStyle
	};

	// styles for audio disabled icon
	const audioIconDisabledStyle: React.CSSProperties = {
		backgroundImage: `url(${settings.audio?.icon})`,
		...styles.audioIconDisabledStyle
	};

	return (
		<div
			onMouseDown={(event: MouseEvent) => {
				event.preventDefault();
				toggleAudio();
			}}
			style={audioToggledOn ? styles.audioButtonStyle : styles.audioButtonDisabledStyle}
		>
			<span
				className={`rcb-audio-icon-${audioToggledOn ? "on" : "off"}`}
				style={audioToggledOn ? audioIconStyle : audioIconDisabledStyle}
			/>
		</div>
	);
};

export default AudioButton;
