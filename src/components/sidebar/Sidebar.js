import React from 'react'
import 'bulma/css/bulma.css'

const Sidebar = () => {
  return (
    <aside class='column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile'>
      <p class='menu-label is-hidden-touch'>Navigation</p>
      <ul class='menu-list'>
        <li>
          <a href='#' class=''>
            <span class='icon'>
              <i class='fa fa-home' />
            </span>{' '}
            Home
          </a>
        </li>
        <li>
          <a href='#' class='is-active'>
            <span class='icon'>
              <i class='fa fa-table' />
            </span>{' '}
            Links
          </a>

          <ul>
            <li>
              <a href='#'>
                <span class='icon is-small'>
                  <i class='fa fa-link' />
                </span>{' '}
                Link1
              </a>
            </li>
            <li>
              <a href='#'>
                <span class='icon is-small'>
                  <i class='fa fa-link' />
                </span>{' '}
                Link2
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#' class=''>
            <span class='icon'>
              <i class='fa fa-info' />
            </span>{' '}
            About
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
