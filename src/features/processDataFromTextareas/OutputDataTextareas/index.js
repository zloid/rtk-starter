import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'
import { FaSortNumericUp } from 'react-icons/fa'
//own
import { selectFirstList, selectLenOfInputs } from 'features/selectors'

const mapState = state => {
  let {
    dataFromTextareaOne,
    dataFromTextareaTwo,
    deleteAllFlag,
  } = state.leftTextareaReducer
  return {
    outputOne: selectFirstList(
      dataFromTextareaOne,
      dataFromTextareaTwo,
      deleteAllFlag
    ),
    outputTwo: selectFirstList(
      dataFromTextareaTwo,
      dataFromTextareaOne,
      deleteAllFlag
    ),
  }
}

const OutputDataTextareas = ({ outputOne, outputTwo }) => {
  const textInput = useRef(null)
  const textInputTwo = useRef(null)
  function copyToClipboard() {
    // e.target.focus()
    // textInput.current.focus();
    textInput.current.select()
    document.execCommand('copy')
  }
  function copyToClipboardTwo() {
    textInputTwo.current.select()
    document.execCommand('copy')
  }

  return (
    <>
      <Row>
        <Col>
          <p>
            <FaSortNumericUp size={20} />
          </p>
          <p>
            <span title="length-of-output-first-right-textarea" className="underlineNumbers">
              {selectLenOfInputs(outputOne)}
            </span>
            <Button variant="success" onClick={copyToClipboard}>
              copy
            </Button>
          </p>
          <Textarea
            aria-label="output-first-right-textarea"
            className="sticky underline-left"
            value={outputOne}
            inputRef={textInput}
            />
        </Col>

        <Col>
          <p>
            <FaSortNumericUp size={20} />
          </p>
          <p>
            <span title="length-of-output-second-right-textarea" className="underlineNumbers">
              {selectLenOfInputs(outputTwo)}
            </span>
            <Button variant="success" onClick={copyToClipboardTwo}>
              copy
            </Button>
          </p>

          <Textarea
            aria-label="output-second-right-textarea"
            className="sticky underline-left"
            value={outputTwo}
            inputRef={textInputTwo}
          />
        </Col>
      </Row>
    </>
  )
}

OutputDataTextareas.propTypes = {
  outputOne: PropTypes.string.isRequired,
  outputTwo: PropTypes.string.isRequired,
}

export default connect(mapState, null)(OutputDataTextareas)
