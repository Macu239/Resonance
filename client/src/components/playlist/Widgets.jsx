import { useState } from "react";
import "./Styles/Widgets.css"
import playlistData from "./data/playlistData.json";

const { iconsData } = playlistData.widgetsData;
const { itemClass, navClass } = playlistData.widgetsData.iconsClasses; 

function IconItem({ link, src, alt, boxID }) {
  return (
    <li>
      <div className={itemClass} id={boxID}>
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
    iconsData.map((icon) => generateIcon(
      icon.link,
      icon.src,
      icon.alt,
      icon.boxID
    ))
  );

  return (
    <ul className={navClass}>
      {icons.map((icon) => (
        <IconItem key={icon.id} {...icon} />
      ))}
    </ul>
  )
}

