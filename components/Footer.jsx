import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { FETCH_FOOTERS_DATA } from "../lib/apiClient";
import apolloClient from "../lib/apolloClient";

const Footer = ({ footers }) => {
  const { t } = useTranslation();

  return (
    // <!-- Footer -->
    <footer className="filosofia_italic  flex flex-wrap xl:flex-row items-center  justify-center md:justify-between p-2 md:p-4 px-2 bg-grayfull text-white text-center">
      <div className="hidden md:block md:pl-4 lg:pl-8">
        <Link href="/">
          <a className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">
            {" "}
            {t("Our Yagya")} <span>@</span>2022
          </a>
        </Link>
      </div>

      <div className="md:pr-4 lg:pr-8">
        {footers && footers.map((footer) => {
          return (
            <>
              <Link key={footer.id}>
                <a className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">
                  {t(footer.name)}
                </a>
              </Link>

              {i < footers.length - 1 && (
                <a className="px-2"> |</a>
              )}
            </>
          );
        })}
      </div>

      <div className="md:hidden md:md:pl-4 lg:pl-8">
        <Link href="/">
          <a className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">
            {" "}
            {t("Our Yagya")} <span>@</span>2022
          </a>
        </Link>
      </div>
    </footer>
  );
};

export async function retriveFooterData (){
  const client = new ApolloClient({
    uri: 'http://localhost:1337/api/footers',
    cache: new InMemoryCache(),
  });


  const { data } = await apolloClient.query({ query: FETCH_FOOTERS_DATA })

  return {
    props: {
      footers: data.footers
    }
  }

}


export default Footer;
