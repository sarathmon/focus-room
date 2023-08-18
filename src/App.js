import "./App.css";
import ApexChart from "./components/ApexChart";
import CompItemArr from "./components/CompItemArr";

import {
  CHANNELS,
  LOCALE,
  MICRO_SERVICES,
  TYPES,
  VENDORS,
} from "./constants/appConstants";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="header">Focus Room</div>
          <div className="channel-wrapper">
            <div className="title">Channels</div>
            <CompItemArr
              dataArr={CHANNELS}
              wrapperClass="ch-item-wrapper"
              itemContainerClass="comp-items"
              itemClass="comp-items-name"
            />
          </div>
          <div className="inter-row">
            <div className="col-3">
              <div className="locale-wrapper">
                <div className="title">Locale</div>
                <CompItemArr
                  dataArr={LOCALE}
                  wrapperClass="loc-item-wrapper"
                  itemContainerClass="comp-items"
                  itemClass="comp-items-name"
                />
              </div>
            </div>
            <div className="col-9">
              <div className="type-wrapper">
                <div className="title">Types</div>
                <CompItemArr
                  dataArr={TYPES}
                  wrapperClass="type-item-wrapper"
                  itemContainerClass="comp-items"
                  itemClass="comp-items-name"
                />
              </div>
            </div>
          </div>
          <div className="vendor-wrapper">
            <div className="title">Vendors</div>
            <CompItemArr
              dataArr={VENDORS}
              wrapperClass="item-wrapper"
              itemContainerClass="comp-items"
              itemClass="comp-items-name"
            />
          </div>
        </div>
        <div className="col-9">
          <div className="microservices-wrapper">
            <div className="title">Micro services</div>
            <CompItemArr
              dataArr={MICRO_SERVICES}
              wrapperClass="ms-item-wrapper"
              itemContainerClass="ms-comp-items"
              itemClass="comp-items-name"
            />
          </div>
          <div className="chart-wrapper">
            <ApexChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
