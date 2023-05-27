import Head from "next/head"
import Link from "next/link"
import layout from "../styles/Layout.module.css"

export default function Custom404() {
  return (
    <div className={layout.container}>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h1>404 - Page Not Found</h1>
      <Link href="/" className={layout.backToHome}>
        Back To Home
      </Link>
    </div>
  )
}
