import "./_buttons.scss";

const Buttons = ({
  page,
  prevInfo,
  nextInfo,
  nextPageHandle,
  prevPageHandle,
}) => {
  return (
    <div className="btns">
      <img
        className={prevInfo !== null ? "prev-btn active" : "prev-btn"}
        src="./assets/icons/left-arrow.png"
        alt="prev page icon"
        onClick={prevInfo !== null ? prevPageHandle : () => {}}
      />
      <h1 className="page">{page}</h1>
      <img
        className={nextInfo !== null ? "next-btn active" : "next-btn"}
        src="./assets/icons/right-arrow.png"
        alt="next icon"
        onClick={nextInfo !== null ? nextPageHandle : () => {}}
      />
    </div>
  );
};
export default Buttons;
