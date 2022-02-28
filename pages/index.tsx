import type { NextPage } from "next";
import { useState } from "react";

const primes = (num: number) => {
  let arr = Array.from({ length: num - 1 }).map((_x, i) => i + 2),
    sqroot = Math.floor(Math.sqrt(num)),
    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((_x, i) => i + 2);
  numsTillSqroot.forEach(
    (x: number) => (arr = arr.filter((y) => y % x !== 0 || y === x)),
  );
  return console.log(arr);
};

const Home: NextPage = () => {
  const [state, setstate] = useState<number[]>([2]);
  return (
    <>
      <div></div>
    </>
  );
};
export default Home;
