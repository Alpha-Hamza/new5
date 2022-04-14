/* eslint-disable @next/next/no-img-element */

export default function Carousal() {
    return (
      <div className="max-w-[100%]">
  



<div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
    <img
        src="./images/Banner.png"
        className="block w-full"
        alt="Camera"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
    <img
        src="./images/Banner2.png"
        className="block w-full"
        alt="Camera"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
    <img
        src="./images/Banner3.png"
        className="block w-full"
        alt="Camera"
      />
    </div>
  </div>
</div>



      </div>
    );
  }