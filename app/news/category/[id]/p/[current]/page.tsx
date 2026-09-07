import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
    current: string;
  }
}

export default async function Page({ params }: Props) {
  const { current } = await params
  const currentPage = parseInt(current, 10)
  const { id } = await params
  const category = await getCategoryDetail(id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (currentPage - 1),
  })


  if (Number.isNaN(current) || currentPage < 1) {
    notFound();
  }

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount} 
        current={currentPage} 
        basePath={`/news/category/${category.id}`}
        />
    </>
  )
}