import "/src/css/NavBar.css";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <img src="/public/UGLogo.png" alt="logo" className="logo" />
        <ul className="navbar-list">
          <li>UnknownGames</li>
          {/* <li>TopDown</li>
          <li>MoveTheSquare</li>
          <li>Survive</li> */}
        </ul>
      </div>
    </>
  );
}
