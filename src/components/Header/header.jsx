import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "assets/logo.svg";

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
      <header className="flex mx-auto p-5">
        <img
          onClick={() => {
            navigate("/");
          }}
          className="w-20 shrink-0"
          src={Logo}
          alt="logo"
        />
        <form className="grow text-end" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="px-3 py-1 border-2 rounded-bl-full rounded-tl-full"
          />
          <input
            className="px-3 py-1 border-y-2 rounded-br-full rounded-tr-full"
            type="submit"
            value="🔍"
          />
        </form>
      </header>
    </>
  );
}
