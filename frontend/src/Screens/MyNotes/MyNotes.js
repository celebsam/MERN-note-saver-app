import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Button, Card, Badge, Accordion } from "react-bootstrap";
import axios from "axios";
import { Helmet } from "react-helmet";

const MyNotes = () => {
   const [notes, setNotes] = useState([]);
   const deleteHandler = (id) => {
      if (window.confirm("Are you sure?")) {
      }
   };

   useEffect(() => {
      axios
         .get("/api/notes")
         .then((response) => {
            setNotes(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);
   return (
      <MainScreen title="My Notes">
         <Helmet>
            {" "}
            <title>My Notes</title>
            <meta
               name="description"
               content="A safe place for all your notes"
            />
         </Helmet>
         <Link to="/createnote">
            <Button size="lg" style={{ marginBottom: "6px" }}>
               Create New Note
            </Button>
         </Link>
         {notes.map((note) => (
            <Accordion key={note._id}>
               <Card style={{ marginTop: "20px" }}>
                  <Card.Header style={{ display: "flex" }}>
                     <span
                        style={{
                           fontSize: "1.5rem",
                           flex: 1,
                           align: "center",
                           cursor: "pointer",
                        }}
                     >
                        <Accordion.Toggle
                           as={Card.Text}
                           variant="link"
                           eventKey="0"
                        >
                           {note.title}
                        </Accordion.Toggle>
                     </span>
                     <div>
                        <Button href={`/note/${note._id}`} variant="info">
                           Edit
                        </Button>
                        <Button
                           onClick={() => deleteHandler(note._id)}
                           className="mx-3"
                           variant="danger"
                        >
                           Delete
                        </Button>
                     </div>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                     <Card.Body>
                        <h4>
                           <Badge variant="primary">
                              Category - {note.category}
                           </Badge>
                        </h4>
                        <blockquote className="blockquote mb-0">
                           <p>{note.content}</p>
                           <footer className="blockquote-footer">
                              {note.category}
                              {/* <cite title="Source Title">Source Title</cite> */}
                           </footer>
                        </blockquote>
                     </Card.Body>
                  </Accordion.Collapse>
               </Card>
            </Accordion>
         ))}
      </MainScreen>
   );
};

export default MyNotes;
