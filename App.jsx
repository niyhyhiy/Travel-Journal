import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import data from "./data.js";

export default function App() {
  const newData = data.map((item) => {
    // React uses the key prop to identify which items have changed, are added, or are removed.
    // This spreads all properties of the item object as props to the Entry component.
    return <Entry key={item.id} {...item} />;
  });

  return (
    <>
      <Header />
      <main className="container">{newData}</main>
    </>
  );
}
