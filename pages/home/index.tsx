import { Tabs } from "antd";
import Head from "next/head";
import { useState } from "react";
import Conquistas from "../../componets/conquistas";
import ListBook from "../../componets/list";
import Ranking from "../../componets/ranking";

export default function Home() {

  const [points, setPoints] = useState(0);
  const [trofeus, setTrofeus] = useState({});

  return (
    <div>
      <Head>
        <title>Esse eu já li!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Esse eu já li! 📚</h1>
        <Tabs
          defaultActiveKey="1"
          size={"large"}
          items={[
            {
              label: `Livros 📚`,
              key: "1",
              children: <ListBook setPoints={setPoints} setTrofeus={setTrofeus} />,
            },
            {
              label: `Suas Conquistas ✨`,
              key: "3",
              children: <Conquistas points={points} trofeus={trofeus} />,
              forceRender: true,
            },
            {
              label: `Ranking 🏆`,
              key: "2",
              children: <Ranking points={points} />,
            },
            
          ]}
        />
      </main>

      <style jsx>{`
        main {
          padding: 2rem;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
