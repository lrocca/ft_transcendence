import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>ft_transcendence</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
