import { useState } from "react";
import toast from "react-hot-toast";
import { getGithubInformation } from "utils/github";

const SearchForm = ({ setUserInfo, setRepositoriesInfo }) => {
  const [username, setUsername] = useState("");

  const searchUser = (e) => {
    e.preventDefault();
    if (username.trim()) {
      getGithubInformation(setUserInfo, setRepositoriesInfo, username);
    } else {
      toast.error("Debes introducir un nombre de usuario");
    }
  };

  return (
    <>
      <div className="content">
        <form onSubmit={searchUser}>
          <label className="hidden" htmlFor="search">
            Usuario de Github
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Usuario de Github"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
      <style jsx>{`
        form {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
        }
        .hidden {
          display: none;
        }

        input {
          width: 100%;
          height: 30px;
          border: 1px solid lightgray;
          border-radius: 7px;
          padding-left: 10px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
        }

        button {
          border: 1px solid lightgray;
          width: 100px;
          height: 30px;
          border-radius: 7px;
          border-top-left-radius: 0px;
          border-bottom-left-radius: 0px;
          cursor: pointer;
          background: #cccccc66;
          font-weight: 600;
          border-left: none;
        }
      `}</style>
    </>
  );
};

export default SearchForm;
