import Dexie from "dexie";

export const storage = new Dexie("addlistuserDB");
storage.version(1).stores({
  users: "++id, firstname, lastname, cpf, phone, email, edit, del"
});
