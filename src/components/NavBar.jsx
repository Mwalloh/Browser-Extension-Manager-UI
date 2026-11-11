import styles from '../styles/NavBar.module.css'

function Navbar() {
	return (
		<div className={styles.navBar}>
			<div className={styles.navBarLeft}>
				<h1>Extensions List</h1>
			</div>

			<div className={styles.navBarRight}>
				<button>All</button>
				<button>Active</button>
				<button>Inactive</button>
			</div>
		</div>
	);
}

export default Navbar;
