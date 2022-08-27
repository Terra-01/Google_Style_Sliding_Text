const words = document.querySelector(".slider");
const duration = 400;

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const animate = async () => {
  await sleep(2000);
  words.style.transform = `translateY(-25%)`;
  words.style.transition = `transform ${duration}ms ease-in-out`;
  await sleep(duration);
  words.style.transform = `translateY(0%)`;
  words.style.transition = `none`;
  words.appendChild(words.firstElementChild);

  animate();
};
animate();
