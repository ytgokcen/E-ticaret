import React from "react"
import Slider from "../components/Layout/Slider/Slider"
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import Campaigns from "../components/Campaigns/Campaigns"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"


const HomePage = () => {
  return (
    <React.Fragment>
    <Slider />
    <Categories/>
    <Products />
    <Campaigns />
    <CampaignSingle />
    </React.Fragment>
    
  )
}

export default HomePage