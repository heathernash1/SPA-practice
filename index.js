import { Header, Nav, Main, Footer } from "./components";

import capitalize from "lodash.capitalize";

import * as state from "./store";

import Navigo from "navigo";

import axios from "axios";

const router = new Navigo(location.origin);

/**
 *
 * @param {*} st
 */

console.log(Navigo);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(state.Links)}
${Main(st)}
${Footer(st)}

`;
  router.updatePageLinks();
}

router
  .on(":page", params => {
    render(state[capitalize(params.page)]);
  })
  .on("/", () => render())
  .resolve();

// must querySelectorAll after the page is rendered.
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(results => {
    state.Resources.posts = results.data;
  })
  .catch(error => console.error(error));
