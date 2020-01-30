let url = "http://interview.plaid.com/data/footer.json";
let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let log = console.log;

/* Takes in fetched data */
const buildFooter = data => {
  /* Iterate through objects in fetched data */
  data.map(object => {
    Object.entries(object).forEach(value => {
      let header = value[0];
      let links = value[1];

      /* I'm going to place each key and its values inside of a div to make styling easier */
      let container = document.createElement("DIV");
      container.className = "listContainer";

      /* Let's create a header for the next list of links using the key of the object */
      let headerNode = document.createElement("H2");
      let headerText = document.createTextNode(header.toString().toUpperCase());

      headerNode.className = "footerHeader";
      headerNode.appendChild(headerText);

      /* Here, we'll create our list of links using the value of the object */
      let listNode = document.createElement("UL");
      listNode.className = "footerList";
      links.forEach(link => {
        let string = link.toString();
        let listing = document.createElement("LI");
        let listText = document.createTextNode(
          string[0].toUpperCase() + string.slice(1)
        );

        listing.className = "footerListing";
        listing.appendChild(listText);
        listNode.appendChild(listing);
      });

      /* Add new list to the footer */
      container.append(headerNode, listNode);
      document.getElementById("footer").append(container);
    });
  });

};

const getData = () => {
  fetch(proxyUrl + url)
    .then(res => res.json())
    .then(data => {
      buildFooter(data);
    })
    .catch(error => {
      log(error);
    });
};

window.onload = () => {
  getData();
};

/* A little function to allow users to scroll
to different sections by clicking link in navigation bar
*/
$("nav")
  .find("#product")
  .click(e => {
    e.preventDefault();
    let section = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section).offset().top
      },
      5000
    );
  });
