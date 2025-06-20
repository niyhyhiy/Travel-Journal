import marker from "../images/marker.png";

export default function Entry(props) {
  return (
    <>
      <article className="journal-entry">
        <div className="main-image-container">
          <img
            className="main-images"
            src={props.img.src}
            alt={props.img.alt}
          />
        </div>
        <div className="info-container">
          <img className="marker" src={marker} alt="" />

          <span className="country">japan</span>
          <a href={props.googleMapLink}>View on Google Maps</a>
          <h2 className="entery-title">{props.title}</h2>
          <p className="trip-dates">{props.dates}</p>
          <p className="entry_text">{props.text}</p>
        </div>
      </article>
    </>
  );
}
