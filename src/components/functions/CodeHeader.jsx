import {Row } from 'react-bootstrap';

const CodeHeader = ({ header }) =>{
    return(
        <Row>
            <div className='text-center'>
                <span className='ls-md fs-6 text-primary fw-bold text-uppercase'>
                    {header}
                </span>
            </div>
        </Row>
    )
}

export default CodeHeader;