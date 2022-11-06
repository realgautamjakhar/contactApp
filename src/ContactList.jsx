import React from "react";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
const ContactList = ({ searchText }) => {
  const contacts = useLoaderData() ?? [];
  const filterContacts = contacts.filter((contact) => {
    const { first, last } = contact.name;
    return (
      first.toLowerCase().includes(searchText.toLowerCase()) ||
      last.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  return (
    <ul
      css={css({
        listStyle: "none",
        padding: "0",
        marginTop: "1rem",
        marginRight: "1rem",
      })}
    >
      {filterContacts?.length
        ? filterContacts.map((contact) => {
            let {
              id: { value },
              name: { first, last },
              picture,
            } = contact;
            return (
              <motion.li
                animate={{ opacity: 1 }}
                initial={{ opacity: 0.1 }}
                whileHover={{ scale: 1.1 }}
                key={value}
                css={css({
                  padding: "1rem",
                })}
              >
                <NavLink
                  css={css({
                    textDecoration: "none",
                    color: "black",
                    width: "100%",
                    display: "block",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    background: "rgba(255, 255, 255, 0.5)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(6.8px)",
                    WebkitBackdropFilter: "blur(6.8px)",
                    "&:hover": {
                      color: "red",
                    },
                    "&.active": {
                      backgroundColor: "#6455FF",
                      color: "white",
                      border: "revert",
                    },
                  })}
                  to={`/contact/${value}`}
                >
                  <img
                    src={picture.thumbnail}
                    alt="contact-image"
                    css={css({
                      borderRadius: "50%",
                    })}
                  />
                  {`${first} ${last}`}
                </NavLink>
              </motion.li>
            );
          })
        : null}
    </ul>
  );
};

export default ContactList;
