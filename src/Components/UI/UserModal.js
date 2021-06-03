import { Button, Modal, TextField } from "@material-ui/core";
import { useState } from "react";

const UserModal = ({ itsOpenModal, setitsOpenModal, actionUsr, users }) => {
  const [firtsName, setfirtsName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");

  const closeModal = () => {
    setitsOpenModal(false);
  };

  const addUserHandle = () => {
    const newUser = {
      id: Math.random(),
      firstName: firtsName,
      lastName: lastName,
      email: email,
      image: "https://cdn2www.mundo.com/fotos/201503/pug-031-600x456.jpg",
      isActive: false,
    };
    actionUsr([...users, newUser]);
    {
      setitsOpenModal(false);
    }
  };

  return (
    <Modal open={itsOpenModal}>
      <div className="add-user-modal">
        <h1>Agregar Usuario</h1>
        <div>
          <TextField
            className="user-modal-input"
            variant="outlined"
            label="first name"
            onChange={(e) => setfirtsName(e.target.value)}
          ></TextField>
          <TextField
            className="user-modal-input"
            variant="outlined"
            label="lastn name"
            onChange={(e) => setlastName(e.target.value)}
          ></TextField>
          <TextField
            className="user-modal-input"
            variant="outlined"
            label="email"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </div>
        <div className="actions">
          <Button onClick={addUserHandle}>Agregar</Button>
          <Button onClick={closeModal}>Cerrar</Button>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
