import React from 'react';
import Modal from 'react-modal';

// {!!props.selectedOption} will convert a valid string to 'true'
// will also convert 'undefined' to false
const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption}
        contentLabel='Selected Option'
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}> YEAH! </button>
    </Modal>
);


export default OptionModal;