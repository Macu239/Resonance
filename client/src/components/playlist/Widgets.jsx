import "./Widgets.css"

export default function Widgets() {


  return (
    <ul className="navbar">
      <li>
        <div className="item" id="widgets_homebtn">
          <a id="widgets_item_homebtn" href="/">
            <img
              src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772662689/house-solid-full-nobg_knaeep.png"
              alt="home" />
          </a>
        </div>
      </li>
      <li>
        <div className="item" id="widgets_msgsbtn">
          <a id="widgets_item_msgsbtn" href="/messages">
            <img
              src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772667370/paper-plane-solid-full-nobg_v3gow3.png"
              alt="msgs" />
          </a>
        </div>
      </li>
      <li>
        <div className="item" id="widgets_searchbtn">
          <a id="widgets_item_searchbtn" href="/">
            <img
              src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772662690/magnifying-glass-solid-full-nobg_m7ovpq.png"
              alt="search" />
          </a>
        </div>
      </li>
      <li>
        <div className="item" id="widgets_optbtn">
          <a id="widgets_item_optbtn" href="">
            <img
              src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1773273058/compact-disc-solid_cetkwq.png"
              alt="queue" />
          </a>
        </div>
      </li>
    </ul>
  )
}

