 
import * as React from "react";
import { shallow } from "enzyme";

import Favorites from "./Favorites";

it("without error", () => {
    const wrapper = shallow(<Favorites />)
    expect(wrapper.find("[className='fav-items']")).toHaveLength(1);
});