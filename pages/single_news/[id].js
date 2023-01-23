import React, { useContext } from "react";
import { adaptCustomPage } from "../../lib/pageAdapter";
import { singleNewsLayout } from "../../lib/apiClient";
import SingleNewsMain from "../../components/NewsPage/SingleNewsMain";
import { singleNewsAdapter } from "../../lib/newsAdapter";
import Head from "next/head";
import MetaTags from "../../components/SocialMedia/MetaTags";
import { useRouter } from "next/router";
import { GlobalContext } from "../_app";

export default function SingleNews({ data }) {
  const singleNewsData = singleNewsAdapter(data);
  const { asPath } = useRouter();
  const { baseUrl } = useContext(GlobalContext);
  return (
    <>
      <Head>
        <title>{singleNewsData.sNewsTitle}</title>
        <MetaTags
          title={singleNewsData.sNewsTitle}
          image={singleNewsData.images?.length > 0 && singleNewsData.images[0]}
          description={singleNewsData.sNewsContent}
          path={`//${baseUrl}${asPath}`}
        />
      </Head>
      <SingleNewsMain singleNewsData={singleNewsData} />
    </>
  );
}

// get server side props;
export async function getServerSideProps(context) {
  return await adaptCustomPage(context, singleNewsLayout);
}
