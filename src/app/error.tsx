"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="min-h-screen flex items-center justify-center  flex-col gap-4">
			<h2 className="text-3xl font-extrabold text-red-300">
				Something went wrong!
			</h2>
			<button
				className="p-2 bg-blue-400 rounded-md"
				type="button"
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
			<small>If still erroring, please Contact Dev Team!</small>
		</div>
	);
}
