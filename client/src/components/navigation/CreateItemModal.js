import React from 'react'
import Component from '@reactions/component'
import {
  FilePicker,
  Dialog,
  Pane,
  Text,
  Button,
  Icon,
  Spinner,
  TextInputField,
} from 'evergreen-ui'
import { Mutation } from 'react-apollo'
import {
  CREATE_ITEM_MUTATION,
  UPDATE_ITEM_MUTATION,
} from '../../graphql/mutations'
import { ALL_ITEMS_QUERY, ME_QUERY } from '../../graphql/queries'

class CreateItemModal extends Component {
  state = {
    title: this.props.title || '',
    description: this.props.description || '',
    image: this.props.image || 'https://via.placeholder.com/250x250',
    largeImage: this.props.largeImage || 'https://via.placeholder.com/550x350',
    price: this.props.price || 100,
    isShown: false,
    h: window.innerHeight,
    editMode: this.props.edit || false,
  }
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }

  // uploadFile = async e => {
  // 	const files = e.target.files
  // 	const data = new FormData()
  // 	data.append('file', files[0])
  // 	data.append('upload_preset', 'sickfits')

  // 	const res = await fetch('https://api.cloudinary.com/v1_1/wesbostutorial/image/upload', {
  // 		method: 'POST',
  // 		body: data
  // 	})
  // 	const file = await res.json()
  // 	this.setState({
  // 		image: file.secure_url,
  // 		largeImage: file.eager[0].secure_url
  // 	})
  // }
  render() {
    // console.log('SellItem', this.props)
    const {
      title,
      description,
      image,
      price,
      largeImage,
      editMode,
    } = this.state
    const variables = editMode
      ? { id: this.props.id, title, description, price }
      : { title, description, image, price, largeImage }
    return (
      <Mutation
        mutation={!editMode ? CREATE_ITEM_MUTATION : UPDATE_ITEM_MUTATION}
        variables={variables}
        refetchQueries={[{ query: ALL_ITEMS_QUERY }, { query: ME_QUERY }]}
      >
        {(mutation, { loading, error }) => (
          <>
            <Dialog
              minHeightContent={100}
              hasFooter={false}
              hasHeader={false}
              isShown={this.state.isShown}
              onCloseComplete={() => this.setState({ isShown: false })}
            >
              <form
                onSubmit={async e => {
                  // Stop the form from submitting
                  e.preventDefault()
                  // call the mutation
                  const res = await mutation()
                  // change them to the single item page
                  this.setState({ isShown: false })
                }}
                className="flex justify-between"
              >
                <div className="w-45">
                  <img
                    src="https://via.placeholder.com/250x295"
                    // style={{ height: 'auto', width: 'auto' }}
                  />
                </div>
                <div className="w-50">
                  {!editMode && <FilePicker width="100%" marginBottom={16} />}
                  <TextInputField
                    label="Title"
                    width="100%"
                    name="title"
                    placeholder="title"
                    marginBottom={16}
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                  <TextInputField
                    label="Description"
                    width="100%"
                    name="description"
                    placeholder="description"
                    marginBottom={16}
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                  <TextInputField
                    label="Price"
                    width="100%"
                    type="number"
                    name="price"
                    placeholder="price"
                    marginBottom={16}
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                  <Button width="100%" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </Dialog>
            {this.props.children({
              openModal: () => this.setState({ isShown: true }),
            })}
          </>
        )}
      </Mutation>
    )
  }
}

export default CreateItemModal

// <Form
// 	data-test="form"
// onSubmit={async e => {
// 	// Stop the form from submitting
// 	e.preventDefault()
// 	// call the mutation
// 	const res = await createItem()
// 	// change them to the single item page
// 	console.log(res)
// 	// Router.push({
// 	//   pathname: '/item',
// 	//   query: { id: res.data.createItem.id },
// 	// });
// }}
// >
// 	<fieldset disabled={loading} aria-busy={loading}>
// 		<label htmlFor="file">
// 			Image
// 			<input
// 				type="file"
// 				id="file"
// 				name="file"
// 				placeholder="Upload an image"
// 				required
// 				onChange={this.uploadFile}
// 			/>
// 			{this.state.image && (
// 				<img width="200" src={this.state.image} alt="Upload Preview" />
// 			)}
// 		</label>

// 		<label htmlFor="title">
// 			Title
// 			<input
// 				type="text"
// 				id="title"
// 				name="title"
// 				placeholder="Title"
// 				required
// value={this.state.title}
// onChange={this.handleChange}
// 			/>
// 		</label>

// 		<label htmlFor="price">
// 			Price
// 			<input
// 				type="number"
// 				id="price"
// 				name="price"
// 				placeholder="Price"
// 				required
// 				value={this.state.price}
// 				onChange={this.handleChange}
// 			/>
// 		</label>

// 		<label htmlFor="description">
// 			Description
// 			<textarea
// 				id="description"
// 				name="description"
// 				placeholder="Enter A Description"
// 				required
// 				value={this.state.description}
// 				onChange={this.handleChange}
// 			/>
// 		</label>
// 		<button type="submit">Submit</button>
// 	</fieldset>
// </Form>
