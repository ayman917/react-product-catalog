import images from "./images";

const FeatureComments = () => {
    return (
    <div className="comment-section">
        <div className="comment">
          <img src={images.Rectangle61} className="user-img" alt="User 1"/>
          <div className="users">
            <span className="user-name">Andrew Schultz</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</span>
          </div>
        </div>
        <div className="comment">
          <img src={images.Rectangle62} className="user-img" alt="User 2" />
          <div className="users">
            <span className="user-name">Andrew Schultz</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</span>
          </div>
        </div>
        <div className="comment">
          <img src={images.Rectangle63} className="user-img" alt="User 3" />
          <div className="users">
            <span className="user-name">Andrew Schultz</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</span>
          </div>
        </div>
        <div className="comment">
          <img src={images.Rectangle61} className="user-img" alt="User 1" />
          <div className="users">
            <span className="user-name">Andrew Schultz</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</span>
          </div>
        </div>
        <div className="comment">
          <img src={images.Rectangle62} className="user-img" alt="User 2" />
          <div className="users">
            <span className="user-name">Andrew Schultz</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</span>
          </div>
        </div>
    </div>
    );
  };
  
  export default FeatureComments;