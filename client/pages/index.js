import { useState } from "react";
import Link from "next/link"
import axios from "axios";

export default function Home() {
	const [res, setRes] = useState({});

	function fetchApi() {
		axios.get("/api/").then((res) => {
			setRes(res.data);
		});
	}

	return (
		<div className="container">
			<h1 style={{ marginBottom: "1rem" }}>ft_transcendence</h1>
			<p>Simple request to the API server</p>
			<div>
				<button onClick={fetchApi}>fetch</button>
				<button onClick={() => setRes({})}>reset</button>
			</div>
			<code style={{ margin: "1rem 0" }}>
				{JSON.stringify(res, null, " ")}
			</code>
			<Link href="/env">
				<a>client env →</a>
			</Link>
		</div>
	);
}
