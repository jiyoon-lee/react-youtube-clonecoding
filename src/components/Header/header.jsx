import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`videos/${text}`);
  };

  useEffect(() => {
    if (keyword) setText(keyword);
  }, []);
  return (
    <>
      <header className="header">
        <img className="img-logo" src="../../assets/logo.svg" alt="logo" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="submit" value="🔍" />
        </form>
      </header>
    </>
  );
}
