import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Jumbotron, Button } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import VisualizationsPerState from "./perStateData/VisualizationsPerState";

const PerState = () => {
  const stateDropdownArray = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [go, setGo] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div style={{ margin: "1%" }}>
      <Fade>
        <Jumbotron>
          <h1 className="display-5">Data By State</h1>
          <p className="lead">
            Select a US state for state-specific statistics.
          </p>
          <hr className="my-2" />
          <br />
          <div style={{ marginBottom: "1%" }}>
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              onClick={() => setGo(false)}
            >
              <DropdownToggle caret>
                {selectedState ? selectedState : "Select State"}
              </DropdownToggle>
              <DropdownMenu
                modifiers={{
                  setMaxHeight: {
                    enabled: true,
                    fn: (data) => {
                      return {
                        ...data,
                        styles: {
                          ...data.styles,
                          overflow: "auto",
                          maxHeight: "30rem",
                        },
                      };
                    },
                  },
                }}
              >
                {stateDropdownArray.map((state) => (
                  <DropdownItem
                    onClick={() => {
                      setSelectedState(state);
                      setGo(false);
                    }}
                    key={state}
                  >
                    {state}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
          <p className="lead">
            {selectedState ? (
              <Button color="primary" onClick={() => setGo(true)}>
                Go
              </Button>
            ) : (
              <Button color="primary" disabled>
                Go
              </Button>
            )}
          </p>
        </Jumbotron>
      </Fade>
      {selectedState && go ? (
        <div>
          <VisualizationsPerState state={selectedState} go={go} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PerState;
