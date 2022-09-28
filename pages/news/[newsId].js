import Link from "next/link";

export async function getStaticProps(context) {
	const { params } = context;
	const data = await fetch(`https://content.guardianapis.com/${params.newsId}`);

	const newsData = await data.json();

	const news = await newsData.response.content;

	return {
		props: { news },
	};
}

export async function getStaticPaths() {
	const response = await fetch("https://content.guardianapis.com/");
	const data = await response.json();

	const paths = data.map((news) => {
		return {
			params: {
				newsId: `${news.id}`,
			},
		};
	});

	return { paths, fallback: true };
}

export default function Todo({ news }) {
	return (
		<>
			<Link href="/">
				<a>Voltar</a>
			</Link>
			<h1>Exibindo o todo: {news?.id}</h1>
			<p>Título: {news?.title}</p>
			<p>
				Comentário: lá lá lá
				<Link href={`/todos/${news?.id}/comment/1`}>
					<a>Detalhes</a>
				</Link>
			</p>
			<p>
				Comentário: le le le
				<Link href={`/todos/${news?.id}/comment/2`}>
					<a>Detalhes</a>
				</Link>
			</p>
			<p>
				Comentário: li li li
				<Link href={`/todos/${news?.id}/comment/3`}>
					<a>Detalhes</a>
				</Link>
			</p>
		</>
	);
}
