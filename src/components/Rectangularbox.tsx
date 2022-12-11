import "../styles/Rectangularbox.css"
interface box {
  Text: string;
}
const Rectangularbox = (props:box) => {
  return (
    <div className="box">
      <p>{props.Text}</p>
    </div>
  );
};

export default Rectangularbox;
