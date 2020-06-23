import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsHeadline = (props) => {
  const [all, setAll] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=covid&facet_field=day_of_week&facet=true&begin_date=${props.date}&end_date=${props.date}&api-key=AAvZ65RQie8WTe3U2W097GZ6bAlelvN4`
      );
      setAll(result.data);
    };
    fetchData();
  }, []);

  console.log(all);
  return <div></div>;
};

export default NewsHeadline;
