
const traverseTree = (tree, child) => {
    for(const node of tree) {
        if(!child.attributes.parent) {
            break
        }
        const childrenOfNode = node.attributes.children
        const parentUrl = child.attributes.parent?.data?.attributes?.url
        const nodeUrl = node.attributes.url
        if (parentUrl === nodeUrl) { // child find parent
            if(!childrenOfNode) {
                node.attributes.children = []
            }
            node.attributes.children.push(child)
            delete child.attributes.parent
        } else {
            if (!!childrenOfNode && !!child.attributes?.parent) {
                traverseTree(childrenOfNode, child)
            }
        }
    }
}

const traverseSort = (array) => {
    array.sort((a, b) => a?.attributes.order - b?.attributes.order)
    array.filter(mi => !!mi?.attributes.children).forEach(mi => traverseSort(mi.attributes.children))
}

const performTranslation = (array, menuTranslations) => {
    array.forEach(e => {
        e.attributes.title = menuTranslations[e.attributes.url] || e.attributes.title
    })
}

const menuReorganize = (menu, menuTranslations) => {
    let tree = menu.filter((e) => e.attributes?.parent?.data === null)
    let children = menu.filter((e) => e.attributes?.parent?.data !== null)
    // Re-organize tree
    for (const child of children) {
        traverseTree(tree, child)
    }
    traverseSort(tree)
    performTranslation(tree, menuTranslations)
    return tree
}

const convertMemuTranslationToObject = (menuTranslations) => {
    return menuTranslations
        .reduce((previous, current) =>
            ({...previous, ...{[current.attributes.url]: current.attributes.title}}), {})
}

export const menuAdapter = (menuData) => {
    let baseData = menuData?.data
    const data = baseData?.menusMenus?.data
    const menuTranslations = convertMemuTranslationToObject(baseData?.menuTranslations?.data)
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
        e[1] = menuReorganize(menu, menuTranslations)
        return e
    }).reduce((previousValue, currentValue) => {
        return {
            ...previousValue,
            ...{[currentValue[0]]: currentValue[1]}
        }
    }, {})
}
