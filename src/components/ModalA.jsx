import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalA() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(true);
  const [data, geliata] = useState([]);
  const [selectedId, setSelectedId] = useState([]);
  const URL = "https://contact.mediusware.com/api/contacts/";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        geliata(response);
      });
  };

  console.log(data.results);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal A</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {data.results.map((data) => {
              return (
                <ul key={data.id}>
                  <li>{data.phone}</li>
                  <li>{data.country.name}</li>
                </ul>
              );
            })}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalA;
