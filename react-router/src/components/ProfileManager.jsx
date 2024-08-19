import { Link } from "react-router-dom";

const ProfileManager = () => {
  return (
    <>
      <h1>Hello from the profile Manager!</h1>
      <p>There are some options of links:</p>
      <ul>
        <li>
          <Link to="popeye">Popeye</Link>
        </li>
        <li>
          <Link to="spinach">Spinach</Link>
        </li>
        <li>
          <Link to="secret">Secret</Link>
        </li>
      </ul>
    </>
  );
};

export default ProfileManager;
