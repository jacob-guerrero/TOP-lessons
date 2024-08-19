import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClickContact1 = () => {
    setCount1((count1) => count1 + 1);
  };
  const handleClickContact2 = () => {
    setCount2((count2) => count2 + 1);
  };

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`/contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <div className="likes">
          <button onClick={handleClickContact1}>Concact1 (+1)</button>
          <button onClick={handleClickContact2}>Contact2 (+1)</button>
        </div>
        <Outlet context={[count1, count2]}></Outlet>
      </div>
    </>
  );
}
