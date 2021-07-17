import React from "react";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./pages/CharecterListPage/CharecterListPage";


export default class App extends React.Component {
  
  state = {
    currenteScreen: "List",
    clickedCaracterUrl: ""
  }


  goToDetailPage = (url) => {
    this.setState({currenteScreen: "detail", clickedCharacterUrl: url})
  }

  goToListPage = () =>{ 
    this.setState({currenteScreen: "list", clickedCharacterUrl: ""})
  }

  selectPage = () => {
    switch (this.state.currenteScreen){
      case "List":
        return <CharacterListPage goToDetailPage={this.goToDetailPage} />
      case "detail":
        return <CharacterDetailPage goToListPage={this.goToListPage} url={this.state.clickedCharacterUrl} />
      default:
        return <CharacterListPage goToDetailPage={this.goToDetailPage} />
    }
  }

  render(){
    return (
      <div > 
        {this.selectPage()}
      </div>
    )
  }
}

