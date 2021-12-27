import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
  return (
    <div style={{ paddingBottom: '10px' }}>
      <Spinner
        animation='border'
        role='status'
        style={{
          margin: 'auto',
          display: 'block',
        }}
      />
    </div>
  )
}
