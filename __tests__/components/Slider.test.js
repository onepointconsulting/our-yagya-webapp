import { imageAdapter, sliderAdapter } from '../../components/Slider'

const homePageLayout = require('./data/homePageLayout.json')
const sliderImage = require('./data/sliderImage.json')

describe('sliderAdapter', () => {
    it('extract slider data from home page layout', () => {
        const sliders = sliderAdapter(homePageLayout)
        expect(sliders.length).toBe(2)
    })
    it('extract url from image data', () => {
        const url = imageAdapter(sliderImage)
        expect(url).toBe("https://res.cloudinary.com/stackrefugee/image/upload/v1656693326/Peace_festival_22_eb_c2f1f21a36_1_b36a102ca6.jpg")
    })
})