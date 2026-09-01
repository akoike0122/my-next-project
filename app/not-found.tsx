import ButtonLink from "@/app/_components/ButtonLink"
import styles from "./not-found.module.css"

export default function NotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Not Found</p>
      <div className={styles.button}>
        <ButtonLink href="/">トップページに戻る</ButtonLink>
      </div>
    </div>
  )
} 