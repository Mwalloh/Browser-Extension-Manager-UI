import styles from "../styles/Header.module.css";

function Header({ theme, setTheme }) {
	return (
		<div className={theme === "light" ? styles.header : styles.darkHeader}>
			<div
				className={
					theme === "light" ? styles.headerLeft : styles.darkHeaderLeft
				}
			>
				<img src="images/logo.svg" alt="Logo" />
			</div>

			<div
				className={
					theme === "light" ? styles.headerRight : styles.darkHeaderRight
				}
			>
				{theme === "light" ? (
					<button onClick={() => setTheme("dark")}>
						<img src="images/icon-moon.svg" alt="Dark Mode Image" />
					</button>
				) : (
					<button onClick={() => setTheme("light")}>
						<img src="images/icon-sun.svg" alt="Light Mode Image" />
					</button>
				)}
			</div>
		</div>
	);
}

export default Header;
