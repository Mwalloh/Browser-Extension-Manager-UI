import styles from "../styles/NavBar.module.css";

function Navbar({ theme, filter, setFilter }) {
	return (
		<div className={styles.navBar}>
			<div className={styles.navBarLeft}>
				<h1>Extensions List</h1>
			</div>

			<div
				className={
					theme === "light" ? styles.navBarRight : styles.navBarRightDark
				}
			>
				<button
					onClick={() => setFilter("all")}
					className={
						filter === "all"
							? theme === "light"
								? styles.filterBtn
								: styles.filterBtnDark
							: ""
					}
				>
					All
				</button>
				<button
					onClick={() => setFilter("active")}
					className={
						filter === "active"
							? theme === "light"
								? styles.filterBtn
								: styles.filterBtnDark
							: ""
					}
				>
					Active
				</button>
				<button
					onClick={() => setFilter("inactive")}
					className={
						filter === "inactive"
							? theme === "light"
								? styles.filterBtn
								: styles.filterBtnDark
							: ""
					}
				>
					Inactive
				</button>
			</div>
		</div>
	);
}

export default Navbar;
