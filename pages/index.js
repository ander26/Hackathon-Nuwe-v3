import RepositoriesList from "components/RepositoriesList";
import SearchForm from "components/SearchForm";
import UserCard from "components/UserCard";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [userInfo, setUserInfo] = useState();
  const [repositoriesInfo, setRepositoriesInfo] = useState();
  return (
    <>
      <div>
        <Head>
          <title>Hackathon Nuwe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="content">
            <div className="searchSection">
              <Image
                src="/searchImage.jpg"
                alt="Imagen buscando información "
                width={200}
                height={200}
                objectFit="contain"
              />
              <h1>Buscador información Github</h1>
              <h3>
                Desarrollo realizado para la primera y segunda parte del
                hackathon realizado por Nuwe
              </h3>
            </div>
            <div className="resultsSection">
              <SearchForm
                setUserInfo={setUserInfo}
                setRepositoriesInfo={setRepositoriesInfo}
              />
              <UserCard user={userInfo} />
              <RepositoriesList repositories={repositoriesInfo} />
            </div>
          </div>
        </main>
      </div>
      <style jsx>
        {`
          main {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .content {
            background: white;
            padding: 20px 40px;
            border-radius: 10px;
            box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 30px;
            margin: 0px 20px;
          }

          main h1,
          h3 {
            margin: 0px;
            margin-top: 10px;
            text-align: center;
          }

          main h1 {
            margin-top: 30px;
          }

          main h3 {
            margin-bottom: 30px;
          }

          .searchSection {
            max-width: 500px;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          @media (max-width: 830px) {
            .content {
              display: flex;
              flex-direction: column;
              width: 100%;

              margin: 0;
              box-shadow: none;
              padding: 10px;
            }

            main {
              height: 100%;
              padding: 0px;
            }

            .searchSection {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              max-width: 100%;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          @media (max-width: 830px) {
            body {
              background: white;
            }
          }
        `}
      </style>
    </>
  );
}
