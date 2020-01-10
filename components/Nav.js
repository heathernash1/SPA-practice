function createListHTML(links) {
  return links.map(link => {
    return `<li class="button"><a href="./${link.toLowerCase()}/" data-navigo>${link}</li>`;
  });
}

export default st => {
  return `<nav>
<ul class="flex justify-space-around">
${createListHTML(st)}

</ul>
</nav>`;
};
