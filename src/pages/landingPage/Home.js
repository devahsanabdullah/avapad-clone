import React, { Component } from 'react'

import Navbar from "../../components/navbar/Navbar"
import Banner from "../../components/banners/Banner";
import FadedBanner from "../../components/banners/FadedBanner";
import AnimatedBanner from "../../components/banners/AnimatedBanner";
import AboutAirDrop from "../../components/banners/AboutAirDrop";
import ContactBanner from "../../components/banners/ContactBanner";
import RoundBanner from "../../components/banners/RoundBanner";
import Tiers from "../../components/banners/Tiers";
import {img,imgAirDrop,btnAirDrop} from "../../constants/Constant"


class Home extends Component {
  render() {
    return (
        <div>
            <div className="relative">
              {/* <Navbar /> */}
              <Banner title="hello" />
            </div>
            <FadedBanner
              html="The world's fastest growing network combined with a new generation launchpad in a dual token structure."
              before="TRUST"
            />
            <FadedBanner html="ABOUT US" before="WHAT AND WHY" />
            <AnimatedBanner />
            <FadedBanner
              html="THE AVAPAD TIERED SYSTEM"
              before="TIERED SYSTEM"
              ptag="Avapad offers a public white list lottery tier, weighted lottery tiers and guaranteed allocation tiers."
              imgLink={img}
            />
            <Tiers/>
            <RoundBanner/>
            <AboutAirDrop htxt="About Distrube/Airdrop Your Token" 
              img={imgAirDrop}
              bfrtxt="DISTRUBE TOKEN" 
              ptxt="You can distribute or airdrop your token in the AVAX network with the specified vesting dates. After clicking the button above and making your application, we will have a detailed interview with you."/>
            <AboutAirDrop htxt="INCUBATOR AND INVESTMENT PARTNER" 
              bfrtxt="PARTNER" 
              btn={btnAirDrop}
              ptxt="We specialize in taking your innovative and new idea from concept to completion through our market leading advisory, investment, development, influencer marketing and legal support services."
              ptag="We help by not only bringing capital and partners, but every aspect of your project from tokenomics to post launch marking."/>
            <ContactBanner/>
      </div>
    )
  }
}

export default Home