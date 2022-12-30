import React, { useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  Badge,
  Accordion,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { listNotes, noteDeleteAction } from "../../redux/actions/notesAction";

const MyNotes = ({ search }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(noteDeleteAction(id));
    }
  };

  const noteList = useSelector((state) => state.noteList);

  const noteDelete = useSelector((state) => state.noteDelete);

  const {
    loading: deleteLoading,
    error: deleteError,
    success: deleteSuccess,
  } = noteDelete;

  const { error, loading, notes } = noteList;

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success } = noteUpdate;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: createSuccess } = noteCreate;

  //   useEffect(() => {
  //     window.location.reload();
  //   }, []);

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo, success, deleteSuccess, createSuccess]);

  const refreshHandler = () => {
    window.location.reload();
    //  dispatch(listNotes());
    console.log(createSuccess);
    console.log("createSuccess");
  };
  return (
    <MainScreen title="My Notes">
      <Helmet>
        {" "}
        <title>My Notes</title>
        <meta name="description" content="A safe place for all your notes" />
      </Helmet>
      {error && (
        <Alert variant="danger">
          <strong>{error}</strong>
        </Alert>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/createnote">
          <Button size="lg" style={{ marginBottom: "6px" }}>
            Create New Note
          </Button>
        </Link>

        <Button
          size="lg"
          style={{ marginBottom: "6px" }}
          onClick={refreshHandler}
          variant="success"
        >
          <i className="fas fa-sync-alt"></i>
        </Button>
      </div>
      {loading && (
        <div
          style={{
            width: "100%",
            minWidth: "50px",
            display: "grid",
            maxHeight: "56px",
            placeItems: "center",
            marginTop: "4rem",
          }}
        >
          <Spinner animation="border" role="status"></Spinner>
        </div>
      )}
      {notes
        ?.filter((filtered) =>
          filtered.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((note) => (
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
                  <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
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
                    <Badge variant="primary">Category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on
                      <cite title="Source Title">
                        {" "}
                        {note.createdAt.substring(0, 10)}
                      </cite>
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
