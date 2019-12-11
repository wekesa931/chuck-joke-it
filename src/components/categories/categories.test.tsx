 
import * as React from "react";
import { shallow } from "enzyme";

import CategoryItems from "./CategoriesComponent";

const categoryProps: string[] = ['animal', 'scrience'] 

it("it renders without error", () => {
    const wrapper = shallow(<CategoryItems categories={categoryProps} />)
    expect(wrapper.find("[className='categories']")).toHaveLength(1);
});