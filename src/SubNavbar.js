import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  tabsContainer: {
    margin: theme.spacing(0, 0),
    "& .MuiTabs-flexContainer": {
      justifyContent: "space-around",
    },
  },
  tabWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    "& h6": {
      fontWeight: 800,
      fontSize:'1rem'
    },
  },
  tabPanel: {
    height: "10px",
  },
  tabIndicator: {
    background: "#F8D801",
    height: "4%",
  },
  selectedTab: {
    color: theme.palette.primary.main,
  },
}));

export default function SubNavbar({
  handleTabChange,
  currTab,
}) {
  const classes = useStyles(currTab);
  const [defaultTab, setDefaultTab] = useState(0);
  currTab = currTab ? currTab : defaultTab;
  handleTabChange = handleTabChange
    ? handleTabChange
    : (e, newValue) => setDefaultTab(newValue);

  return (
    <div className={classes.mainWrapper}>
      <Tabs
        onChange={handleTabChange}
        value={currTab || defaultTab}
        classes={{
          indicator: classes.tabIndicator,
          root: classes.tabsContainer,
        }}
      >
        <Tab
          classes={{
            wrapper: classes.tabWrapper,
            selected: classes.selectedTab,
          }}
          label={<h6>ASK</h6>}
        />
        <Tab
          classes={{
            wrapper: classes.tabWrapper,
            root: classes.tabRoot,
            textColorPrimary: classes.tabColor,
            selected: classes.selectedTab,
          }}
          label={<h6>GIVE</h6>}
        />
      </Tabs>
    </div>
  );
}
