import { useTranslation } from "react-i18next";
import AccordionLoader from "../Loader/Loader ";

const LoadingContainer = ({ data, isLoading, error, isFetching, children }) => {
  const { t } = useTranslation();

  return !data || isLoading || isFetching ? (
    <div className="w-full flex justify-center">
      <AccordionLoader />
    </div>
  ) : error ? (
    <div>{t("An error has occurred.")}</div>
  ) : data?.length === 0 ? (
    <div>{t("No data available ...")}</div>
  ) : (
    children
  );
};

export default LoadingContainer;
