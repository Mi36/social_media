import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { feedQuery, searchQuery } from "../utils/data";
import Spinner from "./Spinner";
import MasonryLayout from "./MasonryLayout";

const Feed = () => {
  const [loading, setloading] = useState(true);
  const [pins, setpins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setloading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setpins(data);
        setloading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setpins(data);
        setloading(false);
      });
    }
  }, [categoryId]);
  console.log(pins);

  if (loading) return <Spinner message="we are adding new ideas" />;
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
