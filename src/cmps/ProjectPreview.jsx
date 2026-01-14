export function ProjectPreview({ name, image, description }) {
  return (
    <div className={`project ${name}`}>
      <h2>{name}</h2>
      <div className="img-backgroung">
        <img src={image} />
      </div>

      <p>{description}</p>
      <button className="visit-web ">Visit Website</button>
      <button className="open-git ">Open Git</button>
    </div>
  )
}
