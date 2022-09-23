import { useSelector, useDispatch } from "react-redux"; //Traigo use Selector l
import { useNavigate } from "react-router-dom";
import { selectToken, selectMySpace } from "../store/user/selectors"; //Tambien traigo toda la data del usuario tengo de el incluido nuestro nuevo space que cree en el SELECTOR del user
import { deleteStory } from "../store/user/thunks";

function MySpace() {
  //   const profile = useSelector(selectUser);
  const token = useSelector(selectToken);
  const space = useSelector(selectMySpace);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const mySpace = useSelector(selectMySpace);

  const onDelete = (id) => {
    dispatch(deleteStory(id));
  };

  if (token === null) {
    navigate("/");
  }

  if (space === null) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
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
      {space.stories.map((story) => {
        return (
          <div key={story.id}>
            <p>{story.name}</p>
            <p>{story.content}</p>
            <img src={story.imageUrl} alt={story.name} width="500" />
            <button
              onClick={() => {
                onDelete(story.id);
              }}
            >
              Delete Story
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default MySpace;
