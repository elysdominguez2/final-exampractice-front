import { useDispatch, useSelector } from "react-redux";
import { fetchSpacesById } from "../store/spaces/thunks";
import { selectSpaceById } from "../store/spaces/selectors";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const dispatch = useDispatch();
  const space = useSelector(selectSpaceById);
  console.log("space", space);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSpacesById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>Space</h2>
      <div>
        {space && (
          <div>
            <div
              key={space.id}
              style={{
                backgroundColor: space.backgroundColor,
                color: space.color,
              }}
            >
              <h2>{space.title}</h2>
              <p>{space.description}</p>
            </div>
            {space.stories && space.stories.map((story) => story.name)}
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailPage;
