import { useState } from "react";

function AddStory() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://images.squarespace-cdn.com/content/5898e29c725e25e7132d5a5a/1487546591045-NJLLE20UXLVGZ9XHL47Y/600x400-Image-Placeholder.jpg?content-type=image%2Fjpeg"
  );

  const submitNewStory = (event) => {
    event.preventDefault();

    //con esto vacio los inputs para el futuro
    setName("");
    setContent("");
  };

  return (
    <div>
      <h1>Hello from AddStory</h1>
      <form onSubmit={submitNewStory}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Content:
          <textarea
            className="form__input"
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            placeholder="Paste an image URL here!"
          ></input>
        </label>
        {/* Con esto de aca abajo estoy poniendo la imagen en miniatura para que se vea cuando la persona pone la imagen en el imput */}
        <p>
          {imageUrl ? (
            <img src={imageUrl} alt="preview" style={{ width: "300px" }} />
          ) : null}
        </p>
        <button type="submit">Submit your Story Bro!</button>
      </form>
    </div>
  );
}

export default AddStory;
