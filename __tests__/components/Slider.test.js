
const homePageLayout = require('./data/homePageLayout.json')
const sliderImage = require('./data/sliderImage.json')
const { sliderAdapter } = require('../../lib/sliderAdapter')
const { imageAdapter } = require('../../lib/imageAdapter')

describe('sliderAdapter', () => {
    it('extract slider data from home page layout', () => {
        const sliders = sliderAdapter(homePageLayout)
        expect(sliders.length).toBe(0)
    })

})