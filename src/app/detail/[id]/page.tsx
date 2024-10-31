"use client";
import useSWR from "swr";

const fetcher = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Network response was not ok: ${errorText}`);
  }
  return res.json();
};

export default function Detail({ params }: { params: { id: string } }) {
  const { data, error } = useSWR(
    `https://api-pro.teklearner.com/product/v1/get-product-detail?id=${params.id}`,
    fetcher,
    { refreshInterval: 6000 }
  );

  if (error) return <div>Lỗi load dữ liệu: {error.message}</div>;
  if (!data) return <div>Đang tải...</div>;

  // Kiểm tra và lấy sản phẩm từ dữ liệu
  const product = data.data;

  if (!product) return <div>Không tìm thấy sản phẩm.</div>;

  return (
    <>
    <div className="bg-body-tertiary pt-4">
      <div className="container">
        <div>
          <p className="fw-medium">
            Home <i className="bi bi-chevron-right"></i>
            Skincare <i className="bi bi-chevron-right"></i>
            Brand <i className="bi bi-chevron-right"></i>
            {product.product_title}
          </p>
        </div>
        <h2>Details</h2>
        <div className="row bg-body py-5">
          <div className="col-12 col-lg-6 mb-4">
            <div className="container">
              <div className="row">
                <div className="col-4 col-sm-3 mb-3">
                  {product.product_gallery.map((url: string, index: number) => (
                    <img
                      key={index}
                      src={url}
                      className="img-thumbnail mt-3"
                      alt={`Product Image ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="col-8 col-sm-9">
                  <img
                    src={product.product_gallery[0]}
                    className="img-thumbnail"
                    alt="Main Product"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 fw-bold">
            <h4 className="text-uppercase">
              {product.product_brand || "Brand"}
            </h4>
            <h3>{product.product_title}</h3>
            <p>
              <i className="bi bi-heart pe-2"></i>Add to Favourites
            </p>
            <p>{product.product_description}</p>
            <p className="text-decoration-underline">Read More</p>
            <div className="d-flex flex-column flex-md-row gap-3">
              <p className="pt-2 text-decoration-line-through text-black-50 bg-white">
                AED {product.product_price}
              </p>
              <p className="pt-2">AED {product.product_sale_price}</p>
              <p className="border border-black px-3 py-2 fw-bold">30% Off</p>
            </div>
            <div className="d-flex flex-column flex-md-row gap-2">
              <p>You can track the price of this product </p>
              <p className="text-decoration-underline">Track Rate</p>
            </div>
            <div className="my-3 d-flex flex-column flex-md-row gap-3">
              <button className="b-detail bg-black text-light fw-bold">
                ADD TO CART
              </button>
              <button className="b-detail bg-black text-light fw-bold">
                BUY NOW
              </button>
            </div>
            <p className="text-decoration-underline">
              <i className="bi bi-heart pe-2"></i> View My Favourite List
            </p>
            <div className="container-fluid text-center">
              <div className="row gap-3">
                {/* Render thêm thông tin  */}
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
                <div className="col-12 col-sm-6 col-md-3 py-2 fs-6 border">
                  Lorem ipsum
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  

 

    <div className="container mt-5">
      <h4 className="mb-4">Related Products</h4>

      {/* Carousel */}
      <div id="relatedProductsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Carousel Item 1 */}
          <div className="carousel-item active">
            <div className="row">
              {/* Product Card 1 */}
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <span className="badge bg-dark mb-2">Category</span>
                    <h6 className="card-title">Product Title Goes Here</h6>
                    <p className="card-text text-muted small">Brand</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small"><del>AED 32.00</del></span>
                      <span className="text-dark">AED 25.60</span>
                      <span className="badge bg-light text-dark">30% Off</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <span className="badge bg-dark mb-2">Skin Care</span>
                    <h6 className="card-title">Product Title Goes Here</h6>
                    <p className="card-text text-muted small">Brand</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small"><del>AED 32.00</del></span>
                      <span className="text-dark">AED 25.60</span>
                      <span className="badge bg-light text-dark">30% Off</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <span className="badge bg-dark mb-2">Skin Care</span>
                    <h6 className="card-title">Product Title Goes Here</h6>
                    <p className="card-text text-muted small">Brand</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small"><del>AED 32.00</del></span>
                      <span className="text-dark">AED 25.60</span>
                      <span className="badge bg-light text-dark">30% Off</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#relatedProductsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    </>
  );
}