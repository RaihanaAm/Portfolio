import "./_portfolio.scss"
import { Card } from "./Card"

export const Portfolio = () => {
  // **
  return (
    <div div className="Portfolio container">
      <h1 className="titl">PORTFOLIO</h1>
      <div className="tabs container-lg">
        <div className="left">
          <div className="list-group" id="list-tab" role="tablist">
            <a
              className="lists active"
              id="list-homee-list"
              data-bs-toggle="list"
              href="#list-homee"
              role="tab"
              aria-controls="list-homee"
            >
              React
            </a>
            <a
              className="lists "
              id="list-profill-list"
              data-bs-toggle="list"
              href="#list-profill"
              role="tab"
              aria-controls="list-profill"
            >
              Laravel
            </a>
            <a
              className="lists "
              id="list-profill-list"
              data-bs-toggle="list"
              href="#list-profill3"
              role="tab"
              aria-controls="list-profill3"
            >
              Javascript
            </a>  <a
              className="lists "
              id="list-profill-list"
              data-bs-toggle="list"
              href="#list-profill4"
              role="tab"
              aria-controls="list-profill4"
            >
              Template
            </a>
            <a
              className="lists "
              id="list-profill-list"
              data-bs-toggle="list"
              href="#list-profill5"
              role="tab"
              aria-controls="list-profill5"
            >
              Jeux
            </a>
          </div>
        </div>
        <div className="right">
          <div className="tab-content" id="nav-tabContent">
            {/* 1 */}
            <div
              className="prod tab-pane fade show active"
              id="list-homee"
              role="tabpanel"
              aria-labelledby="  list-homee-list"
            >
              <div className="tableu">
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>

                </div>

              </div>
            </div>
            {/* 2 */}
            <div
              className="prod tab-pane fade"
              id="list-profill"
              role="tabpanel"
              aria-labelledby="list-profill-list"
            >
              <div className="tableu">
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div
              className="prod tab-pane fade"
              id="list-profill3"
              role="tabpanel"
              aria-labelledby="list-profill-list"
            >
              <div className="tableu">
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div
              className="prod tab-pane fade"
              id="list-profill4"
              role="tabpanel"
              aria-labelledby="list-profill-list"
            >
              <div className="tableu">
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                  <Card/>
                  <Card/>
                  <Card/>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div
              className="prod tab-pane fade"
              id="list-profill5"
              role="tabpanel"
              aria-labelledby="list-profill-list"
            >
              <div className="tableu">
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                
                  <Card/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}