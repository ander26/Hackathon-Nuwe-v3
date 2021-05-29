import toast from "react-hot-toast";
import { GITHUH_API_BASE } from "./constants";

export const getGithubUserRepos = (username) => {
  return fetch(`${GITHUH_API_BASE}/${username}/repos`)
    .then((res) => res.json())
    .catch(() => {
      toast.error("No se han podido obtener los repositorios del usuario");
    });
};

export const getGithubUserInfo = (username) => {
  return fetch(`${GITHUH_API_BASE}/${username}`)
    .then((res) => res.json())
    .catch(() => {
      toast.error("No se ha podido obtener la información del usuario");
    });
};

export const getGithubInformation = (
  setUserInfo,
  setRepositoriesInfo,
  username
) => {
  getGithubUserInfo(username).then((data) => {
    if (data.message) {
      toast.error("No se ha encontrado ese usuario");
    } else {
      setUserInfo(data);
      getGithubUserRepos(username).then((repos) => {
        if (repos) {
          console.log(repos);
          setRepositoriesInfo(repos);
        }
      });
    }
  });
};
