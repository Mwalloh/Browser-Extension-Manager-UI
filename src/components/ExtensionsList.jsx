import ExtensionsCard from "./ExtensionCard.jsx";
import data from "../data.json";
import styles from "../styles/ExtensionsList.module.css";

function ExtensionsList() {
	return (
		<ul className={styles.extensionsListContainer}>
			{data.map((extension) => {
				return (
					<ExtensionsCard
						key={extension.name}
						logo={extension.logo}
						name={extension.name}
						description={extension.description}
						isActive={extension.isActive}
					/>
				);
			})}
		</ul>
	);
}

export default ExtensionsList;
