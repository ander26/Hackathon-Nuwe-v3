import Skeleton from "react-loading-skeleton";

const UserCard = ({ user }) => {
  return (
    <>
      <div className="content">
        <div className="mainInfo">
          {user?.avatar_url ? (
            <img
              src={user.avatar_url}
              alt={`Foto de usuario de ${user.name}`}
              width={50}
              height={50}
            />
          ) : (
            <Skeleton circle={true} height={50} width={50} />
          )}
          <div className="flex-column">
            <h3>
              {user ? (
                user.name ? (
                  user.name
                ) : (
                  "(Sin nombre)"
                )
              ) : (
                <Skeleton width={100} />
              )}
            </h3>
            <h5>{user?.login ? "@" + user.login : <Skeleton width={80} />}</h5>
          </div>
        </div>
        <div className="followersInfo">
          {user?.following || user?.followers ? (
            <>
              <span>
                <strong>Siguiendo: </strong> {user.following}
              </span>
              <span>
                <strong>Seguidores: </strong> {user.followers}
              </span>
              <span>
                <strong>Repositorios: </strong> {user.public_repos}
              </span>
            </>
          ) : (
            <Skeleton width={300} />
          )}
        </div>
      </div>

      <style jsx>{`
        .content {
          border-radius: 15px;
          padding: 10px;
          border: 1px solid lightgray;
          min-width: 300px;
        }

        img {
          border-radius: 999px;
        }

        .flex-column {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .mainInfo {
          display: flex;
        }

        .flex-column h3,
        h5 {
          margin: 0px;
          margin-left: 10px;
        }
        .flex-column h5 {
          font-weight: 400;
        }

        .followersInfo {
          margin: 15px 0px;
        }

        .followersInfo span ~ span {
          margin-left: 15px;
        }
      `}</style>
    </>
  );
};

export default UserCard;
