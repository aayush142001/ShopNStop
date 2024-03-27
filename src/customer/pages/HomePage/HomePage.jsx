import React from 'react'
import { mens_jeans } from '../../../Data/Men/mens_jeans'
import { mens_kurta } from '../../../Data/Men/mens_kurta'
import { mens_pants } from '../../../Data/Men/mens_pants'
import { mens_shirt } from '../../../Data/Men/mens_shirt'
import { lengha2 } from '../../../Data/women/LenghaCholi'
import { women_jeans } from '../../../Data/women/women_jeans'
import { women_tops } from '../../../Data/women/women_top'
import { dress1 } from '../../../Data/WomenDress/dress'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
    return (
        <div>
            <MainCarousel/>

            <div className='space-y-10  py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
                <HomeSectionCarousel data={mens_jeans} sectionName={"Men's Jeans"}/>
                <HomeSectionCarousel data={mens_shirt} sectionName={"Men's Shirt"}/>
                <HomeSectionCarousel data={mens_pants} sectionName={"Men's Pants"}/>
                <HomeSectionCarousel data={lengha2} sectionName={"Women's Saree"}/>
                <HomeSectionCarousel data={dress1} sectionName={"Women's Dress"}/>
                <HomeSectionCarousel data={women_tops} sectionName={"Women's Top"}/>
                <HomeSectionCarousel data={women_jeans} sectionName={"Women's Jeans"}/>
            </div>
        </div>
    )
}

export default HomePage