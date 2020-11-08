import React, {useState} from "react"


const Box = ({box, content}) =>  {

    const [open, setOpen] = useState(false)


    return (
        <div style={{}} onClick={() => setOpen(!open)}>
            {box}
            { 
                open && <div>{content}</div>
            }

            
        </div>
    )
    // a div with a white 40% opacity background
    // displaying a minature of the message or just 'click me'
    // before element to have a transparent background
    // div content to collapse before clicked
    // after clicking expand and hide the before content with the box number

    // for BLANK boxes we will block the message somehow


    // ::before <--- content '1' <--- move in before clicked, move out of the way after clicking


}

export default Box