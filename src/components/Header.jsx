import styles from "../styles/Header.module.css";

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.headerLeft}>
				<img src="src/assets/images/logo.svg" alt="Logo" />
			</div>

			<div className={styles.headerRight}>
				<button>
					<img src="src/assets/images/icon-moon.svg" alt="Dark Mode Image" />
				</button>
			</div>
		</div>
	);
}

export default Header;
