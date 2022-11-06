import { useState } from "react";
import { css } from "@emotion/react";
import "./App.css";
import { Outlet } from "react-router-dom";
import ContactList from "./ContactList";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
function Header({ onSearch }) {
  const searchElementRef = useRef(null);
  function onSubmit(event) {
    event.preventDefault();
    onSearch(searchElementRef.current.value);
  }
  return (
    <header
      css={css({
        borderBottom: "1px solid white",
        paddingBottom: "16px",
      })}
    >
      <form
        action=""
        onSubmit={(e) => onSubmit(e)}
        css={css({
          display: "flex",
          gap: ".5rem",
          justifyContent: "space-between",
        })}
      >
        <input
          ref={searchElementRef}
          type="text"
          css={css({
            border: "none",
            fontSize: "1.5rem",
            width: "100%",
            outlineColor: "#6455FF",
            padding: "0.25rem 1rem",
            borderRadius: "8px",
          })}
        />
        <button
          css={css({
            backgroundColor: "#6455FF",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            "&:hover": {
              cursor: "pointer",
              color: "black",
              backgroundColor: "transparent",
              outline: "1px solid #6455FF",
              boxShadow: "0px 0px 20px #6455FF",
              transition: "all ease-in-out .5s",
            },
          })}
        >
          <FaSearch
            css={css({
              width: "20px",
              height: "20px",
            })}
          />
        </button>
      </form>
    </header>
  );
}

function SideNav() {
  const [searchText, setSearchText] = useState("");
  function onSearch(text) {
    setSearchText(text);
  }
  return (
    <aside
      css={css({
        padding: "16px",
        display: "grid",
        height: "94vh",
        gridTemplateRows: "auto 1fr auto",
        gap: "1rem",
        background: "rgba(255, 255, 255, 0.28)",
        borderRadius: "8px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(6.8px)",
        WebkitBackdropFilter: "blur(6.8px)",
      })}
    >
      <Header onSearch={onSearch} />
      <section
        css={css({
          maxHeight: "100%",
          overflow: "auto",
        })}
      >
        <ContactList searchText={searchText} />
      </section>
      <footer
        css={css({
          borderTop: "1px solid white",
          paddingTop: "16px",
          textAlign: "center",
          color: "white",
        })}
      >
        Welcome to Contact App
      </footer>
    </aside>
  );
}

function Content() {
  return (
    <section
      css={css({
        margin: "auto",
      })}
    >
      <Outlet />
    </section>
  );
}

export function Layout() {
  return (
    <>
      <main
        css={css({
          maxWidth: "1440px",
          display: "grid",
          margin: "auto",
          gridTemplateColumns: "minmax(320px,25%) 1fr",
          alignItems: "center",
          gap: "5rem",
        })}
      >
        <SideNav />
        <Content />
      </main>
    </>
  );
}
