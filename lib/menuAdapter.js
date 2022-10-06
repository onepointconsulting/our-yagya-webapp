


const menuReorganize = (menu) => {
    let menuWithoutChildren = menu.filter((e) => e.attributes?.parent?.data === null)
    let children = menu.filter((e) => e.attributes?.parent?.data !== null)
    // TODO: Re-organize tree
    return menuWithoutChildren
}

export const menuAdapter = (menuData) => {
    const data = menuData?.data?.menusMenus?.data
    const allMenus = data.reduce((previousValue, currentValue) => {
        const slug = currentValue.attributes.slug
        const value = currentValue.attributes.items.data
        const menu = {
            [slug.replace(/-/, "_")]: value
        }
        return {
            ...previousValue,
            ...menu,
        }
    }, {})
    return Object.entries(allMenus).map((e) => {
        const menu = e[1]
        e[1] = menuReorganize(menu)
        return e
    }).reduce((previousValue, currentValue) => {
        return {
            ...previousValue,
            ...{[currentValue[0]]: currentValue[1]}
        }
    }, {})
}
