const axios = require("axios");
const url = 'http://interview.plaid.com/data/footer.json';

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

const getData = async (req, res, next) => {
  try {
    res = await axios.get(req);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};
