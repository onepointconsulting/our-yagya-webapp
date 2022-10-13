import { pageLayout } from './apiClient'

export const adaptCustomPage = async (context) => {
    const data = await pageLayout(context)
    return { props: { data } };
}