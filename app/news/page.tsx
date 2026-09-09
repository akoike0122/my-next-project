import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SerchField";
import Pagination from "@/app/_components/Pagination";

export const revalidate = 60;

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList();

  return (
    <>
      <SearchField />
      <NewsList news={news} />;
      <Pagination totalCount={totalCount}/>
  </>
  )
}