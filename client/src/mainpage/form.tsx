import { useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setAddress] = useState("");
  const [queryImage, setQueryImage] = useState<string | null>(null);
  const likes = 0;

  const navigate = useNavigate();

  const goToLink = () => {
    navigate("/");
  };
  const correctComment = () => {
    if (description.length == 0 || location.length == 0) {
      alert("You have to add an address and a description.");
    } else {
      postReport();
      goToLink();
    }

    setDescription("");
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
        likes: 0,
        date,
        description,
        image: imageData || null,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="fcontainer">
      <h2 className="fh2">Add a report</h2>
      <div>
        <p className="fp">Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <p className="fp">Date</p>
        <input
          value={date}
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />

        <p className="fp">Description</p>
        <textarea
          className="ftextarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <p className="fp">Address</p>
        <input
          className="finput"
          value={location}
          onChange={(e) => setAddress(e.target.value)}
        />

        <p className="fp">Photo</p>
        <input className="finput" type="file" onChange={setImagePath} />
        {queryImage && <img src={queryImage} alt="Preview" />}

        <button className="fbutton" onClick={correctComment}>
          Add an opinion
        </button>
      </div>
    </div>
  );
}
export default Form;
