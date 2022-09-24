function AddStory() {
  return (
    <div>
      <h1>Hello from AddStory</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Content:
          <textarea
            className="form__input"
            type="text"
            // value={comment}
            // onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            // value={imageUrl}
            // onChange={(event) => setImageUrl(event.target.value)}
            placeholder="Paste an image URL here!"
          ></input>
        </label>
        <button type="submit">Submit Story</button>
      </form>
    </div>
  );
}

export default AddStory;
