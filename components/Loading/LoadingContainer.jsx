import { useTranslation } from 'react-i18next'

const LoadingContainer = ({data, isLoading, error, isFetching, children}) => {
  const { t } = useTranslation()

  return !data || isLoading || isFetching ?
    <div>{t('Loading. Please wait ...')}</div> :
      error ? <div>{t('An error has occurred.')}</div> : data?.length === 0 ?
        <div>{t('No data available ...')}</div> : children
}

export default LoadingContainer