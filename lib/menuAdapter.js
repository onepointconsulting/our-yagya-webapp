
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

const menuReorganize = (menu) => {
    let tree = menu.filter((e) => e.attributes?.parent?.data === null)
        .map(e => {
            delete e.attributes.parent
            return e
        })
    let children = menu.filter((e) => e.attributes?.parent?.data !== null)
    // Re-organize tree
    for (const child of children) {
        traverseTree(tree, child)
    }
    return tree
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
