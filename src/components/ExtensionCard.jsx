import styles from "../styles/ExtensionCard.module.css";

function ExtensionsCard({ logo, name, description, isActive }) {
	return (
		<li className={styles.extensionCard}>
			<div className={styles.cardText}>
				<img src={logo} alt={name} className={styles.cardTextImage} />
				<div>
					<h3>{name}</h3>
					<p>{description}</p>
				</div>
			</div>
			<div className={styles.buttonsDiv}>
				<button className={styles.cardRemoveBtn}>Remove</button>
				<label class={styles.switch}>
					<input type="checkbox" checked className={isActive ? styles.checked : ''}/>
					<span class={styles.slider}></span>
				</label>
			</div>
		</li>
	);
}

export default ExtensionsCard;
