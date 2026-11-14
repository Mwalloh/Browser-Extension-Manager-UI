import styles from "../styles/ExtensionCard.module.css";

function ExtensionsCard({
	logo,
	name,
	description,
	isActive,
	handleRemoveCard,
	handleSwitchActiveState,
	theme,
}) {
	return (
		<li
			className={
				theme === "light" ? styles.extensionCard : styles.extensionCardDark
			}
		>
			<div
				className={theme === "light" ? styles.cardText : styles.cardTextDark}
			>
				<img src={logo} alt={name} className={styles.cardTextImage} />
				<div>
					<h3>{name}</h3>
					<p>{description}</p>
				</div>
			</div>
			<div className={styles.buttonsDiv}>
				<button
					className={
						theme === "light" ? styles.cardRemoveBtn : styles.cardRemoveBtnDark
					}
					onClick={() => handleRemoveCard(name)}
				>
					Remove
				</button>
				<label className={styles.switch}>
					<input
						type="checkbox"
						checked
						className={
							isActive
								? theme === "light"
									? styles.checked
									: styles.checkedDark
								: ""
						}
						onClick={() => handleSwitchActiveState(name)}
					/>
					<span
						className={theme === "light" ? styles.slider : styles.sliderDark}
					></span>
				</label>
			</div>
		</li>
	);
}

export default ExtensionsCard;
