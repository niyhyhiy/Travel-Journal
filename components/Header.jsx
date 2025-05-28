import globe from "../images/globe.png";

export default function Header() {
  return (
    <>
      <header>
        <img className="logo" src={globe} />
        <h1>my travel journal.</h1>
      </header>
    </>
  );
}
