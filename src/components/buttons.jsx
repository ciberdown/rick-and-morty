const Buttons = ({
  page,
  prevInfo,
  nextInfo,
  nextPageHandle,
  prevPageHandle,
}) => {
  console.log(prevInfo, nextInfo);
  return (
    <div className="btns">
      <img
        className={prevInfo !== null ? "prev-btn active" : "prev-btn"}
        src="./assets/icons/left-arrow.png"
        alt="prev page icon"
        onClick={prevPageHandle}
      />
      <h1 className="page">{page}</h1>
      <img
        className={nextInfo !== null ? "next-btn active" : "next-btn"}
        src="./assets/icons/right-arrow.png"
        alt="next icon"
        onClick={nextPageHandle}
      />
    </div>
  );
};
export default Buttons;
