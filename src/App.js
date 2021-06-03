import "./App.css";
import Header from "./Components/UI/Header";
import UserModal from "./Components/UI/UserModal";
import { useState } from "react";
import UserList from "./Components/UsrListFolder/UserList";

function App() {





  const users = [
    {
      id: 1,
      firstName: "Ceci",
      lastName: "Morales",
      email: "cecimoar@hotmail.com",
      image:
        "https://www.bunko.pet/__export/1611708686389/sites/debate/img/2021/01/26/9_datos_interesantes_sobre_los_perros_pug_que_tal_vez_no_sabxas.jpeg_1404015752.jpeg",
      isActive: true,
    },

    {
      id: 2,
      firstName: "Rosi ",
      lastName: "Miranda",
      email: "rosi@hotmail.com",
      image: "https://cdn2www.mundo.com/fotos/201503/pug-031-600x456.jpg",
      isActive: false,
    },
  ];
  const [usrList, setUsrList] = useState(users);

  const [itsOpenModal, setitsOpenModal] = useState(false);


  const userDesactivateHandlder = (id, status) => {
    console.log(status,id); 
    users.map((user) => {
      if (user.id == id) {
        if ((status = true)) {
          return { ...user, isActive: false };
        } else {
          return { ...user, isActive: true };
        }
      } else {
        return user;
      }
    });
  };

  const userDeleteHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsrList(newUsers);
    console.log(id);
  };

  //  const userListHandler = () =>{
  // setUsrList(action)
  //  };

  return (
    <>
      <Header setitsOpenModal={setitsOpenModal} users={usrList} />
      <UserList users={usrList} modificateUsr={setUsrList} userDesactivateHandlder={userDesactivateHandlder} userDeleteHandler={userDeleteHandler}/>
      <UserModal
        itsOpenModal={itsOpenModal}
        setitsOpenModal={setitsOpenModal}
        users={usrList}
        actionUsr={setUsrList}
      />
    </>
  );
}

export default App;
