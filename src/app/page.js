export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 w-[100vw] max-w-[1440px] items-center">
      <form>
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
        <div>
          <section className="w-full">
            <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
              <div>
                <label for="fname">First name:<span className="text-[#0c7d69]">*</span></label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  required
                  className="border rounded-lg w-full p-2"
                  placeholder="Your First Name"
                />{" "}
                <br /> <br />
              </div>
              <div>
                <label for="lname">Last name:<span className="text-[#0c7d69]">*</span></label> <br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  required
                  className="border rounded-lg w-full p-2"
                  placeholder="Your Last Name"
                />{" "}
                <br /> <br />
              </div>
            </div>

            <div>
              <label for="fname">Email Address:<span className="text-[#0c7d69]">*</span></label> <br />
              <input
                required
                type="text"
                id="email"
                name="email"
                className="border rounded-lg w-full p-2"
                placeholder="Your Email"
              />{" "}
              <br /> <br />
            </div>
          </section>
          <section>
            <label for="fname">Query Type:<span className="text-[#0c7d69]">*</span></label>
            <br />
            <br />
            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
              <div className="flex gap-2 border p-4 rounded-lg w-full">
                <input
                  type="radio"
                  id="GD"
                  name="fav_language"
                  value="GD"
                  required
                />
                <label for="GE">General Enquiry</label>
              </div>
              <div className="flex gap-2 border p-4 rounded-lg w-full">
                <input
                  type="radio"
                  id="SR"
                  name="fav_language"
                  value="SR"
                  required
                />
                <label for="Support Enquiry">Support Enquiry</label>
              </div>
              <br />
            </div>
            <br />
            <label for="fname">Message:<span className="text-[#0c7d69]">*</span></label> <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="border w-full p-2 rounded-lg"
              required
            ></textarea>
            <br /> <br />
            <div className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                placeholder="title"
                required
              />
              <br />
              <label htmlFor="consent">
                I consent to being contacted by the team<span className="text-[#0c7d69]">*</span>
              </label>
            </div>
            <br />
          </section>
        </div>
        <input
          className="bg-[#0c7d69] w-full p-2 rounded-lg text-white"
          type="submit"
          value="Submit"
          required
        />
      </form>
    </main>
  );
}
