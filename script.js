const getAdvice = async () => {
  const api = "https://api.adviceslip.com/advice";

  // fetching Advice from API
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      displayAdvice(data);
    })
    .catch((error) => alert("error getting API resources"));
};
getAdvice();

const displayAdvice = (data) => {
  const adviceContainer = document.querySelector("#advice");
  const adviceTitle = document.querySelector("#advice-title");
  const advice = data.slip.advice;
  adviceTitle.innerHTML = `Advice #${data.slip.id}`;
  adviceContainer.innerHTML = advice;
};

const newAdviceBtn = document.querySelector("#new-advice");
newAdviceBtn.addEventListener("click", () => {
  getAdvice();
  newAdviceBtn.classList.add("animate");
  setTimeout(() => {
    newAdviceBtn.classList.remove("animate");
  }, 1000);
});
