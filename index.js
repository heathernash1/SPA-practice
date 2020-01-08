import { Header, Nav, Main, Footer } from "./components";

import capitalize from "lodash.capitalize";

import * as state from "./store";
/**
 *
 * @param {*} st
 */

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(state.Links)}
${Main(st)}
${Footer(st)}

`;
  document.querySelectorAll(" nav a ").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      render(state[capitalize(event.target.textContent)]);
    });
  });
}

render();

// must querySelectorAll after the page is rendered.
