import React from "react";
import "./entry.css";

const Entry = ({children}) => {

    const [child1,child2,child3,child4,child5]=React.Children.toArray(children);

    return (
        <div className="main-tot">
            <div className="left-tot">
                <h1>{child1}</h1>
            </div>
            <div className="right-tot">
                <div className="diff-sec">
                    <div className="diff-fin">{child2}</div>
                    <div className="diff-fin">{child3}</div>
                </div>
                <div className="diff-sec">
                    <div className="diff-fin">{child4}</div>
                    <div className="diff-fin">{child5}</div>
                </div>
            </div>
        </div>
    );
}

export default Entry;