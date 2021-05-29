import Skeleton from "react-loading-skeleton";

const Repository = ({ repository }) => {
  return (
    <>
      <div className="content">
        <h3>{repository?.name || <Skeleton width={100} />}</h3>
        <h5>{repository?.id || <Skeleton width={80} />}</h5>
        {repository ? (
          repository.description && <p>{repository.description}</p>
        ) : (
          <Skeleton width={180} count={2} />
        )}
      </div>
      <style jsx>{`
        h3,
        h5 {
          margin: 0;
        }

        .content {
          padding: 10px;
          padding-right: 20px;
          border: 1px solid lightgray;
          border-radius: 7px;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Repository;
