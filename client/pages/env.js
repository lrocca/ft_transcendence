import Link from "next/link"

export default function Env() {
	return (
		<div className="container">
			<Link href="/">
				<a>← back</a>
			</Link>
			<p>Hello from `{process.env.NEXT_PUBLIC_CLIENT_SECRET}`</p>
		</div>
	);
}
