import React from "react";
import { useLoaderData } from "react-router-dom";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
const Contact = () => {
  const {
    id: { value },
    name: { first, last, title },
    email,
    cell,
    picture,
    location: { city, country, state, postcode },
    login: { username, password, uuid },
  } = useLoaderData();
  return (
    <>
      <section
        css={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "auto",
          gap: "2rem",
          padding: "3rem",
          background: "rgba(255, 255, 255, 0.5)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(6.8px)",
          WebkitBackdropFilter: "blur(6.8px)",
        })}
      >
        <section
          css={css({
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          })}
        >
          <img
            src={picture.large}
            css={css({
              borderRadius: "50%",
              width: "150px",
            })}
          />
          <section>
            <h2>
              {title}. {first} {last}
            </h2>
            <p>{email}</p>
            <p>{cell}</p>
          </section>
          <section>
            <h3>{city}</h3>
            <h4>({postcode})</h4>
            <h5>{state}</h5>
            <p>{country}</p>
          </section>
        </section>
        <section>
          <p>SSN ID : {value}</p>
          <p>Email : {email}</p>
          <p>Username : {username}</p>
          <p>UUID : {uuid}</p>
        </section>
      </section>
    </>
  );
};

export default Contact;
