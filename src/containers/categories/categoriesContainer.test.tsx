import * as React from "react";
import { shallow } from "enzyme";

import { containerStore } from '../../utils/testUtils'
import Categories from "./Categories";

const setup = () => {
  // @ts-ignore
  const store = containerStore();
  const wrapper = shallow(
    // @ts-ignore
      <Categories store={store} />,
  ).dive().dive();
  return wrapper;
};
it("it renders without error", () => {
  const wrapper = setup();
  expect(wrapper.find("[className='categorie-items-container']")).toHaveLength(1);
});