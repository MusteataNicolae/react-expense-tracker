import { Button, Form, Modal } from "react-bootstrap"
import { useRef } from "react"
import { useBudgets } from "../contexts/BudgetsContext"

export default function AddBudgetModal({ show, handleClose }) {

  const nameRef = useRef()
  const maxRef = useRef()
  const { addBudget } = useBudgets()

  function handleSubmit(e) {
    e.preventDefault()
    addBudget({
      name : nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    })
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Buget nou</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nume</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Limită de cheltuieli</Form.Label>
            <Form.Control ref={maxRef} type="number" required min={0} step={100} />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="success" type="submit">
              Adaugă
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  )
}