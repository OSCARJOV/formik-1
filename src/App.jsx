import { useState } from "react"
import Form from "./components/Form"

const App = () => {

 // const [value, setValue] = useState({ text: "" });
const onSubmit = value => {
  console.log(value);
}
  return (
    <div>
      <Form onSubmit={onSubmit} initialText={{text: "desde app", email:"test@test.co"}}>
        {
          ({value, handleChange, handleSubmit}) => ( //text esta viajando desde el componenete Form "hijo"
          
            <form onSubmit={handleSubmit}>
              <input type="text"
                placeholder="text"
                value={value.text}
                //onChange={(e) => setValue({ ...value, text: e.target.value })}
                onChange={handleChange}
                name="text"
              />
              <button type="submit">Enviar</button>

              <input type="email"
                placeholder="email"
                value={value.email}
                onChange={handleChange}
                name="email"
              />


            </form>
          )}
      </Form>
    </div>
  )

}

export default App