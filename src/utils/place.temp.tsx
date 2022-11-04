<link rel="stylesheet" href="style.css"></link>;

interface PlacesLayout {
  image: string;
  place: string;
  location: string;
  link: string;
  description: string;
}

function FavePlaces(props: PlacesLayout): JSX.Element {
  return (
    <div>
      <div className="b">
        <img src={props.image} alt="" />
        <p>
          <h2> {props.place}</h2>
          <h3>
            <p>
              {props.location} (<a href={props.link}> Map link</a>)
            </p>
          </h3>
        </p>
        <p> {props.description}</p>
      </div>
    </div>
  );
}

export default FavePlaces;
