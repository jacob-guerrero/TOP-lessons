import { useParams } from "react-router-dom";
import Popeye from "./Popeye";
import Spinach from "./Spinach";
import DefaultProfile from "./DefaultProfile";
import SecretNavigation from "./SecretNavigation";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye></Popeye>
      ) : name === "spinach" ? (
        <Spinach></Spinach>
      ) : name === "secret" ? (
        <SecretNavigation></SecretNavigation>
      ) : (
        <DefaultProfile></DefaultProfile>
      )}
    </div>
  );
};

export default Profile;
