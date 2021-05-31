import Head from "next/head";
import { getSession } from "next-auth/client";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
        <meta
          name="description"
          content="Facebook Clone created by Srikar Kusumanchi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get User
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
