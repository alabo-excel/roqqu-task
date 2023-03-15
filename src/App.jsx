import { useState } from "react";

function App() {
  const [count, setCount] = useState(5);
  const [name, setName] = useState("");

  return (
    <div className="w-[40%] p-8 mx-auto">
      <div className="">
        <img src="/roqqu-white.svg" alt="" />
        <div className="mt-8">
          <span className="text-white text-sm">
            Step {count} <span className="text"> / 5</span>
          </span>
          <div className="flex mt-3">
            <div
              className={
                count >= 1 ? "w-[20%] mr-1 active" : "w-[20%] mr-1 bar"
              }
            ></div>
            <div
              className={
                count >= 2 ? "w-[20%] mr-1 active" : "w-[20%] mr-1 bar"
              }
            ></div>
            <div
              className={
                count >= 3 ? "w-[20%] mr-1 active" : "w-[20%] mr-1 bar"
              }
            ></div>
            <div
              className={
                count >= 4 ? "w-[20%] mr-1 active" : "w-[20%] mr-1 bar"
              }
            ></div>
            <div
              className={
                count >= 5 ? "w-[20%] mr-1 active" : "w-[20%] mr-1 bar"
              }
            ></div>
          </div>
        </div>
        <div>
          {(() => {
            switch (count) {
              case 1:
                return (
                  <div>
                    <h1 class="text-3xl mt-6 font-bold text-white">
                      <span>Hey </span>👋🏽
                      <br />
                      Welcome to Roqqu
                    </h1>
                    <h2 class="text-white text-sm mt-4 text">
                      Let’s get to know you!
                      <br />
                      We’ll need you to choose a really cool name that other
                      users can find you with, choose something cool like
                      superman, or batman 😜
                    </h2>
                    <div className="my-4">
                      <label htmlFor="" className="text text-sm">
                        Username
                      </label>
                      <div>
                        <input
                          type="text"
                          className="border p-3 w-full bg-transparent rounded-md my-2 border input text-sm"
                          placeholder="Enter Username"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          className="bg-transparent mr-4"
                        />
                        <label for="accept-terms" class="text-white text-sm">
                          I agree to Roqqu's{" "}
                          <a className="text-blue-400" href="#" target="blank">
                            Terms &amp; conditions{" "}
                          </a>
                          and{" "}
                          <a className="text-blue-400" href="#" target="blank">
                            privacy policy
                          </a>
                        </label>
                      </div>
                      <div>
                        <button
                          class="btn w-full p-3 rounded-md text-sm mt-8 text-white font-bold"
                          onClick={() => setCount(count + 1)}
                        >
                          <span>Continue</span>
                        </button>
                        <div className="text-white mt-6 text-sm">
                          Already have an account?{" "}
                          <a href="" className="text-blue-400">
                            Sign In
                          </a>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                );
              case 2:
                return (
                  <div>
                    <h1 class="text-3xl mt-6 font-bold text-white">
                      <span>Hey {name} </span>👋🏽
                      <br />
                      Please give us your legal name{" "}
                    </h1>
                    <div className="my-4">
                      <div>
                        <label htmlFor="" className="text text-sm">
                          First Name
                        </label>
                        <div>
                          <input
                            type="text"
                            className="border p-3 w-full bg-transparent rounded-md my-2 border input text-sm"
                            placeholder="eg. John"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="" className="text text-sm">
                          Last Name
                        </label>
                        <div>
                          <input
                            type="text"
                            className="border p-3 w-full bg-transparent rounded-md my-2 border input text-sm"
                            placeholder="eg. Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          class="btn w-full p-3 rounded-md text-sm mt-8 text-white font-bold"
                          onClick={() => setCount(count + 1)}
                        >
                          <span>Continue</span>
                        </button>
                        <div className="text-white mt-6 text-sm">
                          Already have an account?{" "}
                          <a href="" className="text-blue-400">
                            Sign In
                          </a>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                );
              case 3:
                return (
                  <div>
                    <h1 class="text-3xl mt-6 font-bold text-white">
                      <span>Thank You {name} </span>👋🏽
                      <br />
                      Let's have your phone number{" "}
                    </h1>
                    <div className="my-4">
                      <div>
                        <div>
                          <input
                            type="number"
                            className="border p-3 w-full bg-transparent rounded-md my-2 border input text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          class="btn w-full p-3 rounded-md text-sm mt-8 text-white font-bold"
                          onClick={() => setCount(count + 1)}
                        >
                          <span>Continue</span>
                        </button>
                        <div className="text-white mt-6 text-sm">
                          Already have an account?{" "}
                          <a href="" className="text-blue-400">
                            Sign In
                          </a>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                );
              case 4:
                return <div>Hello world 4</div>;
              case 5:
                return (
                  <div>
                    <h1 class="text-3xl mt-6 font-bold text-white">
                      <span>One final detail </span>👋🏽
                      <br />
                      Set up your transaction pin
                    </h1>
                    <h2 class="text-white text-sm mt-4 text">
                      Your pin would be used to authenticate your request for
                      transactions and authentications.
                    </h2>
                    <div className="my-4">
                      <div>
                        <label className="text-sm text-white">Enter PIN</label>
                        <div className="flex justify-between">
                          <input
                            type="text"
                            className="p-3 w-16 bg-transparent border rounded-md input"
                          />
                          <input
                            type="text"
                            className="p-3 w-16 bg-transparent border rounded-md input"
                          />
                          <input
                            type="text"
                            className="p-3 w-16 bg-transparent border rounded-md input"
                          />
                          <input
                            type="text"
                            className="p-3 w-16 bg-transparent border rounded-md input"
                          />
                          <input
                            type="text"
                            className="p-3 w-16 bg-transparent border rounded-md input"
                          />

                          <input
                            type="text"
                            className="p-3 w-16 bg-transparent border rounded-md input"
                          />
                        </div>
                      </div>
                      <div className="my-4">
                        <label className="text-sm text-white">Verify PIN</label>
                        <div className="flex justify-between">
                          <input
                            type="text"
                            className="p-3 w-16 bg-transparent border rounded-md input"
                          />
                          <input
                            type="text"
                            className="p-3 w-16 bg-transparent border rounded-md input"
                          />
                          <input
                            type="text"
                            className="p-3 w-16 bg-transparent border rounded-md input"
                          />
                          <input
                            type="text"
                            className="p-3 w-16 bg-transparent border rounded-md input"
                          />
                          <input
                            type="text"
                            className="p-3 w-16 bg-transparent border rounded-md input"
                          />

                          <input
                            type="text"
                            className="p-3 w-16 bg-transparent border rounded-md input"
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          class="btn w-full p-3 rounded-md text-sm mt-8 text-white font-bold"
                          onClick={() => setCount(count + 1)}
                        >
                          <span>Continue</span>
                        </button>
                        <div className="text-white mt-6 text-sm">
                          Already have an account?{" "}
                          <a href="" className="text-blue-400">
                            Sign In
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default App;
