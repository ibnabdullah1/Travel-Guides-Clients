import Image from "next/image";

const About = () => {
  return (
    <div className="about-section bg-white py-10 px-5 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-5">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to <strong>Travel Tips & Destination Guides</strong> – a
          platform created by travel enthusiasts for travel enthusiasts! Our
          goal is to inspire, inform, and empower you to explore the world
          through valuable tips, personalized guides, and real stories from
          fellow travelers. Whether you’re planning your next big adventure or
          looking for insider advice on hidden gems, our community has got you
          covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="about-image">
          <Image
            width={1200}
            height={200}
            src="https://media.licdn.com/dms/image/v2/D4D12AQGpU3Gw4WM6YQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1686074500143?e=1733356800&v=beta&t=FRhQ0UvdUM0TyqhV73qRLuFKottycXqWGqPIZA-sZcg"
            alt="Travel community sharing stories"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="about-image">
          <Image
            width={1200}
            height={200}
            src="https://www.hindustantimes.com/ht-img/img/2023/03/09/550x309/main_1678349699954_1678349738052_1678349738052.jpg"
            alt="Explore new destinations"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-4xl font-semibold text-gray-700 mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 max-w-5xl mx-auto">
          At Travel Tips & Destination Guides, we believe that travel is more
          than just visiting new places – it’s about experiencing cultures,
          making lifelong memories, and sharing knowledge with others. Our
          mission is to help you discover unique destinations, share your own
          travel stories, and build a community of like-minded adventurers.
        </p>
      </div>

      <div className="mt-16 text-center">
        <Image
          width={1200}
          height={200}
          src="https://caudit.edu.au/static/22d9c1c8adeaf20911fafb8a4b4949b6/2efe9/Communities_Web_Page_join_a_community_eac86ab4c9.png"
          alt="Join the travel community"
          className="rounded-lg shadow-lg w-full mx-auto max-w-6xl "
        />
        <h2 className="text-4xl  font-semibold text-gray-700 my-5">
          Join Our Community
        </h2>
        <p className="text-lg text-gray-600 max-w-5xl mx-auto mb-6">
          Whether you are a seasoned traveler or just getting started, our
          platform allows you to follow other travelers, create a personalized
          profile, and access exclusive premium content for in-depth travel
          guides and tips. Join us today and become part of a vibrant,
          supportive community that shares a passion for exploring the world!
        </p>
      </div>
    </div>
  );
};

export default About;
