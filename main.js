const fb = document.querySelector("#fb")

fb.addEventListener("click", (e)) => {
  if (e.target.id.includes("fb")) {
    console.log("clicked");
  }
}
