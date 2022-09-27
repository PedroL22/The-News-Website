import Link from "next/link";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

export default function News() {
	const router = useRouter();

	const newsId = router.query.newsId;

	return (
		<>
			<NavBar />
			<Link href="/">
				<a>Back</a>
			</Link>
			<h1>Exibindo o: {newsId}</h1>
			<p>Comments: </p>
		</>
	);
}
