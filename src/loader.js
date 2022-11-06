const URL =
  "https://randomuser.me/api/?results=50&seed=15282afc355dd151@inc=name,email,id,picture,cell&nat=In&location";

export async function loadContacts() {
  const result = await fetch(URL);

  return (await result.json())?.results;
}

export async function loadContact(contactId) {
  const contacts = await loadContacts();
  return contacts.find((contact) => contact.id.value === contactId);
}
