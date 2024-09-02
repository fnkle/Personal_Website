function Game() {
    


    const [buttonText, setButtonText] = useState('Submit');

    let grid = Array(3).fill(Array(3).fill(<button id ="tile" onClick={updateButton}> {buttonText} </button>))

    const rows = grid.map((row) => {
        return (
        <tr key={crypto.randomUUID()}>
            {row.map((column) => {
                return (
                    <td>{column}</td>
                )
            })}
        </tr>)

    })

    return(
        <table>
            <tbody>{rows}</tbody>
        </table>
    ) 

   /* function generateGrid(rows, columns) {
        let array = Array(rows).fill(Array(columns).fill(<button id ="tile" onClick={updateButton}> {buttonText} </button>))
        /*
        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) {
                array[row][column] = <button id = {row.toString()+column.toString()}></button>
            }
            
        }
        
        return array
    };*/
    
    function updateButton(button){
        setButtonText("null")
    }
};