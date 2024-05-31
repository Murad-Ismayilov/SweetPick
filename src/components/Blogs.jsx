import React from 'react'
import './Blogs.css'

const Blogs = () => {
  return (
    <>
    			<div class="blog">
				<div class="container">
					<div class="title">
						<h1><i class="fa fa-star"></i> FROM BLOG <i class="fa fa-star"></i></h1>
						<div class="title-border"></div>
					</div>

					<div class="row">
						<div class="col-md-4">
							<div class="blog-item">
								<div class="blog-img">
									<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716991139/blog1_xnpal1.webp" alt=""/></a>
									<div class="calendar">
										<p>02</p>
										<span>dec</span>	
									</div>
									<a href="#"><h3>This is blog post title. You can edit.</h3></a>
									<div class="blog-border"></div>
									<p>We possess within us two minds. So far I have written only of the conscious mind.</p>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="blog-item">
								<div class="blog-img">
									<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716991139/blog2_ocjk54.webp" alt=""/></a>
									<div class="calendar">
										<p>12</p>
										<span>jan</span>	
									</div>
									<a href="#"><h3>This is blog post with a gallery.</h3></a>
									<div class="blog-border"></div>
									<p>We possess within us two minds. So far I have written only of the conscious mind.</p>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="blog-item">
								<div class="blog-img">
									<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716991139/blog3_t6sazl.webp" alt=""/></a>
									<div class="calendar">
										<p>18</p>
										<span>MAr</span>	
									</div>
									<a href="#"><h3>5 reasons to buy this Gorgeous theme.</h3></a>
									<div class="blog-border"></div>
									<p>We possess within us two minds. So far I have written only of the conscious mind.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </>
  )
}

export default Blogs