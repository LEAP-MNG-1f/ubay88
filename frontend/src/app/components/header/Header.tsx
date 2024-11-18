import { Pinecone } from "./svgheader/Logo";
import { Shil } from "./svgheader/Shil";
import { User } from "./svgheader/User";
import { Vector } from "./svgheader/Vector";

type HeaderType = {};

export const Header = (props: HeaderType) => {
  return (
    <div className="flex">
      <div className="flex">
        <div>
          <Pinecone />
        </div>
        <div>НҮҮР</div>
        <div>ХООЛНЫ ЦЭС</div>
        <div>ХҮРГЭЛТИЙН БҮС</div>
      </div>
      <div className="flex">
        <div className="flex">
        <Shil/>
          <input type="text" placeholder="Хайх" />
        </div>
        <div className="flex">
            <Vector/>
            <p>Сагс
            </p>
        </div>
        <div className="flex">
        <User/>
        <div>Нэвтрэх</div>
        </div>
      </div>
    </div>
  );
};
