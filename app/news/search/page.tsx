import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SerchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";

type Props = {
  searchParams: {
    q?: string;
  }
}

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: q,
  });
  return (

    <>
      <SearchField />
      <NewsList news={news} />
    </>
  )
}