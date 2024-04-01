import "./Button.css"

export default function Button({ title, link, icon }) {
  return (
    <div className="button-wrapper">
      <a href={link} className="button">
        {title}
        {icon && <img src={icon} alt = "icon" className="button-icon" />}
      </a>
    </div>
  )
}