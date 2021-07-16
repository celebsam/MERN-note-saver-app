import React, { useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import MainScreen from "../../components/MainScreen";
import { createNote } from "../../redux/actions/notesAction";

const CreateNote = ({ history }) => {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [category, setCategory] = useState("");
   const dispatch = useDispatch();

   const noteCreate = useSelector((state) => state.noteCreate);
   const { loading, error, note, success: createSuccesss } = noteCreate;

   const submitHandler = (e) => {
      e.preventDefault();
      if (!title || !content || !category) {
         return;
      }
      dispatch(createNote(title, content, category));

      history.push("/mynotes");
   };
   return (
      <MainScreen title="Create a Note">
         <Card>
            <Card.Header>Create a new note</Card.Header>
            <Card.Body>
               <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3">
                     <Form.Label>Title</Form.Label>
                     <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Enter title"
                     />
                  </Form.Group>
                  <Form.Group className="mb-3">
                     <Form.Label>Content</Form.Label>
                     <Form.Control
                        as="textarea"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={4}
                        placeholder="Enter note content"
                     />
                  </Form.Group>

                  {content && (
                     <Card>
                        <Card.Header>Note Preview</Card.Header>
                        <Card.Body>
                           <ReactMarkdown>{content}</ReactMarkdown>
                        </Card.Body>
                     </Card>
                  )}

                  <Form.Group className="mb-3">
                     <Form.Label>Category</Form.Label>
                     <Form.Control
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        type="text"
                        placeholder="Enter category"
                     />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                     {loading ? (
                        <div
                           style={{
                              minWidth: "50px",
                              height: "25px",
                              maxHeight: "31px",
                              paddingBottom: "6px",
                           }}
                        >
                           <Spinner animation="grow" role="status"></Spinner>
                        </div>
                     ) : (
                        "Submit"
                     )}
                  </Button>
               </Form>
            </Card.Body>
         </Card>{" "}
      </MainScreen>
   );
};

export default CreateNote;
