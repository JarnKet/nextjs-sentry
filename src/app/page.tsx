"use client";
import { useEffect } from "react";

// async function getSentryError() {
// 	const response = await fetch("http://localhost:3000/api/sentry-example-api");

// 	if (!response.ok) {
// 		throw new Error("Sentry Example API Route Error");
// 	}

// 	const data = await response.json();
// 	return data;
// }

export default function Home() {
	// const sentryError = await getSentryError();

	useEffect(() => {
		throw new Error("Give me an error");
	}, []);

	return (
		<main>
			<h1>Hi Sentry</h1>
		</main>
	);
}
