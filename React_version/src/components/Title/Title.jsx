import "./Title.css";

export default function Title(props) {
  const { title } = props;
  
  return (
    <h1 className="title">{title}</h1>
  )
}