import React, { useEffect } from "react";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
import bg1 from "../assets/1-bg.jpg";
import bg2 from "../assets/2-bg.jpg";
import bg3 from "../assets/3-bg.jpg";
import bg4 from "../assets/4-bg.jpg";
import bg5 from "../assets/5-bg.jpg";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic", "0.83, 0, 0.17, 1");

let isAnimating = false;

const MainContent = () => {
  const slides = [
    { image: bg1, title: "Exclusive Event" },
    { image: bg2, title: "Limited Edition" },
    { image: bg3, title: "Premium Quality" },
    { image: bg4, title: "Best Deals" },
    { image: bg5, title: "Refurbished Item" },
  ];

  useEffect(() => {
    function splitTextIntoSpans(selector) {
      let elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
          .split("")
          .map((char) => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`)
          .join("");
        element.innerHTML = splitText;
      });
    }

    function initializeCards() {
      let cards = Array.from(document.querySelectorAll(".card"));
      gsap.to(cards, {
        y: (i) => -10 + 10 * i + "%",
        z: (i) => 8 * i,
        duration: 1,
        ease: "cubic",
        stagger: -0.1,
      });
    }

    splitTextIntoSpans(".copy h1");
    initializeCards();

    gsap.set("h1 span", { y: -200 });
    gsap.set(".slider .card:last-child h1 span", { y: 0 });

    document.addEventListener("click", function () {
      if (isAnimating) return;

      isAnimating = true;
      let slider = document.querySelector(".slider");
      let cards = Array.from(slider.querySelectorAll(".card"));
      let lastCard = cards.pop();
      let nextCard = cards[cards.length - 1];

      gsap.to(lastCard.querySelectorAll("h1 span"), {
        y: 200,
        duration: 0.75,
        ease: "cubic",
      });

      gsap.to(lastCard, {
        y: "+=150%",
        duration: 0.75,
        ease: "cubic",
        onComplete: () => {
          slider.prepend(lastCard);
          initializeCards();
          gsap.set(lastCard.querySelectorAll("h1 span"), { y: -200 });

          setTimeout(() => {
            isAnimating = false;
          }, 1000);
        },
      });

      gsap.to(nextCard.querySelectorAll("h1 span"), {
        y: 0,
        duration: 1,
        ease: "cubic",
        stagger: 0.05,
      });
    });
  }, []);

  return (
    <div className="container relative w-full h-full overflow-hidden bg-[#dfe1c8]">
      <div className="slider absolute top-[15vh] w-full h-full overflow-hidden perspective-[200px] perspective-origin-center">
        {slides.map((slide, index) => (
          <div
            className="card absolute top-1/2 left-1/2 w-1/2 h-[500px] rounded-[10px] overflow-hidden transform -translate-x-1/2 -translate-y-1/2 bg-black"
            key={index}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div
              className="copy absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              <h1 className="relative text-[#dfe1c8]">
                <span>{slide.title}</span>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
