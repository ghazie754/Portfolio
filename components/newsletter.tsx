import { useState } from "react";

function News() {
  const [boolean] = useState<boolean>();
  const bool = () => !boolean;

  return (
    <>
      <div className="page php">
        <form className="page1">
          <div className="container">
            <h2>Subscribe to our Newsletter</h2>
            <p>Lorem ipsum..</p>
          </div>

          <div className="container">
            <input type="text" placeholder="Name" name="name" required />
            <input
              type="text"
              placeholder="Email address"
              name="mail"
              required
            />
            <label>
              <input
                type="checkbox"
                checked={boolean}
                onClick={bool}
                name="subscribe"
              />{" "}
              Daily Newsletter
            </label>
          </div>

          <div className="container">
            <input type="submit" value="Subscribe" />
          </div>
        </form>
        <form className="page php2">
          <ul>
            <li>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}

export default News;
