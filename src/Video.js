import './Video.css';

const Video = props => {
  const { id, title, image, onClick } = props;

  const bgStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${image})`
  }

  return (
    <div className="item video" style={bgStyle} onClick={() => onClick(id)}>
        <div>{title}</div>
    </div>
  );
}

export default Video;
