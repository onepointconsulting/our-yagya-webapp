import { sliderAdapter } from '../../components/Slider'

const homePageLayout = require('./data/homePageLayout.json')

describe('sliderAdapter', () => {
    it('converts GraphQL JSON to Footer JSON2', () => {
        const sliders = sliderAdapter(homePageLayout)
        expect(sliders.length).toBe(2)
    })
})