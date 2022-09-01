const express = require("express");
const morgan = require("morgan");

const app = express();

//middleware
app.use(express.json());

// morgan token to print the formatted request post resource
morgan.token("body", function getBody(req, res) {
  body = JSON.stringify(req.body);
  return body;
});

app.use(morgan(":method :url :status :res[content-length] :response-time ms :body"));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

// Largest ID of person in database
const generateId = () => Math.floor(Math.random() * 10000);

//
// ROUTES
//

// CREATE
app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body.name || !body.number) {
    return res.status(400).json({ error: "Need name and number" });
  }

  const nameExists = persons.find((person) => person.name === body.name);

  if (nameExists) {
    return res.status(400).json({ error: "name must be unique" });
  }
  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  persons.push(person);

  res.json(person);
});

// READ
// Two possible get requests
app.get("/", (req, res) => {
  res.send("<h1>Phonebook at /api/person</h1>");
});

app.get("/api/persons", (req, res) => {
  // grab entire phonebook
  // persons ? res.json(persons) : res.status(404).end();
  res.json(persons);
});

app.get("/info", (req, res) => {
  const response = `Phonebook has info for ${persons.length} people`;
  const date = Date();
  res.send(`<p>${response}</p><p>${date}</p>`);
});

app.get("/api/persons/:id", (req, res) => {
  // grabs the id from the query parameter
  const id = req.params.id;
  const person = persons.find((person) => person.id === +id);
  // person ? res.json(person) : res.status(404).end();
  res.json(person);
});

// UPDATE

// DELETE
app.delete("/api/persons/:id", (req, res) => {
  const id = +req.params.id;
  persons = persons.filter((person) => person.id !== id); // keep whoever !== id
  res.status(204).end();
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);
// ------------------------------------------------
//  Old way of creating our web server
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(notes));
// });

// listen up
const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
