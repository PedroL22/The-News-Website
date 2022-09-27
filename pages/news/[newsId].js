import Link from "next/link";

export async function getStaticProps(context) {
	const { params } = context;

	const data = await fetch(
		`https://content.guardianapis.com/search?api-key=4c444140-8216-4eb9-a8a0-5392b4af62ae&show-blocks=all${params.newsId}`
	);

	const newsData = await data.json();

	const news = await newsData.response?.results;

	return {
		props: { ...news },
	};
}

export async function getStaticPaths() {
	const res = await fetch(
		"https://content.guardianapis.com/search?api-key=4c444140-8216-4eb9-a8a0-5392b4af62ae&show-blocks=all"
	);

	const dataResponse = await res.json();

	const data = await dataResponse.response.results;

	const paths = data.map((news) => {
		return {
			params: { newsId: `${news?.blocks.main.id}` },
		};
	});

	return { paths, fallback: true };
}

export default function News({ news }) {
	return (
		<>
			<Link href="/">
				<a>Back</a>
			</Link>
			<h1>Exibindo o: {news?.blocks.main.id}</h1>
			<p>Comments: </p>
		</>
	);
}
