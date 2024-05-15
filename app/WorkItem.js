
export default function WorkItem({ title, description, techStack, links, imageSrc, imageAlt }) {
    return (
        <div className="work__box">
          <div className="work__text">
            <h3>{title}</h3>
            <p>{description}</p>
            <ul className="work__list">
              {techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="work__links">
              {links.map((link, index) => (
                <a key={index} href={link.href} target={link.target} className="link__text">
                  {link.text} <span>&rarr;</span>
                </a>
              ))}
            </div>
          </div>
          <div className="work__image-box">
            <img src={imageSrc} className="work__image" alt={imageAlt} />
          </div>
        </div>
      );
    }