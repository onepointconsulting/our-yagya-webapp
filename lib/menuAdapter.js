
export const menuAdapter = (menuData) => {
    const data = menuData?.data?.menusMenus?.data
    return data.reduce((previousValue, currentValue) => {
        const slug = currentValue.attributes.slug
        const value = currentValue.attributes.items.data
        const menu = {
            [slug]: value
        }
        return {
            ...previousValue,
            ...menu,
        }
    }, {})
}
