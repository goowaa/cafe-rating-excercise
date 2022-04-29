function trackRatingClick(rating, elem) {
  window.dataLayer.push({
    event: "feedbackGiven",
    grade: rating,
  });

  mydiv = document.getElementsByClassName("ratingIcon");
  for (i = 0; i < mydiv.length; i++) {
    elem.style.opacity = 0.5;
    setTimeout(() => {
      elem.style.opacity = 1;
    }, 100);
  }

  const popup = document.getElementsByClassName("hover_bkgr_fricc")[0];
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 1500);
}
