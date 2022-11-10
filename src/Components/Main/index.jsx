import React from "react"
import Container from "../Boxes"
import "./style.scss"

class Main extends React.Component {
    state = {
        counter: "",
      }
    render() {
        return (
            <div className='main'>
                <p className='main-info'>
                    United Colors of Benetton выпустил коллаборацию с институтом цвета Pantone
                </p>
                <h2 className='main-info-all'>
                    Итальянский бренд United Colors of Benetton выпустил коллекцию совместно с институтом цвета Pantone.
                    Каждый оттенок назван в его стилистике. Так, в палитру вошли: цвет дикой орхидеи,
                    темного ириса, волшебной птицы королька, глубокий огненно-красный и другие.
                </h2>
                <div className='main-box'>
                    <Container name={this.state.counter} info={this.state.info} />
                    <Container />
                    <Container />
                    <Container />
                </div>


            </div>



        )
    }
}
export default Main