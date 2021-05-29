import React from "react";
import Repository from "./Repository";

const RepositoriesList = ({ repositories }) => {
  return (
    <>
      <h4>Repositorios</h4>
      <div className="content">
        {repositories ? (
          <>
            {repositories.map((repository) => {
              return (
                <React.Fragment key={repository.id}>
                  <Repository repository={repository} />
                </React.Fragment>
              );
            })}
          </>
        ) : (
          <>
            {" "}
            {Array.apply(null, { length: 4 }).map((e, i) => (
              <React.Fragment key={i}>
                <Repository />
              </React.Fragment>
            ))}
          </>
        )}
      </div>
      <style jsx>{`
        .content {
          overflow: auto;
          max-height: 200px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          column-gap: 20px;
          row-gap: 10px;
        }
      `}</style>
    </>
  );
};

export default RepositoriesList;
