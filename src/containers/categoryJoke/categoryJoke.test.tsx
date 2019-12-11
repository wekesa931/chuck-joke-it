import * as React from "react";
import { shallow } from "enzyme";

import { containerStore } from '../../utils/testUtils'
import CategoryJoke from "./CategoryJoke";

const setup = () => {
  // @ts-ignore
  const store = containerStore();
  const wrapper = shallow(
    // @ts-ignore
      <CategoryJoke store={store} />,
  ).dive().dive();
  return wrapper;
};
it("it renders without error", () => {
  const wrapper = setup();
  expect(wrapper.find("[className='categoryJoke-item']")).toHaveLength(1);
});