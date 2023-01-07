import React, { Component } from "react";

import ProjectCard from "../../components/banners/ProjectCard";
import {projectCardData} from "../../constants/Constant"

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      tabsData: "No projects currently available  ",
      cardData:[],
      activeTab:"upcoming"
    };
    this.onClickTab = this.onClickTab.bind(this);
    this.onClickscndTab = this.onClickscndTab.bind(this);
    this.onClickDataTab = this.onClickDataTab.bind(this);
  }
  onClickTab() {
    this.setState({ tabsData: "No projects currently available" });
    this.setState({cardData: []})
    this.setState({activeTab:"upcoming"})
  }
  onClickDataTab() {
    // this.setState({tabsData:'i am changed'})
    this.setState({ tabsData: "" });
    this.setState({cardData: [...projectCardData]})
    this.setState({activeTab:"ended"})
  }
  onClickscndTab() {
    this.setState({ tabsData: "No projects currently open" });
    this.setState({cardData: []})
    this.setState({activeTab:"active1"})
  }
  
  render() {
    return (
      <div>
        <div className="border-b-2 border-[#262626] border-solid  mt-12 mx-5 md:mx-16 lg:mx-32 flex flex-wrap text-[hsla(0,0%,100%,.5)]">
          <div className="box-border">
            <a
              href="#btnTag1"
              id="btnTag1"
              onClick={this.onClickTab}   
              className={`${this.state.activeTab === "upcoming" ? 'active' : null} text-[hsla(0,0%,100%,.5)] py-[10px] mr-[25px] border-0  rounded-none font-medium shadow-none block `} 
            > 
              Upcoming
            </a>
          </div>
          <div className="box-border">
            <a
              href="#btnTag2"
              id="btnTag2"
              onClick={this.onClickscndTab}
              className={`${this.state.activeTab === "active1" ? 'active' : null} text-[hsla(0,0%,100%,.5)] py-[10px] mr-[25px] border-0 rounded-none  font-medium shadow-none block border-b-4 border-solid border-transparent `}
            >
              Active
            </a>
          </div>
          <div className="box-border">
            <a
              href="#btnTag3"
              id="btnTag3"
              onClick={this.onClickDataTab}
              className={`${this.state.activeTab === "ended" ? 'active' : null} text-[hsla(0,0%,100%,.5)] py-[10px] mr-[25px] border-0 rounded-none font-medium shadow-none block border-b-4 border-solid border-transparent `}
            >
              Ended
            </a>
          </div>
        </div>
        <div className="mb-4 flex flex-wrap box-border mx-10 md:mx-16 lg:mx-32 justify-center pt-10 md:m-10 text-[#fff]">
          {this.state.tabsData}
          {this.state.cardData.map((e)=>{
            return(
              <>
                <ProjectCard value={e}/>
              </>
            )
          })}
          
        </div>
      </div>
    );
  }
}

export default Projects;
