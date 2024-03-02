/**
 * <div id ="parent">
 *   <div id="child">
 *      <h1 id="heading"> I'm h1 tag</h1>
 *      <h2 id="h2">I'm h2 tag<h2>
 *   </div>
 * </div>
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, 
    [React.createElement("h1", { id: "heading" }, "Im H1 tag"),React.createElement("h2", { id: "heading2" }, "Im H2 tag")]))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);