import React from 'react'
import useModal from './useModal'
import Modal from './Modal'

function App() {
	const { open, openModal, closeModal } = useModal()
	return (
		<div className="App">
			<h1>Modals in React!</h1>
			<button onClick={openModal}>Open</button>
			{open ? (
				<Modal
					close={closeModal}
					render={() => <h1>This is a Modal using Portals!</h1>}
				/>
			) : null}
		</div>
	)
}

export default App
