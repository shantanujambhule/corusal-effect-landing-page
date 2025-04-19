import React from 'react'

const footer = () => {
  return (
    <div className='absolute bottom-0 w-[100%] p-[2em] flex justify-between items-center z-2 '>
      <p>Showreel 2.0</p>
      <p>shantanu@2025</p>
    </div>
  )
}

export default footer
// const h1Texts = ["Refined", "Luxury", "Wellcool", "Amber", "Horizon"];
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [cardsData, setCardsData] = useState(
//     images.map((image, index) => ({ image, text: h1Texts[index] }))
//   );

//   CustomEase.create("cubic", "0.83, 0, 0.17, 1");

//   // Function to split text into spans
//   function splitTextIntoSpans(selector) {
//     let elements = document.querySelectorAll(selector);
//     elements.forEach((element) => {
//       let text = element.innerText;
//       let splitText = text
//         .split("")
//         .map((char) =>
//           char === " " ? `<span>&nbsp;&nbsp;</span>` : `<span>${char}</span>`
//         )
//         .join("");
//       element.innerHTML = splitText;
//     });
//   }

//   useEffect(() => {
//     splitTextIntoSpans(".copy h1");

//     const cards = document.querySelectorAll(".card");
//     const textSpans = document.querySelectorAll(".copy h1 span");

//     // Move spans off-screen initially
//     gsap.set(textSpans, { y: -200 });

//     // Ensure last card's text is visible
//     gsap.set(cards[cards.length - 1]?.querySelectorAll("h1 span"), { y: 0 });

//     // Animate card stacking
//     gsap.to(cards, {
//       y: (i) => -10 + 10 * i + "%",
//       z: (i) => 10 * i,
//       duration: 1,
//       ease: "cubic",
//       stagger: -0.1,
//     });

//     // Handle click event for animation
//     const handleClick = () => {
//       if (isAnimating) return;
//       setIsAnimating(true);

//       let updatedCards = [...cardsData];
//       let lastCard = updatedCards.pop();
//       let nextCard = updatedCards[updatedCards.length - 1];

//       gsap.to(document.querySelectorAll(".card:last-child h1 span"), {
//         y: 200,
//         duration: 0.75,
//         ease: "cubic",
//         stagger: 0.05, // Stagger animation per letter
//       });

//       gsap.to(".card:last-child", {
//         y: "+=150%",
//         duration: 0.75,
//         ease: "cubic",
//         onComplete: () => {
//           updatedCards.unshift(lastCard); // Move last card to the front
//           setCardsData(updatedCards); // Update state

//           // Reset spans after re-render
//           setTimeout(() => {
//             splitTextIntoSpans(".copy h1");
//             setIsAnimating(false);
//           }, 50);
//         },
//       });

//       gsap.to(".card:nth-last-child(2) h1 span", {
//         y: 0,
//         duration: 1,
//         ease: "cubic",
//         stagger: 0.1, // Stagger animation per letter
//       });
//     };

//     document.addEventListener("click", handleClick);

//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, [cardsData, isAnimating]);