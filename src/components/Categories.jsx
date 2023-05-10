import concert from "../assets/concert.png";
import talkshow from "../assets/talkshow.png";
import standup from "../assets/standup.png";
import sing from "../assets/sing.png";
import ted from "../assets/ted.png";
import poem from "../assets/poem.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="w-full bg-black">
      <div className="flex justify-evenly items-center">
        <div>
          <p className="text-white text-[2.5rem] uppercase">Categories</p>
        </div>
        <div className="flex justify-between gap-10">
          <div>
            <select name="day" id="day" className="rounded-xl px-8 py-2">
              <option value="">Weekdays</option>
              <option value="">Weekends</option>
            </select>
          </div>
          <div>
            <select name="type" id="type" className="rounded-xl px-8 py-2">
              <option value="">Event Type</option>
            </select>
          </div>
          <div>
            <select
              name="category"
              id="category"
              className="rounded-xl px-8 py-2"
            >
              <option value="">Any Category</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <div className="grid grid-cols-3">
          <div className="text-center cursor-pointer">
            <Link to={'/events?category=standup'}>
              <img src={standup} alt="standup" />
              <p className="text-white text-[1.5rem] font-semibold">
                Standup Comedy
              </p>
            </Link>
          </div>
          <div className="text-center cursor-pointer">
            <Link to={'/events?category=concert'}>
              <img src={concert} alt="concert" />
              <p className="text-white text-[1.5rem] font-semibold">Concerts</p>
            </Link>
          </div>
          <div className="text-center cursor-pointer">
            <Link to={'/events?category=talk-show'}>
              <img src={talkshow} alt="talkshow" />
              <p className="text-white text-[1.5rem] font-semibold">
                Talk Shows
              </p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-10">
          <div className="text-center cursor-pointer">
            <Link to={'/events?category=singing'}>
              <img src={sing} alt="sing" />
              <p className="text-white text-[1.5rem] font-semibold">
                Live Singing
              </p>
            </Link>
          </div>
          <div className="text-center cursor-pointer">
            <Link to={'/events?category=ted-talk'}>
              <img src={ted} alt="tedp" />
              <p className="text-white text-[1.5rem] font-semibold">
                TED Talks
              </p>
            </Link>
          </div>
          <div className="text-center cursor-pointer">
            <Link to={'/events?category=live-poetry'}>
              <img src={poem} alt="poem" />
              <p className="text-white text-[1.5rem] font-semibold">
                Live Poetry
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full flex justify-center">
        <button className="bg-black border border-[#3D37F1] text-[#3D37F1] px-10 py-4 rounded-[30px] mb-10">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Categories;
