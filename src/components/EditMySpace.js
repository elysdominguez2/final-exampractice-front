import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMySpace } from "../store/user/selectors";
import { editMySpaceByUserId } from "../store/user/thunks";

function EditMySpace() {
  const dispatch = useDispatch();
  const mySpace = useSelector(selectMySpace);

  const [title, setTitle] = useState(mySpace.title);
  const [description, setDescription] = useState(mySpace.description);
  const [backgroundColor, setbackgroundColor] = useState(
    mySpace.backgroundColor
  );
  const [color, setColor] = useState(mySpace.color);

  const submitNewEditSpace = (event) => {
    event.preventDefault();
    dispatch(editMySpaceByUserId(title, description, backgroundColor, color));

    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h3>Edit your space Bro!</h3>
      <form onSubmit={submitNewEditSpace}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>

        <label>
          Description:
          <textarea
            className="form__input"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label>
          Background:
          <input
            type="color"
            value={backgroundColor}
            onChange={(event) => setbackgroundColor(event.target.value)}
          ></input>
        </label>
        <label>
          Text Color:
          <input
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          ></input>
        </label>

        <button type="submit">Submit your New Space Bro!</button>
      </form>
    </div>
  );
}

export default EditMySpace;
