// const aboutItems = [
//   {
//     label: "Project done",
//     number: 6,
//   },
//   {
//     label: "Years of experience",
//     number: 10,
//   },
// ];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          className="bg-zinc-800/50 p-7 rounded-2xl
        md:p-12"
        >
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hello! I am Seiku Ishikawa, a developer dedicated to continuous
            learning and growth in order to create meaningful value for users.
            <br/><br/>To me, programming is not just a technical skill but a tool to solve
            problems and build a better world.<br/><br/> I have a particular interest in
            web development and I work with React js to build efficient and
            intuitive services.<br/><br/> My goal is to deliver the best results through
            continuous learning and collaboration. I always welcome new
            challenges and opportunities, striving to write better code and
            engage with more people.<br/><br/> I look forward to growing together and
            creating something impactful!<br/> Thank you.
          </p>
          {/* <div className="flex flex-wrap gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-[#C9F6F6] font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
