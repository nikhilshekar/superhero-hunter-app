import * as React from "react";
import Navbar from "./navbar";
import Powerstats from "./powerstats";
import Biography from "./biography";
import Appearance from "./appearance";
import BackgroundVideo from "./background";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Connections from "./connections";

const Details = ({ search, setSearch }) => {
  const params = useParams();
  const [heroDetail, setHeroDetail] = useState();
  const id = params.id;

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch(`https://superheroapi.com/api.php/3328323083897178/${id}`)
      .then((results) => results.json())
      .then((data) => {
        setHeroDetail(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <BackgroundVideo />
      <Navbar search={search} setSearch={setSearch} />
      {heroDetail && (
        <div
          className="d-flex"
          style={{
            zIndex: "1",
            marginTop: "8rem",
            justifyContent: "center",
            border: "5px solid yellow",
          }}
        >
          <div
            className="details-image"
            style={{
              backgroundImage: "url(" + heroDetail.image.url + ")",
            }}
          ></div>

          <div className="details-section">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <h1 className="hero-name">{heroDetail.name}</h1>
              <TabContext value={value}>
                <Box>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    TabIndicatorProps={{ style: { background: "yellow" } }}
                    sx={{
                      "& button": { color: "yellow", fontSize: "18px" },
                    }}
                    centered
                  >
                    <Tab label="POWERSTATS" value="1" />
                    <Tab label="BIOGRAPHY" value="2" />
                    <Tab label="APPEARANCE" value="3" />
                    <Tab label="CONNECTIONS" value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ color: "white", fontSize: "18px" }}>
                  <Powerstats heroDetail={heroDetail} />
                </TabPanel>
                <TabPanel value="2" sx={{ color: "white", fontSize: "18px" }}>
                  <Biography heroDetail={heroDetail} />
                </TabPanel>
                <TabPanel value="3" sx={{ color: "white", fontSize: "18px" }}>
                  <Appearance heroDetail={heroDetail} />
                </TabPanel>
                <TabPanel value="4" sx={{ color: "white", fontSize: "18px" }}>
                  <Connections heroDetail={heroDetail} />
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
