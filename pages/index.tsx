import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { getKanyeQuote, kanyeSelector } from "redux/features/Quote";
import { useAppDispatch, useAppSelector } from "redux/hooks/hooks";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(kanyeSelector);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  console.log(data);

  return (
    <div>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />   */}
      <div>
        <h2>Generate random Kanye West quote</h2>
        {pending && <p>Loading...</p>}
        {data && <p>{data.quote}</p>}
        {error && <p>Oops, something went wrong</p>}
        <button
          className="btn text-black bg-sky-400 p-4 rounded-lg mt-5"
          onClick={() => dispatch(getKanyeQuote())}
          disabled={pending}
        >
          Generate Kanye Quote
        </button>
      </div>
    </div>
  );
};

export default Home;
