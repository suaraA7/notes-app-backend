const { addNoteHandler, getAllNoteHandler, getNoteByIDHandler, editNoteByIDHandler, deleteNoteByIDHandler } = require("./handler");

const route = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },

  {
    method: "GET",
    path: "/notes",
    handler: getAllNoteHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIDHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIDHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIDHandler,
  },
];

module.exports = route;
