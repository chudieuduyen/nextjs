export default function BotSeller(){
    return(
        <>
        <div className="container">
          <div className="cate-list">
            <div className="row">
              <h2><strong>BOT SELLERS</strong></h2>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/pr-001.jpg" className="img-fluid h-50 img-fluid flex w-100 items-center justify-center" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/pr-003.jpg" className="img-fluid h-50 img-fluid flex w-100 items-center justify-center" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/pr-001.jpg" className="img-fluid h-50 img-fluid flex w-100 items-center justify-center" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="category-img">
                    <img src="image/pr-003.jpg" className="img-fluid h-50 img-fluid flex w-100 items-center justify-center" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container p-6">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img  style={{borderRadius:"100px"}} className="w-100 py-3" src="/image/pr-big-01.png" alt="" />
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="row " style={{ height: "50v" }}>
                  <div className="col-auto">
                    <h1><span>50% OFF</span></h1> <br />
                    <h4>All <strong>SKINCARE Items</strong></h4>
                  </div>
                  <div className="col-auto">
                    <button style={{ borderRadius: "1px" }} type="button"
                      className="btn btn-outline-dark w-100 p-3">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}