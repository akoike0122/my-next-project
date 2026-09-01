import Category from "@/app/_components/Category"
import Date from "@/app/_components/Date";
import Image from "next/image";
import styles from "./index.module.css";
import { News } from "@/app/_libs/microcms";
import DOMPurify from "isomorphic-dompurify";

type Props = {
  data: News;
}

export default function Article({ data }: Props) {
  const sanitizedContent = DOMPurify.sanitize(data.content)
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <Category category={data.category} />
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          className={styles.thumbnail}
          src={data.thumbnail.url}
          alt=""
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div className={styles.content}
        dangerouslySetInnerHTML={{
          __html: sanitizedContent,
        }}
      />
    </main>
  )
}