import React from "react"
import Box from "./Boxes"
import "./style.scss"

class Main extends React.Component {
    BoxList = [
        {
            colorValue: '#3dcece',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '
        },
        {
            colorValue: '#234646',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '

        },
        {
            colorValue: '#47ce3d',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '

        },
        {
            colorValue: '#b3ce3d',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '

        },
        {
            colorValue: '#ce3db1',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '

        },
        {
            colorValue: '#5b6b6b',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '

        },
        {
            colorValue: '#8c551e',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.',
            text: ' '

        },
      
        {
            colorValue: '#3dcece',
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
                        colorValue={item.colorValue}>
                        <h3>{item.text}</h3>
                    </Box>
                })}



            </div>



        )
    }
}
export default Main