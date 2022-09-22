// import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "../store/spaces/thunks";
import { selectSpaces } from "../store/spaces/selectors";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
        <div>
          {spaces.map((space) => (
            <div
              key={space.id}
              style={{
                backgroundColor: space.backgroundColor, //PASO 28 en mis anotaciones
                color: space.color,
              }}
            >
              <h2>{space.title}</h2>
              <p>{space.description}</p>

              <Link to={`/spaces/${space.id}`}>Visit Space</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Space;
