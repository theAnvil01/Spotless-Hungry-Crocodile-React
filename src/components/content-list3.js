import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list3.css'

const ContentList3 = (props) => {
  return (
    <div className="content-list3-container thq-section-padding">
      <div className="content-list3-max-width thq-section-max-width thq-flex-column">
        <div className="content-list3-content4 thq-flex-column">
          <ul>
            <li className="content-list3-li10 list-item thq-flex-column">
              <h2 className="content-list3-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list3-text20">
                      Bug-Hunting Platform Services
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list3-content1 thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list3-text16">
                      Our platform offers vulnerability scanning, subdomain
                      enumeration, and cybersecurity services to secure
                      websites.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list3-ul2 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading2 ?? (
                      <Fragment>
                        <span className="content-list3-text13">
                          Flexible Pricing Plans
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="content-list3-text12">
                          Choose from different pricing plans that suit your
                          needs and budget.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading3 ?? (
                      <Fragment>
                        <span className="content-list3-text24">
                          Real-Time Reporting
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="content-list3-text19">
                          Access real-time reports on vulnerabilities and
                          security issues discovered on your website.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item"></li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading5 ?? (
                      <Fragment>
                        <span className="content-list3-text10">
                          Testimonials
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content5 ?? (
                      <Fragment>
                        <span className="content-list3-text23">
                          Read what our users have to say about the
                          platform&apos;s accuracy and ease of use.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading6 ?? (
                      <Fragment>
                        <span className="content-list3-text17">Cookies</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content6 ?? (
                      <Fragment>
                        <span className="content-list3-text18">
                          Ut doloremque aliquam qui veniam deserunt sit
                          voluptates iusto et unde quod ut quam unde ut nemo
                          eius! Ut saepe consequuntur non quibusdam soluta aut
                          maiores eaque et rerum error nam incidunt saepe aut
                          nihil voluptatem. 33 nulla quaerat est doloremque
                          voluptatem ut libero magnam id placeat aliquid. Ea
                          minus totam est inventore minus sed temporibus aperiam
                          At ratione maiores eum libero consequatur aut laborum
                          exercitationem.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list3-content10 thq-flex-column">
          <ul>
            <li className="content-list3-li16 list-item thq-flex-column">
              <h2 className="content-list3-heading7 thq-heading-2">
                {props.heading7 ?? (
                  <Fragment>
                    <span className="content-list3-text22">
                      Terms of service
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list3-content7 thq-body-small">
                {props.content7 ?? (
                  <Fragment>
                    <span className="content-list3-text14">
                      Lorem ipsum dolor sit amet. Vel dolores illum est aperiam
                      quis nam voluptatem quia et omnis autem qui dolore ullam
                      sed fugiat cumque! Qui accusamus assumenda et molestias
                      eius et error sunt. Id recusandae nostrum ea officiis
                      voluptatem in nisi consequatur sed quia tenetur sit alias
                      molestias qui illum soluta. Est nesciunt perferendis eum
                      sint rerum 33 cupiditate dolorem id corrupti laboriosam ut
                      debitis veniam ut ipsam fugit vel sunt consequatur. Et
                      nobis quasi et cumque adipisci aut molestiae eligendi quo
                      inventore dicta ea suscipit sequi sed veritatis nemo.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list3-ul4 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading8 ?? (
                      <Fragment>
                        <span className="content-list3-text11">
                          General Terms and Conditions
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="content-list3-text12">
                          Choose from different pricing plans that suit your
                          needs and budget.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading9 ?? (
                      <Fragment>
                        <span className="content-list3-text25">
                          Products and Services
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content9 ?? (
                      <Fragment>
                        <span className="content-list3-text15">
                          Lorem ipsum dolor sit amet. Est vitae blanditiis ab
                          aliquam tempore aut ipsam iusto in sunt repellat ex
                          voluptatum inventore ab facilis galisum ea consequatur
                          consequuntur. Ab voluptas voluptatem eum consequatur
                          aspernatur non laboriosam atque est labore asperiores
                          a neque quos. Ea nemo modi hic dicta saepe et
                          veritatis maiores At praesentium aliquid. Sed dolores
                          architecto non doloribus quia eos consectetur commodi
                          non tenetur vitae est neque omnis. Non perspiciatis
                          velit At aliquam rerum ut officiis ipsa id minima eius
                          ut sapiente nobis et nemo neque. Aut maiores tempora
                          in officiis sunt eum voluptatem tenetur sit iste
                          reprehenderit ea nisi dolor. Ea impedit omnis ad
                          internos autem ut esse sunt ad saepe maiores vel
                          perferendis veritatis. Ex magni fugiat ut
                          reprehenderit laudantium sit galisum ipsam eos tempora
                          doloribus sed accusantium nobis eum praesentium quod.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list3-content11 thq-flex-column">
          <ul>
            <li className="content-list3-li19 list-item thq-flex-column">
              <h2 className="content-list3-heading10 thq-heading-2">
                {props.heading10 ?? (
                  <Fragment>
                    <span className="content-list3-text21">Refund Policy</span>
                  </Fragment>
                )}
              </h2>
              <ul className="content-list3-ul6 thq-flex-column">
                <li className="list-item"></li>
                <li className="list-item"></li>
                <li className="list-item"></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList3.defaultProps = {
  heading5: undefined,
  heading8: undefined,
  content2: undefined,
  heading2: undefined,
  content7: undefined,
  content9: undefined,
  content1: undefined,
  heading6: undefined,
  content6: undefined,
  content3: undefined,
  heading1: undefined,
  heading10: undefined,
  heading7: undefined,
  content5: undefined,
  heading3: undefined,
  heading9: undefined,
}

ContentList3.propTypes = {
  heading5: PropTypes.element,
  heading8: PropTypes.element,
  content2: PropTypes.element,
  heading2: PropTypes.element,
  content7: PropTypes.element,
  content9: PropTypes.element,
  content1: PropTypes.element,
  heading6: PropTypes.element,
  content6: PropTypes.element,
  content3: PropTypes.element,
  heading1: PropTypes.element,
  heading10: PropTypes.element,
  heading7: PropTypes.element,
  content5: PropTypes.element,
  heading3: PropTypes.element,
  heading9: PropTypes.element,
}

export default ContentList3
