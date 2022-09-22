import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "../store/spaces/thunks";
import { selectSpaces } from "../store/spaces/selectors";
import { useEffect } from "react";

function Space() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);

  console.log("space selector", spaces);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);

  return (
    <div>
      <h2>Spaces</h2>
      {!spaces.length ? (
        "Loading"
      ) : (
        <ul>
          {spaces.map((space) => (
            <li key={space.id}>
              <h2>{space.title}</h2>
              <p>{space.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Space;
