import MainButton from "components/Button/MainButton";
import { useState } from "react";
import toast from "react-hot-toast";

const Register = ({ setRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      toast.error("Debe rellenar todos los campos");
    } else if (password.trim() !== confirmPassword.trim()) {
      toast.error("Las contraseñas tienen que ser iguales");
    } else {
      const action = (await import("utils/auth")).saveUser(username, password);
      if (action) {
        toast.success("Usuario creado correctamente");
        setRegister(false);
      } else {
        toast.error("Ese usuario ya existe");
      }
    }
  };

  return (
    <>
      <div className="content">
        <h1>Registrarse</h1>
        <p>Introduce tus datos para registrarte en el sistema</p>
        <form onSubmit={registerUser}>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="hidden" htmlFor="password">
            Confirmar contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="buttonContainer">
            <MainButton
              onClick={(e) => {
                setRegister(false);
              }}
              submit={false}
            >
              Cancelar
            </MainButton>
            <MainButton submit={true}>Registrarse</MainButton>
          </div>
        </form>
      </div>
      <style jsx global>{`
        .buttonContainer button ~ button {
          margin-left: 10px;
        }
      `}</style>
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

        .buttonContainer {
          display: flex;
        }

        .buttonContainer button ~ button {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
};

export default Register;
