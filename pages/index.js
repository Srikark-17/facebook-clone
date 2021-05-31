import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta
          name="description"
          content="Facebook Clone created by Srikar Kusumanchi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}
