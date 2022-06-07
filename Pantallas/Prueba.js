import React from "react";
import reactDom from 'react-dom';

const App = () => {
    return(
        <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
    );
};

reactDom.render(<App />, document.querySelector("#root"));