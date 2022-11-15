import React from "react"
import Box from "./Boxes"
import img1 from "../../Images/img1.jpg"
import img2 from "../../Images/img2.jpg"
import img3 from "../../Images/img3.jpg"
import "./style.scss"

class Main extends React.Component {
    BoxList = [
        {
            colorValue: '#4CAE00',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            image:  img1,
        },
        {
            colorValue: '#B6F000',
            description: 'Итальянский бренд United Colors of Benetton выпустил коллекцию совместно с институтом цвета Pantone. Каждый оттенок назван в его стилистике. Так, в палитру вошли: цвет дикой орхидеи, темного ириса, волшебной птицы королька, глубокий огненно-красный и другие.',
            image: img2,

        },
        {
            colorValue: '#FC1200',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '

        },
        {
            colorValue: '#860066',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '

        },
        {
            colorValue: '#ce3db1',
            description: 'Lolit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '

        },
        {
            colorValue: '#5b6b6b',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            image:  ` '${img2}'`

        },
        {
            colorValue: '#8c551e',
            description: 'Lorem ipsum dolor sit amet, In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '

        },
      
        {
            colorValue: '#3dcece',
            description: 'United Colors of Benetton — один из ведущих мировых производителей одежды в стиле casual. Здесь и далее речь идёт о российском представительстве бренда и розничных магазинах.',
            image:  ` '${img1}'` 

        },
        {
            colorValue: '#4CAE00',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            image:  `url('${img3}') `
        },
        {
            colorValue: '#B6F000',
            description: 'Итальянский бренд United Colors of Benetton выпустил коллекцию совместно с институтом цвета Pantone. Каждый оттенок назван в его стилистике. Так, в палитру вошли: цвет дикой орхидеи, темного ириса, волшебной птицы королька, глубокий огненно-красный и другие.',
            text: ' '

        },
        {
            colorValue: '#FC1200',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '

        },
        {
            colorValue: '#860066',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '

        },
       
    ]
    render() {
        return (
            <div className='main'>
                {this.BoxList.map((item, index) => {
                    return <Box key={index}
                        main={item.description}
                        colorValue={item.colorValue}
                        backgroundImage={item.image}>
                        
                    </Box>
                })}



            </div>



        )
    }
}
export default Main