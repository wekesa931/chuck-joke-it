import * as React from "react";
import { shallow } from "enzyme";

import { containerStore } from '../../utils/testUtils'
import FilteredJokes from "./FilteredJokes";

const setup = () => {
  // @ts-ignore
  const store = containerStore();
  const wrapper = shallow(
    // @ts-ignore
      <FilteredJokes store={store} />,
  ).dive().dive();
  return wrapper;
};
it("it renders without error", () => {
  const wrapper = setup();
  expect(wrapper.find("[className='filtered-items']")).toHaveLength(1);
});