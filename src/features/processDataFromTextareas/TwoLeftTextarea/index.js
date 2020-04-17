import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'
import {
  FaSortNumericDown,
  FaHandPointRight,
  FaAngleDoubleLeft,
  FaBomb,
  FaUndo,
} from 'react-icons/fa'
//own
import {
  getDataFromTextarea,
  deleteAllFlagChange,
  deleteAllFlagFalse,
} from 'features/processDataFromTextareas/leftTextareaSlice'
import { selectLenOfInputs } from 'features/selectors'

const mapState = state => {
  const {
    demoDataOne,
    demoDataTwo,
    dataFromTextareaOne,
    dataFromTextareaTwo,
  } = state.leftTextareaReducer
  return {
    demoDataOne,
    demoDataTwo,
    dataFromTextareaOne,
    dataFromTextareaTwo,
  }
}

const mapDispatch = {
  getDataFromTextarea,
  deleteAllFlagChange,
  deleteAllFlagFalse,
}

const TwoLeftTextarea = ({
  getDataFromTextarea,
  demoDataOne,
  demoDataTwo,
  deleteAllFlagChange,
  deleteAllFlagFalse,
  dataFromTextareaOne,
  dataFromTextareaTwo,
}) => {
  const [stateTextareaOne, setStateTextareaOne] = useState(
    dataFromTextareaOne.join('\n')
  )
  const [stateTextareaTwo, setStateTextareaTwo] = useState(
    dataFromTextareaTwo.join('\n')
  )

  function someDemo() {
    setStateTextareaOne(demoDataOne.join('\n'))
    setStateTextareaTwo(demoDataTwo.join('\n'))
  }

  function deleteAll() {
    setStateTextareaOne('')
    setStateTextareaTwo('')
    deleteAllFlagChange()
  }

  function getResult() {
    window.scrollTo(0, 0)
    //do if left and right textarea hollow
    // if (stateTextareaOne.trim() && stateTextareaTwo.trim()) {
    //   deleteAllFlagFalse()
    //   getDataFromTextarea({ stateTextareaOne, stateTextareaTwo })
    // }
    deleteAllFlagFalse()
    getDataFromTextarea({ stateTextareaOne, stateTextareaTwo })
  }

  function returnValues() {
    window.scrollTo(0, 0)
    setStateTextareaOne(dataFromTextareaOne.join('\n'))
    setStateTextareaTwo(dataFromTextareaTwo.join('\n'))
  }

  return (
    <>
      <Row>
        <Col>
          <p>
            <FaSortNumericDown size={20} />
          </p>
          <p className="underlineNumbers underline-left">
            <span title="length-of-input-first-data-textarea">
              {selectLenOfInputs(stateTextareaOne)}
            </span>
          </p>
          <Textarea
            aria-label="input-first-data-textarea"
            className="sticky textarea-left "
            value={stateTextareaOne}
            onChange={e => setStateTextareaOne(e.target.value)}
          />
        </Col>
        <Col>
          <p>
            <FaSortNumericDown size={20} />
          </p>
          <p className="underlineNumbers underline-left">
            <span title="length-of-input-second-data-textarea">
              {selectLenOfInputs(stateTextareaTwo)}
            </span>
          </p>
          <Textarea
            aria-label="input-second-data-textarea"
            className="sticky textarea-left"
            value={stateTextareaTwo}
            onChange={e => setStateTextareaTwo(e.target.value)}
          />
        </Col>
        <Col>
          <div className="sticky buttons_block">
            <Button onClick={someDemo} variant="secondary">
              <FaAngleDoubleLeft /> Demo
            </Button>

            {/* <Button variant="success" onClick={getResult}>result</Button> */}
            {/* <u onClick={deleteAll}>result</u> */}
            <Button variant="success" onClick={getResult}>
              {' '}
              Get Result <FaHandPointRight />
            </Button>

            <Button onClick={deleteAll} variant="secondary">
              Delete All <FaBomb size={24} />
            </Button>

            <OverlayTrigger
              placement="auto"
              overlay={
                <Tooltip id="tooltip-disabled">
                  <Row>
                    <Col sm={5} xs={5}>
                      {dataFromTextareaOne.join(', ')}
                    </Col>
                    <Col sm={1} xs={1}>
                      ---
                    </Col>
                    <Col sm={5} xs={5}>
                      {dataFromTextareaTwo.join(', ')}
                    </Col>
                  </Row>
                </Tooltip>
              }
            >
              <Button onClick={returnValues} variant="warning">
                <FaUndo /> Return
              </Button>
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
    </>
  )
}

TwoLeftTextarea.propTypes = {
  getDataFromTextarea: PropTypes.func.isRequired,
  demoDataOne: PropTypes.array.isRequired,
  demoDataTwo: PropTypes.array.isRequired,
  deleteAllFlagChange: PropTypes.func.isRequired,
  deleteAllFlagFalse: PropTypes.func.isRequired,
  dataFromTextareaOne: PropTypes.array.isRequired,
  dataFromTextareaTwo: PropTypes.array.isRequired,
}
export default connect(mapState, mapDispatch)(TwoLeftTextarea)
