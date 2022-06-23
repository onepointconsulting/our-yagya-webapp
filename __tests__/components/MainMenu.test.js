import { mainMenuAdapter } from '../../components/MainMenu'

describe('mainMenuAdapter2', () => {
    it('converts GraphQL JSON to MainMenu JSON2', () => {
        const graphql = `[{"attributes":{"Entry":[{"title":"home","link":"/home","__typename":"ComponentEntryComEntry"},{"title":"events","link":"/events","__typename":"ComponentEntryComEntry"},{"title":"classes & talks","link":"/classes","__typename":"ComponentEntryComEntry"},{"title":"news","link":"/news","__typename":"ComponentEntryComEntry"},{"title":"resources","link":"/resources","__typename":"ComponentEntryComEntry"},{"title":" links directory","link":"/links","__typename":"ComponentEntryComEntry"}],"__typename":"Menu"},"__typename":"MenuEntity"}]`
        const menuData = mainMenuAdapter(JSON.parse(graphql))
        expect(menuData.length).toBe(6)
        expect(menuData[0].title).toBe("home")
    })
})