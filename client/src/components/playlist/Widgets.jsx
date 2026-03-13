import { useState } from "react";
import "./Widgets.css"
import widgetsData from "./data/widgetsData.json";

function IconItem({ link, src, alt, boxID }) {
  return (
    <li>
      <div className="item" id={boxID}>
        <a href={link}>
          <img
            src={src}
            alt={alt} />
        </a>
      </div>
    </li>
  );
}

const generateIcon = (link, src, alt, boxID) => {
  return ({
    id: crypto.randomUUID(),
    link: link,
    src: src,
    alt: alt,
    boxID: boxID
  });
}

export default function Widgets() {
  const [icons] = useState(
    widgetsData.map((icon) => generateIcon(
      icon.link,
      icon.src,
      icon.alt,
      icon.boxID
    ))
  );

  return (
    <ul className="navbar">
      {icons.map((icon) => (
        <IconItem key={icon.id} {...icon} />
      ))}
    </ul>
  )
}

