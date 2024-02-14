import data from './data/data.json';

function Layout() {
  return (
    <div id="mainSection">
      <div id="newstand">
        <ul className="tabList"></ul>
        <ul className="logoList">
          {data.map((item, index) => (
            <li key={index}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img src={item.img} alt="News logo" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div id="mediaView"></div>
    </div>
  );
}

export default Layout;
