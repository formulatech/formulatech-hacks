import type { ApiEnvelope } from "./types";

const DEFAULT_BASE =
	typeof import.meta.env !== "undefined"
		? (import.meta.env.PUBLIC_API_URL ?? "http://127.0.0.1:5000/api/v1")
		: "http://127.0.0.1:5000/api/v1";

export async function apiFetch<T>(
	path: string,
	init?: RequestInit,
	baseUrl: string = DEFAULT_BASE,
): Promise<ApiEnvelope<T>> {
	const response = await fetch(`${baseUrl}${path}`, {
		...init,
		headers: {
			"Content-Type": "application/json",
			...(init?.headers ?? {}),
		},
	});
	return (await response.json()) as ApiEnvelope<T>;
}
