import { pageLayout } from './apiClient'

export const adaptCustomPage = async (context, func = pageLayout) => {
    const data = await func(context)
    return { props: { data } };
}