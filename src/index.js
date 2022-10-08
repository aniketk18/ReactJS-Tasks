import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const Books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_UY327_FMwebp_QL65_.jpg",
    title: "As a Man Thinketh",
    author: "James Allen",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71+n2VSAiXS._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Time Machine",
    author: "H. G. Wells",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Atomic Habits",
    author: "James Clear ",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/71ygf-LciIS._AC_UY327_FMwebp_QL65_.jpg",
    title: "Three Thousand Stitches",
    author: "Sudha Murty",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/81NYuWzsJcS._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
  },
];

function Bestbooks() {
  return (
    <>
      <h2>Best Selling Books</h2>
      <section className="library">
        {Books.map((book) => {
          return <Book book={book} />;
        })}
      </section>
    </>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="books">
      <img src={img}></img>
      <h1 className="title">{title}</h1>
      <h1 className="author">{author}</h1>
    </article>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Bestbooks />);
