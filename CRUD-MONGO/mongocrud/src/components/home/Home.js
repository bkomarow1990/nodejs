import {Link} from 'react-router-dom';
export function Home(){
    return(
        <div className="container hero">
                <div className="row mt-5">
                    <div className="col-12 col-lg-6 col-xl-5 offset-xl-1 ">
                        <h1>Devices database management</h1>
                        <p>Manage MondoDb devices collection with this react-app<br/></p>
                        <Link to="/devices"><button
                            className="btn btn-light btn-lg action-button" type="button">Manage<i className="fa fa-long-arrow-right ml-2"></i></button></Link>
                    </div>
                    <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <div className="iphone-mockup">
						<img className="device" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/70/99dc2094c111e7aba94bd65f142a34/logo-first-app-coursera.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25"/>
                           <div className="screen">
							</div>
							
							
                        </div>
                    </div>
                </div>
            </div>
    );
}