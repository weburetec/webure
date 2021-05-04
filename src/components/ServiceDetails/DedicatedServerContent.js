import React from 'react'
import {Link} from 'gatsby'
import UpcomingEventTimer from './UpcomingEventTimer'
import ContactForm from './ContactForm'
import CareerSidebar from './CareerSidebar'
import details from '../../assets/images/events/events-details.webp'
import bannerhex from '../../assets/images/banner-hex.webp'
<link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
<script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

  
const CareerDetailsContent = () => {
    return (
        <section className="events-details-area pb-100">
            <div className="events-details-image">
                <img src={details} alt="details" />
                <UpcomingEventTimer />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
						<h2 class="font-size-6 mb-0"><strong>ROI Driven digital marketing agency  in Bengaluru, India</strong></h2>
						<div class="ahl"></div>
						<span class="font-size-3 text-gray line-height-2">Webure Technologies is a forward thinking and creative Full service agency based in Bengaluru having global office in New York, London, Australia and New Zealand that provides consultancy and have a proven track record in helping small, medium and large businesses achieve high levels of success. Our consulting services can be tailored for your needs, be it large, medium or small campaigns. Webure Technologies are a leading Full service digital transformation agency committed in helping businesses to meet their online potential.</span>
						<br/>				
						<div className="row">
							<div className="col-lg-4 col-md-12">
								<h2 class="font-size-8 mb-0"><strong>Get more leads and sales with Digital Marketing</strong></h2>						
							</div>						
							<div className="col-lg-8 col-md-12">
								<span class="font-size-8 mb-0">Do you have an idea for an app and are looking for a trusted app design and development agency in India ? Look no further ! The experienced digital marketing professionals at Webure Technologies work with you to develop a media strategy, conduct media research, create a media plan and ultimately help you to launch and optimize your online digital campaign. Webure Technologies offers complete Digital Marketing package including web design , website development, Internet marketing. Our range of internet marketing services includes search engine optimization (SEO), Google Ads, email marketing solution etc.</span>						
							</div>						
						</div>
						<br/><br/>			
					</div>
					<div className="col-lg-4 col-md-12">
						<img src={bannerhex} alt="bannerhex" />
						<br />
						<div class="row">
						
						</div>
					</div>
				</div>
				
				<div class="row">
				
<div class="mdc-data-table">
  <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table" aria-label="Dessert calories">
      <thead>
        <tr class="mdc-data-table__header-row">
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
          <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Carbs (g)</th>
          <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Protein (g)</th>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Comments</th>
        </tr>
      </thead>
      <tbody class="mdc-data-table__content">
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell" scope="row">Frozen yogurt</th>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
          <td class="mdc-data-table__cell">Super tasty</td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell" scope="row">Ice cream sandwich</th>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.33333333333</td>
          <td class="mdc-data-table__cell">I like ice cream more</td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell" scope="row">Eclair</th>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
          <td class="mdc-data-table__cell">New filing flavor</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mdc-data-table__pagination">
    <div class="mdc-data-table__pagination-trailing">
      <div class="mdc-data-table__pagination-rows-per-page">
        <div class="mdc-data-table__pagination-rows-per-page-label">
          Rows per page
        </div>

        <div class="mdc-select mdc-select--outlined mdc-select--no-label mdc-data-table__pagination-rows-per-page-select">
          <div class="mdc-select__anchor" role="button" aria-haspopup="listbox"
                aria-labelledby="demo-pagination-select" tabindex="0">
            <span class="mdc-select__selected-text-container">
              <span id="demo-pagination-select" class="mdc-select__selected-text">10</span>
            </span>
            <span class="mdc-select__dropdown-icon">
              <svg
                  class="mdc-select__dropdown-icon-graphic"
                  viewBox="7 10 10 5">
                <polygon
                    class="mdc-select__dropdown-icon-inactive"
                    stroke="none"
                    fill-rule="evenodd"
                    points="7 10 12 15 17 10">
                </polygon>
                <polygon
                    class="mdc-select__dropdown-icon-active"
                    stroke="none"
                    fill-rule="evenodd"
                    points="7 15 12 10 17 15">
                </polygon>
              </svg>
            </span>
            <span class="mdc-notched-outline mdc-notched-outline--notched">
              <span class="mdc-notched-outline__leading"></span>
              <span class="mdc-notched-outline__trailing"></span>
            </span>
          </div>

          <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth" role="listbox">
            <ul class="mdc-list">
              <li class="mdc-list-item mdc-list-item--selected" aria-selected="true" role="option" data-value="10">
                <span class="mdc-list-item__text">10</span>
              </li>
              <li class="mdc-list-item" role="option" data-value="25">
                <span class="mdc-list-item__text">25</span>
              </li>
              <li class="mdc-list-item" role="option" data-value="100">
                <span class="mdc-list-item__text">100</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mdc-data-table__pagination-navigation">
        <div class="mdc-data-table__pagination-total">
          1‑10 of 100
        </div>
        <button class="mdc-icon-button material-icons mdc-data-table__pagination-button" data-first-page="true" disabled>
          <div class="mdc-button__icon">first_page</div>
        </button>
        <button class="mdc-icon-button material-icons mdc-data-table__pagination-button" data-prev-page="true" disabled>
          <div class="mdc-button__icon">chevron_left</div>
        </button>
        <button class="mdc-icon-button material-icons mdc-data-table__pagination-button" data-next-page="true">
          <div class="mdc-button__icon">chevron_right</div>
        </button>
        <button class="mdc-icon-button material-icons mdc-data-table__pagination-button" data-last-page="true">
          <div class="mdc-button__icon">last_page</div>
        </button>
      </div>
    </div>
  </div>
</div>
				
				</div>
				
				<div class="row">
					<div class="col-lg-1"></div>
					<div class="col-lg-10">
						<img src="https://tistio.com/wp-content/uploads/2020/11/map-1024x655.png" alt="DCPL Presence Map" title="DCPL Presence Map" class="img-fluid mt-4"/>
					</div>
					<div class="col-lg-1"></div>
				</div>
			</div>
        </section>
    )
}

export default CareerDetailsContent