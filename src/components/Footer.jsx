import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
        <MDBFooter className='bg-dark text-center text-white fixed-bottom'>
            <div className='text-center p-3 bg-dark'>
                <img
                src="https://images.squarespace-cdn.com/content/v1/5ab93d58365f02e76116f3d6/1622578858868-H2OQRGZ63AE0WPTQHSCK/Prime_Video_Logo.png"
                width="60"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
                <br/>
                <a className='text-primary' href='#' style={{textDecoration:'none'}}>
                Terms and Privacy Notice  Send us feedback  Help  ©1996-2024,Amazon.com,Inc. or its affiliates
                </a>
            </div>
        </MDBFooter>
    </div>
  )
}

export default Footer