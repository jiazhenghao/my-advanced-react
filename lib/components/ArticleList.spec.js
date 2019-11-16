import React from "react";
import ArticleList from "./ArticleList";
import { shallow } from "enzyme";

describe("ArtilcList", () => {
  const testProps = {
    articles: {
      a: {
        id: "a",
        date: "Fri Jul 22 2016 00:00:00 GMT+0000 (UTC)",
        title: "Create Apps with No Configuration",
        body: "This month marks a year since we released Relay and we'd like to"
      },
      b: {
        id: "b",
        date: "Fri Jul 22 2016 00:00:00 GMT+0000 (UTC)",
        title: "Create Apps with No Configuration",
        body: "This month marks a year since we released Relay and we'd like to"
      }
    }
  };

  it("renders correctly", () => {
    const wrapper = shallow(<ArticleList {...testProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.children().length).toBe(2);
    //expect(wrapper.find("WithStore").length).toBe(2);
    expect(wrapper.find("ArticleContainer").length).toBe(2);
  });
});
