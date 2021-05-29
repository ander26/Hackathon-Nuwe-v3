import { useState } from "react";
import { colors } from "styles/theme";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import MainButton from "components/Button/MainButton";

const Login = ({ setRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const checkUser = async (e) => {
    e.preventDefault();
    const action = (await import("utils/auth")).checkUser(username, password);
    if (action) {
      router.push("/main");
      document.cookie = "username=" + username;
    } else {
      toast.error("No se ha encontrado ningún usuario con esos datos");
    }
  };

  return (
    <>
      <div className="content">
        <h1>Inicia sesión</h1>
        <p>Introduce tus datos para acceder al sistema</p>
        <form onSubmit={checkUser}>
          <label className="hidden" htmlFor="username">
            Usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="hidden" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <MainButton submit={true}>Acceder</MainButton>
        </form>
        <p onClick={() => setRegister(true)}>
          <small>Si no tienes cuenta, registrate ahora</small>
        </p>
      </div>
      <style jsx>{`
        h1 {
          margin-bottom: 10px;
        }
        .hidden {
          display: none;
        }

        form input {
          height: 30px;
          border: 1px solid lightgray;
          border-radius: 7px;
          padding-left: 10px;
        }

        form input ~ input {
          margin-top: 10px;
        }

        form {
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;
        }

        p {
          text-align: center;
        }

        p small {
          font-style: italic;
          color: ${colors.seconday};
          cursor: pointer;
        }

        @media (max-width: 830px) {
          h1 {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Login;
