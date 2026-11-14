import ExtensionsCard from "./ExtensionCard.jsx";
import styles from "../styles/ExtensionsList.module.css";

function ExtensionsList({ filteredData, setData, theme }) {
    // Function to remove card
	function handleRemoveCard(name) {
		return setData((prev) => prev.filter((d) => d.name !== name));
	}

    // Function to toggle between active and inactive states
	function handleSwitchActiveState(name) {
		return setData((prev) =>
			prev.map((d) => (d.name === name ? { ...d, isActive: !d.isActive } : d)),
		);
	}

	return (
		<ul className={styles.extensionsListContainer}>
			{filteredData.map((extension) => {
				return (
					<ExtensionsCard
						key={extension.name}
						logo={extension.logo}
						name={extension.name}
						description={extension.description}
						isActive={extension.isActive}
						handleRemoveCard={handleRemoveCard}
						handleSwitchActiveState={handleSwitchActiveState}
						theme={theme}
					/>
				);
			})}
		</ul>
	);
}

export default ExtensionsList;
