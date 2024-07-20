import { useState, MouseEvent } from "react";

import { useSettings } from "../../context/SettingsContext";

import "./ChatHistoryButton.css";

/**
 * Supports viewing of old messages.
 * 
 * @param chatHistory string representation of old chat messages
 * @param showChatHistory entry point for showing of chat history
 */
const ChatHistoryButton = ({
	chatHistory,
	showChatHistory
}: {
	chatHistory: string;
	showChatHistory: (chatHistory: string) => void;
}) => {

	// handles options for bot
	const { settings } = useSettings();

	// tracks if view history button is hovered
	const [isHovered, setIsHovered] = useState<boolean>(false);

	// styles for view chat history hovered button
	const chatHistoryButtonHoveredStyle: React.CSSProperties = {
		color: settings.general?.primaryColor,
		borderColor: settings.general?.primaryColor,
		...settings.chatHistoryButtonHoveredStyle
	};

	/**
	 * Handles mouse enter event on view chat history button.
	 */
	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	/**
	 * Handles mouse leave event on view chat history button.
	 */
	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	
	return (
		<div className="rcb-view-history-container">
			<div
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave} 
				style={isHovered ? chatHistoryButtonHoveredStyle : settings.chatHistoryButtonStyle}
				onMouseDown={(event: MouseEvent) => {
					event.preventDefault();
					showChatHistory(chatHistory);
				}}
				className="rcb-view-history-button"
			>
				<p>
					{settings.chatHistory?.viewChatHistoryButtonText}
				</p>
			</div>
		</div>
	);
};

export default ChatHistoryButton;