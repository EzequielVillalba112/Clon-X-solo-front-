import { FollowSug } from "../cards/follow-sug/FollowSug";
import { Trend } from "../cards/trend/Trend";
import { Search } from "../search/Search";
import "./Suggestions.css";

export const Suggestions = () => {
  return (
    <div className="suggestions">
      <Search />
      <div className="container-suggestions">  
        <Trend />
        <FollowSug />
      </div>
    </div>
  );
};
