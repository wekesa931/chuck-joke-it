 
import * as React from "react";
import { shallow } from "enzyme";

import Logo from "./Logo";

it("without error", () => {
    const wrapper = shallow(<Logo />)
    expect(wrapper.find("[className='logo-container']")).toHaveLength(1);
});