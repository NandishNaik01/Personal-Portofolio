import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();
test("renders learn react link", () => {
	render(
		<Router>
			<App />
		</Router>
	);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
