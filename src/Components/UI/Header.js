import { Button } from "@material-ui/core";

const Header = ({ setitsOpenModal, users }) => {
  const openModal = () => {
    setitsOpenModal(true);
  };

  return (
    <div>
      <div className="app-header">
        <h1>User Manager {users.leght}</h1>
        <Button variant="contained" color="primary" onClick={openModal}>
          Agregar
        </Button>
      </div>
    </div>
  );
};
export default Header;
