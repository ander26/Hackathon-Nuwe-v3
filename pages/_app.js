import { NextSeo } from "next-seo";
import { Toaster } from "react-hot-toast";
import { fonts, colors } from "styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Hackathon Nuwe"
        description="Desarrollo realizado para la primera y segunda parte del Hackathon de Nuwe"
        canonical="https://hackathon-nuwe-v3.vercel.app/"
        openGraph={{
          url: "https://hackathon-nuwe-v3.vercel.app/",
          title: "Hackathon Nuwe",
          description:
            "Desarrollo realizado para la primera y segunda parte del Hackathon de Nuwe",
          images: [
            {
              url: "https://media-exp1.licdn.com/dms/image/C4E1BAQE7oS5DoVCTow/company-background_10000/0/1614961937859?e=2159024400&v=beta&t=5hBIvSEDk1LaBKgYtO176BQ-KCgMg36qc9nmdkxNAqk",
              width: 1130,
              height: 191,
              alt: "Encabezado Nuwe",
            },
          ],
          site_name: "Hackathon Nuwe",
        }}
      />
      <div>
        <Toaster />
      </div>
      <Component {...pageProps} />
      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: ${fonts.base};
          }
          body {
            background-image: radial-gradient(
                ${colors.primary} 1px,
                #fdfdfd 1px
              ),
              radial-gradient(${colors.seconday} 1px, #fdfdfd 1px);
            background-position: 0 0, 25px 25px;
            background-size: 25px 25px;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
