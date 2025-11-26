import React from "react";
import { Toolbar } from "./Toolbar";
import { ProjectList } from "./ProjectList";

const data = {
  filters: ["All", "Websites", "Flayers", "Business Cards"],
  images: [
    {
      id: 1,
      img: "../img/200.jpg",
      type: "Flayers",
    },
    {
      id: 2,
      img: "../img/Triangle_003.jpg",
      type: "Business Cards",
    },
    {
      id: 3,
      img: "../img/Triangle_350x197.jpg",
      type: "Websites",
    },
    {
      id: 4,
      img: "../img/Triangle_350x197_1.jpg",
      type: "Websites",
    },
    {
      id: 5,
      img: "../img/codystretch.jpg",
      type: "Flayers",
    },
    {
      id: 6,
      img: "../img/dia.jpg",
      type: "Business Cards",
    },
    {
      id: 7,
      img: "../img/emi_haze.jpg",
      type: "Websites",
    },
    {
      id: 8,
      img: "../img/mon.jpg",
      type: "Business Cards",
    },
    {
      id: 9,
      img: "../img/place200x290.png",
      type: "Websites",
    },
    {
      id: 10,
      img: "../img/place200x290_1.png",
      type: "Websites",
    },
    {
      id: 11,
      img: "../img/place200x290_2.png",
      type: "Websites",
    },
    {
      id: 12,
      img: "../img/place200x290_3.png",
      type: "Websites",
    },
    {
      id: 13,
      img: "../img/the_ninetys_brand.jpg",
      type: "Websites",
    },
    {
      id: 14,
      img: "../img/transmission.jpg",
      type: "Business Cards",
    },
  ],
};

export class Portfolio extends React.Component {
  
  state = {
      filter: "All",
    };

  render() {
    return (
      <>
        <Toolbar
          className="toolbar"
          filters={data.filters}
          selected={this.state.filter}
          onSelectFilter={(nextFilter) => this.setState({ filter: nextFilter })}
        />
        <ProjectList
          className="project-list"
          list={data.images}
          selected={this.state.filter}
        />
      </>
    );
  }
}
