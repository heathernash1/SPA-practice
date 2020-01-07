import { Header, Nav, Main, Footer } from "./components";

const state = {
  Home: {
    heading: "Home"
  },
  Form: {
    heading: "Form"
  },
  Blog: {
    heading: "Blog"
  },
  Gallery: {
    heading: "Gallery"
  }
};

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(st)}
${Main(st)}
${Footer(st)}
`;
  document.querySelectorAll(" nav a ").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      render(state[event.target.textContent]);
    });
  });
}

render();

// must querySelectorAll after the page is rendered.
