import { FocusCards } from "./ui/focus-cards";

export function Workshop() {
  const cards = [
    {
      title: "Title Here",
      src: "/img/Workshop-placeholder.jpg",
    },
    {
      title: "Title Here",
      src: "/img/Workshop-placeholder.jpg",
    },
    {
      title: "Title Here",
      src: "/img/Workshop-placeholder.jpg",
    },
    {
      title: "Title Here",
      src: "/img/Workshop-placeholder.jpg",
    },
    {
      title: "Title Here",
      src: "/img/Workshop-placeholder.jpg",
    },
    {
      title: "Title Here",
      src: "/img/Workshop-placeholder.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
