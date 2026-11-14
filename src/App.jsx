import { useEffect, useMemo, useState } from "react";
import extensionData from "./data.json";
import Header from "./components/Header.jsx";
import Navbar from "./components/NavBar.jsx";
import ExtensionsList from "./components/ExtensionsList.jsx";

function App() {
	const [data, setData] = useState(extensionData);
	// Filter extensions
	const [filter, setFilter] = useState("all");

	// Manage image shown in NavBar for light and dark themes
	// Check localStorage first, fallback to light
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "light";
	});

	// Set theme when theme changes
	useEffect(() => {
		// Apply data-theme attribute to <html> tag
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const filteredData = useMemo(() => {
		if (filter === "active") {
			return data.filter((item) => item.isActive === true);
		} else if (filter === "inactive") {
			return data.filter((item) => item.isActive === false);
		}

		return data;
	}, [data, filter]);

	return (
		<>
			<Header theme={theme} setTheme={setTheme} />
			<Navbar theme={theme} filter={filter} setFilter={setFilter} />
			<ExtensionsList filteredData={filteredData} setData={setData} theme={theme}/>
		</>
	);
}

export default App;
