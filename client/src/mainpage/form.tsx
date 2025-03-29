import { useState } from "react";

function Form() {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setAddress] = useState("");
  const [queryImage, setQueryImage] = useState<string | null>(null);
  const likes = 0;

  const correctComment = () => {
    if (body.length == 0 || location.length == 0) {
      alert("You have to add an address and a description.");
    } else {
      postReport();
    }

    setBody("");
    setTitle("");
    setDate("");
    setAddress("");
  };

  const setImagePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setQueryImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      console.log(queryImage);
    }
  };

  const postReport = () => {
    const imageData = queryImage ? queryImage.split(",")[1] : null;

    fetch("http://localhost:5000/api/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        location,
        likes,
        date,
        body,
        image: imageData || null,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <h2>Add a report</h2>
      <div>
        <p>Title</p>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p>Date</p>
        <input
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <p>Description</p>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <p>Address</p>
        <input
          value={location}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <p>Photo</p>
        <input type="file" onChange={setImagePath} />
        {queryImage && (
          <img
            src={queryImage}
            alt="Preview"
            style={{ maxWidth: "300px", marginTop: "10px" }}
          />
        )}
        <button onClick={correctComment}>Add an opinion</button>
      </div>
    </>
  );
}
export default Form;
