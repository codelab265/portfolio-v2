
const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <img src={imgSrc}  alt='' />
    </div>
  );
};

export default DevImg;
