import React from "react"
import ReactDOM from "react-dom/client"
import App from "@frontend/App"

import TrpcProvider from "./TrpcProvider"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<TrpcProvider>
			<App />
		</TrpcProvider>
	</React.StrictMode>
)
