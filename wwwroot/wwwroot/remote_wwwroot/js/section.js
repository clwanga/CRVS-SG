$(document).ready(function () {
  // Tag sections
  const sections = $("section");

  $.each(sections, async function () {
    const loadFileHere = $(this).attr("include");
    $(this).load("../sections/" + loadFileHere);
  });
});


