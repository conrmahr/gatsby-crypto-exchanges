import * as React from 'react';
import { Link } from 'gatsby'
import tw from "tailwind-styled-components";

export default function Card(props) {

  return (
    <div id={props.data.id}>
          <CardFrame>
            <img src={props.data.image} alt={props.data.name} className="h-14 w-14 rounded-full" />
            <div>
              <h2 className="text-white font-semibold text-xl"><a href={props.data.url}>{props.data.name}</a></h2>
             <span>Ranked {props.data.trust_score_rank}</span><br />
             <span>{props.data.country}</span>
             <div>
             <Link to={`exchange?name=${props.data.id}`} className="mt-1 text-gray-500 text-sm cursor-pointer">
                View Details
              </Link>
             </div>
              </div>
          </CardFrame>
    </div>
  );
};

const CardFrame = tw.div`
  flex
  p-5
  mt-8
  space-x-4
  items-center
  shadow-xl
  max-w-md
  rounded-md
  text-gray-400
`;
