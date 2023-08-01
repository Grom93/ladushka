import React from 'react';



function Footer() {
  return (
    <div className='container sticky-footer ' >
      <footer className='footer mt-auto  row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top fixed-bottom.'>
        <div className='col mb-3'>
          <a className=''>
            <img src='img/logos.png' className='bi me-2 ' width={180} height={180}/>
          </a>
          <p>
            Ладушка - надёжный друг
          </p>
          </div>
          <div className='col mb-4'>
            <h5>Col 1</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Надписи</a>
              </li>
              <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Надписи</a>
              </li>
            </ul>
          </div>
          <div className='col mb-4'>
            <h5>Col 1</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Надписи</a>
              </li>
              <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Надписи</a>
              </li>
            </ul>
          </div>
        
      </footer>
    </div>
  )
}

export default Footer