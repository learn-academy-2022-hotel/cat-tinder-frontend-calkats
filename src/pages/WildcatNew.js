import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const WildcatNew = ({ createNewWildcat }) => {

  const [newWildcat, setNewWildcat]= useState({
    name: "",
    age: "",
    enjoys: "",
    dislikes: "",
    image: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewWildcat({...newWildcat,[e.target.name]: e.target.value})

  }

  const handleSubmit = () => {
    createNewWildcat(newWildcat)
    navigate("/wildcatindex")
  }

  return(
  <>
    <div className='create-formp'>
      <h3> Add a new Wildcat! </h3>
      <Form>
        <FormGroup>
          <Label for="name">
          Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="What's your name?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
          Age
          </Label>
          <Input
            id="age"
            name="age"
            placeholder="What's your age?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
          enjoys
          </Label>
          <Input
            id="enjoys"
            name="enjoys"
            placeholder="What do you enjoy to do?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="dislikes">
          Dislikes
          </Label>
          <Input
            id="dislikes"
            name="dislikes"
            placeholder="What do you dislike?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
          Image
          </Label>
          <Input
            id="image"
            name="image"
            placeholder="Please add image url"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
      <div>
        <Button
          color="info"
          name="submit"
          onClick= {handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>  
  </>
  )
}

export default WildcatNew;