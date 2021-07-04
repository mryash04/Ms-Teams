import React, { Component } from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import { Provider, teamsTheme, Grid, Segment } from "@fluentui/react-northstar";
import { themeNames } from "@fluentui/react-teams";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
 
class App extends Component {
  componentDidMount() {
    // microsoftTeams.initialize();
    // microsoftTeams.getContext((context) => {
    //   this.updateTheme(context.theme);
    //   microsoftTeams.appInitialization.notifySuccess();
    // });
    this.updateTheme(this.getQueryVariable("theme"));
 
    microsoftTeams.initialize();
    if (this.inTeams()) {
      microsoftTeams.registerOnThemeChangeHandler(this.updateTheme);
    }
  }
  private updateTheme = (themeStr?: string | null): void => {
    let theme;
    switch (themeStr) {
      case "dark":
        theme = themeNames.Dark;
        break;
      case "contrast":
        theme = themeNames.HighContrast;
        break;
      case "default":
      default:
        theme = themeNames.Default;
    }
    this.setState({ theme });
  };
  private inTeams = (): boolean => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  };
 
  private getQueryVariable = (variable: string): string | null => {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (const varPairs of vars) {
      const pair = varPairs.split("=");
      if (decodeURIComponent(pair[0]) === variable) {
        return decodeURIComponent(pair[1]);
      }
    }
    return null;
  };
 
  render() {
    return (
      <Provider theme={teamsTheme}>
        <div className="App">
          <Navbar />
          <Home />
        </div>
      </Provider>
    );
  }
}
 
export default App;

