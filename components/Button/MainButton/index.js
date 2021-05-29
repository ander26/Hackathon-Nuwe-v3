import { colors } from "styles/theme";

const MainButton = ({ children, onClick, submit, style }) => {
  return (
    <>
      <button type={submit ? "submit" : ""} onClick={onClick} style={style}>
        {children}
      </button>
      <style jsx>{`
        button {
          margin-top: 20px;
          height: 30px;
          border-radius: 18px;
          border: none;
          background: white;
          position: relative;
          cursor: pointer;
          width: 100%;
        }

        button:after {
          content: "";
          z-index: -1;
          position: absolute;
          top: -2px;
          left: -2px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          border-radius: 18px;
          background: linear-gradient(
            90deg,
            ${colors.primary}22,
            ${colors.primary}66,
            ${colors.primary},
            ${colors.seconday}77,
            ${colors.primary},
            ${colors.primary}66,
            ${colors.primary}22,
            ${colors.primary}22
          );
          background-size: 1000% 100%;
          animation: backgroundAnimation 9s linear infinite;
          cursor: pointer;
        }
        button:hover:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${colors.seconday}09;
          border-radius: 18px;
          animation: loaderSlide 0.6s ease;
        }
        @keyframes loaderSlide {
          0% {
            width: 0px;
          }
          100% {
            width: calc(100%);
          }
        }
        @keyframes backgroundAnimation {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </>
  );
};

export default MainButton;
