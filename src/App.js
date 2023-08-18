import "./App.css";
import ApexChart from "./components/ApexChart";
import Channels from "./components/Channels";
import Locales from "./components/Locales";
import MicroServices from "./components/MicroServices";
import Types from "./components/Types";
import Vendors from "./components/Vendors";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="header">Focus Room</div>
          <div className="channel-wrapper">
            <div className="title">Channels</div>
            <Channels />
          </div>
          <div className="inter-row">
            <div className="col-3">
              <div className="locale-wrapper">
                <div className="title">Locale</div>
                <Locales />
              </div>
            </div>
            <div className="col-9">
              <div className="type-wrapper">
                <div className="title">Types</div>
                <Types />
              </div>
            </div>
          </div>
          <div className="vendor-wrapper">
            <div className="title">Vendors</div>
            <Vendors />
          </div>
        </div>
        <div className="col-9">
          <div className="microservices-wrapper">
            <div className="title">Micro services</div>
            <MicroServices />
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
